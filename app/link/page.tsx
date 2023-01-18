import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Second route!</h1>
      <Link href="/breaking">navigate to breaking</Link>
    </>
  );
}
