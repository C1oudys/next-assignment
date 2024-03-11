import React from 'react'
import type { CatFact } from "@/types";

async function SsrPage() {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });
  const results = await response.json();
  const catFact: CatFact = results;

  if (!catFact) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
    <p className="text-xl font-bold">CAT FACT - SSR</p>
    <p>
      fact: {catFact.fact}
      <br />
      length: {catFact.length}
    </p>
   </div>
  )
}

export default SsrPage