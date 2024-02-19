import Form from "@/components/FormProfesor"
import prisma from '@/lib/prisma'
import { getProfesor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const profesor = await prisma.profesor.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Ver profesor</h3>
      <Form action={getProfesor} profesor={profesor} disabled={true} >
      </Form>
    </div>
  )
}

export default page