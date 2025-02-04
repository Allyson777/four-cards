import "@/styles/globals.css";
import { Poppins } from "next/font/google"
import type { AppProps } from "next/app";

const poppins = Poppins({
  weight: ["200", "400", "600"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}
