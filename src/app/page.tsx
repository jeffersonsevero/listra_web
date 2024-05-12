import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Header />
        <main className="mt-14 px-6">
            <h2 className="text-lg lg:text-2xl text-zinc-700 font-bold">Simulação de Financiamento</h2>
            <div className="hidden lg:block w-14 h-[3px] bg-violet-600 rounded-lg mt-2"></div>

            <div className="w-full p-8 bg-gray-100 mt-8">
                <h4 className="font-bold text-zinc-700">Selecione um veículo que deseja simular o financiamento</h4>
                <div className="mt-4 flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
                    <select className="w-full lg:w-2/5 p-4 border border-zinc-300 bg-white rounded-lg" name="" id="">
                        <option value="">Selecione</option>
                        <option value="">Carro 1</option>
                        <option value="">Carro 2</option>
                        <option value="">Carro 3</option>
                    </select>

                    <button className="w-full lg:w-1/5 p-3 bg-violet-600 font-bold text-white rounded-2xl">Simular</button>

                </div>
            </div>


        </main>
    </div>
  );
}
