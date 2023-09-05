import Image from "next/image"

import Container from "@/components/Container"

import PhoneIcon from "@/assets/icon-phone.svg"
import HandIcon from "@/assets/icon-solutions.svg"
import OptionIcon from "@/assets/icon-options.svg"
import CartaoIcon from "@/assets/icon-card.svg"

import PhoneImage from "@/assets/phone.png"

const SectionServices = () => {
    return (
        <section className="relative w-full h-[965px]"> 
            <Container>
                <div className="flex-1 max-w-[594px]">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9 pt-32">Serviços Exclusivos</span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa.</h2>
                    <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e melhor, no conforto da sua casa.</p>

                    <ul className="flex flex-col items-start gap-9">

                        <li className="flex items-center gap-6 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image src={PhoneIcon} alt="Ícone de telefone" />
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Acompanhar sua conta, fazer transferências e pagamentos onde estiver.</p>
                        </li>

                        <li className="flex items-center gap-6 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image src={HandIcon} alt="Ícone de dinheiro" />
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Soluções de empréstimos e renegociação para organizar suas finanças.</p>
                        </li>

                        <li className="flex items-center gap-6 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image src={OptionIcon} alt="Ícone de opções" />
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Diversas opções de investimentos, de acordo com o seu perfil de investidor.</p>
                        </li>

                        <li className="flex items-center gap-6">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image src={CartaoIcon} alt="Ícone de cartão" />
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Acompanhe a fatura do seu cartão de crédito e faça compras on-line com seu cartão virtual.</p>
                        </li>
                    </ul>

                </div>
            </Container>

            <div className="absolute top-0 right-0 flex items-center w-[32%] h-full bg-gray-phone"> {/*Para poder funcionar a definição da posição do elemento, o elemento filho precisa ter o 'position: absolute' e é preciso que o elemento pai tenha o 'position: relative'. */}
                <Image src={PhoneImage} alt="Imagem de celular" className="translate-x-[-50%]"/>
            </div>
        </section>
    )
}

export default SectionServices