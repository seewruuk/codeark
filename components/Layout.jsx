
import {Intro} from '@/components/Intro'

import FixedSidebar from "@/components/FixedSidebar";


export function Layout({children}) {
    return (
        <>
            <FixedSidebar main={<Intro/>} footer={null}/>


            <div className="relative flex-auto">
                <main
                    className="space-y-20 py-20 sm:space-y-32 sm:py-32"
                >
                    {children}
                </main>

            </div>

        </>
    )
}
