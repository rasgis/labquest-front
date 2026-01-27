'use client';

import { Input, Button, Checkbox } from '@/components/ui';
import { Label, RadioGroup, RadioGroupItem } from '@/components/ui';

interface CheckoutFormProps {
    onNext: () => void;
}

export function CheckoutForm({ onNext }: CheckoutFormProps) {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-8 text-center text-sm font-medium text-destructive">
                С вами свяжется оператор для подтверждения точного времени и даты выезда.
            </div>

            <div className="grid gap-8 lg:grid-cols-12">

                <div className="lg:col-span-7 space-y-6 bg-white">

                    <div className="space-y-4">
                        <Input placeholder="Фамилия*" className="h-12 border-border placeholder:text-muted-foreground" />
                        <Input placeholder="Имя*" className="h-12 border-border placeholder:text-muted-foreground" />
                        <Input placeholder="Отчество*" className="h-12 border-border placeholder:text-muted-foreground" />
                    </div>

                    <div className="flex items-center h-12 border border-border rounded-md px-3">
                        <span className="text-muted-foreground mr-6 text-sm">Пол</span>
                        <RadioGroup className="flex items-center gap-6" defaultValue="male">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="male" id="male" name="gender" defaultChecked />
                                <Label htmlFor="male" className="font-normal text-text-main">мужской</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="female" name="gender" />
                                <Label htmlFor="female" className="font-normal text-text-main">женский</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <Input
                        type="date"
                        placeholder="Дата рождения*"
                        className="h-12 border-border text-text-main placeholder:text-muted-foreground"
                    />

                    <div className="space-y-4">
                        <Input placeholder="Телефон* +7 (___) ___-__-__" className="h-12 border-border placeholder:text-muted-foreground" />
                        <Input placeholder="E-mail*" className="h-12 border-border placeholder:text-muted-foreground" />
                    </div>

                    <div className="space-y-3 pt-4">
                        <div className="flex items-start gap-2">
                            <Checkbox id="terms" className="mt-1" />
                            <label htmlFor="terms" className="text-xs text-muted-foreground leading-tight cursor-pointer select-none">
                                Я согласен(а) на обработку <a href="#" className="text-brand-blue-secondary underline">предоставленных мною персональных данных</a> и с <a href="#" className="text-brand-blue-secondary underline">Публичной Офертой на оказание медицинских услуг</a>
                            </label>
                        </div>
                        <div className="flex items-start gap-2">
                            <Checkbox id="promo" className="mt-1" />
                            <label htmlFor="promo" className="text-xs text-muted-foreground leading-tight cursor-pointer select-none">
                                Я согласен(а) получать рекламно-информационные материалы от LQ
                            </label>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                    <div className="relative">
                        <Input placeholder="Адрес для выезда" className="h-12 border-border" />
                    </div>

                    {/* Заглушка карты */}
                    <div className="relative w-full h-[400px] bg-muted rounded-md border border-border overflow-hidden group">

                    </div>

                    <Button
                        onClick={onNext}
                        className="w-full bg-lime-lab hover:bg-lime-lab-hover text-text-main font-bold h-12 text-lg mt-4 shadow-none"
                    >
                        Далее
                    </Button>
                </div>
            </div>
        </div>
    );
}