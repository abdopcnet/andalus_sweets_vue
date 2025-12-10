<template>
  <div class="home" id="home">
    <video src="../assets/sweets-video.mp4" class="intro-video" autoplay loop muted preload="metadata" playsinline></video>
    <div class="hr"></div>
   <div class="hero-section">
    <!-- Hero Banner -->
    <div class="hero-banner">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">من قلب الأندلس:. نقدم لك</h1>
          <p class="hero-subtitle">لوحات من الحلو والسعادة</p>
          <a href="#menu" class="cta-button">
            🛒 اطلب الآن
          </a>
        </div>
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" alt="كيك لذيذ" class="cake-img" />
        </div>
      </div>
    </div>

    <!-- Description Section -->
    <div class="description-section">
      <div class="container">
        <p class="description-text">
          منصة متكاملة تجمع بين فن الطهي والحلا، حيث يمكنك اختيار من قائمة متنوعة من الأكلات والحلويات
          أو إرسال طلب خاص يُحضّر حسب ذوقك وبأفضل المكونات.
        </p>
      </div>
    </div>

    <!-- Order Section with Chef -->
    <div class="order-section" id="menu">
      <div class="container">
        <div class="chef-container">
          <div class="chef-circle">
            <video 
              src="../assets/chef-icon.mp4" 
              class="chef-video" 
              autoplay 
              loop 
              muted 
              preload="metadata" 
              playsinline
            ></video>
          </div>
          <h2 class="order-title">جاهز للطلب؟</h2>
          <p class="order-subtitle">اختر من قائمتنا المميزة</p>
          <a href="#home" class="order-button">
            <span class="button-icon">🛒</span>
            <span class="button-text">اطلب الآن</span>
          </a>
        </div>
      </div>
    </div>
  </div>
    
  </div>
</template>

<script setup>
defineOptions({ name: 'HomeView' })
</script>

<style scoped>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero-section {
  width: 100%;
  font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
}

