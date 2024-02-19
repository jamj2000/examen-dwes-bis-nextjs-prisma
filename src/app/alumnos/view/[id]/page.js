import Form from "@/components/FormAlumno"
import prisma from '@/lib/prisma'
import { getAlumno } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const alumno = await prisma.alumno.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Ver alumno</h3>
      <Form action={getAlumno} alumno={alumno} disabled={true} >
      </Form>
    </div>
  )
}

export default page