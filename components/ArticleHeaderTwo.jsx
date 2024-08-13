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
            const elementPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
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
                    e.preventDefault();
                    scrollToSection(slug);
                    window.history.pushState(null, null, `#${slug}`);
                }}
            >
                <h2 className="text-sm font-medium leading-7 text-sky-400">{header}</h2>
                <p className="mt-2 text-xl font-bold tracking-tight sm:text-3xl text-white">
                    {subheader}
                </p>
            </header>
        </Link>
    );
}
