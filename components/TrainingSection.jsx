import Image from 'next/image';
import Paragraph from "@/components/Paragraph";
import ArticleHeaderTwo from "@/components/ArticleHeaderTwo";


export default function TrainingSection() {
    return (
        <section>

            <ArticleHeaderTwo
                slug={"szkolenia"}
                subheader={"Od Zera do Mistrza Kodowania"}
                header={"Szkolenia"}
            />

            <Image
                src={"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt={"Training"}
                className={"w-full h-[230px] object-cover rounded-2xl mb-8 border-4 dark:border-white border-slate-300"}
                width={1260}
                height={750}
            />


            <Paragraph desc={
                <>
                    Nasze szkolenia z programowania są prowadzone przez doświadczonych instruktorów,
                    którzy na bieżąco śledzą najnowsze trendy i technologie w branży. Programy kursów
                    są dostosowane do różnych poziomów zaawansowania, od podstawowego po zaawansowany.
                    Uczestnicy mają możliwość zdobycia praktycznych umiejętności, które są cenione na rynku pracy.

                </>
            }
            />


        </section>
    )
}