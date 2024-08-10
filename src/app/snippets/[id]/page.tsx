import { db } from "@/db";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const SnippetDetailPage = async ({ params }: Props) => {
  const snippet = await db.snippet.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <p>{snippet?.title}</p>
      <p>{snippet?.code}</p>
    </div>
  );
};

export default SnippetDetailPage;
