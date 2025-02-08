export default function productsDetails({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>Welcome! This is product details about {params.productId}</h1>;
}
