<template>
    <br>
    <br>
    <div class="container">
        <div class="ConFamiliar">
            <table class="table table-hover table-dark" WIDTH="80%" frame="border" rules="groups" >
                <thead >
                    <tr>
                        <th scope="col">Id Familiar</th>
                        <th scope="col">Username</th>
                        <th scope="col">Id Paciente</th>
                        <th scope="col">Parentesco</th>
                        <th scope="col">Correo</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="familiar in listafamiliar" :key="familiar.id_familiar" frame="border" rules="groups" >
                        <th >{{familiar.id_familiar}}</th>
                        <td >{{familiar.username}}</td>
                        <td >{{familiar.id_paciente}}</td>
                        <td >{{familiar.parentesco}}</td>
                        <td >{{familiar.correo}}</td>
                      
                     
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
    name:"ConFamiliar",
    data(){
        return{
        listafamiliar:null
        }
    },
    mounted:function(){
    let url = "http://127.0.0.1:8000/familiar/"
    axios.get(url).then(data => {
        //console.log(data)
        this.listafamiliar = data.data;
        //console.log(this.listapac);
    });
 }
}   

</script>



<style>
    .ConFamiliar{
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
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
   }
   .ConFamiliar h2{
    color: #283747;
    }
   .ConFamiliar form{
    width: 70%;
    }
    .ConFamiliar input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
    }
    .ConFamiliar button{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0 25px 0; 
   }
   .ConFamiliar button:hover{
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
    }
    
   </style>