<template>
  <nav class="navbar">
    <div class="navbar-left">
     <router-link to="/"> <img src="../assets/logo.jpg" alt="Company Logo" class="logo" />
    </router-link>

    </div>
 
   <router-link to="/Orders" class="nav-item cart-icon mobile-only-cart">
  <span v-if="count > 0" class="cart-badge">{{ count }}</span>
  <img src="../assets/Vectorcart.png" />
</router-link>
    <!-- Hamburger Menu Button -->
    <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <div class="navbar-center">
        <router-link to="/Orders" class="nav-item">عروض</router-link>
        <!-- open modal instead of routing -->
        <a href="#" @click.prevent="isModalOpen = true" class="nav-item">
          <img src="../assets/location.png" alt="" /> سجل بياناتك
        </a>
        <router-link to="/Contact" class="nav-item" >
          <img src="../assets/phone.png" alt="" />اتصل بنا
        </router-link >
         <router-link to="/food-restaurant" class="nav-item" >   
          <img src="../assets/logo2.jpg" style="height: 4vh;" /> مذاق النبلاء للمأكولات 
        </router-link>
         <router-link to="/sweets-restaurant" class="nav-item"> 
          <img src="../assets/image.png" style="height: 4vh;" />مذاق الأندلس للحلويات
        </router-link >
           <router-link to="/special-orders" class="nav-item">       
             <img src="../assets/chef.png" style="height: 4vh;" />  عروض المناسبات والحفلات 
            </router-link >
      </div>
      <div class="navbar-right">
      
       <router-link to="/Orders" class="nav-item cart-icon">
        <img src="../assets/uil_down-arrow.png" alt="" />
        عربة التسوق
        <span v-if="count > 0" class="cart-badge">{{ count }}</span>
        <img src="../assets/Vectorcart.png" />
      </router-link>
      </div>
    </div>



    <!--------------------------------------------------- Desktop Menu ------------------------------>
    <div class="desktop-menu">
      <div class="navbar-center main-links">
      
        <router-link to="/food-restaurant" class="nav-item">
          <img src="../assets/logo2.jpg" style="height: 4vh;" /> مذاق النبلاء للمأكولات
        </router-link>
        <router-link to="/sweets-restaurant" class="nav-item">
          <img src="../assets/image.png" style="height: 4vh;" />  مذاق الأندلس للحلويات
        </router-link>
              <router-link to="/special-orders" class="nav-item">
          <img src="../assets/chef.png" style="height: 4vh;" /> عروض المناسبات والحفلات
              </router-link>
      </div>
      <div class="navbar-center">
      
        <a href="#" @click.prevent="isModalOpen = true" class="nav-item">
          <img src="../assets/location.png" alt="" /> سجل بياناتك
        </a>
        <router-link to="/Contact" class="nav-item"
          ><img src="../assets/phone.png" alt="" />اتصل بنا</router-link
        >
      </div>
      <div class="navbar-right">
       
        <router-link to="/Orders" class="nav-item cart-icon">
        <img src="../assets/uil_down-arrow.png" alt="" />
            عربة التسوق
            <span v-if="count > 0" class="cart-badge">{{ count }}</span>
            <img src="../assets/Vectorcart.png" alt="" />
          </router-link>
      </div>
    </div>
  </nav>

  <!-- keep modal component in template and bind visibility -->
  <LocationModal :visible="isModalOpen" @update:visible="isModalOpen = $event" />

   <!----- <div class="secondary-nav">
    <a href="/food-restaurant" class="secondary-nav-item active"
      ><img src="../assets/logo2.jpg" class="secondary-nav-icon" />مذاق النبلاء
    </a>
    <a href="/Sweets-restaurant" class="secondary-nav-item"
      ><img src="../assets/image.png" class="secondary-nav-icon" /> حلويات الاندلس</a
    >
    <a href="/Orders" class="secondary-nav-item"
      ><img src="../assets/solar_chef-hat-broken.png" class="secondary-nav-icon" />طلبات خاصة</a
    >
  </div> --->
</template>

<script>
import LocationModal from './LocationModal.vue'
import { useCart } from '../store/cart.js'
import { computed } from 'vue'

