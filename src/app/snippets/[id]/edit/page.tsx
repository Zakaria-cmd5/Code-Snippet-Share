import { db } from "@/db";

interface Props {
    params: {
        id: string;
    }
}

const SnippetEditPage = async ({params}: Props) => {
  return (
    <div>{params.id}</div>
  )
}

export default SnippetEditPage