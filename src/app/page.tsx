import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome! This is homepage</h1>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
    </>
  );
}
