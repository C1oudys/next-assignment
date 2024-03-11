import React from 'react'
import { CatFact } from '@/types'

async function SsgPage() {
  const response = await fetch(`https://catfact.ninja/fact`);
  const results: CatFact = await response.json();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
    <p className="text-xl font-bold">CAT FACT - SSG</p>
    <p>
      fact: {results.fact}
      <br />
      length: {results.length}
    </p>
   </div>
  )
}

export default SsgPage