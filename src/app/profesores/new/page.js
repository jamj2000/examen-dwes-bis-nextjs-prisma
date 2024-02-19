import Form from "@/components/FormProfesor"
import Button from "@/components/Button"
import { newProfesor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <div>
      <h3>Nuevo profesor</h3>
      <Form action={newProfesor} profesor={null}>
        <Button title='Crear profesor' />
      </Form>
    </div>
  )
}

export default page