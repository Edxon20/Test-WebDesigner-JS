const reviewContainer = document.getElementById('review-container')

// Keep the images landscape images

const reviews = [
    {
        img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
        alt: 'Profile picture of serius cat',
        text: 'This is a test, JS is the best for WD! im a serius cat ',
        name: 'Serius cat'
    },

    {
        img: 'https://media.istockphoto.com/id/1322123064/es/foto/retrato-de-un-adorable-gato-blanco-con-gafas-de-sol-y-camisa-yace-sobre-una-hamaca-de-tela.webp?s=612x612&w=is&k=20&c=WtiESf62DW-P0YjdThVK3S2cOwNbpvkifIk0NA0SdTQ=',
        alt: 'Profile picture of serius cat',
        text: 'This is a test, JS is the best for WD! im chilling',
        name: 'Relaxing cat'
    },

    {
        img: 'https://media.istockphoto.com/id/682668918/es/foto/gato-usando-gafas-de-sol-relajantes-sentarse-en-la-tumbona.jpg?s=612x612&w=is&k=20&c=O4on886g_sUMZosxuajrRH8lf5aGwaF4vu0wlYUKDcU=',
        alt: 'Profile picture of serius cat',
        text: 'This is a test, JS is the best for WD! I love the orange juice',
        name: 'Orange cat'
    },
]

function populateDisplay() {
    reviews.forEach(review => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')

        //Event

        cardElement.addEventListener('mouseover', showCard)
        cardElement.addEventListener('mouseleave', blurCard)

        ///////////////////////////////

        const imageContainer = document.createElement('div')        
        imageContainer.classList.add('image-container')
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src',review.img)
        imageElement.setAttribute('alt',review.alt)
        imageContainer.append(imageElement)

        //////////////////////////////////////////////////////
        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = review.text
        const nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        nameContainer.textContent = review.name
        ///////////////////////////////////////////////////////
        
        cardElement.append(imageContainer, paragraphElement, nameContainer)

        reviewContainer.append(cardElement)
    })
}

populateDisplay();

function showCard(){
    this.classList.add('active')
}

function blurCard(){
    this.classList.remove('active')
}

