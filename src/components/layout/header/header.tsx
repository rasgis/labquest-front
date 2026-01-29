'use client';

import { TopBar, MiddleBar, BottomNav, MobileTopBar, MobileMiddleBar, MobileSearchBar } from './index';

export function Header(): React.ReactElement {
    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="hidden lg:block">
                <TopBar />
                <MiddleBar />
                <BottomNav />
            </div>

            <div className="lg:hidden flex flex-col bg-white pb-2">
                <MobileTopBar />
                <MobileMiddleBar />
                <MobileSearchBar />
            </div>
        </header>
    );
}