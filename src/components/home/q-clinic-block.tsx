'use client';

import Image from "next/image";
import { Button } from "@/components/ui";

const specialists = [
    "Терапевт", "Гинеколог", "Генетик", "Диетолог",
    "Кардиолог", "Уролог", "Невролог"
];

export function QClinicBlock() {
    return (
        <section className="container mt-10 lg:mt-20 px-4 py-10 lg:py-20">
            <div className="relative w-full min-h-[400px] bg-primary rounded-[20px] flex flex-col-reverse lg:flex-row items-stretch overflow-visible">
                <div className="z-20 w-full lg:w-3/5 p-6 sm:p-8 lg:p-20 flex flex-col justify-center space-y-6 lg:space-y-8">
                    <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm shrink-0">
                            <span className="text-primary font-bold text-xl">Q</span>
                        </div>
                        <span className="text-white text-xl font-medium">клиника</span>
                    </div>

                    <h2 className="text-xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight text-center lg:text-left">
                        Врачи <br className="hidden lg:block" /> и телемедицина
                    </h2>
                    <div className="flex flex-col gap-3 w-full max-w-[320px] mx-auto lg:mx-0">
                        <Button className="h-12 sm:h-14 px-8 bg-white text-black hover:bg-white/90 rounded-xl font-medium text-base sm:text-lg shadow-none border-none w-full">
                            Записаться к врачу
                        </Button>
                        <Button variant="outline" className="h-12 sm:h-14 px-8 border-2 border-white text-white hover:bg-white/10 rounded-xl font-medium text-base sm:text-lg bg-transparent w-full">
                            Записаться на телемедицину
                        </Button>
                    </div>

                    <div className="space-y-4 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                        <p className="text-white/80 text-xs sm:text-sm font-medium">
                            Или выберите нужного специалиста самостоятельно
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {specialists.map((item) => (
                                <Button
                                    variant="ghost"
                                    key={item}
                                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/15 hover:bg-white/20 text-white rounded-[10px] text-xs sm:text-sm transition-colors backdrop-blur-sm whitespace-nowrap"
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative lg:absolute bottom-0 right-0 w-full lg:w-1/2 h-[250px] sm:h-[350px] lg:h-full pointer-events-none z-10">
                    <div className="absolute bottom-0 left-1/2 w-[240px] h-[250px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[340px] lg:w-[420px] lg:h-[510px] lg:left-auto lg:right-[20%] -translate-x-1/2 lg:translate-x-0">
                        <Image
                            src="/image/q-doctor.png"
                            alt="Врач клиники"
                            width={600}
                            height={800}
                            priority
                            className="object-contain object-bottom translate-y-[-10%] lg:translate-y-[-15%] scale-110 lg:scale-125 origin-bottom"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}