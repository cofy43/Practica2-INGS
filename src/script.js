let _titleColor = "black";
let _contentColor = "black";
let _colors = ["blue", "green", "red", "orange", "white", "grey", "violet", "black"];
let _iTitle = 0;
let _iContent = 0;
let _notes = [];

function changeTitleColor() {
    const title = document.getElementById("titulo");
    _iTitle = (_iTitle + 1) % 8;
    _titleColor = _colors[_iTitle];    
    title.style.color = _titleColor;
}

function changeBodyColor() {
    const contenido = document.getElementById("contenido");
    _iContent = (_iContent + 1) % 8;
    _contentColor = _colors[_iContent];    
    contenido.style.color = _contentColor;    
}

function cleanText() {
    document.getElementById("contenido").value = "";
}

function _resetValues() {
    document.getElementById("titulo").value = "";
    document.getElementById("titulo").style.color = "black";
    document.getElementById("contenido").value = "";
    document.getElementById("contenido").style.color = "black";
    _iTitle = 0;
    _iContent = 0;
    _titleColor = "black";
    _contentColor = "black";
}

function setTopNote(newNote) {
    document.getElementById("tituloValor").innerHTML = newNote.title;
    document.getElementById("tituloValor").style.color = newNote.titleColor;
    document.getElementById("contenidoValor").innerHTML = newNote.content;
    document.getElementById("contenidoValor").style.color = newNote.contentColor;
}

function saveNote() {
    // recuperamos valores
    let titleValue = document.getElementById("titulo").value;
    let contentValue = document.getElementById("contenido").value;
    // generamos un objeto con los valores 
    let newNote = {
        title: titleValue,
        titleColor: _titleColor,
        content: contentValue,
        contentColor:_contentColor,
    };

    //Asignamos los valores
    setTopNote(newNote)
    // Guadamos la nueva nota
    _notes.push(newNote);
    console.log(_notes)
    
    // Reiniciamos los valores globales
    _resetValues();

    // Mostramos la nueva nota
    document.getElementById("top").style.visibility = "visible";
}

function deleteNote() {
    // quitamos el último elemento
    _notes.pop();
    if (_notes.length === 0) {
        document.getElementById("top").style.visibility = "hidden";
        return
    }
    let tempNote = _notes[_notes.length-1];
    setTopNote(tempNote)

}