import {StarField} from "@/components/StarField";
import {useId} from "react";

export default function FixedSidebar({main, footer}) {

    const collections = [
        {
            label: "Start",
            href: "/",
        },
        {
            label: "Podstrona 1",
            href: "/podstrona-1",
        },
        {
            label: "Podstrona 2",
            href: "/podstrona-2",
        }
    ]


    return (
        <div
            className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
            <Glow/>
            <div
                className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
                <div
                    className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">

                    {/*<div className={"flex space-x-8 max-lg:pt-[70px]"}>*/}
                    {/*    {*/}
                    {/*        collections.map((item, index) => (*/}
                    {/*            <Link*/}
                    {/*                href={item.href}*/}
                    {/*                key={index}*/}
                    {/*                className={"text-[12px] font-medium text-white transition-colors hover:text-sky-400"}*/}
                    {/*            >*/}
                    {/*                {item.label}*/}

                    {/*            </Link>*/}
                    {/*        ))*/}
                    {/*    }*/}

                    {/*</div>*/}

                    <div className="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
                        <div className="relative">
                            <StarField className="-right-44 top-14"/>
                            {main}
                        </div>
                    </div>
                    <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    )
}


function Glow() {
    let id = useId()

    return (
        <div
            className="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
            <svg
                className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
                aria-hidden="true"
            >
                <defs>
                    <radialGradient id={`${id}-desktop`} cx="100%">
                        <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)"/>
                        <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)"/>
                        <stop offset="100%" stopColor="rgba(10, 14, 23, 0)"/>
                    </radialGradient>
                    <radialGradient id={`${id}-mobile`} cy="100%">
                        <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)"/>
                        <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)"/>
                        <stop offset="100%" stopColor="rgba(10, 14, 23, 0)"/>
                    </radialGradient>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill={`url(#${id}-desktop)`}
                    className="hidden lg:block"
                />
                <rect
                    width="100%"
                    height="100%"
                    fill={`url(#${id}-mobile)`}
                    className="lg:hidden"
                />
            </svg>
            <div
                className="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px"/>
        </div>
    )
}