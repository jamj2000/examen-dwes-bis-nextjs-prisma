import Form from "@/components/FormProfesor"
import Button from "@/components/Button"
import prisma from '@/lib/prisma'
import { editProfesor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const profesor = await prisma.profesor.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Editar profesor</h3>
      <Form action={editProfesor} profesor={profesor} >
        <Button title='Editar profesor' />
      </Form>
    </div>
  )
}


export default page