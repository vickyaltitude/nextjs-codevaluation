export default function contentPage({
  params,
}: {
  params: { slug: string[] };
}) {
  if (params.slug?.length === 2)
    return (
      <>
        <h1>
          this page is to know about catch all segments routing method in next
          js
        </h1>
        <h4>
          The topic is {params.slug[0]} and the content is {params.slug[1]}
        </h4>
      </>
    );

  if (params.slug?.length === 1)
    return (
      <>
        <h1>
          this page is to know about catch all segments routing method in next
          js
        </h1>
        <h4> The topic is {params.slug[0]}</h4>
      </>
    );

  return (
    <>
      <h1>
        this page is to know about catch all segments routing method in next js
      </h1>
      <h4></h4>
    </>
  );
}
