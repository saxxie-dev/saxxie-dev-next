import { SaxxieLeaf } from "@/components/SaxxieLeaf";

export default function Home() {
  return (
    <main className=" flex min-h-screen p-24">
      <section role="banner display-flex flex-col items-center justify-center gap-y-16 text-center">
        <h1 className="font-['Fira_Code'] font-normal">
          <span className="from-primary to-secondary-400 bg-gradient-to-br bg-clip-text text-transparent">
            saxxie
          </span>
          <span className="text-accent px-2 align-[0.2em]">.</span>
          <span className="from-secondary-400 to-primary bg-gradient-to-br bg-clip-text text-transparent">
            dev
          </span>
        </h1>
        <SaxxieLeaf />
      </section>
    </main>
  );
}
