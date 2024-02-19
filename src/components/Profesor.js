

function Profesor({ children, profesor }) {
    return (
        <div className='card'>
            <p>Nombre:
                <strong>{profesor.nombre}</strong>
            </p>
            <p>Especialidad:
                <strong>{profesor.especialidad}</strong>
            </p>
            {children}
        </div>
    )
}

export default Profesor