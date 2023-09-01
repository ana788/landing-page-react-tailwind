import Image from 'next/image'

import ItemMenu from '@/components/ItemMenu'
import Search from '@/components/Search'
import Container from './Container'

import Logo from '@/assets/logo.svg'
import IconUser from '@/assets/icon-user.svg'

const Header = () => {
    return(
        <header className="flex items-center w-full h-20 bg-primary-orange">
           <Container> {/* div que engloba todos os elementos da header.*/}
                
                <div className="flex flex-1 justify-between"> {/* div que engloba os elementos a esquerda da header */}

                    <div className="flex items-center gap-14"> {/* div que engloba elementos de uma partição da esquerda da header */}
                        <Image src={Logo} alt="Logo Itaú"/>
                        <ul className="flex items-center gap-12">
                            <li><ItemMenu name="Para você"/></li>
                            <li><ItemMenu name="Para empresas"/></li>
                            <li><ItemMenu name="Serviços"/></li>
                            <li><ItemMenu name="Ajuda"/></li>
                        </ul>
                    </div>

                    <Search />{/* componente que engloba elemento da partição DIREITA da esquerda da header */}
                </div>

                <button className="flex items-center gap-4 text-white bg-primary-blue h-20 pl-10">
                    <Image src={IconUser} alt='Ícone do usuário'/>
                    <span className="font-bold">Acesse sua conta</span>
                </button>

            </Container>
        </header>
    )
}

export default Header