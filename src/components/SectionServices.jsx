import Image from "next/image"

import Container from "@/components/Container"

import PhoneIcon from "@/assets/icon-phone.svg"

const SectionServices = () => {
    return(
        <section className="w-full h-[965px]">
            <Container>
                <div className="flex-1 max-w-[594px]">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9 pt-32">Serviços Exclusivos</span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa.</h2>
                    <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e melhor, no conforto da sua casa.</p>
                
                    <ul>
                        <li className="flex items-center gap-10">
                            <Image src={PhoneIcon} alt="Ícone de telefone"/>
                            <p>Acompanhar sua conta, fazer transferências e pagamentos onde estiver.</p>
                        </li>
                    </ul>

                </div>
            </Container>
        </section>
    )
}

export default SectionServices