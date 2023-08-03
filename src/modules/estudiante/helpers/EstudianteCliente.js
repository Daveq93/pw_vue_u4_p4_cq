import axios from "axios";

export const obtenerEstudianteFachada = async (cedula)=>{
return await obtenerEstudianteAPIaxios(cedula);
}


export const ingresarEstudianteFachada=(bodyEstudiante)=>{
ingresarEstudiante(bodyEstudiante);
}

export const actualizarEstudianteFachada=(bodyEstudiante, id)=>{
actualizarEstudiante(bodyEstudiante,id);
}


export const eliminarEstudianteFachada= async(id)=>{
 return await eliminarEstudiante(id);
}


const obtenerEstudianteAPI= async(cedula)=>{
  const data = await fetch(`http://localhost:8085/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.json())
 console.log(data);
 return data;
}


const obtenerEstudianteAPIaxios= async(cedula)=>{
  console.log("Axios 2");
   const data = axios.get(`http://localhost:8085/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.data)
   console.log(data);
   return data;
}


const ingresarEstudiante = (bodyEstudiante)=>{
  axios.post(`http://localhost:8085/API/v1.0/Matricula/estudiantes`,bodyEstudiante).then(r=>r.data);
}


const actualizarEstudiante=(bodyEstudiante,id)=>{
  axios.put(`http://localhost:8085/API/v1.0/Matricula/estudiantes/${id}`,bodyEstudiante).then(r=>r.data)
}



const eliminarEstudiante= async(id)=>{
 const data = await axios.delete(`http://localhost:8085/API/v1.0/Matricula/estudiantes/${id}`).then(r=>r.data);
 console.log(data);
 return data;
}
