import "./globals.css";
export const metadata = { title: "Excel Pro GH | Kenny Murray", description: "7 Systems Ghana - Paystack LIVE" };
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}<script src="https://js.paystack.co/v1/inline.js"></script></body></html>
}
