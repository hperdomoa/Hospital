<template>
    <div class="RegSalud">
        <div class="container_RegSalud">
          <h2>Personal Salud</h2>
        <form v-on:submit.prevent="processPerSalud" >
            
            <input type="text" v-model="per_salud.username" placeholder="Username">
            <br>
            <input type="text" v-model="per_salud.rol" placeholder="Rol">
            <br>
            <input type="text" v-model="per_salud.especialidad" placeholder="Especialidad">
            <br>
             <button type="submit">Registrarse</button>
        </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
     name: "RegSalud",
     data: function(){
     return {
    per_salud: {
        //id_per_salud: "",
        username: "",
        rol: "",
        especialidad: ""
          }
        }
     },
        methods: {
            processPerSalud: function(){
            axios.post( "http://localhost:8000/persalud/", this.per_salud,{headers: {}})
            .then((result) => {
                
                let dataRegSalud = {
                    username: this.per_salud.username,
                    
                }
                this.$emit('completedRegSalud', dataRegSalud)
            }).catch((error) => {
                console.log(error)
                alert("ERROR: Fallo.");
            });
        }
}
}
</script>    



<style>
 .RegSalud{
 margin: 0;
 padding: 0%;
 height: 100%;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 }
 .container_RegSalud {
 border: 3px solid #283747;
 border-radius: 10px;
 width: 25%;
 height: 90%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center; 
}
.RegSalud h2{
 color: #283747;
 }
.RegSalud form{
 width: 70%;
 }
 .RegSalud input{
 height: 40px;
 width: 100%;
 box-sizing: border-box;
 padding: 10px 20px;
 margin: 5px 0;
 border: 1px solid #283747;
 }
 .RegSalud button{
 width: 100%;
 height: 40px;
 color: #E5E7E9;
 background: #283747;
 border: 1px solid #E5E7E9;
 border-radius: 5px;
 padding: 10px 25px;
 margin: 5px 0 25px 0; 
}
.RegSalud button:hover{
 color: #E5E7E9;
 background: crimson;
 border: 1px solid #283747;
 }
 
</style>
