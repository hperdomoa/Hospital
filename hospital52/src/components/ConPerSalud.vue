<template>
    <br>
    <br>
    
    <div class="container">
        <div class="ConPerSalud">
            <table class="table table-hover table-dark" WIDTH="80%" frame="border" rules="groups" >
                <thead >
                    <tr>
                        <th scope="col">Id Personal Salud</th>
                        <th scope="col">Username</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Especialidad</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="persalud in listapersalud" :key="persalud.id_per_salud" >
                        <th >{{persalud.id_per_salud}}</th>
                        <td >{{persalud.username}}</td>
                        <td >{{persalud.rol}}</td>
                        <td >{{persalud.especialidad}}</td>
                        
                     
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
        name:"ConPerSalud",
        data(){
            return{
            listapersalud:null
            }
        },
        mounted:function(){
        let url = "http://127.0.0.1:8000/persalud/"
        axios.get(url).then(data => {
            //console.log(data)
            this.listapersalud = data.data;
            console.log(this.listapersalud);
        });
     }
    }   
    
      
    
    </script>


<style>
    .ConPerSalud{
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
  
   .ConPerSalud h2{
    color: #283747;
    }
   .ConPerSalud form{
    width: 70%;
    }
    .ConPerSalud input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
    }
    .ConPerSalud button{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0 25px 0; 
   }
   .ConPerSalud button:hover{
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
    }
    
   </style>
