import Link from 'next/link';
import Image from 'next/image';

export function HeaderLogo() {
    return (
        <Link href="/q-clinic" className="relative flex-shrink-0 group z-20">
            <div className="relative w-[100px] h-[35px] md:w-[140px] md:h-[50px]">
                <Image
                    src="/logo/q-clinic/qclinic_logo_rus.svg"
                    alt="Q-Клиника Лого"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </div>
        </Link>
    );
}