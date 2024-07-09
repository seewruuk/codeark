import Image from 'next/image';
import Paragraph from "@/components/Paragraph";
import ArticleHeaderTwo from "@/components/ArticleHeaderTwo";

export default function ITSection() {
    return (
        <section>

            <ArticleHeaderTwo
                slug={"obsługa-it"}
                subheader={"Twoja IT Wsparcie na Wyciągnięcie Ręki"}
                header={"Obsługa IT"}
            />


            <Image
                src={"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt={"Training"}
                className={"w-full h-[230px] object-cover rounded-2xl mb-8 border-4 dark:border-white border-slate-300"}
                width={1260}
                height={750}
            />


            <Paragraph desc={
                <>
                    Dzięki naszej obsłudze informatycznej, Twoja firma może skupić się na podstawowej działalności,
                    podczas gdy my zajmiemy się wszystkim, co związane z IT. Oferujemy wsparcie techniczne, zarządzanie
                    sieciami,
                    administrację serwerami oraz doradztwo w zakresie wyboru i wdrażania nowych technologii.


                </>
            }
            />


        </section>
    )
}
