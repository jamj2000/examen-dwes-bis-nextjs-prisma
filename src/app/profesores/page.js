import Link from 'next/link'
import Image from 'next/image'
import Profesor from '@/components/Profesor'
import { getProfesores } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const profesores = await getProfesores()
    // console.log(profesores);

    return (
        <div>
            <Link className='enlace' href="/profesores/new">
                <Image src='/nuevo.svg' alt='nuevo' width="20" height="20" />
                Nuevo profesor
            </Link>
            {
                profesores.map((profesor) => (
                    <Profesor key={profesor.id} profesor={profesor} >
                        <Link className='enlace' href={`/profesores/view/${profesor.id}`} >
                            <Image src='/ver.svg' alt='nuevo' width="20" height="20" />
                            Ver
                        </Link>
                        <Link className='enlace' href={`/profesores/edit/${profesor.id}`} >
                            <Image src='/editar.svg' alt='nuevo' width="20" height="20" />
                            Editar
                        </Link>
                        <Link className='enlace' href={`/profesores/delete/${profesor.id}`} >
                            <Image src='/eliminar.svg' alt='nuevo' width="20" height="20" />
                            Eliminar
                        </Link>
                    </Profesor>
                ))
            }
        </div>
    )
}
