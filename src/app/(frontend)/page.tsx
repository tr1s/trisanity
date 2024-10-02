import Link from "next/link";

export default async function Page() {
  return (
    <section>
      <h1>Home</h1>
      <hr />
      <Link href="/posts">Posts index &rarr;</Link>
    </section>
  );
}
