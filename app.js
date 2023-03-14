const cartItem = [
    {
        title:'book1',
        price:29
    },
    {
        title:'book2',
        price:39
    },
    {
        title:'book3',
        price:49
    }]

    const findProducts = function(cart,productTitle){
        const indexvalue =cart.findIndex(function(item,index){
            return item.title===productTitle
        })
        return cart[indexvalue]
    }
    const result = findProducts(cartItem,'book3')

    console.log(result)


