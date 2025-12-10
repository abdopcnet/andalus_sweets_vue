<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import LocationModal from './components/LocationModal.vue'
</script>

<template>
  <LocationModal />
  <NavBar />
  <router-view />
  <Footer />
</template>
<style>
/* Custom Scrollbar - Webkit Browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 12px; /* عرض الـ scrollbar */
}

::-webkit-scrollbar-track {
  background: #fff; /* لون الخلفية (أبيض) */
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ff6f00 0%, #ff8c00 100%); /* لون برتقالي متدرج */
  border-radius: 10px;
  border: 2px solid #fff; /* إطار أبيض حوالين الـ thumb */
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #ff8c00 0%, #ffa500 100%); /* لون أفتح عند الـ hover */
}

::-webkit-scrollbar-thumb:active {
  background: #d96c00; /* لون غامق عند الضغط */
}

/* Custom Scrollbar - Firefox */
* {
  scrollbar-width: thin; /* رفيع أو auto */
  scrollbar-color: #ff6f00 #fff; /* لون الـ thumb ولون الـ track */
}

/* لو عايزة الـ scrollbar يبقى أعرض شوية على الموبايل */
@media (max-width: 768px) {
  ::-webkit-scrollbar {
    width: 8px;
  }
}
</style>