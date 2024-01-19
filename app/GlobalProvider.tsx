import Headers from "@/components/Headers";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
const CardContextProvider = dynamic(
  () => import("@/context/CardContextProvider"),
  { ssr: false }
);

export default function GlobalProvider({ children }: { children: ReactNode }) {
  return (
    <CardContextProvider>
      <Headers />
      {children}
    </CardContextProvider>
  );
}
