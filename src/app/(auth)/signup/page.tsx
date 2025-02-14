"use client";
export default function Signup() {
  const randomNum = Math.floor(Math.random() * 4);
  console.log(randomNum);
  if (randomNum === 1) {
    throw new Error("Error fetching module");
  }
  return <h1>Signup</h1>;
}
