import React, { useState } from "react";

type Card = {
	question: string;
	answer: string;
};

const faqs: Card[] = [
	{
		question: "Que metodo de pago aceptamos?",
		answer:
			"Aceptamos pagos por tarjeta, cheque, crypto, y transferencia bancaria. El pago debera hacerse al momento de retirar el vehiculo.",
	},
	{
		question: "Que metodo de pago aceptamos?",
		answer:
			"Aceptamos pagos por tarjeta, cheque, crypto, y transferencia bancaria. El pago debera hacerse al momento de retirar el vehiculo.",
	},
];

function FaqCard(card: Card): JSX.Element {
	const [hidden, setHidden] = useState(false);

	return (
		// CAR CARD
		<div class="text-olive-100 mt-4 flex w-full flex-col rounded-md border-2 border-orange-200 p-6 text-xl">
			<div
				onClick={() => setHidden(!hidden)}
				class="flex w-full cursor-pointer flex-row justify-between"
			>
				<h2 class="start-left text-olive-100 font-semibold">{card.question}</h2>
				<span class="text-bold text-orange-200">
					{hidden ? <p>&uarr;</p> : <p>&darr;</p>}
				</span>
			</div>
			{hidden ? (
				<p class="text-olive-100 mt-4 text-left text-base">{card.answer}</p>
			) : null}
		</div>
	);
}

function Questions() {
	return (
		<section class="flex h-screen w-full flex-col items-center justify-start">
			<div class="mt-5 flex w-full flex-col items-start lg:mt-20">
				<div class="flex w-full flex-col items-center justify-start rounded-xl border-2 border-orange-200 p-2 md:p-2 lg:p-4 lg:p-6">
					<div class="text-white-100 text-center">
						<h1 class="text-olive-100 pb-2 font-sans text-4xl font-semibold leading-none md:text-5xl lg:text-5xl">
							Preguntas Frecuentes
						</h1>
						<p class="text-olive-100 text-lg md:text-lg lg:text-xl">
							Encuentra las respuestas que necesitas para rentar un vehiculo con
							tranquilidad
						</p>
					</div>

					<div class="text-white-100 w-full pb-4 text-center lg:w-1/2 ">
						{/* PREGUNTA */}
						{faqs.map((faq) => (
							<FaqCard
								key={Math.floor(Math.random() * 10)}
								question={faq.question}
								answer={faq.answer}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Questions;
