import Image from 'next/image'
import IconSearch from '@/assets/icon-search.svg'

const Search = () => {
    return(
        <div className="flex items-center gap-4">
            <Image src={IconSearch} alt='Ícone de busca'/>
            <input type='text' className="bg-transparent outline-none pr-6 text-white"/>
        </div>
    )
}

export default Search