<template>
    <br>
    <br>
    
    <div class="container">
        <div class="RegPaciente">
            <table class="table table-hover table-dark" WIDTH="80%" frame="border" rules="groups" >
                <thead >
                    <tr>
                        <th scope="col">Id Paciente</th>
                        <th scope="col">Id personal salud</th>
                        <th scope="col">Username</th>
                        <th scope="col">Id Ciudad</th>
                        <th scope="col">Fecha Nacimiento</th>
                        <th scope="col">Direccion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="paciente in listapac" :key="paciente.id_paciente" >
                        <th >{{paciente.id_paciente}}</th>
                        <td >{{paciente.id_per_salud}}</td>
                        <td >{{paciente.username}}</td>
                        <td >{{paciente.id_ciudad}}</td>
                        <td >{{paciente.fecha_nacimiento}}</td>
                        <td >{{paciente.direccion}}</td>
                     
                    </tr>
                                        
                </tbody>
                </table>
        </div>
    </div>
 
    <br>
    <br>
</template>

<script>
import axios from "axios";

export default {
    name:"app",
    data(){
        return{
        listapac:null
        }
    },
    mounted:function(){
    let url = "http://127.0.0.1:8000/paciente/"
    axios.get(url).then(data => {
        //console.log(data)
        this.listapac = data.data;
        //console.log(this.listapac);
    });
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
    .container {
    border: 2px solid #283747;
    border-radius: 10px;
    width: 100%;
    height: 100%;
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