const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList : [
                {
                    text : 'mangiare',
                    done : false
                },
                {
                    text : 'dormire',
                    done :false
                },
                {
                    text : 'volare',
                    done : true
                },
                {
                    text : 'mangiare',
                    done : false
                },
                {
                    text : 'mangiare',
                    done : true
                }

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

// addNewTodoElement(todoElement){
//     if (this.newElement !== ''){
//         this.todoList.push({
//             text: todoElement,
//             done: false,
//         });
//         this.newElement = '';
//     }
// },