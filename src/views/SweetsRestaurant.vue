<template>
   <section class="hero-section">
    <div class="food-slider">
      <video class="hero-video" src="../assets/sweets-video.mp4" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;border-radius:8px;"></video>
    </div>
    
    <div class="hero-content">
      
      <h1 class="hero-title">
        حلويات الاندلس .... <br />
      لحظات من الحلا و السعادة
      </h1>

      <a href="#pruducts-section">
      <button class="order-button order-button--fixed">
        اطلب الآن<img src="../assets/Vectorcart.png" alt="" />
      </button>
    </a>
    </div>
  </section>







  <section class="content">

    <section class="parts-section">
        <img src="../assets/bannar1.png" alt="border" class="caption-image" />

        <div class="parts-container">
          <div class="parts-card parts-card-1">
            <button>جلاش</button>
          </div>
          <div class="parts-card parts-card-2">
            <button>كيك</button>
          </div>
          <div class="parts-card parts-card-3">
            <button>كحك</button>
          </div>
          <div class="parts-card parts-card-4">
            <button>كنافة</button>
          </div>
        </div>
      </section>
  <img src="../assets/banner5.png" class="caption-image" />
  <div class="products-container">
    <div 
      class="product-card" 
      v-for="product in products" 
      :key="product.id"
      :class="`product-card-${(product.id % 6) + 1}`">
      <div class="product-card-content">
        <div class="product-card-info">
          <p class="product-name">{{ product.name }}</p>
          <p class="product-price">{{ product.price }} ريال</p>
        </div>
        <button class="add-to-cart-btn" @click="addToCart(product)">أضف للسلة</button>
      </div>
    </div>
  </div>

  <router-link to="/food-restaurant">
    <button class="more-btn">عرض المزيد</button>
  </router-link>
  </section>
</template>

<script>
import { useCart } from '../store/cart.js'

export default {
  name: 'FoodRestaurant',
  setup() {
    const { addToCart } = useCart()
    return { addToCart }
  },
  data() {
    return {
      products: [
        { id: 1, name: ' كيك', price: 45, image: '../assets/food1.png' },
        { id: 2, name: 'كحك ', price: 55, image: '../assets/food3.png' },
        { id: 3, name: ' كنافة', price: 40, image: '../assets/food2.jpg' },
        { id: 4, name: ' كحك', price: 60, image: '../assets/food3.png' },
        { id: 5, name: ' كحك', price: 38, image: '../assets/food1.png' },
        { id: 6, name: ' جلاش', price: 70, image: '../assets/food2.jpg' },
        { id: 7, name: ' كيك', price: 35, image: '../assets/food3.png' },
        { id: 8, name: ' كحك', price: 65, image: '../assets/food2.jpg' }
      ]
    }
  },
  mounted() {
    const images = document.querySelectorAll('.hero-image');
    let index = 0;

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 2000);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&display=swap');

/* Layout */
* {
  font-family: 'Aref Ruqaa', serif;
}
.hero-section {
    position: relative;
    padding: 0;
    min-height: 60vh;
    display: block;
    background-color: #fcfcfc;
  }

  .food-slider {
    position: relative;
    width: 100%;
    height: 92vh;
    overflow: hidden;
  }
  
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  
  .hero-image.active {
    opacity: 1;
  }

  /* النص فوق الصورة */
  .hero-content {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    z-index: 100;
    max-width: 600px;
    text-align: right;
  }

  .hero-title {
    color: #fff;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    font-size: clamp(32px, 6vw, 96px);
    margin-bottom: 30px;
    font-family: 'Aref Ruqaa', serif;
    line-height: 1.05;
  }

  /* الزرار فوق الصورة */
  .order-button--fixed {
    position: relative;
    margin-top: 20px;
    background-color: #ff6f00;
    color: #fff;
    border: none;
    padding: 15px 40px;
    border-radius: 10px;
    font-size: 1.7em;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .order-button--fixed:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }

  .order-button--fixed img {
    width: 24px;
    height: 24px;
  }


/* Tablet and Mobile */
@media screen and (max-width: 768px) {
  .hero-section {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
    padding: 20px 14px;
    min-height: auto;
    gap: 20px;
    background-color: #fcfcfc;
  }
  
  .hero-content {
    max-width: 100%;
    margin: 0;
    text-align: center;
    position: static;
    transform: none;
  }

  .hero-title {
    color: #ff6f00;
    text-shadow: none;
    font-size: clamp(24px, 6vw, 40px);
  }
  
  .food-slider {
    width: 100%;
    max-width: 400px;
    height: 250px;
    position: relative;
    overflow: hidden;
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  
  .hero-image.active {
    opacity: 1;
  }

  .order-button,
  .order-button--fixed {
    position: static !important;
    transform: none !important;
    margin: 20px auto 0 !important;
    background-color: #ff6f00 !important;
    color: #fff !important;
    border: none !important;
    padding: 15px 40px !important;
    border-radius: 10px !important;
    font-size: 1.5em !important;
    cursor: pointer !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 10px !important;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3) !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease !important;
    width: auto !important;
    min-width: 200px !important;
  }

  .order-button:active,
  .order-button--fixed:active {
    transform: translateY(-3px) !important;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4) !important;
  }

  .order-button img,
  .order-button--fixed img {
    width: 24px !important;
    height: 24px !important;
  }
}

