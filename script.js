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
                this.toDoList.push(
                    (
                        toDoElement
                        )
                )
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