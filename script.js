const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList : [
            ],
            newElement : '',
        }
    },
    methods:{
        addNewToDoElement(toDoElement){
            if(toDoElement !== ''){
                this.toDoList.push(toDoElement)
            this.newElement = ''
            }
            
        },
        removeToDoelement(toDoElementIndex){
            this.toDoList.splice(toDoElementIndex, 1)
        }
        
    }
}).mount('#app')