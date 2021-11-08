const deleteGardenBtns = document.querySelectorAll('.delete-garden svg')


const deleteGarden = async (event) => {
    console.log(event.target)
    event.preventDefault()
    event.stopPropagation()
    const gardenId = event.target.id

    const response = await fetch(`/api/garden/${gardenId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    console.log(data)
}

for (let button of deleteGardenBtns) {
    console.log(button)
    button.addEventListener('click', deleteGarden)
}

// for (let i = 0; i < deleteGardenBtns.length; i++) {
//     const dele = array[i];
    
// }
// deleteGardenBtns.forEach(button => button.addEventListener('click', deleteGarden))

