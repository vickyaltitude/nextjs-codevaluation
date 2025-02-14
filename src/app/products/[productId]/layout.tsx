export default function ProductDetailsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    productId: string;
  };
}) {
  return (
    <>
      {children}
      <h3>This is product details of {params.productId}</h3>
    </>
  );
}
