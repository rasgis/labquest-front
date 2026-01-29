import type { Metadata } from "next";
import { QClinicHeader, QClinicFooter } from "@/features/q-clinic";

export const metadata: Metadata = {
    title: "Q-Клиника | Современная медицинская клиника в Москве",
    description: "Капельницы",
};

export default function QClinicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-white">

            <QClinicHeader />

            <main className="flex-1">
                {children}
            </main>

            <QClinicFooter />

        </div>
    );
}