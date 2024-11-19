const heartBtn = document.getElementsByClassName('fa-heart')
const brokenHeartBtn = document.getElementsByClassName('fa-heart-broken')
const trashBtn = document.getElementsByClassName('fa-trash')
const submitBtn = document.querySelector('#submitBtn')
const editBtns = document.getElementsByClassName('editBtn')
const editForms = document.getElementsByClassName('editForm')
const editSubmitBtns = document.getElementsByClassName('editSubmitBtn')

// console.log(editSubmitBtns)
// console.log(brokenHeartBtn)
// heartBtn.parentNode

// console.log(brokenHeartBtn)

Array.from(editBtns).forEach(element => {
    element.addEventListener('click', () => {
        const movieItem = element.closest('.movieItem')
        const editForm = movieItem.querySelector('.editForm')
        editForm.style.display = editForm.style.display === 'none' ? 'block' : 'none'
    })
})

Array.from(editSubmitBtns).forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('button is clicked')

        const movieItem = button.closest('.movieItem')
        const originalTitle = movieItem.querySelector('.titlePoint').innerText
        const originalGenre = movieItem.querySelector('.genresPoint').innerText
        // const ogTitle = 
        // const ogGenre = 
        const newTitle = document.querySelector('.newTitle').value
        const newGenre = document.querySelector('.newGenres').value
        // const ogGenre = document.
        // console.log(movieItem, titlePoint, genrePoint)

        // console.log(originalTitle, originalGenre, newTitle, newGenre)

        fetch('edit-movie', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'originalTitle': originalTitle,
                'newTitle': newTitle,
                'originalGenre': originalGenre,
                'newGenre': newGenre
            })
        }).then(response => {
            if (response.ok) return response.json()
        }).then(data => {
            console.log(data)
            window.location.reload(true)
        })
    })
})

Array.from(heartBtn).forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()

        const movieItem = element.closest('.movieItem')
        const titlePoint = movieItem.querySelector('.titlePoint').innerText
        const genrePoint = movieItem.querySelector('.genresPoint').innerText
        const countPoint = parseFloat(movieItem.querySelector('.countPoint').innerText)
        console.log(movieItem, genrePoint, countPoint)
        fetch('movies', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'title': titlePoint,
                'genres': genrePoint,
                'count': countPoint
            })
        }).then(response => {
            if (response.ok) return response.json()
        }).then(data => {
            console.log(data)
            window.location.reload(true)
        })
    })
})


Array.from(brokenHeartBtn).forEach(element => {
    element.addEventListener('click', _ => {

        const movieItem = element.closest('.movieItem')
        const titlePoint = movieItem.querySelector('.titlePoint').innerText
        const genrePoint = movieItem.querySelector('.genresPoint').innerText
        const countPoint = parseFloat(movieItem.querySelector('.countPoint').innerText)
        // console.log(titlePoint, genrePoint, countPoint)
        fetch('moviesDown', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'title': titlePoint,
                'genres': genrePoint,
                'count': countPoint
            })
        }).then(response => {
            if (response.ok) return response.json()
        }).then(data => {
            console.log(data)
            window.location.reload(true)
        })
    })
})

// Array.from(heartBtn).forEach(function(element) {
//     element.addEventListener('click', function() {
//         const movieTitle = heartBtn.parentNode.childNodes
//         console.log(movieTitle)
//     })
// })

// brokenHeartBtn.addEventListener('click', _ => {
//     const movieTitle = brokenHeartBtn.req
// })

Array.from(trashBtn).forEach(element => {
    element.addEventListener('click', _ => {

        const movieItem = element.closest('.movieItem')
        const titlePoint = movieItem.querySelector('.titlePoint').innerText
        const genrePoint = movieItem.querySelector('.genresPoint').innerText
        const countPoint = parseFloat(movieItem.querySelector('.countPoint').innerText)
        // console.log(titlePoint, genrePoint, countPoint)
        fetch('movies', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'title': titlePoint,
                'genres': genrePoint
            })
        }).then(response => {
            if (response.ok) return response.json()
        }).then(data => {
            console.log(data)
            window.location.reload(true)
        })
    })
})

// submitBtn.addEventListener('click', ()=> {
//     const url = 'https://api.themoviedb.org/3/movie/11?api_key=2170945d55d1d7d1cb25691324b00eb5'
//     const options = {
//         method: 'GET',
//         headers: {'Content-Type': 'application/json' }
//     }
//     fetch(url, options)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// })

//idea for displaying poster img along with review(?)