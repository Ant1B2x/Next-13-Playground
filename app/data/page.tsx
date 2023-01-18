import Image from "next/image";

async function getData() {
  const res = await fetch("https://yesno.wtf/api", { method: "GET" });
  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);

  return (
    <>
      <h2>{data.answer}</h2>
      <Image src={data.image} alt="yes or no gif" width={700} height={500} />
    </>
  );
}
