import Link from 'next/link'

export default async function Home() {

  return (
    <section>
      <h1>Página de inicio</h1>
      <hr />
      <h3><Link href={"/alumnos"}>Listado de alumnos</Link></h3>      
      <h3><Link href={"/profesores"}>Listado de profesores</Link></h3>     
    </section>
  )
}
