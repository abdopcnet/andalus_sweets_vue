<template>
	<!-----        Food restaurant page-->
	<section class="hero-section">
		<div class="food-slider">
			<img src="../assets/food15.jpg" alt="طبق الأكل" class="hero-image active" />
			<img src="../assets/food14.jpg" alt="طبق الأكل" class="hero-image" />
			<img src="../assets/food13.jpg" alt="طبق الأكل" class="hero-image" />
			<img src="../assets/food12.jpg" alt="طبق الأكل" class="hero-image" />
		</div>

		<div class="hero-content">
			<h1 class="hero-title">
				مذاق النبلاء .... <br />
				كل وجبة حكاية من التميز
			</h1>

			<a href="#products-section">
				<button class="order-button order-button--fixed">
					اطلب الآن<img src="../assets/Vectorcart.png" alt="" />
				</button>
			</a>
		</div>
	</section>

	<section class="content">
		<section class="parts-section">
			<img src="../assets/bannar1.png" alt="border" class="caption-image" />

			<div class="container">
				<div class="card card-1" @click="selectCategory('مقبلات')">
					<button>مقبلات</button>
				</div>
				<div class="card card-2" @click="selectCategory('لحوم')">
					<button>لحوم</button>
				</div>
				<div class="card card-3" @click="selectCategory('دواجن')">
					<button>دواجن</button>
				</div>
				<div class="card card-4" @click="selectCategory('فطائر')">
					<button>فطائر</button>
				</div>
			</div>
		</section>

		<!-- Category Products Section -->
		<section v-if="selectedCategory" id="products-section" class="category-products-section">
			<div class="category-video-container">
				<video
					:key="selectedCategory"
					class="category-video"
					:src="getCategoryVideo(selectedCategory)"
					autoplay
					loop
					muted
					playsinline
				></video>
			</div>

			<img src="../assets/banner5.png" class="caption-image" />

			<h2 class="category-title">{{ selectedCategory }}</h2>

			<div class="container" id="pruducts-section">
				<div
					class="card"
					v-for="product in filteredProducts"
					:key="product.id"
					:class="`card-${(product.id % 6) + 1}`"
				>
					<div class="card-info">
						<p>{{ product.name }}</p>
						<p>{{ product.price }} ريال</p>
					</div>
					<button @click="addToCart(product)">أضف</button>
				</div>
			</div>

			<router-link to="/food-restaurant">
				<button class="more-btn">عرض المزيد من {{ selectedCategory }}</button>
			</router-link>
		</section>

		<!-- Default Products Section (when no category selected) -->
		<section v-else>
			<img src="../assets/banner5.png" class="caption-image" />
			<div class="container" id="pruducts-section">
				<div
					class="card"
					v-for="product in products.slice(0, 8)"
					:key="product.id"
					:class="`card-${(product.id % 6) + 1}`"
				>
					<div class="card-info">
						<p>{{ product.name }}</p>
						<p>{{ product.price }} ريال</p>
					</div>
					<button @click="addToCart(product)">أضف</button>
				</div>
			</div>

			<router-link to="/food-restaurant">
				<button class="more-btn">عرض المزيد</button>
			</router-link>
		</section>
	</section>
</template>

<script>
import { useCart } from '../store/cart.js';

