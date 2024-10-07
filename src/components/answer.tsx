import { twMerge } from "tailwind-merge";

type props = {
  answer: string;
  onError?: boolean;
}


export function Answer({ answer, onError }: props) {
  return (
    <div className={twMerge('px-5 py-2 rounded-lg bg-blue-200', onError && 'bg-red-200')}>
      {answer}
    </div>
  )
}