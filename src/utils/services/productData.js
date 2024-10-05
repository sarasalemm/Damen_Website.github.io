 const getProducts=()=>{
    //i want variable new price=price - (price* (discount/100))
    return[
        {
           
            id:1,
            name:'Product1',
            description:'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
            price:3560,
            discount:10,
            image:require('../images/product2img.png')
        },
        {
            id:2,
            name:'10688',
            description:'Lorem Ipsum has been the industry\'s standard dummy text...',
            price:300,
            discount:0,
            image:require('../images/productimg.png')

        },
        {
            id:3,
            name:'10689',
            description:'Lorem Ipsum has been the industry\'s standard dummy text...',
            price:300,
            discount:0,
            image:require('../images/productimg.png')

        },
        {
            id:4,
            name:'10690',
            description:'Lorem Ipsum has been the industry\'s standard dummy text...',
            price:300,
            discount:0,
            image:require('../images/productimg.png')
        },
        {
            id:5,
            name:'10691',
            description:'Lorem Ipsum has been the industry\'s standard dummy text...',
            price:300,
            image:require('../images/productimg.png')
        },
        {
            id:6,
            name:'10692',
            description:'Lorem Ipsum has been the industry\'s standard dummy text...',
            price:300,
            image:require('../images/productimg.png')
        },
        {
            id:7,
            name:'10693',
            description:'Lorem Ipsum has been the industry\'s standard dummy text...',
            price:300,
            image:require('../images/productimg.png')
        },
        {
            id:8,
            name:'10694',
            description:'Lorem Ipsum has been the industry\'s standard dummy text...',
            price:300,
            image:require('../images/productimg.png')
        },
        {
            id:9,
            name:'10695',
            description:'Lorem Ipsum has been the industry\'s standard dummy text...',
            price:300,
            image:require('../images/productimg.png')
        }

    ].map(product => ({
        ...product,
        newPrice: product.price - (product.price * (product.discount / 100)) 
    }));
};
export {getProducts};