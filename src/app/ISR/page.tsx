import React from 'react'
import type { CatFact } from "@/types";

async function IsrPage() {
    const response = await fetch(`https://catfact.ninja/fact`, {
      next: {
        revalidate: 5,
      },
    });
    const results = await response.json();
    const catFact: CatFact = results;
    
    if (!catFact) {
      return <div>로딩중...</div>;
    }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
    <p className="text-xl font-bold">CAT FACT - ISR</p>
    <p>
      fact: {catFact.fact}
      <br />
      length: {catFact.length}
    </p>
   </div>
  )
}

export default IsrPage