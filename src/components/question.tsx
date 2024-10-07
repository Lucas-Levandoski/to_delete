type props = {
  question: string
}

export function Question({ question }: props) {
  return (
    <div className="px-5 py-2 rounded-lg bg-blue-200">
      {question}
    </div>
  )
}