export default {
	name: 'FoodRestaurant',
	setup() {
		const { addToCart } = useCart();
		return { addToCart };
	},
	data() {
		return {
			selectedCategory: null,
			products: [
				{
					id: 1,
					name: 'أرز دجاج',
					price: 45,
					category: 'دواجن',
					image: '../assets/food1.png',
				},
				{
					id: 2,
					name: 'كبسة لحم',
					price: 55,
					category: 'لحوم',
					image: '../assets/food3.png',
				},
				{
					id: 3,
					name: 'مندي دجاج',
					price: 40,
					category: 'دواجن',
					image: '../assets/food2.jpg',
				},
				{
					id: 4,
					name: 'مظبي لحم',
					price: 60,
					category: 'لحوم',
					image: '../assets/food3.png',
				},
				{
					id: 5,
					name: 'برياني دجاج',
					price: 38,
					category: 'دواجن',
					image: '../assets/food1.png',
				},
				{
					id: 6,
					name: 'مشوي مشكل',
					price: 70,
					category: 'لحوم',
					image: '../assets/food2.jpg',
				},
				{
					id: 7,
					name: 'دجاج مشوي',
					price: 35,
					category: 'دواجن',
					image: '../assets/food3.png',
				},
				{
					id: 8,
					name: 'ريش مشوي',
					price: 65,
					category: 'لحوم',
					image: '../assets/food3.jpg',
				},
				{
					id: 9,
					name: 'حمص باللحمة',
					price: 30,
					category: 'مقبلات',
					image: '../assets/food1.png',
				},
				{
					id: 10,
					name: 'فتوش',
					price: 20,
					category: 'مقبلات',
					image: '../assets/food2.jpg',
				},
				{
					id: 11,
					name: 'متبل',
					price: 15,
					category: 'مقبلات',
					image: '../assets/food3.png',
				},
				{
					id: 12,
					name: 'فطيرة جبن',
					price: 25,
					category: 'فطائر',
					image: '../assets/food1.png',
				},
				{
					id: 13,
					name: 'فطيرة زعتر',
					price: 20,
					category: 'فطائر',
					image: '../assets/food2.jpg',
				},
				{
					id: 14,
					name: 'فطيرة لحم',
					price: 30,
					category: 'فطائر',
					image: '../assets/food3.png',
				},
			],
			categoryVideos: {
				مقبلات: '../assets/food-video1.mp4',
				لحوم: '../assets/food-video2.mp4',
				دواجن: '../assets/food-video3.mp4',
				فطائر: '../assets/food-video4.mp4',
			},
		};
	},
	computed: {
		filteredProducts() {
			if (!this.selectedCategory) return this.products;
			return this.products.filter((p) => p.category === this.selectedCategory);
		},
	},
	methods: {
		selectCategory(category) {
			this.selectedCategory = category;
			this.$nextTick(() => {
				const section = document.getElementById('products-section');
				if (section) {
					section.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			});
		},
		getCategoryVideo(category) {
			return this.categoryVideos[category] || '../assets/chicken.png';
		},
	},
	mounted() {
		// تغيير العنوان في المتصفح
		document.title = 'مذاق النبلاء - اسم مطعمك';

		// Slider animation
		const images = document.querySelectorAll('.hero-image');
		let index = 0;

		setInterval(() => {
			images[index].classList.remove('active');
			index = (index + 1) % images.length;
			images[index].classList.add('active');
		}, 2000);
	},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&display=swap');

/* Layout */
* {
	font-family: 'Aref Ruqaa', serif;
}

/* Hero Section - Desktop */
@media screen and (min-width: 769px) {
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
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.order-button--fixed:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
	}

	.order-button--fixed img {
		width: 24px;
		height: 24px;
	}
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
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease !important;
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

/******************************** Category Products Section *************** */
.category-products-section {
	scroll-margin-top: 20px;
	animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.category-video-container {
	width: 100%;
	height: 30vh;
	overflow: hidden;
	margin: 2rem 0;
	border-radius: 0;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.category-video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.category-title {
	text-align: center;
	font-size: 3em;
	color: #ff6f00;
	margin: 2rem 0;
	font-weight: bold;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 768px) {
	.category-video-container {
		height: 25vh;
		margin: 1.5rem 0;
	}

	.category-title {
		font-size: 2.2em;
		margin: 1.5rem 0;
	}
}

@media screen and (max-width: 480px) {
	.category-video-container {
		height: 20vh;
		margin: 1rem 0;
	}

	.category-title {
		font-size: 1.8em;
		margin: 1rem 0;
	}
}

.more-btn {
	background-color: #fff;
	color: #ff6f00;
	border: none;
	border: #ff6f00 1px solid;
	padding: 0.8rem 2.5rem;
	border-radius: 10px;
	font-size: 1.5em;
	font-weight: bold;
	cursor: pointer;
	align-items: center;
	text-align: center;
	margin: 2rem auto;
	display: block;
	transition: all 0.3s ease;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.more-btn:hover {
	background-color: #ff6f00;
	color: #fff;
	transform: translateY(-3px);
	box-shadow: 0 6px 18px rgba(255, 111, 0, 0.3);
}

/******************************** cards *************** */
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

.container {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
	padding: 2rem;
	direction: rtl;
	margin-bottom: 1.5rem;
	max-width: 1400px;
	margin-left: auto;
	margin-right: auto;
}

.caption-image {
	width: 25vw;
	max-width: 300px;
	height: auto;
	margin: 2rem 0;
}

.card {
	position: relative;
	background-size: cover;
	background-position: center;
	border-radius: 15px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 300px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	cursor: pointer;
	transition: all 0.3s ease;
}

.card:hover {
	transform: translateY(-8px);
	box-shadow: 0 8px 20px rgba(255, 111, 0, 0.3);
}

.card::before {
	content: '';
	position: absolute;
	inset: 0;
	border-radius: inherit;
	background: linear-gradient(
		180deg,
		rgba(255, 111, 0, 0.72) 1%,
		rgb(245, 152, 46) 50%,
		rgba(148, 80, 2, 0.678) 100%
	);
	opacity: 0.35;
	pointer-events: none;
	z-index: 1;
	transition: opacity 0.3s ease;
}

.card:hover::before {
	opacity: 0.5;
}

.card > * {
	position: relative;
	z-index: 2;
}

.card-1 {
	background-image: url('../assets/food1.png');
}
.card-2 {
	background-image: url('../assets/food3.png');
}
.card-3 {
	background-image: url('../assets/food2.jpg');
}
.card-4 {
	background-image: url('../assets/food3.png');
}
.card-5 {
	background-image: url('../assets/food1.png');
}
.card-6 {
	background-image: url('../assets/food2.jpg');
}

.card-info {
	margin-top: 16vh;
}

.card p {
	color: white;
	text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
	font-size: 1.5em;
	font-weight: bold;
}

.card button {
	background: #fff;
	color: #ff6f00;
	border: none;
	padding: 0.6rem 2.2rem;
	border-radius: 8px;
	cursor: pointer;
	margin-top: auto;
	font-size: 1.5em;
	font-weight: bold;
	transition: all 0.3s ease;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.card button:hover,
.card button:focus {
	transform: translateY(-3px);
	background-color: #ff6f00;
	color: #fff;
	box-shadow: 0 4px 12px rgba(255, 111, 0, 0.4);
}

/* Responsive cards */
@media (max-width: 1024px) {
	.container {
		grid-template-columns: repeat(3, 1fr);
		gap: 1.2rem;
		padding: 1.5rem;
	}

	.card {
		min-height: 250px;
	}

	.caption-image {
		width: 35vw;
	}
}

@media (max-width: 768px) {
	.container {
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		padding: 1rem;
	}

	.card {
		min-height: 220px;
	}

	.card-info {
		margin-top: 10vh;
	}

	.card p {
		font-size: 1.2em;
	}

	.card button {
		font-size: 1.2em;
		padding: 0.4rem 1.5rem;
	}

	.caption-image {
		width: 50vw;
		max-width: 250px;
	}

	.more-btn {
		font-size: 1.3em;
		padding: 0.7rem 2rem;
	}
}

@media (max-width: 480px) {
	.container {
		grid-template-columns: 1fr;
		gap: 1rem;
		padding: 1rem;
	}

	.card {
		min-height: 200px;
		max-width: 400px;
		margin: 0 auto;
	}

	.card-info {
		margin-top: 8vh;
	}

	.caption-image {
		width: 60vw;
	}

	.more-btn {
		font-size: 1.2em;
		padding: 0.6rem 1.8rem;
	}
}

/**********************************parts-section******************************** */
.parts-section {
	height: auto;
	min-height: 60vh;
	margin-top: 5vh;
	margin-bottom: 5vh;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

@media (max-width: 768px) {
	.parts-section {
		min-height: 40vh;
		margin-top: 3vh;
	}
}
</style>
