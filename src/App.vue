<template>
    <div id="navbar">
        <div class="page_nav_buttons_container">
            <RouterLink v-for="(dict, name) in navPages" :key="name" :to="dict.route" style="text-decoration: none;" @click="currentPage = name">
                <div class="page_nav_buttons" :title="name" :style="`${currentPage == name ? 'border: 1px solid #fffa;' : ''}`">
                    <span class="material-icons" style="height: 1.2em;">{{ dict.icon }}</span>
                    <span>{{name}}</span>
                </div>
            </RouterLink>
        </div>
    </div>
    <router-view />
</template>




<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'App',
	components: {
	},
	data() {
        return {
            currentPage: 'DashBoard',
            navPages: {
                "DashBoard": {"icon": "dashboard", "route": "/"},
                "Settings": {"icon": "settings", "route": "/settings"},
            }
		}
    },
})
</script>




<style>
@import url('../public/root.css');
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #fff;
    height: 100vh;
    margin-top: var(--navbar_height);
}
#navbar {
    position: fixed;
	z-index: 500;
	top: 0px;
	right: 0px;
	left: 0px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	height: var(--navbar_height);
	font-family: 'Lato';
	font-size: 0.9em;
    color: white;
	background-color: #a30202;
    gap: 25px;
}

.page_nav_buttons_container{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: var(--navbar_height);
    gap: 30px;
    margin-left: 25px;
}

.page_nav_buttons{
    display: flex;
    cursor: pointer;
    font-size: 1.2rem;
    user-select: none;
    padding: 5px 10px;
    border: 1px solid #0002;
    border-radius: 8px;
    color: white;
}

.page_nav_buttons:hover{
    border: 1px solid #000a;
}

.pageHome{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
    min-width: 1438px;
    overflow-y: auto;
    overflow-x: hidden;
}

p{
    margin: 0px;
}
</style>