/* Small phones */
@media screen and (max-width: 480px) {
  .hero-title {
    font-size: clamp(20px, 7vw, 32px);
  }
  
  .food-slider {
    height: 200px;
  }
  
  .order-button--fixed {
    padding: 12px 30px;
    font-size: 1.4em;
  }

  .order-button--fixed img {
    width: 20px;
    height: 20px;
  }
}

/******************************** Product Cards *************** */
.content {
  margin: 5vh 0 2rem 0;
  height: auto;
  align-items: center;
  text-align: center;
  padding-bottom: 2.5rem;
}

hr {
  border: none;
  height: 4px;
  background-color: #ff6f00;
  margin: 20px auto;
  width: 100%;
}

.caption-image {
  width: 25vw;
  max-width: 300px;
  height: auto;
  margin: 2rem 0;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  direction: rtl;
}

.product-card {
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  aspect-ratio: 3/4;
  min-height: 320px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 32px rgba(255, 111, 0, 0.3);
}

.product-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(255, 111, 0, 0.45) 55%,
    rgba(148, 80, 2, 0.75) 100%
  );
  opacity: 1;
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.product-card:hover::before {
  opacity: 0.9;
}

.product-card-1 {
  background-image: url('../assets/sweet2.png');
}
.product-card-2 {
  background-image: url('../assets/cake.jpg');
}
.product-card-3 {
  background-image: url('../assets/kaa7k.jpg');
}
.product-card-4 {
  background-image: url('../assets/konafa.jpg');
}
.product-card-5 {
  background-image: url('../assets/kaa7k.jpg');
}
.product-card-6 {
  background-image: url('../assets/sweet2.png');
}

.product-card-content {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
}

.product-card-info {
  text-align: right;
  width: 100%;
}

.product-name {
  color: white;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.95);
  font-size: 1.8em;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
  letter-spacing: 0.5px;
}

.product-price {
  color: white;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.95);
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  background: rgba(255, 111, 0, 0.5);
  padding: 0.4rem 1.2rem;
  border-radius: 10px;
  display: inline-block;
  backdrop-filter: blur(4px);
}

.add-to-cart-btn {
  background: #ffffff;
  color: #ff6f00;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.5em;
  font-weight: bold;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
}

.add-to-cart-btn:hover,
.add-to-cart-btn:focus {
  background-color: #ff6f00;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 111, 0, 0.5);
}

/* Responsive Product Cards */
@media (max-width: 1200px) {
  .products-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  .product-card {
    min-height: 280px;
  }
  
  .product-card-content {
    padding: 1.3rem;
  }
  
  .product-name {
    font-size: 1.6em;
  }
  
  .product-price {
    font-size: 1.3em;
    padding: 0.35rem 1rem;
  }
  
  .add-to-cart-btn {
    font-size: 1.4em;
    padding: 0.75rem 1.8rem;
  }
  
  .caption-image {
    width: 35vw;
  }
}

