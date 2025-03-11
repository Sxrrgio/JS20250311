document.getElementById("addButton").addEventListener("click", addItem);
document.getElementById("CambioIdioma").addEventListener("change", CambioIdioma);

const traducciones = {
    es: {
        title: "Lista de Tareas",
        addButton: "Agregar",
        langLabel: "Idioma:",
        placeholder: "Nueva Tarea",
    },
    en: {
        title: "Task List",
        addButton: "Add",
        langLabel: "Language:",
        placeholder: "New task",
    }
};

function addItem() {
    const TareaInput = document.getElementById("TareaInput");
    const ListaTareas = document.getElementById("ListaTareas");
    
    const TextoTarea = TareaInput.value.trim();
    if (TextoTarea === "") {
        alert("Introduce una tarea");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${TextoTarea}
        <div class="buttons">
            <span class="completeButton material-icons">done</span>   
            <span class="deleteButton material-icons">delete</span>
        </div>
    `;

    
    li.querySelector(".completeButton").addEventListener("click", function () {
        li.classList.toggle("completed");
    });

   
    li.querySelector(".deleteButton").addEventListener("click", function () {
        if (confirm("¿Seguro que quieres eliminar esta tarea?")) {
            li.remove();
        }
    });

    ListaTareas.appendChild(li);
    TareaInput.value = ""; 
}

function CambioIdioma() {
    const IdiomaSeleccionado = document.getElementById("IdiomaSeleccionado").value;
    const traduccion = traducciones[IdiomaSeleccionado];

    document.getElementById("title").textContent = translation.title;
    document.getElementById("addButton").textContent = translation.addButton;
    document.getElementById("langLabel").textContent = translation.langLabel;
    document.getElementById("TareaInput").placeholder = translation.placeholder;
}
