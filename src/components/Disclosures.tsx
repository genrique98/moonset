import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export type Card = {
	question: string;
	answer: string;
};

export default function Disclosures({ question, answer} : Card) {
  return (
    <Disclosure as="div" className="w-full rounded-md border-2 border-brand-black p-6 text-xl text-brand-black">
      <DisclosureButton className="w-full group flex items-center gap-2 font-semibold justify-between">
        {question}
        <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
      </DisclosureButton>
      <div className="overflow-hidden">
        <Transition
          enter="duration-200 ease-out"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
          leave="duration-300 ease-out"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-6"
        >
          <DisclosurePanel className="origin-top transition mt-4 text-left text-sm">
            {answer}
          </DisclosurePanel>
        </Transition>
      </div>
    </Disclosure>
  )
}