const items = document.querySelectorAll('[wm-dropzone] .item')
items.forEach((item, index) => {
    item.draggable = true
    item.id = item.id || `draggable-item-${index}`
    item.ondragstart = e =>
        e.dataTransfer.setData('item-id', e.target.id)
})

const dropzones = document.querySelectorAll('[wm-dropzone]')
dropzones.forEach(dropzone => {
    dropzone.ondragover = e => e.preventDefault()
    dropzone.ondrop = function(e) {
        const id = e.dataTransfer.getData('item-id')
        const item = document.getElementById(id)
        dropzone.appendChild(item)
    }
})

const $html = document.querySelector('html')

const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})