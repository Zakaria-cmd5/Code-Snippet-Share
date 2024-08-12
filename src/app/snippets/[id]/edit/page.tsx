import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "../../_components/SnippetEditForm";

interface Props {
  params: {
    id: string;
  };
}

const SnippetEditPage = async ({ params }: Props) => {
  const snippet = await db.snippet.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
