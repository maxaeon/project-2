const addPostBtn = document.getElementById('add-post')


const addPost = async (event) => {
    event.preventDefault()
    const postTitle = document.getElementById('post-title').value.trim()
    const post_content = document.getElementById('post-content').value.trim() 
    const payload = {
        title: postTitle,
        post_content 
    }
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    })
    document.location.replace('/profile')
    const data = await response.json()
    console.log(data)
}

addPostBtn.addEventListener('click', addPost)