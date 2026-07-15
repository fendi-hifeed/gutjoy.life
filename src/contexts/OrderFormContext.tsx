"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type OrderFormContextValue = {
  isOpen: boolean;
  prefillMessage: string;
  openOrderForm: (prefillMessage?: string) => void;
  closeOrderForm: () => void;
};

const OrderFormContext = createContext<OrderFormContextValue | null>(null);

export function OrderFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState("");

  const openOrderForm = useCallback((message?: string) => {
    setPrefillMessage(message || "");
    setIsOpen(true);
  }, []);

  const closeOrderForm = useCallback(() => {
    setIsOpen(false);
    setPrefillMessage("");
  }, []);

  return (
    <OrderFormContext.Provider
      value={{ isOpen, prefillMessage, openOrderForm, closeOrderForm }}
    >
      {children}
    </OrderFormContext.Provider>
  );
}

export function useOrderForm(): OrderFormContextValue {
  const ctx = useContext(OrderFormContext);
  if (!ctx) {
    throw new Error("useOrderForm must be used within OrderFormProvider");
  }
  return ctx;
}
