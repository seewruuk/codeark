"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ArticleHeaderTwo({ header, subheader, slug }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (window.location.hash === `#${slug}`) {
            scrollToSection(slug);
        }
    }, [slug]);

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;

        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            window.scrollTo({
                top: targetScroll,
                behavior: "smooth",
            });
        }
    };

    return (
        <Link href={`#${slug}`}>
            <header
                className="max-w-2xl mb-16 hover:cursor-pointer"
                id={slug}
                ref={sectionRef}
                onClick={(e) => {
                    e.preventDefault(); // Zapobiega domyślnemu przewinięciu
                    scrollToSection(slug);
                    window.history.pushState(null, null, `#${slug}`);
                }}
            >
                <h2 className="text-sm font-medium leading-7 text-blue-400">{header}</h2>
                <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                    {subheader}
                </p>
            </header>
        </Link>
    );
}
