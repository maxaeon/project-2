const addGardenBtn = document.getElementById('add-garden')
const addGardenModal = document.getElementById('add-garden-modal')
const closeModal = document.getElementById('close-modal')



const addGarden = () => {
    addGardenModal.style.visibility = 'visible'
}

const close = () => {
    addGardenModal.style.visibility = 'hidden'
}


closeModal.addEventListener('click', close)
addGardenBtn.addEventListener('click', addGarden)