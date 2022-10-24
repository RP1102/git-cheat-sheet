<template>
    <input type="text" placeholder="saisir tâche" v-model="text">
    <button @click="submit()">{{this.titleBtn}}</button>
</template>

<script>
    export default{
        name : 'TodoTextField',
        data:function(){
            return{
                text : ""
            }
        },
        props:{
            titleBtn : {
                type: String,
                default(){return "valider"}
            }
        },
        methods:{
            submit : function(){
                this.$emit('adding',this.text)
                this.text = ""

                // Question : 
                //     Pourquoi est ce que lorsque j'enlève text de data,
                //     ça marche quand même ? Seul le this.text=""
                //     ne marche pas.
                //     À quoi sert le :key dans le v-for exactement,
                //     car ça ne marche pas sans.
            }
        }

    }
</script>

<style>
    
</style>