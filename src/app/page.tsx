import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Header />
        <main className="mt-14 px-6">
            <h2 className="text-lg lg:text-2xl text-zinc-700 font-bold">Simulação de Financiamento</h2>
            <div className="hidden lg:block w-14 h-[3px] bg-violet-600 rounded-lg mt-2"></div>
        </main>
    </div>
  );
}
