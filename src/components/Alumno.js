

function Alumno({ children, alumno }) {

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return (
        <div className='card'>
            <p>Nombre:
                <strong>{alumno.nombre}</strong>
            </p>
            <p> Localidad:
                <strong>{alumno.localidad}</strong>
            </p>
            <p>Fecha de nacimiento:
                <strong>{alumno.fechaNacimiento.toLocaleDateString('es-ES', options)}</strong>
            </p>
            {children}
        </div>
    )
}

export default Alumno