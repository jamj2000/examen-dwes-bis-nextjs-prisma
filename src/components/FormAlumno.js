

function Form({ children, action, alumno, disabled = false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={alumno?.id} />
            <fieldset disabled={disabled}>
                <legend># {alumno?.id}</legend>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={alumno?.nombre} autoFocus required />
                <label htmlFor='localidad'>Localidad</label>
                <input type='text' id='localidad' name='localidad'
                    placeholder='Localidad'
                    defaultValue={alumno?.localidad} required />
                <label htmlFor='fechaNacimiento'>Fecha de nacimiento</label>
                <input type='date' id='fechaNacimiento' name='fechaNacimiento'
                    placeholder='fechaNacimiento'
                    defaultValue={alumno?.fechaNacimiento.toISOString().split('T')[0]} />
            </fieldset>

            {children}
        </form >
    )
}

export default Form