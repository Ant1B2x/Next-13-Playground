"use client";

export default function Page() {
  console.log("client side");
  return (
    <>
      <h1>Third route!</h1>
      <p>{window.toString()}</p>
    </>
  );
}
