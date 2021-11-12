const deleteLivestockBtns = document.querySelectorAll('.delete-livestock svg')


const deleteLivestock = async (event) => {
    console.log(event.target)
    // event.preventDefault()
    // event.stopPropagation()
    const livestockId = event.target.id

    const response = await fetch(`/api/livestock/${livestockId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    console.log(data)
    document.location.replace('/profile')
}

for (let button of deleteLivestockBtns) {
    console.log(button)
    button.addEventListener('click', deleteLivestock)
}

// for (let i = 0; i < deleteLivestockBtns.length; i++) {
//     const dele = array[i];
    
// }
// deleteLivestockBtns.forEach(button => button.addEventListener('click', deleteLivestock))

