import Form from "@/components/FormAlumno"
import Button from "@/components/Button"
import prisma from '@/lib/prisma'
import { editAlumno } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const alumno = await prisma.alumno.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Editar alumno</h3>
      <Form action={editAlumno} alumno={alumno} >
        <Button title='Editar alumno' />
      </Form>
    </div>
  )
}


export default page