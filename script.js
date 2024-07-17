// Sample product data
const products = [
    {
        id: 1,
        name: 'Sofa',
        description: 'A sofa is a long, comfortable seat with a back and usually with arms, which two or three people can sit on.',
        price: 20599,
        image: 'sofa.jpg',
        offer: '20% off'
    },
    {
        id: 2,
        name: 'Saree',
        description: 'The saree  is traditional attire for women of South Asia descent and is essentially a long piece of fabric that is draped around the body.',
        price: 18799,
        image: 'saree.jpg',
        offer: 'Free shipping'
    },
    {
        id: 3,
        name: 'Lehenga',
        description: 'Lehenga is a three-piece ensemble consists of the actual lehenga, a long ankle-length skirt, a well-fitted blouse top known as the choli, and a scarf to drape around the outfit, known as the dupatta',
        price: 40999,
        image: 'lehenga.jpg',
        offer: '15% off'
    },
    {
        id: 4,
        name: 'Laptop',
        description: ' A laptop is a personal computer that can be easily moved and used in a variety of locations.',
        price: 50000,
        image: 'laptop.jpg',
        offer: '10% off'

    },
    {
        id: 5,
        name: 'Smartphone',
        description: 'A smartphone is a cellular telephone with an integrated computer and other features not originally associated with telephones, such as an operating system (OS), web browsing and the ability to run software applications. ',
        price: 50599,
        image: 'smartphone.jpg',
        offer: '15% off'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');

    // Display each product
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');

        // Product image
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        productCard.appendChild(img);

        // Product description
        const description = document.createElement('div');
        description.classList.add('description');
        description.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price.toFixed(2)} USD</p>
            <p>${product.offer}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productCard.appendChild(description);

        productList.appendChild(productCard);
    });
});

// Function to add product to cart (dummy function for now)
function addToCart(productId) {
    alert(`Product with ID ${productId} added to cart!`);
}
