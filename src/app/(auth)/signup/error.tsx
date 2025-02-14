"use client";
export default function ErrorShow({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h4>{error.message}</h4> <button onClick={reset}>Try again</button>
    </>
  );
}
