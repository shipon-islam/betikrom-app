import Headers from "@/components/Headers";
import CardContextProvider from "@/context/CardContextProvider";
import { ReactNode } from "react";

export default function GlobalProvider({ children }: { children: ReactNode }) {
  return (
    <CardContextProvider>
      <Headers />
      {children}
    </CardContextProvider>
  );
}
