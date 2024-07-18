import ArticleHeaderTwo from "@/components/ArticleHeaderTwo";
import Paragraph from "@/components/Paragraph";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Page(){
    return (
        <div className={"mx-auto max-w-7xl px-6 lg:flex lg:px-8"}>
            <div className={"lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32"}>
                <div
                    className={"mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto typography flex flex-col gap-[64px]"}>

                    <section>

                        <ArticleHeaderTwo
                            slug={"przyklad-2"}
                            subheader={"Lorem ipsum #2"}
                            header={"Przykład #2"}
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industrys
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but also the leap
                                into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                                PageMaker
                                including versions of Lorem Ipsum.
                            </>
                        }
                        />




                    </section>

                    <Footer/>

                </div>
            </div>
        </div>
    )
}


export async function generateMetadata(){
    return {
        title : "Podstrona 2",
        description : "Podstrona 2 - desc"
    }
}