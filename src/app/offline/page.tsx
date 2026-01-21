import Link from "next/link";
import { WifiOff } from "lucide-react";
import { Button } from "@/components/ui";

export default function OfflinePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center">
            <div className="mb-6 rounded-full bg-gray-200 p-6">
                <WifiOff className="h-12 w-12 text-gray-500" />
            </div>

            <h1 className="mb-2 text-2xl font-bold text-gray-900">
                Нет соединения с интернетом
            </h1>

            <p className="mb-8 max-w-md text-gray-600">
                Похоже, вы офлайн. Проверьте подключение к сети, чтобы продолжить пользоваться LabQuest.
            </p>

            <Button asChild variant="primary">
                <Link href="/">Попробовать снова</Link>
            </Button>
        </div>
    );
}