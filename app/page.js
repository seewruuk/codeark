import Image from "next/image";
import {Layout} from "@/components/Layout";
import About from "@/components/About";
import Services from "@/components/Services";
import TrainingSection from "@/components/TrainingSection";
import ITSection from "@/components/ITSection";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className={"mx-auto max-w-7xl px-6 lg:flex lg:px-8"}>
            <div className={"lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32"}>
                <div className={"mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto typography flex flex-col gap-[64px]"}>

                    <About/>

                    <Services />

                    <TrainingSection />

                    <ITSection />

                    <Portfolio />

                    <Footer />

                </div>
            </div>
        </div>
    );
}
