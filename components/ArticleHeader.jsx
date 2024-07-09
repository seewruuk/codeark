import Link from 'next/link'
import {Button} from "@/components/Button";


export default function ArticleHeader({title, slug}) {
    return (
        <header className="mb-12" id={`${slug}`}>
            <Link href={`/#${slug}`} className={"flex gap-2 items-center"}>
                <Button>#</Button>
                <h2 className={"font-semibold text-xl"}>{title}</h2>
            </Link>
        </header>
    )
}