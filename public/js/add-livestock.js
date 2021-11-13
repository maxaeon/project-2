const addLivestockBtn = document.getElementById('add-livestock')
const addLivestockModal = document.getElementById('add-livestock-modal')
const closeModalLivestock = document.getElementById('close-modal-livestock')
const createLivestockBtn = document.getElementById('create-livestock')



const addLivestock = () => {
    addLivestockModal.style.visibility = 'visible'
}

const closeLivestock = () => {
    addLivestockModal.style.visibility = 'hidden'
}

const createLivestock = async (event) => {
    event.preventDefault()
    addLivestockModal.style.visibility = 'hidden'
    const newLivestockName = document.getElementById('livestock-name').value.trim()
    const newLivestockDesc = document.getElementById('livestock-description').value.trim()

    const newLivestockData = {
        title: newLivestockName,
        description: newLivestockDesc,
    }

    const response = await fetch('api/livestock', {
        method: "POST",
        body: JSON.stringify(newLivestockData),
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


closeModalLivestock.addEventListener('click', closeLivestock)
addLivestockBtn.addEventListener('click', addLivestock)
createLivestockBtn.addEventListener('click', createLivestock)