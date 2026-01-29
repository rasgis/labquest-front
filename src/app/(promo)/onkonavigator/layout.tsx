import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Онконавигатор | LabQuest",
    description: "Комплексная диагностика онкологических заболеваний",
};

export default function OnkonavigatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans ">
            <header>

            </header>


            <main>
                {children}
            </main>

            <footer>

            </footer>
        </div>
    );
}