import Form from "@/components/FormAlumno"
import Button from "@/components/Button"
import prisma from '@/lib/prisma'
import { deleteAlumno } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const alumno = await prisma.alumno.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Eliminar alumno</h3>
      <Form action={deleteAlumno} alumno={alumno} disabled={true} >
        <Button title='Eliminar alumno' />
      </Form>
    </div>
  )
}

export default page