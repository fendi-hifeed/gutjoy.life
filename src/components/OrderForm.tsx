"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LangContext";
import { useOrderForm } from "@/contexts/OrderFormContext";

const WHATSAPP_NUMBER = "6285286710314";

const COURIER_OPTIONS = [
  "JNE",
  "J&T Express",
  "SiCepat",
  "AnterAja",
  "Grab/Gojek",
  "COD (Bayar di Tempat)",
  "Ambil di Tempat (Pickup)",
];

export default function OrderForm() {
  const { lang } = useLang();
  const { isOpen, prefillMessage, closeOrderForm } = useOrderForm();
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    alamat: "",
    pesanan: "",
    ongkir: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, pesanan: prefillMessage }));
    }
  }, [isOpen, prefillMessage]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const message = lang === "id"
          ? `Halo GutJoy! Saya ingin memesan yogurt.\n\n*Nama:* ${formData.nama}\n*No. WA:* ${formData.whatsapp}\n*Alamat:* ${formData.alamat}\n*Pesanan:* ${formData.pesanan}\n*Ongkir:* ${formData.ongkir}`
          : `Hello GutJoy! I would like to order yogurt.\n\n*Name:* ${formData.nama}\n*Phone:* ${formData.whatsapp}\n*Address:* ${formData.alamat}\n*Order:* ${formData.pesanan}\n*Shipping:* ${formData.ongkir}`;

        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, "_blank", "noopener,noreferrer");
        closeOrderForm();
        setFormData({ nama: "", whatsapp: "", alamat: "", pesanan: "", ongkir: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeOrderForm();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-surface-container-lowest rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto cloud-shadow">
        <div className="sticky top-0 bg-surface-container-lowest p-6 border-b border-surface-container-high flex items-center justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-headline-md)] text-xl text-on-surface">
              {lang === "id" ? "Form Pemesanan" : "Order Form"}
            </h2>
            <p className="font-[family-name:var(--font-body-md)] text-sm text-on-surface-variant mt-1">
              {lang === "id" ? "Isi data di bawah untuk melanjutkan ke WhatsApp" : "Fill in the form below to continue to WhatsApp"}
            </p>
          </div>
          <button
            onClick={closeOrderForm}
            className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block font-[family-name:var(--font-label-md)] text-sm text-on-surface mb-2">
              {lang === "id" ? "Nama Lengkap *" : "Full Name *"}
            </label>
            <input
              type="text"
              required
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-surface-container-high bg-surface-container-lowest text-on-surface font-[family-name:var(--font-body-md)] focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
              placeholder={lang === "id" ? "Masukkan nama lengkap" : "Enter your full name"}
            />
          </div>

          <div>
            <label className="block font-[family-name:var(--font-label-md)] text-sm text-on-surface mb-2">
              {lang === "id" ? "Nomor WhatsApp *" : "WhatsApp Number *"}
            </label>
            <input
              type="tel"
              required
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-surface-container-high bg-surface-container-lowest text-on-surface font-[family-name:var(--font-body-md)] focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
              placeholder="08xx-xxxx-xxxx"
            />
          </div>

          <div>
            <label className="block font-[family-name:var(--font-label-md)] text-sm text-on-surface mb-2">
              {lang === "id" ? "Alamat Pengiriman *" : "Delivery Address *"}
            </label>
            <textarea
              required
              rows={3}
              value={formData.alamat}
              onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-surface-container-high bg-surface-container-lowest text-on-surface font-[family-name:var(--font-body-md)] focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
              placeholder={lang === "id" ? "Masukkan alamat lengkap (kota, kode pos)" : "Enter complete address (city, postal code)"}
            />
          </div>

          <div>
            <label className="block font-[family-name:var(--font-label-md)] text-sm text-on-surface mb-2">
              {lang === "id" ? "Jumlah Pesanan & Varian Yogurt *" : "Order Quantity & Yogurt Variants *"}
            </label>
            <textarea
              required
              rows={3}
              value={formData.pesanan}
              onChange={(e) => setFormData({ ...formData, pesanan: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-surface-container-high bg-surface-container-lowest text-on-surface font-[family-name:var(--font-body-md)] focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
              placeholder={lang === "id" ? "Contoh: 2 yogurt plain, 3 yogurt blueberry, 1 yogurt strawberry" : "Example: 2 plain yogurt, 3 blueberry yogurt, 1 strawberry yogurt"}
            />
          </div>

          <div>
            <label className="block font-[family-name:var(--font-label-md)] text-sm text-on-surface mb-2">
              {lang === "id" ? "Jasa Pengiriman / Ongkir" : "Courier / Shipping"}
            </label>
            <select
              value={formData.ongkir}
              onChange={(e) => setFormData({ ...formData, ongkir: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-surface-container-high bg-surface-container-lowest text-on-surface font-[family-name:var(--font-body-md)] focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
            >
              <option value="">
                {lang === "id" ? "-- Pilih Jasa Pengiriman --" : "-- Select Courier --"}
              </option>
              {COURIER_OPTIONS.map((courier) => (
                <option key={courier} value={courier}>
                  {courier}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-on-primary font-[family-name:var(--font-label-md)] text-sm px-8 py-4 rounded-lg hover:bg-primary-container cloud-shadow transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {lang === "id" ? "Mengirim..." : "Submitting..."}
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {lang === "id" ? "Lanjutkan ke WhatsApp" : "Continue to WhatsApp"}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
