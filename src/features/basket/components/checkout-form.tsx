'use client';

import { Input, Button, Checkbox } from '@/components/ui';
import { Label, RadioGroup, RadioGroupItem } from '@/components/ui';
import { MapPin } from 'lucide-react';

interface CheckoutFormProps {
    onNext: () => void;
}

export function CheckoutForm({ onNext }: CheckoutFormProps) {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-8 text-center text-sm font-medium text-[#E31E24]">
                С вами свяжется оператор для подтверждения точного времени и даты выезда.
            </div>

            <div className="grid gap-8 lg:grid-cols-12">
                {/* Анкета */}
                <div className="lg:col-span-7 space-y-6 bg-white">

                    {/* ФИО */}
                    <div className="space-y-4">
                        <Input placeholder="Фамилия*" className="h-12 border-gray-300 placeholder:text-gray-400" />
                        <Input placeholder="Имя*" className="h-12 border-gray-300 placeholder:text-gray-400" />
                        <Input placeholder="Отчество*" className="h-12 border-gray-300 placeholder:text-gray-400" />
                    </div>

                    {/* Пол с новыми компонентами */}
                    <div className="flex items-center h-12 border border-gray-300 rounded-md px-3">
                        <span className="text-gray-500 mr-6 text-sm">Пол</span>
                        <RadioGroup className="flex items-center gap-6" defaultValue="male">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="male" id="male" name="gender" defaultChecked />
                                <Label htmlFor="male" className="font-normal text-gray-700">мужской</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="female" name="gender" />
                                <Label htmlFor="female" className="font-normal text-gray-700">женский</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Дата рождения */}
                    <Input
                        type="date"
                        placeholder="Дата рождения*"
                        className="h-12 border-gray-300 text-gray-900 placeholder:text-gray-400"
                    />

                    {/* Контакты */}
                    <div className="space-y-4">
                        <Input placeholder="Телефон* +7 (___) ___-__-__" className="h-12 border-gray-300 placeholder:text-gray-400" />
                        <Input placeholder="E-mail*" className="h-12 border-gray-300 placeholder:text-gray-400" />
                    </div>

                    {/* Чекбоксы */}
                    <div className="space-y-3 pt-4">
                        <div className="flex items-start gap-2">
                            <Checkbox id="terms" className="mt-1" />
                            <label htmlFor="terms" className="text-xs text-gray-600 leading-tight cursor-pointer select-none">
                                Я согласен(а) на обработку <a href="#" className="text-primary underline">предоставленных мною персональных данных</a> и с <a href="#" className="text-primary underline">Публичной Офертой на оказание медицинских услуг</a>
                            </label>
                        </div>
                        <div className="flex items-start gap-2">
                            <Checkbox id="promo" className="mt-1" />
                            <label htmlFor="promo" className="text-xs text-gray-600 leading-tight cursor-pointer select-none">
                                Я согласен(а) получать рекламно-информационные материалы от LQ
                            </label>
                        </div>
                    </div>
                </div>

                {/* Правая колонка: Карта (5 колонок) */}
                <div className="lg:col-span-5 space-y-4">
                    <div className="relative">
                        <Input placeholder="Адрес для выезда" className="h-12 border-gray-300" />
                    </div>

                    {/* Заглушка карты */}
                    <div className="relative w-full h-[400px] bg-gray-100 rounded-md border border-gray-200 overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://static-maps.yandex.ru/1.x/?ll=37.62,55.75&z=10&l=map&size=450,450')] bg-cover bg-center opacity-80 grayscale-[20%]" />

                        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded shadow text-xs flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Пробки
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <MapPin className="h-8 w-8 text-primary drop-shadow-lg animate-bounce" />
                        </div>

                        <div className="absolute bottom-10 right-2 flex flex-col gap-1">
                            <button className="bg-white w-8 h-8 rounded shadow flex items-center justify-center font-bold text-gray-600 hover:bg-gray-50">+</button>
                            <button className="bg-white w-8 h-8 rounded shadow flex items-center justify-center font-bold text-gray-600 hover:bg-gray-50">-</button>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-64 h-64 rounded-full border-2 border-primary/30 bg-primary/10"></div>
                        </div>
                    </div>

                    <Button
                        onClick={onNext}
                        className="w-full bg-lime-lab hover:bg-lime-lab-hover text-[#333333] font-bold h-12 text-lg mt-4 shadow-none"
                    >
                        Далее
                    </Button>
                </div>
            </div>
        </div>
    );
}