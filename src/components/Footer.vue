<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- القسم الأول: معلومات عن المطعم -->
      <div class="footer-section about">
        <h3>عن حلويات الأندلس</h3>
        <p>
          نقدم لك أشهى الحلويات الشرقية والغربية، وألذ الأكلات البيتية، مع إمكانية تنفيذ طلبات خاصة تُحضّر بحب وجودة عالية.
        </p> 
        <h3>منتجاتنا   </h3>
         <ul>
              <li>حلويات غربية  </li>
              <li>حلويات شرقية </li>
               <li>مأكولات بأنواعها</li>
              <li> طلبات خاصة للحفلات</li>
          </ul>
      </div>

      <div class="footer-section branches-map">
        <h3> فروعنا - المملكة العربية السعودية</h3>
       <div class="branch-item">
            <h4>فرع الخضراء - حي الخضراء، مكة المكرمة</h4>
            <p><i class="fas fa-map-marker-alt"></i> +966566956412</p>
          </div>
           <div class="branch-item">  
            <h4>فرع العوالي - Ibrahim Al Joufaili, مكة 24372</h4>
             <p><i class="fas fa-map-marker-alt"></i>+966125666555 </p>
          </div>
           <div class="branch-item">
            <h4>فرع الشرائع - 8144 المهندس عمر قاضي، الخضراء، مكة </h4>
             <p><i class="fas fa-map-marker-alt"></i> +966125666555</p>
          </div>
          <div class="branch-item">
           <h4>فرع النوارية -العمرة الجديدة، مكة 24416</h4>
            <p><i class="fas fa-map-marker-alt"></i> +966566756481</p>
         </div>
         <div class="branch-item">
           <h4>فرع الستين -  7730 قصر الضيافة، الزهراء، مكة 24225</h4>
            <p><i class="fas fa-map-marker-alt"></i> +966566956895</p>
         </div>
       </div>

       <!-- القسم الثالث: فروعنا مع الخريطة -->
       <div class="footer-section branches-map">
         <h3>موقعنا</h3>
         
         <div class="branches-list">
 
         <!-- الخريطة -->
         <div class="map-box">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.6688259916573!2d39.91637687496799!3d21.473513080232166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c2011b1f773495%3A0x3b4a7e175a5a9267!2z2K3ZhNmI2YrYp9iqINin2YTYo9mG2K_ZhNizIC0g2YHYsdi5INin2YTYrtiu2LHYp9ih!5e0!3m2!1sar!2seg!4v1700000000000"
             width="100%" 
             height="100%" 
             style="border:0;" 
             allowfullscreen="" 
             loading="lazy"
             referrerpolicy="no-referrer-when-downgrade">
           </iframe>
         </div>
       </div>
     </div>
      </div>
      

    <div class="footer-bottom">
      <p>{{ new Date().getFullYear() }} © جميع الحقوق محفوظة - حلويات الأندلس</p>
    </div>
  </footer>
</template>

<script setup>
defineOptions({ name: 'AppFooter' })
</script>

<style scoped>

.footer {
  background-color: #ff6f00;
  color: white;
  padding: 40px 20px 20px;
  text-align: center;
  direction: rtl;
  font-family: 'Aref Ruqaa', serif;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 30px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.footer-section {
  text-align: right;
  padding: 0 15px;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  border-bottom: 3px solid #fff;
  display: inline-block;
  padding-bottom: 8px;
}

.footer-section p {
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 12px 0;
}

.footer-section i {
  margin-left: 10px;
  color: #fffbe5;
  font-size: 1.1rem;
}

/* قسم الفروع والخريطة */
.branches-map {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.branches-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.branch-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 10px;
  transition: transform 0.3s ease, background 0.3s ease;
}

.branch-item:hover {
  transform: translateX(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.branch-item h4 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #fffbe5;
}

.branch-item p {
  font-size: 1rem;
  margin: 0;
}

/* الخريطة */
.map-box {
  width: 100%;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
}

.footer-bottom {
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  padding-top: 20px;
  margin-top: 20px;
  font-size: 1.05rem;
}

/* ===== Responsive Design ===== */

/* Desktop Large */
@media (min-width: 1200px) {
  .footer-container {
    grid-template-columns: 1fr 1fr 1.2fr;
  }
  
  .map-box {
    height: 280px;
  }
}

/* Tablets (768px - 1024px) */
@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .footer-section h3 {
    font-size: 1.3rem;
  }

  .map-box {
    height: 230px;
  }
}

/* Mobile (481px - 768px) */
@media (max-width: 768px) {
  .footer {
    padding: 30px 15px 15px;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-section {
    text-align: center;
  }

  .footer-section h3 {
    font-size: 1.2rem;
  }

  .footer-section p {
    font-size: 0.95rem;
  }

  .branch-item {
    padding: 12px;
  }

  .branch-item:hover {
    transform: translateY(-3px);
  }

  .map-box {
    height: 220px;
    border-radius: 10px;
  }
}

/* Small Mobile (up to 480px) */
@media (max-width: 480px) {
  .footer {
    padding: 25px 10px 15px;
  }

  .footer-container {
    gap: 25px;
  }

  .footer-section h3 {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }

  .footer-section p {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .footer-section i {
    font-size: 1rem;
    margin-left: 6px;
  }

  .branch-item {
    padding: 10px;
  }

  .branch-item h4 {
    font-size: 1.05rem;
  }

  .map-box {
    height: 200px;
    border-radius: 8px;
  }

  .footer-bottom {
    font-size: 0.85rem;
    padding-top: 15px;
  }
}

/* Very Small Screens (up to 360px) */
@media (max-width: 360px) {
  .footer-section h3 {
    font-size: 1rem;
  }

  .footer-section p {
    font-size: 0.85rem;
  }

  .branch-item h4 {
    font-size: 0.95rem;
  }

  .branch-item p {
    font-size: 0.85rem;
  }

  .map-box {
    height: 180px;
  }

  .footer-bottom {
    font-size: 0.8rem;
  }
}
</style>
