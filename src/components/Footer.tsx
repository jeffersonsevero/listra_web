import Link from "next/link";
import { WhatsappIcon } from "../../public/icons/WhatsappIcon";
import { FacebookIcon } from "../../public/icons/FacebookIcon";
import { InstagramIcon } from "../../public/icons/InstagramIcon";
import { TwitterIcon } from "../../public/icons/TwitterIcon";
import { LinkedinIcon } from "../../public/icons/LinkedinIcon";


export function Footer(){
    return (
        <footer className="w-full px-6 bg-zinc-600 text-white grid grid-cols-1 lg:grid-cols-6 py-10">
            <div className="hidden lg:block">
                <h4 className="font-bold text-lg mb-6">Encontre seu veículo</h4>

                <div className="text-sm flex flex-col space-y-2">
                    <Link className="" href={"/"}>Encontre seu veículo</Link>
                    <Link className="" href={"/"}>Lojas</Link>
                    <Link className="" href={"/"}>Promoções</Link>
                    <Link className="" href={"/"}>Vantagens</Link>
                    <Link className="" href={"/"}>Garantia Mais</Link>

                </div>

            </div>


            <div className="hidden lg:block">
                <h4 className="font-bold text-lg mb-6">A empresa</h4>

                <div className="text-sm flex flex-col space-y-2">
                    <Link className="" href={"/"}>Sobre</Link>
                    <Link className="" href={"/"}>Delivery</Link>
                    <Link className="" href={"/"}>Aviso de Privacidade</Link>
                    <Link className="" href={"/"}>Blog Seminovos</Link>


                </div>

            </div>


            <div className="hidden lg:block">
                <h4 className="font-bold text-lg mb-6">Atendimento</h4>

                <div className="text-sm flex flex-col space-y-2">
                    <Link className="" href={"/"}>Perguntas Frequentes</Link>
                    <Link className="" href={"/"}>Fale conosco</Link>
                    <Link className="" href={"/"}>Pós-vendas</Link>


                </div>

            </div>


            <div className="hidden lg:block">
                <h4 className="font-bold text-lg mb-6">Lojistas</h4>

                <div className="text-sm flex flex-col space-y-2">
                    <Link className="" href={"/"}>Acesse Seminovos Atacado</Link>


                </div>

            </div>


            <div className="mx-auto mt-4 lg:mt-0">
                <h4 className=" text-lg mb-6">Atendimento ao cliente</h4>

                <div className="flex gap-3">

                    <div className="p-2 bg-violet-600 rounded font-medium">
                        <span>0800 1234 5678</span>
                    </div>

                    <div className="p-2 bg-green-600 rounded-md">
                        <WhatsappIcon />
                    </div>


                </div>

            </div>


            <div className="order-first lg:order-last mx-auto lg:mx-0">
                <h4 className=" text-lg mb-6 font-bold">Siga a gente</h4>

                <div className="flex gap-3">

                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <LinkedinIcon />

                </div>

            </div>

        </footer>
    );
}
