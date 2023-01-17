const reviewContainer = document.getElementById('review-container')

// Keep the images landscape images

const reviews = [
    {
        img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
        alt: 'Profile picture of serius cat',
        text: 'This is a test, JS is the best for WD! ',
        name: 'Moon cat'
    },

    {
        img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
        alt: 'Profile picture of serius cat',
        text: 'This is a test, JS is the best for WD! ',
        name: 'Moon cat'
    },

    {
        img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
        alt: 'Profile picture of serius cat',
        text: 'This is a test, JS is the best for WD! ',
        name: 'Moon cat'
    },
]

function populateDisplay() {
    reviews.forEach(review => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')
        reviewContainer.append(cardElement)
    })
}

populateDisplay();

