'use client';

import { useCartStore } from '@/stores/useCartStore';

export function OrderConfirmation() {
    const { items } = useCartStore();
    const misNumber = "7819100889";
    const lisNumber = "322978322";

    return (
        <div className="animate-in fade-in zoom-in-95 duration-500">

            <div className="bg-white mb-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                    <div className="border-l-4 border-lime-lab pl-3">
                        <div className="font-bold text-lg leading-none">Lab</div>
                        <div className="font-bold text-lg leading-none">Quest</div>
                    </div>

                    <div className="text-xl md:text-2xl font-bold text-text-main">
                        Спасибо за ваш заказ №МИС <span className="bg-lime-lab px-1">{misNumber}</span> и №ЛИС <span className="bg-lime-lab px-1">{lisNumber}</span>
                    </div>
                </div>

                <div className="flex gap-8 mb-4 overflow-hidden">
                    <div>
                        <div className="h-12 w-48 bg-[repeating-linear-gradient(90deg,#000,#000_2px,#fff_2px,#fff_4px)]" />
                        <div className="text-xs tracking-[0.2em] mt-1">{misNumber}</div>
                    </div>
                    <div>
                        <div className="h-12 w-48 bg-[repeating-linear-gradient(90deg,#000,#000_1px,#fff_1px,#fff_3px)]" />
                        <div className="text-xs tracking-[0.2em] mt-1">{lisNumber}</div>
                    </div>
                </div>

                <div className="text-sm font-bold text-text-main space-y-1 mb-8">
                    <p>Вы можете сдать анализы в любом офисе LabQuest.</p>
                    <p>Выбранный офис: <a href="#" className="text-primary underline">Выезд на дом в Москве и МО</a></p>
                    <p>Цены на исследования указаны для г. Москва.</p>
                </div>
            </div>

            <div className="bg-bg-lime-light p-6 mb-8 flex items-center bg-opacity-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />

                <div className="relative z-10">
                    <div className="font-bold text-text-main mb-1">Способ оплаты:</div>
                    <div className="font-bold text-xl text-text-main">Оплатить в офисе</div>
                </div>
            </div>

            {/* Состав заказа */}
            <div className="bg-bg-blue-lightest p-6 mb-8">
                <h3 className="font-bold text-lg text-text-main mb-4">Состав заказа</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-400 uppercase border-b border-gray-200">
                            <tr>
                                <th className="py-3 px-2">Код</th>
                                <th className="py-3 px-2">Название</th>
                                <th className="py-3 px-2 text-right">Стоимость</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id} className="border-b border-gray-100 last:border-0">
                                    <td className="py-4 px-2 text-muted-foreground">{item.article || item.id}</td>
                                    <td className="py-4 px-2 font-medium text-text-main">{item.name}</td>
                                    <td className="py-4 px-2 text-right font-bold text-text-main">{(item.price * item.quantity).toLocaleString()} руб.</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="font-bold text-lg text-text-main mb-4">Данные заказа</h3>
                <div className="text-sm text-text-main space-y-2 font-medium">
                    <p><span className="text-gray-500 font-normal">Фамилия:</span> Иванов</p>
                    <p><span className="text-gray-500 font-normal">Имя:</span> Иван</p>
                    <p><span className="text-gray-500 font-normal">Отчество:</span> Иванович</p>
                    <p><span className="text-gray-500 font-normal">Пол:</span> мужской</p>
                    <p><span className="text-gray-500 font-normal">Дата рождения:</span> 1990-01-01</p>
                </div>
            </div>

        </div>
    );
}