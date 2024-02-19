import { getProfesor, getAlumnos } from '@/lib/actions'

async function ListaAlumnos({ profesorId, disabled }) {
    const alumnos = await getAlumnos()

    let profesor = null;
    let alumnadoProfesor = [];
    if (profesorId) {
        profesor = await getProfesor(profesorId)
        alumnadoProfesor = profesor.alumnos.map(a => a.id);
    }

    // console.log(`ALUMNADO de profesor ${profesorId}: `, alumnadoProfesor);

    return (
        <fieldset disabled={disabled}>
            <legend>Alumnos/as</legend>
            {alumnos?.map((alumno) => (
                <div key={alumno.id}>
                    <p>
                        {alumnadoProfesor.includes(alumno.id)
                            ? <input type='checkbox' name={alumno.id} value={alumno.id} defaultChecked />
                            : <input type='checkbox' name={alumno.id} value={alumno.id} />
                        }
                         {alumno.nombre}
                    </p>
                </div>
            ))}
        </fieldset>
    )
}

export default ListaAlumnos