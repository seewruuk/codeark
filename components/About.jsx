import Paragraph from "@/components/Paragraph";
import ArticleHeaderTwo from "@/components/ArticleHeaderTwo";

export default function About() {
    return (
        <section>

            <ArticleHeaderTwo
                header={"O nas"}
                subheader={"Poznaj naszą firmę!"}
                slug={"o-nas"}
            />


            <Paragraph
                desc={
                    <>
                        <span className={"font-medium text-white"}>CodeArk Arkadiusz Stankiewicz</span>{' '}
                        to firma specjalizująca się w
                        dostarczaniu zaawansowanych rozwiązań informatycznych.
                        Nasza misja to wspieranie przedsiębiorstw w osiąganiu celów
                        biznesowych poprzez innowacyjne systemy IT i kompleksową obsługę
                        informatyczną. Zespół naszych specjalistów posiada bogate doświadczenie
                        i wiedzę, które pozwalają na realizację projektów na najwyższym poziomie.
                    </>
                }
            />


        </section>
    )
}