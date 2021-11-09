const deletePostBtns = document.getElementsByClassName('delete-post')

const deletePost = async (event) => {


    const postId = event.target.id
    const response = await fetch(`api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    document.location.reload()
}

for (let button of deletePostBtns) {
    button.addEventListener('click', deletePost)
}