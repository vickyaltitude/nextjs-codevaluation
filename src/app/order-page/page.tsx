"use client";
import { useRouter } from "next/navigation";

export default function OrderPage() {
  const router = useRouter();
  function handleOrder() {
    //this router method is broswer's navigation array you can push to the array replace it or u can use back and forward to go forth and back in the browser
    router.push("/");
  }
  return (
    <>
      <h2>Place your order</h2>
      <button onClick={handleOrder}>Order</button>
    </>
  );
}
