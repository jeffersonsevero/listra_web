import { Header } from "@/components/Header";
import Image from "next/image";
import { CalendarIcon } from "../../public/icons/CalendarIcon";
import { KmIcon } from "../../public/icons/KmIcon";
import { CambioIcon } from "../../public/icons/CambioIcon";

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

                    <button className="w-full lg:w-1/5 p-3 bg-violet-600 hover:bg-violet-700 transition-all font-bold text-white rounded-2xl">Simular</button>

                </div>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-4 mt-20 h-[350px]">
                <div className="  rounded-lg bg-gray-100 border-zinc-300 lg:col-span-3">
                    <div className="flex flex-col">
                        <div className="h-[200px] flex justify-center items-center border-b border-b-zinc-300">
                            <Image
                                alt="Carro"
                                width={200}
                                height={200}
                                src="https://storage.googleapis.com/golden-wind/ignite/react-native/thumbnails/3.png"
                            />
                        </div>
                        <div className=" p-4">
                            <h4 className="text-zinc-700 font-bold">Volkswagen T-Cross</h4>
                            <p className="text-zinc-500 text-sm">1.0 200 TSI Total Flex Comfortline</p>
                            <div className="mt-4 text-zinc-500 flex justify-between">
                                <div className="flex items-center gap-2">
                                    <CalendarIcon />
                                    <span>2020</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <KmIcon />
                                    <span>15.850 Km</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CambioIcon />
                                    <span>Automático</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=" rounded-lg bg-gray-100 border-zinc-300 lg:col-span-7">...</div>

            </div>


        </main>
    </div>
  );
}
