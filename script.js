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
                this.toDoList.push({
                    text: toDoElement,
                    done: false
            })
            this.newElement = ''
            }
            
        },
        removeToDoelement(toDoElementIndex){
            this.toDoList.splice(toDoElementIndex, 1)[0]
        },
        checkToDoElement(elementIndex){
            this.toDoList[elementIndex].done = !this.toDoList[elementIndex].done
        }
    }
}).mount('#app')

