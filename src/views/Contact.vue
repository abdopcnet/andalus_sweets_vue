<template>
  <div class="contact-page">    
    <!-- Contact Page -->
    <section class="contact-section">
      <div class="page-container">
        <div class="page-header">
        
          <h1>اتصل بنا</h1>
          <p>نحن دائماً في خدمتك، تواصل معنا الآن</p>
        </div>

        <div class="contact-grid">
          <div class="contact-info">
            <h2>معلومات التواصل</h2>
            <div class="info-card">
              <div class="info-icon"><img src="../assets/whatsapp.png" style="height: 4vh;"></div>
              <div class="info-content">
                <h3>الهاتف</h3>
                <p dir="ltr">+966 50 123 4567</p>
                <p dir="ltr">+966 55 987 6543</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">✉️</div>
              <div class="info-content">
                <h3>البريد الإلكتروني</h3>
                <p>info@alandalus.com</p>
                <p>orders@alandalus.com</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">📍</div>
              <div class="info-content">
                <h3>العنوان</h3>
                <p>شارع الملك فهد، حي السليمانية</p>
                <p>الرياض، المملكة العربية السعودية</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">🕐</div>
              <div class="info-content">
                <h3>ساعات العمل</h3>
                <p>السبت - الخميس: 8 صباحاً - 11 مساءً</p>
                <p>الجمعة: 12 ظهراً - 11 مساءً</p>
              </div>
            </div>

            <div class="social-links">
              <h3>تابعنا على</h3>
              <div class="social-icons">
                <a href="#" class="social-icon"><img src="../assets/facebook-app.png" alt=""></a>
                <a href="#" class="social-icon"><img src="../assets/instagram.png" alt=""></a>
                <a href="#" class="social-icon"><img src="../assets/youtube.png" alt=""></a>
                <a href="#" class="social-icon"><img src="../assets/whatsappicon.png" alt=""></a>
              </div>
            </div>
          </div>

          <div class="contact-form-section">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <h2>أرسل لنا رسالة</h2>
              
              <div class="form-group">
                <label>الاسم</label>
                <input 
                  type="text" 
                  v-model="formData.name"
                  required 
                  placeholder="أدخل اسمك الكامل"
                >
              </div>

              <div class="form-group">
                <label>رقم الهاتف</label>
                <input 
                  type="tel" 
                  v-model="formData.phone"
                  required 
                  placeholder="05xxxxxxxx"
                >
              </div>

              <div class="form-group">
                <label>البريد الإلكتروني</label>
                <input 
                  type="email" 
                  v-model="formData.email"
                  required 
                  placeholder="example@email.com"
                >
              </div>

              <div class="form-group">
                <label>الرسالة</label>
                <textarea 
                  v-model="formData.message"
                  required 
                  rows="6" 
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button type="submit" class="submit-button">
                إرسال الرسالة 
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
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // هنا ممكن تبعت البيانات للسيرفر
      console.log('Form Data:', this.formData);
      
      // عرض رسالة نجاح
      alert('شكراً لتواصلك معنا! سنرد عليك قريباً 💚');
      
      // مسح البيانات من الفورم
      this.formData = {
        name: '',
        phone: '',
        email: '',
        message: ''
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
font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
}

.contact-page {
  font-family: 'Cairo', 'Segoe UI', sans-serif;
  background: #fafafa;
  min-height: 90vh;
}
/* Contact Page */
.contact-section {
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
  font-size: 2rem;
  color: #ff6f00;
  margin-bottom: 15px;
  font-weight: 800;
}

.page-header p {
  font-size: 1.3rem;
  color: #5D4E37;
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

/* Contact Info */
.contact-info h2 {
  font-size: 1.5rem;
  color: #ff6f00;
  margin-bottom: 30px;
  font-weight: 700;
}

.info-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  align-items: start;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
}

.info-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.info-content h3 {
  font-size: 16px;
  color: #5D4E37;
  margin-bottom: 8px;
  font-weight: 700;
}

.info-content p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 5px 0;
}

/* Social Links */
.social-links {
  margin-top: 40px;
  text-align: center;
}

.social-links h3 {
  font-size: 1.5rem;
  color: #5D4E37;
  margin-bottom: 20px;
  font-weight: 700;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}
.social-icons img{
  width: 30px;
  height: 30px;
}
.social-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff6f00 0%, #FF8C42 100%);
  color: white;
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(255, 107, 53, 0.3);
}

.social-icon:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
}

/* Contact Form */
.contact-form-section {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  font-size: 1.5rem;
  color: #ff6f00;
  margin-bottom: 30px;
  font-weight: 700;
}

.form-group {
  margin-bottom: 20px;
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
.form-group textarea {
  width: 100%;
  height: 50px;
  padding: 12px;
  border: 2px solid #E5E5E5;
  border-radius: 10px;
  font-size:14px;
  font-family: inherit;
  transition: all 0.3s ease;
  text-align: right;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ff6f00;
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-button {
  width: 100%;
  background: linear-gradient(135deg, #ff6f00 0%, #FF8C42 100%);
  color: white;
  padding: 18px;
  border-radius: 15px;
  border: none;
  font-size:14px;
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
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 2.2rem;
  }

  .contact-form-section {
    padding: 25px;
  }

  .nav-container {
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 640px) {
  .contact-section {
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