'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


// Obtener array con IDs de todos los alumnos
async function getAlumnosIds () {
  const alumnosIds = await prisma.alumno.findMany({
      select: { id: true }
  })
  return alumnosIds.map( a => a.id )
}



// ALUMNOS

export async function getAlumnos() {
  try {
    const alumnos = await prisma.alumno.findMany()
    return alumnos;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}


export async function getAlumno(id) {  // obtener alumno con profesores
  try {
    const alumno = await prisma.alumno.findUnique({
      where: { id },
      include: {
        profesores: true
      }
    })

    console.log(alumno);
    return alumno;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}



export async function newAlumno(formData) {
  try {
    const nombre = formData.get('nombre')
    const localidad = formData.get('localidad')
    const fechaNacimiento = new Date( formData.get('fechaNacimiento')).toISOString()
  
    const alumno = await prisma.alumno.create({
      data: {
        nombre,
        localidad,
        fechaNacimiento,
      }
    })

    console.log(alumno);
    revalidatePath('/alumnos')
  } catch (error) {
    console.log(error);
  }
  redirect('/alumnos');
}



export async function editAlumno(formData) {
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  const localidad = formData.get('localidad')
  const fechaNacimiento = new Date( formData.get('fechaNacimiento')).toISOString()

  try {
    const alumno = await prisma.alumno.update({
      where: { id },
      data: { 
        nombre, 
        localidad, 
        fechaNacimiento,
      },
    })

    console.log(alumno);
    revalidatePath('/alumnos')
  } catch (error) {
    console.log(error);
  }
  redirect('/alumnos');
}


export async function deleteAlumno(formData) {
  try {
    const id = Number(formData.get('id'))

    const alumno = await prisma.alumno.delete({
      where: {
        id: id,
      },
    })
    console.log(alumno);
    revalidatePath('/alumnos')
  } catch (error) {
    console.log(error);
  }

  redirect('/alumnos');
}



// PROFESORES

export async function getProfesores() {
  try {
    const profesores = await prisma.profesor.findMany()
    return profesores;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}



export async function getProfesor(id) {  // obtener profesores con alumnos
  try {
    const profesor = await prisma.profesor.findUnique({
      where: { id },
      include: {
        alumnos: true
      }
    })

    console.log(profesor);
    return profesor;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}



export async function newProfesor(formData) {
  try {
    const nombre = formData.get('nombre')
    const especialidad = formData.get('especialidad')

    // Array con IDs de todos los profesores
    const ids = await getAlumnosIds()
    console.log('IDs ', ids);

    // Array con IDs de alumnos seleccionados por el usuario
    const checks = ids.map(id => formData.get(id.toString()))
      .filter(id => id !== null)
      .map(id => Number(id))
    console.log('CHECKS ', checks);

    // Array de objetos con IDs de alumnos a asociar al profesor
    const connect = checks.map(id => { return { id: Number(id) } })
    console.log('CONNECT ', connect);

    const profesor = await prisma.profesor.create({
      data: {
        nombre,
        especialidad,
        alumnos: { connect },
      },
      include: {
        alumnos: true,
      },
    })

    console.log(profesor);
    revalidatePath('/profesores')
  } catch (error) {
    console.log(error);
  }
  redirect('/profesores');
}

/* 
// EJEMPLO ACTUALIZACIÓN
const result = await prisma.profesor.update({
  where: {
    id: 16,
  },
  include: {
    alumnos: true,
  },
  data: {
    alumnos: {
      connect: [{id: 4}, {id: 5}],
      disconnect: [{ id: 12 }, { id: 19 }],
    },
  },

})

*/


export async function editProfesor(formData) {
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  const especialidad = formData.get('especialidad')

 // Array con IDs de todos los alumnos
 const ids = await getAlumnosIds()
 console.log('IDs ', ids);

 // Array con IDs de alumnos seleccionados por el usuario
 const checks = ids.map(id => formData.get(id.toString()))
   .filter(id => id !== null)
   .map(id => Number(id))
 console.log('CHECKS ', checks);

 // Array de objetos con IDs de alumnos a asociar al profesor
 const connect = checks.map(id => { return { id: Number(id) } })
 console.log('CONNECT ', connect);

 // Array de objetos con IDs de alumnos a des-asociar al profesor
 // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
 const difference = ids.filter(id => !checks.includes(id));
 const disconnect = difference.map(id => { return { id: Number(id) } })
 console.log('DISCONNECT ', disconnect);

 try {
   const profesor = await prisma.profesor.update({
     where: { id },
     data: { 
       nombre, 
       especialidad, 
       alumnos: { connect, disconnect },
     },
     include: {
       alumnos: true,
     },
   })
    console.log(profesor);
    revalidatePath('/profesores')
  } catch (error) {
    console.log(error);
  }
  redirect('/profesores');
}



export async function deleteProfesor(formData) {
  try {
    const id = Number(formData.get('id'))

    const profesor = await prisma.profesor.delete({
      where: {
        id: id,
      },
    })
    console.log(profesor);
    revalidatePath('/profesores')
  } catch (error) {
    console.log(error);
  }

  redirect('/profesores');
}

