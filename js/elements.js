/* functions */
const addClasses = (classe, ...elementos) => elementos.forEach((element, index) => {
    element.classList.add(classe)
})
const addContent = (content, ...elements) => elements.forEach(element => element.innerHTML = content)
const addElement = element => document.createElement(element)
const appendElement = (father, child) => father.appendChild(child)
const addClass = (element, classe) => element.classList.add(classe)
const addAttribute = (element, attribute) => element.setAttribute(attribute, '')

/* select elements */
const body = document.querySelector('body')

/* creating elements */
const container = addElement('div')
const dropzone1 = addElement('div')
const dropzone2 = addElement('div')
const item1 = addElement('div')
const item2 = addElement('div')
const item3 = addElement('div')
const item4 = addElement('div')

/* add content */
addContent('drag me', item1, item2, item3, item4)

/* adding class */
addClass(container, 'container')
addClass(dropzone1, 'esquerda')
addClass(dropzone2, 'direita')
addClasses('item', item1, item2, item3, item4)

/* adding attribute */
addAttribute(dropzone1, 'wm-dropzone')
addAttribute(dropzone2, 'wm-dropzone')

/* appending elements */
appendElement(container, dropzone1)
appendElement(container, dropzone2)
appendElement(dropzone1, item1)
appendElement(dropzone1, item2)
appendElement(dropzone2, item3)
appendElement(dropzone2, item4)
appendElement(body, container)