<template>
  <div class="cart-container" dir="rtl">
   <img src="../assets/banner4.png" alt="shopping -basket" class="cart-title">

    <!-- Desktop Table View -->
    <div class="cart-table-wrapper">
      <table class="cart-table">
        <thead>
          <tr>
            <th>الكمية</th>
            <th>السعر</th>
            <th>المنتج</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in cart"
            :key="item.id"
          >
            <td>
              <div class="qty-controls">
                <button @click="increaseQty(item.id)">+</button>
                <span>{{ item.qty }}</span>
                <button @click="decreaseQty(item.id)" :disabled="item.qty <= 1"><img src="" alt="">-</button>
              </div>
            </td>
            <td>{{ item.price.toFixed(2) }} ريال</td>
            <td class="product-info">
              <span>{{ item.name }}</span>
              <img :src="item.image" :alt="item.name" />
            </td>
            <td>
              <button class="delete-btn" @click="removeItem(item.id)">x</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile Card View -->
    <div class="mobile-cards">
      <div
        v-for="item in cart"
        :key="item.id"
        class="card"
      >
        <div class="card-top">
          <img :src="item.image" :alt="item.name" />
          <div class="card-info">
            <h3>{{ item.name }}</h3>
            <p>السعر: {{ item.price.toFixed(2) }} ريال</p>
            <div class="qty-controls">
              <span>الكمية:</span>
              <button @click="increaseQty(item.id)">+</button>
              <span>{{ item.qty }}</span>
              <button @click="decreaseQty(item.id)" :disabled="item.qty <= 1">-</button>
            </div>
          </div>
          <button class="delete-btn" @click="removeItem(item.id)">x</button>
        </div>
      </div>
    </div>

    <!-- Total Section -->
    <div v-if="cart.length > 0" class="total-section">
      <div class="total-row">
        <span>المجموع الكلي:</span>
        <span>{{ getTotalPrice().toFixed(2) }} ريال</span>
      </div>
      <router-link  to="/Checkout">    
        <button class="checkout-btn">إتمام الطلب</button>
      </router-link>
  
    </div>
  
    <div v-else class="empty-cart">
      <p>السلة فارغة</p>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'OrdersView' })
import { ref, onMounted } from "vue";

const cart = ref([]);

onMounted(() => {
  const saved = localStorage.getItem("cart");
  cart.value = saved ? JSON.parse(saved) : [];
});

const removeItem = (id) => {
  cart.value = cart.value.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

const increaseQty = (id) => {
  const item = cart.value.find((i) => i.id === id);
  if (item) item.qty += 1;
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

const decreaseQty = (id) => {
  const item = cart.value.find((i) => i.id === id);
  if (item && item.qty > 1) item.qty -= 1;
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

const getTotalPrice = () => {
  return cart.value.reduce((total, item) => total + item.price * item.qty, 0);
};
</script>



<style scoped>
.cart-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  direction: rtl;
}

.cart-title {
 width: 25vw;
   display: block;      /* لازم تكون block */
  margin: 0 auto; 
}

/* Desktop Table */
.cart-table-wrapper {
  overflow-x: auto;
}
.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
.cart-table th, .cart-table td {
  padding: 12px;
  border-bottom: 1px solid #ff8c32;
  text-align: center;
  vertical-align: middle;
}
.cart-table th {
  font-weight: bold;
  background-color: #fff3e0;
}
.product-info {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
}
.product-info img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
}
.qty-controls {
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content:center;
}
.qty-controls button {
  width: 30px;
  height: 30px;
  border: none;
  border: 1px solid #ff6f00;
  background-color: #fff;
  color: #ff6f00;
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
}
.qty-controls span {
  min-width: 25px;
  text-align: center;
}
.delete-btn {
  border: none;
background-color: #fff;
  color: #d60404;
  font-size: 22px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
}

/* Mobile Cards */
.mobile-cards {
  display: none;
}
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
  background-color: #fff8f0;
}
.card-top {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}
.card img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
}
.card-info h3 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 6px;
}
.card-info p {
  font-size: 0.9rem;
  margin-bottom: 6px;
}

/* Total Section */
.total-section {
  margin: auto;
  margin-top: 20px;
  border-top: 2px solid #ff6f00;
  padding-top: 15px;
  max-width: 400px;
}
.total-row {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.checkout-btn {
  width: 100%;
  padding: 12px;
  background-color: #ff6f00;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.checkout-btn:active{
  transform: scale(0.95);
}
.empty-cart {
  text-align: center;
  padding: 50px 0;
  font-size: 1.2rem;
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .cart-table-wrapper {
    display: none;
  }
  .mobile-cards {
    display: block;
  }
  .card img {
    width: 70px;
    height: 70px;
  }
  .qty-controls button {
    width: 28px;
    height: 28px;
    font-size: 16px;
  }
}
</style>
