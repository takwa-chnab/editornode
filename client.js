/*var socket = io('http://localhost:3000',{transports: ['websocket', 'polling', 'flashsocket']});
const l = console.log
function getEl(id) {
    return document.getElementById(id)
}
const editor = getEl("editor")
e=CKEDITOR.instances.editor
var editorText = CKEDITOR.instances.editor.getData();
e.addEventListener("keyup", (evt) => {
    const text =CKEDITOR.instances.editor.getData();
    l(text);
    socket.send(text)
})
socket.on('message', (data) => {
    CKEDITOR.instances.editor.getData() = data
})
*/