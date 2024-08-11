import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      href={`/snippets/${snippet.id}`}
      className="flex justify-between items-center p-2 border rounded"
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ));

  return(
    <div>
      <div className="flex justify-between m-2 items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href='/snippets/new' className="border p-2 rounded">New Snippent</Link>
      </div>
    <div className="flex flex-col gap-2 mt-3">{renderSnippets}</div>
    </div>
    )
}
