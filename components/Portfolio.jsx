import ArticleHeaderTwo from "@/components/ArticleHeaderTwo";
import Paragraph from "@/components/Paragraph";


export default function Portfolio(){

    const secondaryFeatures = [
        {
            name: 'Nazwa projektu #1',
            description:
                'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
            href: '#',
            icon: null,
        },
        {
            name: 'Nazwa projektu #2',
            description:
                'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
            href: '#',
            icon: null,
        },
        {
            name: 'Nazwa projektu #3',
            description:
                'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
            href: '#',
            icon: null,
        },
    ]


    return (
        <section>

            <ArticleHeaderTwo
                slug={"portfolio"}
                subheader={"Nasze Projekty, Twoje Sukcesy"}
                header={"Portfolio"}
            />


            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">

                <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
                    {secondaryFeatures.map((feature) => (
                        <div key={feature.name} className="flex flex-col">
                            <div className="flex items-center gap-x-3 text-base font-semibold leading-7 ">
                                {feature.name}
                            </div>
                            <div className="mt-4 flex flex-auto flex-col text-base leading-7 ">
                                <Paragraph
                                    desc={feature.description}
                                />
                                <p className="mt-6">
                                    <a href={feature.href} className="text-sm font-semibold leading-6 text-blue-400">
                                        Sprawdź na żywo <span aria-hidden="true">→</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}