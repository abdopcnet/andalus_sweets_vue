import { ref } from 'vue'

// السلة مخزنة في localStorage
const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])

export function useCart() {
  // إضافة منتج للسلة
  const addToCart = (product) => {
    const existingItem = cart.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.qty++
    } else {
      cart.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: 1
      })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart.value))
    alert(`تمت إضافة ${product.name} إلى السلة ✅`)
  }

  // حذف منتج
  const removeFromCart = (productId) => {
    cart.value = cart.value.filter(item => item.id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }

  // زيادة الكمية
  const increaseQty = (productId) => {
    const item = cart.value.find(item => item.id === productId)
    if (item) {
      item.qty++
      localStorage.setItem('cart', JSON.stringify(cart.value))
    }
  }

  // تقليل الكمية
  const decreaseQty = (productId) => {
    const item = cart.value.find(item => item.id === productId)
    if (item && item.qty > 1) {
      item.qty--
      localStorage.setItem('cart', JSON.stringify(cart.value))
    }
  }

  // عدد المنتجات في السلة
  const cartCount = () => {
    return cart.value.reduce((total, item) => total + item.qty, 0)
  }

  // السعر الإجمالي
  const totalPrice = () => {
    return cart.value.reduce((total, item) => total + (item.price * item.qty), 0)
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    cartCount,
    totalPrice
  }
}