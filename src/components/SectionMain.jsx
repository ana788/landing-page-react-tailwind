import Image from "next/image"

import Container from "./Container"

import ImgAppleStore from "@/assets/btn-apple-store.svg"
import ImgGoogleStore from "@/assets/btn-google-play.svg"
import Arrow from '@/assets/arrow-explorer.svg'
import WomanImage from '@/assets/woman.png'


const SectionMain = () => {
    return (
        <section className="w-full h-[704px] bg-img-background bg-no-repeat bg-center bg-cover">
            <Container>

                <div className="text-white flex-1 max-w-[498px]">

                    <h1 className="text-7xl font-bold mb-4">Tenha seu banco na palma da mão.</h1>
                    <p className="text-xl max-w-[408px] mb-8">Todas as operações que você precisa em um só lugar. Simples, completo e feito para você.</p>

                    <div className="flex gap-4 mb-[101px]">  {/*gap é uma propriedade do flex, então precisa ter o flex */}
                        <button> <Image src={ImgAppleStore} alt="Baixar App na AppleStore" /> </button>
                        <button> <Image src={ImgGoogleStore} alt="Baixar App na GooglePlay Store" /> </button>
                    </div>

                    <button className="flex gap-3">
                        <Image src={Arrow} alt="seta para baixo"/>
                        <span className="text-sm font-bold">Continue explorando</span>
                    </button>

                </div>

                <Image src={WomanImage} alt="Woman" className="mr-[-41px]"/>

            </Container>
        </section>
    )
}

export default SectionMain