import axios from "axios";

export const obtenerEstudianteFachada = async (cedula) => {
  return await obtenerEstudianteAPIaxios(cedula);
};

export const ingresarEstudianteFachada = (bodyEstudiante) => {
  ingresarEstudiante(bodyEstudiante);
};

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
  actualizarEstudiante(bodyEstudiante, id);
};

export const eliminarEstudianteFachada = async (id) => {
  return await eliminarEstudiante(id);
};

const obtenerEstudianteAPI = async (cedula) => {
  const data = await fetch(
    `http://localhost:8085/API/v1.0/Matricula/estudiantes/${cedula}`
  ).then((r) => r.json());
  console.log(data);
  return data;
};

const obtenerEstudianteAPIaxios = async (cedula) => {
  //en el config vamos a enviar todas los datos de cabecera
  //uno de esos es el Autorization
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXZlIiwiaWF0IjoxNjkyODQ2ODkxLCJleHAiOjE2OTI4NDc3OTF9.CxYpdCGxMcc_GkceprYD8Krb880I1vRTAAXOpCsS-gQ5mS_wHONHX-NVEnX40qDVSmY-l1znj1Gqx1T9lxP2e",
    Mensaje: "Valor 1"
  };
  console.log("Axios 2");
  const data = axios
    .get(`http://localhost:8085/API/v1.0/Matricula/estudiantes/${cedula}`, {
      headers: headers,
    })
    .then((r) => r.data);
  console.log(data);
  return data;
};

const ingresarEstudiante = (bodyEstudiante) => {
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXZlIiwiaWF0IjoxNjkyODQ2ODkxLCJleHAiOjE2OTI4NDc3OTF9.CxYpdCGxMcc_GkceprYD8Krb880I1vRTAAXOpCsS-gQ5mS_wHONHX-NVEnX40qDVSmY-l1znj1Gqx1T9lxP2e",
    Mensaje: "Valor 1"
  };
console.log("Header: "+headers);
  axios
    .post(
      `http://localhost:8085/API/v1.0/Matricula/estudiantes`,
      bodyEstudiante,
      { headers: headers }
    )
    .then((r) => r.data);
  console.log("Estudiante ingresado");
};

const actualizarEstudiante = (bodyEstudiante, id) => {
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXZlIiwiaWF0IjoxNjkyODQ2ODkxLCJleHAiOjE2OTI4NDc3OTF9.CxYpdCGxMcc_GkceprYD8Krb880I1vRTAAXOpCsS-gQ5mS_wHONHX-NVEnX40qDVSmY-l1znj1Gqx1T9lxP2e",
    Mensaje: "Valor 1"
  };

  axios
    .put(
      `http://localhost:8085/API/v1.0/Matricula/estudiantes/${id}`,
      bodyEstudiante,
      { headers: headers }
    )
    .then((r) => r.data);
};

const eliminarEstudiante = async (id) => {
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXZlIiwiaWF0IjoxNjkyODQ2ODkxLCJleHAiOjE2OTI4NDc3OTF9.CxYpdCGxMcc_GkceprYD8Krb880I1vRTAAXOpCsS-gQ5mS_wHONHX-NVEnX40qDVSmY-l1znj1Gqx1T9lxP2e",
    Mensaje: "Valor 1"
  };
  const data = await axios
    .delete(`http://localhost:8085/API/v1.0/Matricula/estudiantes/${id}`, {
      headers: headers,
    })
    .then((r) => r.data);

  console.log(data);
  return data;
};
