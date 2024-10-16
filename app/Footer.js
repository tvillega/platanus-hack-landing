import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-white py-8 flex justify-center items-center">
      <div className="container max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <a href="https://platan.us" target="_blank" rel="noopener noreferrer">
          <Image
            src="/platanus-logo-horizontal.svg"
            alt="Platanus Logo"
            width={200}
            height={50}
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </div>
        <div className="text-center md:text-right">
          <p className="text-zinc-300">hecho con 💛 por 🍌</p>
          <p className="text-sm text-zinc-400">50% humano 50% LLM</p>
        </div>
      </div>
    </footer>
  );
}
