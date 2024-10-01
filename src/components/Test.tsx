import React from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import type { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

function Test() {
	return (
		<div className="flex w-full">
			<h1 className="text-white-100 mb-4 text-3xl font-bold">
				React-Hook-Form & Zod
			</h1>
			<button type="submit" className="border-white-100 border-2">
				Submit
			</button>
		</div>
	);
}

export default Test;
