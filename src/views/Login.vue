<template>
  <div class="login-container">

    <!-- الصورة اليسار -->
    <img src="../assets/left.png" class="side-img left-img" alt="left" />

    <!-- الصورة اليمين -->
    <img src="../assets/right.png" class="side-img right-img" alt="right" />

    <!-- المحتوى -->
    <div class="login-content">

      <h2 class="title">تسجيل الدخول</h2>

      <div class="switch-buttons">
        <span 
          :class="{ active: loginType === 'phone' }"
          @click="loginType = 'phone'"
        >
          استخدام رقم الهاتف
        </span>

     
      </div>

      <div class="input-group">
        <input 
          v-if="loginType === 'phone'"
          type="text" 
          v-model="phone"
          placeholder="+962"
        />
      </div>

      <button class="submit-btn">استمر →</button>

      <div class="footer-logos">
        <img src="../assets/logo1.png" />
        <img src="../assets/logo3.jpg" />
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      loginType: "phone",
      phone: "",

    };
  },
};
</script>

<style scoped>
/* الحاوية الأساسية */
.login-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to bottom, #fff9f4, #ff6f00);
}

/* الصور الجانبية */
.side-img {
  position: absolute;
  top: 0;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.9;
}

.left-img {
  left: 0;
}

.right-img {
  right: 0;
    margin-right: -2.5vw;
}

/* المحتوى */
.login-content {
  z-index: 5;
  text-align: center;
  width: 90%;
  max-width: 450px;
}

/* العنوان */
.title {
  color: #ff6f00;
  font-size: 28px;
  margin-bottom: 20px;
}

/* أزرار التبديل */
.switch-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
}

.switch-buttons span {
  color: #6f3f23;
  cursor: pointer;
  font-weight: bold;
  opacity: 0.6;
}

.switch-buttons span.active {
  opacity: 1;
  color: #ff6f00;
  text-decoration: underline;
}

/* الحقل */
.input-group input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.submit-btn {
  margin-top: 15px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #ff6f00;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.submit-btn:active {
  transform: scale(0.95);
}


/* اللوجوهات */
.footer-logos {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 25px;
}

.footer-logos img {
  height: 40px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .side-img {
    opacity: 0.3;
  }
}

@media (max-width: 480px) {
  .side-img {
    display: none;
  }

  .login-content {
    margin-top: 20px;
  }
}
</style>
