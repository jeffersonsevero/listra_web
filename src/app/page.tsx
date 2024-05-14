'use client'


import { Header } from "@/components/Header";
import Image from "next/image";
import { CalendarIcon } from "../../public/icons/CalendarIcon";
import { KmIcon } from "../../public/icons/KmIcon";
import { CambioIcon } from "../../public/icons/CambioIcon";
import Link from "next/link";
import { WhatsappIcon } from "../../public/icons/WhatsappIcon";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { Vehicle } from "@/Entities/Vehicle";
import { api } from "@/utils/api";
import { NumberFormatBase, NumericFormat } from 'react-number-format'

export default function Home() {


    const [inputValue, setInputValue] = useState(0);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api.get("/vehicles").then(({ data }) => {
            setVehicles(data.data);
            setIsLoading(false);
        })
    }, []);

    if(isLoading){
        return <div>Loading</div>
    }

  return (
    <div>
        <Header />
        <main className="mt-14 px-6 pb-60">
            <h2 className="text-lg lg:text-2xl text-zinc-700 font-bold">Simulação de Financiamento</h2>
            <div className="hidden lg:block w-14 h-[3px] bg-violet-600 rounded-lg mt-2"></div>

            <div className="w-full p-8 bg-gray-100 mt-8">
                <h4 className="font-bold text-zinc-700">Selecione um veículo que deseja simular o financiamento</h4>

                    <NumericFormat
                        className="w-full lg:w-1/3 mt-4 p-2 border border-zinc-300 bg-white rounded-lg"
                        thousandSeparator="."
                        decimalSeparator=","
                        prefix="R$ "
                        placeholder="Valor de entrada do financiamento"
                        allowNegative={false}
                        value={inputValue}
                        onValueChange={({ floatValue }) => setInputValue(floatValue || 0)}
                        decimalScale={2}
                    />

                <div className="mt-4 flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
                    <select className="w-full lg:w-2/5 p-4 border border-zinc-300 bg-white rounded-lg" name="" id="">

                        {vehicles.map((vehicle) => (
                            <option key={vehicle.id} value={vehicle.id}>{vehicle.make} {vehicle.model}</option>
                        ))}
                    </select>

                    <button className="w-full lg:w-1/5 p-3 bg-violet-600 hover:bg-violet-700 transition-all font-bold text-white rounded-2xl">Simular</button>

                </div>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-4 mt-20 ">
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
                <div className="rounded-lg bg-gray-100 border-zinc-300 text-zinc-700 lg:col-span-7 p-4 lg:p-8">
                    <h3 className="text-xl font-bold hidden lg:block">Valores simulados para você</h3>
                    <div className="hidden lg:block w-14 h-[3px] bg-violet-600 rounded-lg mt-2"></div>

                    <div className="w-full lg:w-5/12 bg-white p-4 rounded-md shadow-md mt-5">
                        <p className="font-bold">6X</p>
                        <p className="text-xl font-bold text-violet-600">R$ 6.000,00</p>
                    </div>

                    <div className="grid w-full lg:w-5/12 grid-cols-1 lg:grid-cols-2 gap-4 mt-4">

                        <div className="w-full bg-white p-4 rounded-md shadow-md">
                            <p className="font-bold">12X</p>
                            <p className="text-xl font-bold text-violet-600">R$ 6.000,00</p>
                        </div>

                        <div className="w-full bg-white p-4 rounded-md shadow-md">
                            <p className="font-bold">48X</p>
                            <p className="text-xl font-bold text-violet-600">R$ 6.000,00</p>
                        </div>


                    </div>

                    <div className="w-full lg:w-6/12  mt-4 lg:flex gap-2 items-center">
                        <div>
                            <Link
                                className="p-2 bg-green-500 hover:bg-green-600 transition-all  flex text-white rounded-2xl  justify-center items-center gap-2 font-bold"
                                href={"/"}
                            >
                                <WhatsappIcon />
                                Falar com consultor
                            </Link>
                        </div>

                        <div className="flex justify-center mt-4 lg:mt-0">
                            <span className="font-bold">(31) 99999-9999</span>
                        </div>

                    </div>

                </div>

            </div>


        </main>

    </div>
  );
}
