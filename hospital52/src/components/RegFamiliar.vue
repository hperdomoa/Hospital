
<template>
    <div class="RegFamiliar">
        
        <div class="container_RegFamiliar">
          <h2>Registrar Familiar</h2>
        <form v-on:submit.prevent="processFamiliar" >
            
            <input type="text" v-model="familiar.username" placeholder="Username">
            <br>
            <input type="text" v-model="familiar.id_paciente" placeholder="Id Paciente">
            <br>
            <input type="text" v-model="familiar.parentesco" placeholder="Parentezco">
            <br>
            <input type="email" v-model="familiar.correo" placeholder="Correo">
            <br>
             <button type="submit">Registrarse</button>
        </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
     name: "RegFamiliar",
     data: function(){
     return {
        familiar: {
            //id_familiar: "",
            username: "",
            id_paciente: "",
            parentesco: "",
            correo: ""
          }
        }
     },
        methods: {
            processFamiliar: function(){
            axios.post( "http://localhost:8000/familiar/", this.familiar,{headers: {}})
            .then((result) => {
                
                let dataRegFamiliar = {
                    username: this.familiar.username,
                    
                }
                this.$emit('completedRegFamiliar', dataRegFamiliar)
            }).catch((error) => {
                console.log(error)
                alert("ERROR: Fallo.");
            });
        }
}
}
</script>  

<style>
    .RegFamiliar{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .container_RegFamiliar {
    border: 3px solid #283747;
    border-radius: 10px;
    width: 25%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
   }
   .RegFamiliar h2{
    color: #283747;
    }
   .RegFamiliar form{
    width: 70%;
    }
    .RegFamiliar input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
    }
    .RegFamiliar button{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0 25px 0; 
   }
   .RegFamiliar button:hover{
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
    }
    
   </style>