export default {
  name: 'MainNavbar',
  components: {
    LocationModal,
  },
  setup() {
    const { cartCount } = useCart()
    const count = computed(() => cartCount())
    return { count }
  },
  data() {
    return {
      isMenuOpen: false,
      isModalOpen: false, // controls modal visibility
    }
  },
}
</script>

<style scoped>
.root {
  position: relative;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 8px 18px;
  box-shadow: 0 2px 4px rgba(173, 106, 68, 0.479);
  direction: rtl;
  position: sticky;  /* غيّرناها من relative لـ sticky */
  top: 0;            /* هتلزق فوق */
  z-index: 1000;     /* عشان تكون فوق كل حاجة */
  min-height: 64px;
  flex-wrap: nowrap;
}


.logo {
  height: 70px;
  max-height: 64px;
  margin-left: 10px;
  cursor: pointer;
}
.mobile-only-cart {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* إخفاء الزرار في Desktop (أكبر من أو يساوي 768px) */
@media (min-width: 768px) {
  .mobile-only-cart {
    display: none !important;
  }
}

/* تنسيق إضافي للزرار */
.mobile-only-cart {
  position: relative;
  cursor: pointer;
}

.mobile-only-cart .cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff4444;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
}

.mobile-only-cart img {
  width: 24px;
  height: 24px;
}
.desktop-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 auto;
  width: auto;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.menu-toggle span {
  width: 100%;
  height: 3px;
  background-color: #ff6f00;
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
}

.navbar-center,
.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-center {
  flex: 1 1 auto;
  justify-content: center;
  gap: 8px;
}

.navbar-right {
  flex: 0 0 auto;
  gap: 8px;
}

.nav-item {
  color: #000;
  text-decoration: none;
  margin: 0 16px;
  padding: 6px 12px;
  display: flex;
  font-weight: 700;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;
  border-radius: 6px;
}

.nav-item:hover {
  background: rgba(255, 111, 0, 0.144);
    border-bottom: #0000009f 1px solid transparent;
}
.nav-item img {
  margin-left: 5px;
  height: 20px;
  width: auto;
}

.login-icon {
  color: #e46911;
}

.cart-icon {
  background-color: #ff6f00;
  color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.cart-icon:hover {
  background-color: #f59d5a;
  border: 1px #ff6f00 solid;
}
/* 
.secondary-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ff6f00;
  padding: 10px 0;
  direction: rtl;
  height: 10vh;
}

.secondary-nav-item {
  color: #fff;
  text-decoration: none;
  margin: 5px 10px;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;
}

.secondary-nav-item.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.secondary-nav-icon {
  width: auto;
  height: 25px;
  margin-left: 5px;


  object-fit: contain;
} */

@media screen and (max-width: 1024px) {
  .nav-item {
    margin: 0 8px;
    padding: 6px 8px;
    font-size: 14px;
  }

  .logo {
    height: 48px;
  }

  .secondary-nav-icon {
    width: 20px;
    height: 20px;
  }
}

@media screen and (max-width: 1068px) {
  .menu-toggle {
    display: flex;
  }

  .desktop-menu {
    display: none;
  }

  .mobile-menu {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .mobile-menu.is-open {
    display: block;
  }

  .mobile-menu .navbar-center,
  .mobile-menu .navbar-right {
    flex-direction: column;
    align-items: stretch;
  }

  .mobile-menu .nav-item {
    margin: 10px 0;
    padding: 10px;
    justify-content: flex-start;
  }

  .mobile-menu .nav-item {
    font-size:14px;
  }

  .cart-icon {
    margin-top: 10px;
  }

  .secondary-nav {
    padding: 5px;
  }

  .secondary-nav-item {
    font-size: 14px;
    margin: 3px 5px;
  }
}

@media screen and (max-width: 480px) {
  .logo {
    height: 40px;
  }

  .nav-item {
    font-size: 14px;
    margin: 0 4px;
    padding: 6px 6px;
  }
}
.cart-badge {
  background-color: #fff;
  color: #ff6f00;
  border: 1px solid white ;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: bold;
  margin: 0 5px;
  min-width: 20px;
  text-align: center;
}
</style>
