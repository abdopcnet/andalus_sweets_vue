<template>
  <div class="custom-orders-page">
    <section class="custom-orders-section">
      <div class="page-container">
        <div class="page-header">
          <div class="header-icon">👨‍🍳</div>
          <h1>الطلبات الخاصة</h1>
          <p>لديك مناسبة خاصة؟ نحن هنا لنحضر لك ما تريد بالضبط</p>
        </div>

        <div class="content-grid">
          <div class="features-section">
            <h2>خدماتنا المميزة</h2>
            <div class="feature-card">
              <div class="feature-icon">📦</div>
              <h3>كميات كبيرة</h3>
              <p>نوفر طلبات بكميات كبيرة للمناسبات والحفلات</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">👥</div>
              <h3>مناسبات خاصة</h3>
              <p>أعياد ميلاد، حفلات، مناسبات عائلية</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">✨</div>
              <h3>تصميم خاص</h3>
              <p>حضّر طلبك بالمكونات والطريقة التي تفضلها</p>
            </div>
          </div>

          <div class="form-section">
            <form @submit.prevent="handleCustomOrderSubmit" class="order-form">
              <h2>أرسل طلبك الخاص</h2>
              
              <div class="form-group">
                <label>الاسم</label>
                <input
                  type="text"
                  required
                  v-model="customOrderData.name"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div class="form-group">
                <label>رقم الهاتف</label>
                <input
                  type="tel"
                  required
                  v-model="customOrderData.phone"
                  placeholder="05xxxxxxxx"
                />
              </div>

              <div class="form-group">
                <label>نوع الطلب</label>
                <select required v-model="customOrderData.orderType">
                  <option value="">اختر نوع الطلب</option>
                  <option value="meals">وجبات رئيسية</option>
                  <option value="desserts">حلويات</option>
                  <option value="cakes">كيك وتورتات</option>
                  <option value="mixed">مختلط</option>
                </select>
              </div>

              <div class="form-group">
                <label>الكمية المطلوبة</label>
                <input
                  type="text"
                  required
                  v-model="customOrderData.quantity"
                  placeholder="مثال: 50 شخص"
                />
              </div>

              <div class="form-group">
                <label>تاريخ التسليم</label>
                <input
                  type="date"
                  required
                  v-model="customOrderData.date"
                />
              </div>

              <div class="form-group">
                <label>تفاصيل الطلب</label>
                <textarea
                  required
                  v-model="customOrderData.details"
                  rows="5"
                  placeholder="اكتب تفاصيل طلبك: المكونات، طريقة التحضير، أي ملاحظات خاصة..."
                ></textarea>
              </div>

              <button type="submit" class="submit-button">
                إرسال الطلب 📨
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CustomOrders',
  data() {
    return {
      customOrderData: {
        name: '',
        phone: '',
        orderType: '',
        quantity: '',
        date: '',
        details: ''
      }
    }
  },
  methods: {
    handleCustomOrderSubmit() {
      // هنا ممكن تبعت البيانات للسيرفر
      console.log('Order Data:', this.customOrderData);
      
      // عرض رسالة نجاح
      alert('تم استلام طلبك الخاص! سنتواصل معك قريباً 🎉');
      
      // مسح البيانات من الفورم
      this.customOrderData = {
        name: '',
        phone: '',
        orderType: '',
        quantity: '',
        date: '',
        details: ''
      };
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.custom-orders-page {
  font-family: 'Cairo', 'Segoe UI', sans-serif;
  background: #fafafa;
  min-height: 100vh;
}

/* Custom Orders Section */
.custom-orders-section {
  padding: 80px 20px;
  min-height: calc(100vh - 80px);
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.header-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.page-header h1 {
  font-size: 3rem;
  color: #FF6B35;
  margin-bottom: 15px;
  font-weight: 800;
}

.page-header p {
  font-size: 1.3rem;
  color: #5D4E37;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

/* Features Section */
.features-section h2 {
  font-size: 2rem;
  color: #FF6B35;
  margin-bottom: 30px;
  font-weight: 700;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.feature-card h3 {
  font-size: 1.5rem;
  color: #5D4E37;
  margin-bottom: 10px;
  font-weight: 700;
}

.feature-card p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Forms */
.form-section {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.order-form h2 {
  font-size: 2rem;
  color: #FF6B35;
  margin-bottom: 30px;
  font-weight: 700;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  font-size: 1.1rem;
  color: #5D4E37;
  margin-bottom: 10px;
  font-weight: 600;
  text-align: right;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 15px;
  border: 2px solid #E5E5E5;
  border-radius: 10px;
  font-size: 1.1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  text-align: right;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #FF6B35;
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  width: 100%;
  background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
  color: white;
  padding: 18px;
  border-radius: 15px;
  border: none;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
}

.submit-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.4);
}

/* Responsive */
@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 2.2rem;
  }

  .form-section {
    padding: 25px;
  }
}

@media (max-width: 640px) {
  .custom-orders-section {
    padding: 40px 15px;
  }

  .page-header h1 {
    font-size: 1.8rem;
  }

  .page-header p {
    font-size: 1.1rem;
  }
}
</style>