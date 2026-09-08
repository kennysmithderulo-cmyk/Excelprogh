import "./globals.css";
export const metadata = { title: "Excel Pro GH", description: "Excel Systems Ghana" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://js.paystack.co/v1/inline.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
