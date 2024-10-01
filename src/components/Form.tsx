import React from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { ZodType } from "zod";
import type { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

type FormData = {
	email: string;
	githubUrl: string;
	yearsOfExperience: number;
	password: string;
	confirmPassword: string;
};
//     company: string,
//     name: string,
//     email: string,
//     phone: string,
//     note: string,
//     [key: string]: string

const UserSchema: ZodType<FormData> = z
	.object({
		email: z.string().email(),
		githubUrl: z
			.string()
			.url()
			.includes("github.com", { message: "Invalid GitHub URL" }),
		yearsOfExperience: z
			.number({
				required_error: "required field",
				invalid_type_error: "Years of Experience is required",
			})
			.min(1)
			.max(10),
		password: z
			.string()
			.min(8, { message: "Password is too short" })
			.max(20, { message: "Password is too long" }),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"], // path of error
	});

type FormFieldProps = {
	type: string;
	placeholder: string;
	name: ValidFieldNames;
	register: UseFormRegister<FormData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
};

type ValidFieldNames =
	| "email"
	| "githubUrl"
	| "yearsOfExperience"
	| "password"
	| "confirmPassword";

const FormSchema = z.object({
	firstName: z.string().min(1, { message: "First name is required" }),
	lastName: z.string().min(1, { message: "Last name is required" }),
	age: z.number().min(18, { message: "You must be at least 18 years old" }),
});

const FormField = ({
	type,
	placeholder,
	name,
	register,
	error,
	valueAsNumber,
}: FormFieldProps): JSX.Element => (
	<>
		<input
			type={type}
			placeholder={placeholder}
			{...register(name, { valueAsNumber })}
		/>
		{error && <span className="error-message">{error.message}</span>}
	</>
);

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<FormData>({
		resolver: zodResolver(FormSchema),
	});
	const onSubmit = async (data: FormData) => {
		const options = {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json;charset=UTF-8",
			},
			body: JSON.stringify(data),
		};
		try {
			console.log(options.body);
			const response = await fetch("/api/form", options); // Make a POST request
			const json = await response.json();
			const { errors = {} } = json.data; // Destructure the 'errors' property from the response data

			// Define a mapping between server-side field names and their corresponding client-side names
			const fieldErrorMapping: Record<string, ValidFieldNames> = {
				email: "email",
				githubUrl: "githubUrl",
				yearsOfExperience: "yearsOfExperience",
				password: "password",
				confirmPassword: "confirmPassword",
			};

			// Find the first field with an error in the response data
			const fieldWithError = Object.keys(fieldErrorMapping).find(
				(field) => errors[field],
			);

			// If a field with an error is found, update the form error state using setError
			if (fieldWithError) {
				// Use the ValidFieldNames type to ensure the correct field names
				setError(fieldErrorMapping[fieldWithError], {
					type: "server",
					message: errors[fieldWithError],
				});
			}
		} catch (error) {
			alert("Submitting form failed!");
		}
	};

	return (
		// <form className="w-full" >
		<form className="w-full" onSubmit={(e) => handleSubmit(onSubmit)}>
			<div className="border-white-100 col-auto grid border-2">
				<h1 className="text-white-100 mb-4 text-3xl font-bold">
					React-Hook-Form & Zod
				</h1>
				{/* <FormField
              type="email"
              placeholder="Email"
              name="email"
              register={register}
              error={errors.email}
            />
    
            <FormField
              type="text"
              placeholder="GitHub URL"
              name="githubUrl"
              register={register}
              error={errors.githubUrl}
            />
    
            <FormField
              type="number"
              placeholder="Years of Experience (1 - 10)"
              name="yearsOfExperience"
              register={register}
              error={errors.yearsOfExperience}
              valueAsNumber
            />
    
            <FormField
              type="password"
              placeholder="Password"
              name="password"
              register={register}
              error={errors.password}
            />
    
            <FormField
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword}
            /> */}
				<button type="submit" className="submit-button">
					Submit
				</button>
			</div>
		</form>
	);
}
