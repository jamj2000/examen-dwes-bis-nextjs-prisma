import Link from 'next/link'
import Image from 'next/image'
import Alumno from '@/components/Alumno'
import { getAlumnos } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const alumnos = await getAlumnos()
    // console.log(alumnos);

    return (
        <div>
            <Link className='enlace' href="/alumnos/new">
                <Image src='/nuevo.svg' alt='nuevo' width="20" height="20" />
                Nuevo alumno
            </Link>
            {
                alumnos.map((alumno) => (
                    <Alumno key={alumno.id} alumno={alumno} >
                        <Link className='enlace' href={`/alumnos/view/${alumno.id}`} >
                            <Image src='/ver.svg' alt='nuevo' width="20" height="20" />
                            Ver
                        </Link>
                        <Link className='enlace' href={`/alumnos/edit/${alumno.id}`} >
                            <Image src='/editar.svg' alt='nuevo' width="20" height="20" />
                            Editar
                        </Link>
                        <Link className='enlace' href={`/alumnos/delete/${alumno.id}`} >
                            <Image src='/eliminar.svg' alt='nuevo' width="20" height="20" />
                            Eliminar
                        </Link>
                    </Alumno>
                ))
            }
        </div>
    )
}
