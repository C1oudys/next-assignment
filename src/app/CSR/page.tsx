"use client";
import React, { useEffect, useState } from "react";
import type { CatFact } from "@/types";

function CsrPage() {
  const [catFact, setCatFact] = useState<CatFact>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const result = await response.json();
      setCatFact(result);
    };
    fetchData();
  }, []);

  if (!catFact) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
    <p className="text-xl font-bold">CAT FACT - CSR</p>
    <p>
      fact: {catFact.fact}
      <br />
      length: {catFact.length}
    </p>
   </div>
  )
}

export default CsrPage