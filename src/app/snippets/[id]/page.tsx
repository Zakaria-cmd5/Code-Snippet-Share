import { deleteSnippet } from "@/actions";
import { db } from "@/db";
import Link from "next/link";
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

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet?.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded bg-blue-300"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded bg-red-500">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;

export async function generateStaticParams() {
  const snippet = await db.snippet.findMany();

  return snippet.map((snippet) => ({ id: snippet.id.toString() }));
}
