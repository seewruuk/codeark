import data from "@/constans/services";
import Image from "next/image";
import ArticleHeader from "@/components/ArticleHeader";
import Paragraph from "@/components/Paragraph";
import ArticleHeaderTwo from "@/components/ArticleHeaderTwo";


export default function Services() {
    return (
        <section>
            {/*<ArticleHeader title={"Usługi"} slug={"usługi"} />*/}

            <ArticleHeaderTwo
                header={"Usługi"}
                subheader={"Szeroki zakres usług"}
                slug={"usługi"}
            />


            <div className={"flex flex-col gap-16"}>

                {
                    data.map((item, index) => {
                        return (
                            <div
                                key={index + item}
                                className={"flex-1 flex flex-col items-start"}
                            >
                                <div className={"dark:bg-white rounded-2xl grid place-items-center bg-gray-100"}>
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        className={"w-[75px] p-4"}
                                        objectFit={"contain"}
                                    />
                                </div>
                                <div>
                                    <h3 className={"text-lg font-semibold my-4"}>{item.title}</h3>
                                    <Paragraph desc={item.desc} />
                                </div>

                            </div>
                        )
                    })
                }

            </div>


        </section>
    )
}