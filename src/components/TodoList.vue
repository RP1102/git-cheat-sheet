<template>
    <!-- Partie HTML -->
    <p>TodoList here</p>
    <todo-text-field titleBtn="ajouter tâche" @adding="addTask"/>
    <ul>
        <li v-for="task in tasks" :key="task">
            {{task}}
        </li>
    </ul>
    
</template>

<script>
    //  Partie JS - Vue
    import TodoTextField from "./TodoTextField.vue"
    export default {
        name: 'TodoList',
        data() {
            return{
                tasks : []
            }
        },
        components : {
            TodoTextField : TodoTextField,
        },
        methods:{
            addTask : function(value){
                this.tasks.push(value)
                console.log("tableau =" + this.tasks)
                
            }
        }
            
    }
</script>

<style>
    /* Partie CSS */
</style>