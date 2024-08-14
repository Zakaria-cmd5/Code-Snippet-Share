'use client'

interface Props {
    error: Error,
    reset: () => void
}

const NewSnippetsErrorPage = ({error}: Props) => {
  return (
    <div>{error.message}</div>
  )
}

export default NewSnippetsErrorPage