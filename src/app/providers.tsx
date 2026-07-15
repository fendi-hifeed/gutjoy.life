"use client";

import { LangProvider } from "@/contexts/LangContext";
import { OrderFormProvider } from "@/contexts/OrderFormContext";
import OrderForm from "@/components/OrderForm";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <OrderFormProvider>
        {children}
        <OrderForm />
      </OrderFormProvider>
    </LangProvider>
  );
}
