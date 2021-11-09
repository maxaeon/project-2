const addPlantBtn = document.getElementById('add-plant')
const addPlantModal = document.getElementById('add-plant-modal')
const closeModal = document.getElementById('close-modal')
const createPlantBtn = document.getElementById('create-plant')



const addPlant = () => {
    addPlantModal.style.visibility = 'visible'
}

const close = () => {
    addPlantModal.style.visibility = 'hidden'
}

const createPlant = async (event) => {
    event.preventDefault()
    addPlantModal.style.visibility = 'hidden'
    const newPlantName = document.getElementById('plant-name').value.trim()
    const newPlantAnnual = document.getElementById('plant-annual').value.trim()
    const gardenId = window.location.search
    console.log(gardenId)
    const newPlantData = {
        plant: newPlantName,
        annual: newPlantAnnual,
        perennial: newPlantPerennial,
        sewnDate: "2022-01-01",
        plantCondtions: "when soil warms",
        sun: "sun",
        shade: "",
        depth: "plant seeds 3/8 inch deep",
        groups: "",
        rows: "",
        single: "",
        individual_seed_sprout_spacing: "12 inches",
        spacing_between_rows_groups: "",
        days_to_germination_min: 10,
        days_to_germination_max: 15,
        days_to_maturity_min: 60,
        days_to_maturity_max: 115
    }

    const response = await fetch(`api/plants/${gardenId}`, {
        method: "POST",
        body: JSON.stringify(newPlantData),
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
addPlantBtn.addEventListener('click', addPlant)
createPlantBtn.addEventListener('click', createPlant)