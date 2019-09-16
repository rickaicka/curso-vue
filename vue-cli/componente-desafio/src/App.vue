<template>
	<v-app>
		<app-sidebar></app-sidebar>
		<app-toolbar></app-toolbar>
		<v-content>
			<app-carousel></app-carousel>
		</v-content>
		<app-footer></app-footer>
	</v-app>
</template>

<script>

import Sidebar from './Sidebar.vue'
import Toolbar from './Toolbar.vue'
import Carousel from './Carousel.vue'
import Footer from './Footer.vue'
export default {

	components: {
		'app-sidebar': Sidebar,
		'app-toolbar': Toolbar,
		'app-carousel': Carousel,
		'app-footer': Footer
	}
}
</script>
