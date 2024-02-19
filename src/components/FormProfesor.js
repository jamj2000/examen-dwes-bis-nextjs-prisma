import ListaAlumnos from '@/components/ListaAlumnos'
import { Suspense } from 'react'

function Form({ children, action, profesor, disabled = false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={profesor?.id} />
            <fieldset disabled={disabled}>
                <legend># {profesor?.id}</legend>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={profesor?.nombre} autoFocus required></input>
                <label htmlFor='especialidad'>Especialidad</label>
                <input type='text' id='especialidad' name='especialidad'
                    placeholder='Especialidad'
                    defaultValue={profesor?.especialidad} autoFocus required></input>
            </fieldset>
            <Suspense fallback={'Loading ...'}>
                <ListaAlumnos profesorId={profesor?.id} disabled={disabled} />
            </Suspense>
            {children}
        </form>
    )
}

export default Form