import Form from "@/components/FormAlumno"
import Button from "@/components/Button"
import { newAlumno } from "@/lib/actions"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <div>
        <h3>Nuevo alumno</h3>
        <Form action={newAlumno} alumno={null}>
          <Button title='Crear alumno' />
        </Form>
    </div>
  )
}

export default page