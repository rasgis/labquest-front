'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail } from 'lucide-react';
import { Button, Input, Checkbox } from '@/components/ui';

export function Footer() {
    return (
        <footer className="w-full bg-white pt-0 border-t border-border">
            <div className="w-full bg-bg-soft py-4 text-center">
                <p className="text-sm font-medium uppercase text-text-muted tracking-widest px-4">
                    Имеются противопоказания. Необходима консультация специалиста
                </p>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    <div className="space-y-6">
                        <Link href="/" className="inline-flex items-center gap-2">
                            <Image
                                src="/icons/icon-192.png"
                                alt="LabQuest Logo"
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                        </Link>

                        <div className="text-xs text-text-muted space-y-1">
                            <p>АО &quot;ЛабКвест&quot;</p>
                            <p>Юридический адрес - 121059, Москва,</p>
                            <p>Бережковская набережная, д. 20, стр. 13</p>
                        </div>

                        <div className="space-y-1">
                            <a href="tel:84951398262" className="block text-xl font-medium text-text-main hover:text-primary transition">
                                8 (495) 139 82 62
                            </a>
                            <a href="tel:88007000999" className="block text-xl font-medium text-text-main hover:text-primary transition">
                                8 (800) 700 09 99
                            </a>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-primary">
                                    <MapPin className="h-4 w-4" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 text-xs text-text-muted">
                                <span>Бережковская</span>
                                <span>набережная, д. 20,</span>
                                <span>стр. 13</span>
                            </div>
                        </div>

                        <div className="flex gap-4 text-xs">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-primary">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold text-text-main">Бизнес-запрос</span>
                                    <a href="mailto:info@labquest.org" className="hover:text-primary text-text-muted">
                                        info@labquest.org
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-primary">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold text-text-main">Медиа-запрос</span>
                                    <a href="mailto:pr@labquest.org" className="hover:text-primary text-text-muted">
                                        pr@labquest.org
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <a href="https://ok.ru/group/54165730361422" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                                <Image src="/icons/ok-icon.png" alt="OK" width={40} height={40} className="h-10 w-10" />
                            </a>
                            <a href="https://vk.com/labquest_ru" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                                <Image src="/icons/vk-icon.png" alt="VK" width={40} height={40} className="h-10 w-10" />
                            </a>
                            <a href="https://t.me/labquest_ru" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                                <Image src="/icons/tg-icon.png" alt="Telegram" width={40} height={40} className="h-10 w-10" />
                            </a>
                            <a href="https://zen.yandex.ru/id/5cb8a3479f7f9500b3e0b279" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                                <Image src="/icons/dzen-icon.png" alt="Dzen" width={40} height={40} className="h-10 w-10" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCA4XulNCsb_mg0kc2tlbhfQ" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                                <Image src="/icons/yt-icon.png" alt="YouTube" width={40} height={40} className="h-10 w-10" />
                            </a>
                        </div>

                        <div className="flex gap-4 items-center opacity-80 hover:opacity-100 transition-all">
                            <img src="/logo/visa-logo.svg" alt="Visa" className="h-4 w-auto" />
                            <img src="/logo/mastercard-logo.svg" alt="MasterCard" className="h-6 w-auto" />
                            <img src="/logo/mir-logo.svg" alt="MIR" className="h-4 w-auto" />
                        </div>

                    </div>

                    <div className="space-y-4">
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li><Link href="#" className="hover:text-primary transition-colors">Адреса и время работы</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Анализы и цены</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Комплексные программы</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Выезд на дом</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">О компании</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Продукты</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Франшиза</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">3D-тур</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Наши специалисты</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">ЛабКвест Премиум</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li><Link href="#" className="hover:text-primary transition-colors">Акции</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Клиникам</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Новости</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Статьи</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">СМИ о нас</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Популярная диагностика</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Личный кабинет партнера</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Юридическая информация</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Политика защиты и обработки<br />персональных данных</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium text-text-main">Подпишитесь на наши рассылки</h3>
                            <p className="text-xs text-text-muted">И первыми получайте самые интересные и выгодные предложения</p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    placeholder="Имя"
                                    className="h-9 bg-transparent border-t-0 border-x-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all pb-1 placeholder:text-text-muted"
                                />
                                <Input
                                    placeholder="E-mail"
                                    className="h-9 bg-transparent border-t-0 border-x-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all pb-1 placeholder:text-text-muted"
                                />
                            </div>

                            <div className="space-y-3">
                                <Checkbox id="data-processing" label="Я согласен(а) на обработку предоставленных мною персональных данных" />
                                <Checkbox id="ads" label="Я согласен(а) на рассылку акционных и рекламных предложений" />
                            </div>

                            <div className="flex justify-end pt-2">
                                <Button
                                    type="submit"
                                    variant="lime"
                                    className="rounded-none px-8 font-bold"
                                >
                                    Подписаться
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="mt-12 border-t border-border pt-8 text-[10px] text-text-muted flex flex-col md:flex-row justify-between gap-4 opacity-80">
                    <div>
                        ©АО «ЛабКвест». Все права защищены и охраняются законом
                    </div>
                    <div className="max-w-xl text-right md:text-left">
                        Копирование, тиражирование, а равно иное использование материалов, размещенных на сайте www.labquest.ru, возможно только с письменного разрешения Правообладателя. Лицензия № Л041-01137-77/00311104 от 19.01.2017. Не является публичной офертой
                    </div>
                </div>
            </div>
        </footer>
    );
}