/* Hero Banner Section */
.hero-banner {
  background: linear-gradient(135deg, #FFF5E6 0%, #FFE4D1 100%);
  padding: 80px 20px;
  min-height: 500px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-banner::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E") no-repeat bottom;
  background-size: cover;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  text-align: right;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: #FF6B35;
  margin-bottom: 15px;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #5D4E37;
  margin-bottom: 30px;
  font-weight: 500;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
  color: white;
  padding: 18px 45px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 700;
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
  transition: all 0.3s ease;
  border: none;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.4);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cake-img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Description Section */
.description-section {
  background: white;
  padding: 60px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.description-text {
  text-align: center;
  font-size: 1.3rem;
  line-height: 2;
  color: #5D4E37;
  max-width: 900px;
  margin: 0 auto;
  font-weight: 400;
}

/* Order Section */
.order-section {
  background: linear-gradient(180deg, #FFF5E6 0%, #FFE4D1 100%);
  padding: 100px 20px;
}

.chef-container {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.chef-circle {
  width: 200px;
  height: 200px;
  margin: 0 auto 30px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 15px 50px rgba(255, 107, 53, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 5px solid #FF6B35;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.chef-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.order-title {
  font-size: 2.5rem;
  color: #FF6B35;
  margin-bottom: 15px;
  font-weight: 800;
}

.order-subtitle {
  font-size: 1.3rem;
  color: #5D4E37;
  margin-bottom: 35px;
  font-weight: 500;
}

.order-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
  color: white;
  padding: 20px 50px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 700;
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.3);
  transition: all 0.3s ease;
}

.order-button:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 20px 50px rgba(255, 107, 53, 0.4);
}

.button-icon {
  font-size: 1.5rem;
}

.button-text {
  font-weight: 700;
}

/* Responsive Design */
@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero-text {
    text-align: center;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .cake-img {
    max-width: 300px;
  }
}

@media (max-width: 640px) {
  .hero-banner {
    padding: 50px 15px;
    min-height: 400px;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .cta-button {
    padding: 15px 35px;
    font-size: 1.1rem;
  }

  .description-text {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .order-section {
    padding: 60px 15px;
  }

  .chef-circle {
    width: 150px;
    height: 150px;
  }

  .order-title {
    font-size: 2rem;
  }

  .order-subtitle {
    font-size: 1.1rem;
  }

  .order-button {
    padding: 16px 40px;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .cta-button {
    padding: 12px 30px;
    font-size: 1rem;
  }

  .description-text {
    font-size: 1rem;
  }

  .order-title {
    font-size: 1.6rem;
  }

  .order-button {
    padding: 14px 35px;
    font-size: 1.1rem;
  }
}
  .btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
    text-align: center;
}
.btn-primary {
    background: linear-gradient(to left, #f97316, #ea580c);
    color: white;
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
}
.btn-large {
    padding: 16px 40px;
    font-size: 20px;
}
.text-orange {
  color: #d96c00;
}
.btn-orange {
  background-color: #d96c00;
  color: #fff;
  border: none;
}
.btn-orange:hover {
  background-color: #b85a00;
}
.btn-outline-orange {
  border: 2px solid #d96c00;
  color: #d96c00;
}
.btn-outline-orange:hover {
  background-color: #d96c00;
  color: white;
}
.hero-img {
  max-width: 400px;
}
.intro-video {
  width: 100vw;
  height:  auto; ;
  max-width: 100%;
  display: block;
}
.hr {
  border: none;
  height: 3vh;
  background-color: #ff6f00;
  margin: 0 0 20px;
  width: 100%;
}
.order-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15vw;
  margin-bottom: 9vh;
  padding: 0 1rem;
  flex-wrap: wrap;
}

.order-container .left,
.order-container .right {
  flex: 0 1 auto;
  max-width: 20vw;
  height: auto;
  object-fit: contain;
  opacity: 50%;
  margin-left: 7vh;
}

.chef-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 1 auto;
}

.chef-icon {
  height: 45vh;
  max-width: 25vw;
  width: auto;
  object-fit: contain;
}

/* Tablet: reduce sizes and tighten gap */
@media (max-width: 1024px) {
  .order-container {
    gap: 1rem;
  }

  .order-container .left,
  .order-container .right {
    max-width: 25vw;
  }

  .chef-icon {
    height: 30vh;
    max-width: 30vw;
  }
}

/* Mobile: stack vertically */
@media (max-width: 768px) {
  .order-container {
    flex-direction: column;
    gap: 1rem;
  }

  .order-container .left,
  .order-container .right {
    max-width: 30vw;
    height: auto;
  }

  .chef-icon {
    height: 25vh;
    max-width: 70vw;
  }
}

/* Small mobile: even tighter */
@media (max-width: 480px) {
  .order-container {
    gap: 0.75rem;
  }

  .chef-icon {
    height: 20vh;
    max-width: 90vw;
  }
}
.caption-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.9);
}

.caption-text {
  max-width: 800px;
  text-align: center;
  font-size: 2.3rem;
  font-family: 'Aref Ruqaa', serif;
  line-height: 1.8;
  color: #333;
  margin: 0;
}

@media (max-width: 768px) {
  .caption-text {
    font-size: 1rem;
    line-height: 1.6;
  }
}
.order-button {
  background-color: #ff6f00;
  color: #ffffff;
  border: none;
  border: #ff6f00 1px solid;
  padding: 5px 40px;
  border-radius: 5px;
  font-size: 1.4em;
  cursor: pointer;

  align-items: center;
  text-align: center;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  will-change: transform;
}
.order-button-text {
  flex: 1;
  text-align: center;
  font-size: inherit;
  font-family: inherit;
  color: #fff;
}
.order-button:active {
  transform: scale(1.12);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
.secondary-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ff6f00;
  padding: 10px 0;
  direction: rtl;
  height: auto;
}

.secondary-nav-item {
  color: #fff;
  text-decoration: none;
  margin: 5px 10px;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 16px;
  white-space: nowrap;
}

.secondary-nav-item.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.secondary-nav-icon {
  width: 24px;
  height: 24px;
  margin-left: 5px;
  object-fit: contain;
}

/* Tablet Breakpoint */
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

/* Mobile Breakpoint */
@media screen and (max-width: 768px) {
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

  /* when mobile menu opens make links comfortable to tap */
  .mobile-menu .nav-item {
    font-size: 16px;
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

/* Small Mobile Breakpoint */
@media screen and (max-width: 480px) {
  .logo {
    height: 40px;
  }

  .nav-item {
    font-size: 14px;
  }

  .secondary-nav-item {
    font-size: 12px;
    margin: 2px;
    padding: 3px 5px;
  }

  .secondary-nav-icon {
    width: 16px;
    height: 16px;
  }
}
</style>
