import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afforge Ai",
  description: "Discovery Acceleration for Product Teams",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center justify-center flex flex-col">
        <div className="relative text-center flex place-items-center justify-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full  before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/4 after:bg-gradient-conic   after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-50 before:lg:h-[360px] z-[-1]">
          <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl">
            AFFORGE AI
          </h1>
        </div>
        <p className="mt-4 text-lg leading-8 text-gray-300  ">
          Discovery Acceleration for Product Teams
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="text-md font-semibold leading-6 tracking-wide text-white "
          >
            Early access <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
