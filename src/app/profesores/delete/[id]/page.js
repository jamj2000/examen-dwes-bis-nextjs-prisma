import Form from "@/components/FormProfesor"
import Button from "@/components/Button"
import prisma from '@/lib/prisma'
import { deleteProfesor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const profesor = await prisma.profesor.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Eliminar profesor</h3>
      <Form action={deleteProfesor} profesor={profesor} disabled={true} >
        <Button title='Eliminar profesor' />
      </Form>
    </div>
  )
}

export default page