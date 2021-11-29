const getCartSum = function calculateSumFromCartItems(cart, products) {
  return cart.reduce((sum, cartItem) => {
    const product = products.find(currentProduct => currentProduct.id === cartItem.id);
    if (!product) {
      return sum;
    }
    return sum + cartItem.qty * product.price;
  }, 0);
}

export default getCartSum;