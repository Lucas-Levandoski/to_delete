import { ChangeEvent, useState } from "react"



export function useOnQuestion() {
  const [rows, setRows] = useState<{question: string}[]>([]);
  const [question, setQuestion] = useState('');

  const onTyping = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.target.value)
  }

  const onSubmit = (event:  ChangeEvent<HTMLFormElement>) => {
    if(question.length === 0) return;

    setRows([...rows, { question }])

    event.preventDefault();
  }

  return {
    rows,
    question,
    onTyping,
    onSubmit,
  }
}