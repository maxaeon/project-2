const addGardenBtn = document.getElementById('add-garden')
const addGardenModal = document.getElementById('add-garden-modal')
const closeModal = document.getElementById('close-modal')
const createGardenBtn = document.getElementById('create-garden')



const addGarden = () => {
    addGardenModal.style.visibility = 'visible'
}

const close = () => {
    addGardenModal.style.visibility = 'hidden'
}

const createGarden = async (event) => {
    event.preventDefault()
    addGardenModal.style.visibility = 'hidden'
    const newGardenName = document.getElementById('garden-name').value.trim()
    const newGardenDesc = document.getElementById('garden-description').value.trim()

    const newGardenData = {
        title: newGardenName,
        description: newGardenDesc,
    }

    const response = await fetch('api/garden', {
        method: "POST",
        body: JSON.stringify(newGardenData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(response)
    if (response.ok) {
        const data = await response.text()
        console.log(data)
        document.location.replace('/profile')
    } else {
        console.log(response)
    }

    

}


closeModal.addEventListener('click', close)
addGardenBtn.addEventListener('click', addGarden)
createGardenBtn.addEventListener('click', createGarden)