<template>
    <div class="RegPaciente">
        
        <div class="container_signUp_user">
          <h2>Registrar Paciente</h2>
        <form v-on:submit.prevent="processPaciente" >
            
            <input type="text" v-model="paciente.id_per_salud" placeholder="Id Personal Salud">
            <br>
            <input type="text" v-model="paciente.username" placeholder="Username">
            <br>
            <input type="text" v-model="paciente.id_ciudad" placeholder="Id Ciudad">
            <br>
            <input type="text" v-model="paciente.fecha_nacimiento" placeholder="Fecha Nacimiento">
            <br>
            <input type="text" v-model="paciente.direccion" placeholder="Direccion">
            <br>
             <button type="submit">Registrarse</button>
        </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
     name: "RegPaciente",
     data: function(){
     return {
    paciente:  {
        id_per_salud:"",
        username:"",
        id_ciudad:"",
        fecha_nacimiento:"",
        direccion:""
        }
        
     }
     },
     methods: {
        processPaciente: function(){
        axios.post( "http://localhost:8000/paciente/", this.paciente,{headers: {}})
        .then((result) => {
            let dataSignUp = {
                username: this.paciente.username,
        
        }
        this.$emit('completedRegPaciente', dataSignUp)
        })
        .catch((error) => {
        console.log(error)
        alert("ERROR: Fallo.");
        });
        }
    }
}
</script>    



<style>
 .RegPaciente{
 margin: 0;
 padding: 0%;
 height: 100%;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 }
 .container_signUp_user {
 border: 3px solid #283747;
 border-radius: 10px;
 width: 25%;
 height: 90%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center; 
}
.RegPaciente h2{
 color: #283747;
 }
.RegPaciente form{
 width: 70%;
 }
 .RegPaciente input{
 height: 40px;
 width: 100%;
 box-sizing: border-box;
 padding: 10px 20px;
 margin: 5px 0;
 border: 1px solid #283747;
 }
 .RegPaciente button{
 width: 100%;
 height: 40px;
 color: #E5E7E9;
 background: #283747;
 border: 1px solid #E5E7E9;
 border-radius: 5px;
 padding: 10px 25px;
 margin: 5px 0 25px 0; 
}
.RegPaciente button:hover{
 color: #E5E7E9;
 background: crimson;
 border: 1px solid #283747;
 }
 
</style>