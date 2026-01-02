import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kindSans = localFont({
  variable: "--font-kind-sans",
  display: "swap",
  fallback: ["Inter", "system-ui", "Arial"],
  src: [
    {
      path: "../../kind-sans-font-family/kindsans-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../kind-sans-font-family/kindsans-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../kind-sans-font-family/kindsans-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Asxora | Modern IT Solutions & Cloud Partner",
  description:
    "Asxora builds bespoke software, ERP/CRM systems, cloud-native platforms, and mobile apps for ambitious teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kindSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
