import { notFound } from "next/navigation";

export default function productsDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (Number(params.reviewId) > 1000) return notFound();
  return (
    <h1>
      Welcome! This is product details about {params.productId} and review of
      that product {params.reviewId}
    </h1>
  );
}
