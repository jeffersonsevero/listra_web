import Image from "next/image";

export function Header(){
    return (
        <header className="bg-violet-600 py-3 w-full flex items-center justify-center">
            <Image
                width={100}
                height={100}
                src="/listra_logo.svg"
                alt="Listra Logo"
            />
        </header>
    );
}
