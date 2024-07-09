import Link from "next/link";

export default function Footer() {

    const classes = "text-xs leading-5 text-gray-500 dark:hover:text-white transition-all hover:text-black";

    return (
        <footer className={"flex justify-between mt-10 max-lg:flex-col max-lg: gap-4"}>
                <p className="text-xs leading-5 text-gray-500">
                    &copy; {new Date().getFullYear()} CodeArk Arkadiusz Stankiewicz
                </p>

            <div className={"flex gap-4"}>
                <Link href={"#"} className={classes}>Regulamin</Link>
                <Link href={"#"}  className={classes}>Polityka prywatności</Link>
            </div>
        </footer>
)
}
