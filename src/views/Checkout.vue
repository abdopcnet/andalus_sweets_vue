<template>
  <p class="login-link">عميل سابق؟ <router-link to="/Login">انقر هنا لتسجيل الدخول </router-link></p>
  <div class="checkout-container">
    
    <!-- Invoice Section -->
    <div class="invoice-card">
      <h3>تفاصيل الفاتورة</h3>
      
      <div class="input-group">
        <label>الاسم *</label>
        <input type="text" />
      </div>

      <div class="input-group">
        <label>عنوان الشارع *</label>
        <input type="text" />
      </div>

      <div class="row">
        <div class="input-group half">
          <label>المدينة *</label>
          <input type="text" />
        </div>

        <div class="input-group half">
          <label>المنطقة *</label>
          <input type="text" />
        </div>
      </div>

      <div class="input-group">
        <label>رقم الهاتف *</label>
        <input type="text" />
      </div>

      <div class="input-group">
        <label>البريد الإلكتروني *</label>
        <input type="email" />
      </div>

      <div class="input-group">
        <label>ملاحظات الطلب</label>
        <textarea rows="3"></textarea>
      </div>
    </div>
<!-- Payment Section -->
<div class="payment-card">
  <h3>طريقة الدفع</h3>

  <div class="section-title">
    <span>بطاقات الائتمان الخاصة بك</span>
    <button class="add-btn">+</button>
  </div>

  <div class="input-group">
    <label>رقم البطاقة</label>
    <input type="text" placeholder="•••• •••• •••• ••••" />
  </div>

  <div class="input-group">
    <label>الإسم على البطاقة</label>
    <input type="text" placeholder="الاسم" />
  </div>

  <div class="row">
    <div class="input-group half">
      <label>تاريخ الإنتهاء</label>
      <input type="text" placeholder="MM/YY" />
    </div>

    <div class="input-group half">
      <label>CVV</label>
      <input type="text" placeholder="000" />
    </div>
  </div>

  <button class="add-card-btn">+ أضف بطاقتك</button>

 <div class="checkbox">
  <input type="checkbox" id="cod" />
  <label for="cod">الدفع عند الاستلام</label>
</div>

  <button class="submit-btn">إتمام الطلب</button>
</div>
  </div>
</template>

<style scoped>
/* Layout */
.checkout-container {
  margin: 1vw 3vw;
  display: flex;
  gap: 25px;
  padding: 20px;
  direction: rtl;
}

.payment-card,
.invoice-card {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  border:1px #ff8c32 solid;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.171);
  width: 50%;
}
.login-link{
  text-align: end;
  margin: 1vw 5vw;
}
/* Titles */
h3 {
  margin-bottom: 15px;
  font-size: 20px;
}

/* Inputs */
.input-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 14px;
  margin-bottom: 5px;
}

input,
textarea {
  border: 1px solid #ff8c32;
  padding: 10px;
  border-radius: 8px !important;   /* خليته إلزامي */
  outline: none;
  width: 100%;
  box-sizing: border-box;
}

/* Two column row */
.row {
  display: flex;
  gap: 15px;
}

.half {
  width: 50%;
}

/* Buttons */
.submit-btn {
  width: 100%;
  background: #ff8c32;
  color: white;
  padding: 12px;
  border-radius: 8px;
  margin-top: 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.add-btn {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #ff8c32;
}

.section-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.add-card-btn {
  color: #ff8c32;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
}

.checkbox input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #ff8c32; /* يخلي لون الصح */
  cursor: pointer;
}

.checkbox label {
  font-size: 14px;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 900px) {
  .checkout-container {
    flex-direction: column;
  }

  .payment-card,
  .invoice-card {
    width: 100%;
  }
}

@media (max-width: 500px) {
  input,
  textarea {
    font-size: 13px;
  }

  .row {
    flex-direction: column;
  }

  .half {
    width: 100%;
  }
}
</style>
<script setup>
defineOptions({ name: 'CheckoutView' })
</script>
