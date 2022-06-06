// elements DOM
const taskContainer = document.querySelector(".tasks");
const btn = document.querySelector(".btn")
const form = document.querySelector("#form");


// app
class timer {
    constructor(task){
        this.task = task;
    }
}

class tasks {
    
    addTask(Time){
        // validate
        if(taskName.value == ''){
            Swal.fire({
                icon: 'error',
                title: 'Por favor llene el campo correspondiente'
            })
        }else{
            // message
            Swal.fire({
                icon: 'info',
                title: 'En 25 minutos podrá agregar mas tareas'
            })


            // add nameTask and colors
             let name = document.createElement("p");
             name.style.color="#fff";
             name.setAttribute("id", "name-task");
             name.innerHTML = `<span id="task-span"> In progress </span> ${taskName.value}`;

             // new task btn
             const btnNewTask = document.createElement("button");
             btnNewTask.classList.add("newTask");


             // add task DOM
              taskContainer.appendChild(name);
              console.log(taskName.value)

             //  remove button
              btn.setAttribute("id", "btnAddTask")

              // clear input text
              taskName.value = ''
              taskName.setAttribute("disabled", true)

             // call function count 
              this.count();
    }
}

    count(){
        setTimeout(() => {
        // message completed
            Swal.fire({
                icon: 'success',
                title: 'Tarea completada'
            })

            // remove task completed
            const takeTaskName = document.getElementById("name-task");
            takeTaskName.innerText = ''


            // add music completed
            const takeContainerSong = document.getElementById("song-container");
            const song = "../views/sound/soundtrack.mp3";
            takeContainerSong.setAttribute("src", song)

            // add btn
            btn.removeAttribute("id")
            form.removeChild(document.querySelector(".task-new"));       
            taskName.removeAttribute("disabled")

        }, 1500000); // ms => 1500000 
    }

    changeTask(Time){
        // create button new task
        const tasknew = document.createElement("button");
        tasknew.classList.add("task-new");
        tasknew.innerHTML = "Crear nueva tarea";


        // add button new task
        form.appendChild(tasknew)

        // validate 
        document.querySelector(".task-new").addEventListener("click", ()=>{
            // question 
            Swal.fire({
                icon: 'info',
                title: '¿Quieres cancelar esta tarea y agregar otra?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Cambiar',
            }).then((result) => {
                if (result.isConfirmed) {
                    taskName.removeAttribute("disabled")
                    location.reload();
                }
            })
        })
    }
}

// listening button add task
btn.addEventListener("click", function(){

    // input value and class
    const taskName = document.querySelector("#taskName").value;
    const Time = new timer(taskName);
    const ui = new tasks();
    ui.addTask();
    ui.changeTask();
})