@media (max-width: 768px) {
  .products-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    padding: 1rem;
  }
  
  .product-card {
    min-height: 240px;
    border-radius: 15px;
  }
  
  .product-card-content {
    padding: 1.2rem;
    gap: 0.8rem;
  }
  
  .product-name {
    font-size: 1.4em;
    margin-bottom: 0.3rem;
  }
  
  .product-price {
    font-size: 1.2em;
    padding: 0.3rem 0.9rem;
    border-radius: 8px;
  }
  
  .add-to-cart-btn {
    font-size: 1.3em;
    padding: 0.7rem 1.5rem;
    border-radius: 10px;
  }
  
  .caption-image {
    width: 50vw;
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  .products-container {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
  
  .product-card {
    min-height: 280px;
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
  }
  
  .product-card-content {
    padding: 1.5rem;
    gap: 1rem;
  }
  
  .product-name {
    font-size: 1.6em;
  }
  
  .product-price {
    font-size: 1.4em;
    padding: 0.35rem 1rem;
  }
  
  .add-to-cart-btn {
    font-size: 1.4em;
    padding: 0.8rem 2rem;
  }
  
  .caption-image {
    width: 60vw;
  }
}

/**********************************parts-section******************************** */
.parts-section {
  height: auto;
  min-height: 60vh;
  margin: 5vh auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}

.parts-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  width: 100%;
  padding: 0 2rem;
  direction: rtl;
}

.parts-card {
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
  aspect-ratio: 3/4;
  min-height: 320px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.parts-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(255, 111, 0, 0.25);
}

.parts-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(255, 111, 0, 0.4) 60%,
    rgba(148, 80, 2, 0.8) 100%
  );
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.parts-card:hover::before {
  opacity: 0.85;
}

.parts-card > button {
  position: relative;
  z-index: 2;
  background: #ffffff;
  color: #ff6f00;
  border: none;
  padding: 0.85rem 2rem;
  margin: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.6em;
  font-weight: bold;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  width: calc(100% - 3rem);
  text-align: center;
}

.parts-card > button:hover {
  background-color: #ff6f00;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 111, 0, 0.5);
}

.parts-card-1 {
  background-image: url('../assets/sweet2.png');
}
.parts-card-2 {
  background-image: url('../assets/cake.jpg');
}
.parts-card-3 {
  background-image: url('../assets/kaa7k.jpg');
}
.parts-card-4 {
  background-image: url('../assets/konafa.jpg');
}

/* Responsive parts-section */
@media (max-width: 1200px) {
  .parts-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 0 1.5rem;
  }
  
  .parts-card {
    min-height: 280px;
  }
  
  .parts-card > button {
    font-size: 1.4em;
    padding: 0.75rem 1.8rem;
    margin: 1.3rem;
    width: calc(100% - 2.6rem);
  }
}

@media (max-width: 768px) {
  .parts-section {
    min-height: 40vh;
    margin: 3vh auto;
    padding: 1.5rem 0.5rem;
    gap: 2rem;
  }
  
  .parts-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    padding: 0 1rem;
  }
  
  .parts-card {
    min-height: 240px;
    border-radius: 15px;
  }
  
  .parts-card > button {
    font-size: 1.3em;
    padding: 0.7rem 1.5rem;
    margin: 1.2rem;
    width: calc(100% - 2.4rem);
    border-radius: 10px;
  }
}

@media (max-width: 480px) {
  .parts-section {
    padding: 1rem 0.5rem;
    gap: 1.5rem;
  }
  
  .parts-container {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
  
  .parts-card {
    min-height: 280px;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .parts-card > button {
    font-size: 1.4em;
    padding: 0.8rem 2rem;
    margin: 1.5rem;
    width: calc(100% - 3rem);
  }
}
</style>
