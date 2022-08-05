const list = document.querySelector('ul')
const backdrop = document.querySelector('.backdrop')
const modalText = document.querySelector('.modal-text')
const button = document.querySelector('button')
list.addEventListener('click', openModal)


function openModal(event) {
    console.log(event)
    if (event.target.nodeName !== 'P') {
        return
    }
    backdrop.classList.add('open')
    modalText.textContent = event.target.textContent
    window.addEventListener('keydown', closeByEscape)
}

button.addEventListener('click', closeModal)
backdrop.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closeModal()
    }
})

function closeModal() {
    backdrop.classList.remove('open')
    modalText.textContent = ''
    window.removeEventListener('keydown', closeByEscape)
}

function closeByEscape(event) {
    if (event.code === 'Escape') {
        closeModal()
    }
}