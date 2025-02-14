import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${params.productId}`);
    }, 500);
  });
  return {
    title: title,
  };
};

export default function productsDetails({ params }: Props) {
  return <h1>Welcome! This is product details about {params.productId}</h1>;
}
