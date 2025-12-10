<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header">
        <h2>اختر موقعك</h2>
        <button @click="$emit('update:visible', false)" class="close-btn">&times;</button>
      </div>

      <div class="modal-body">
        <select v-model="selectedBranch" class="form-control">
          <option value="">اختر الفرع</option>
          <option value="khudraa">فرع الخضراء</option>
          <option value="nawaria">فرع النوارية</option>
          <option value="sharai">فرع الشرائع</option>
          <option value="sitteen">فرع الستين</option>
          <option value="awali">فرع العوالي</option>
        </select>

        <button @click="getCurrentLocation" :disabled="detecting" class="location-btn">
          {{ detecting ? "جاري التحديد..." : "📍 موقعي الحالي" }}
        </button>

        <button @click="confirmLocation" class="confirm-btn">تأكيد</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedBranch: '',
      detecting: false
    }
  },
  methods: {
    getCurrentLocation() {
      this.detecting = true
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log('Location:', position.coords)
            this.detecting = false
            alert('تم الحصول على موقعك')
          },
          (error) => {
            console.error('Error:', error)
            this.detecting = false
            alert('لم نتمكن من الحصول على موقعك')
          }
        )
      }
    },
    confirmLocation() {
      if (this.selectedBranch) {
        localStorage.setItem('userLocation', this.selectedBranch)
        this.$emit('update:visible', false)
        alert('تم اختيار الفرع: ' + this.selectedBranch)
      } else {
        alert('الرجاء اختيار فرع')
      }
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  direction: rtl;
}

.modal-header h2 {
  margin: 0;
  color: #ff6f00;
  font-size: 1.5rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 15px;
  direction: rtl;
}

.form-control {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
}

.location-btn,
.confirm-btn {
  padding: 12px;
  background-color: #ff6f00;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.location-btn:hover:not(:disabled),
.confirm-btn:hover {
  background-color: #e55c00;
}

.location-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
