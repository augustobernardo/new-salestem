<script setup lang="ts">
import IconComponent from '../IconComponent.vue';
import { useAuth } from '../../store/authStore';
import Profile from "../../assets/img/people.png"

const { logout, getUsername } = useAuth();

const username = getUsername();

const routeSales = `${username}/vendas}`;

function userLogout() {
	logout();
}

const props = defineProps({
    section: {
        type: Boolean,
        required: true
    }
});

</script>

<template>

    <!-- true - SIDEBAR -->
    <div v-if="props.section">
        <a href="#" class="brand">
            <IconComponent iconName="store" />
            <span class="text">SALESTEM</span>
        </a>
        <ul class="side-menu top">
            <li class="active">
                <router-link :to="routeSales">
                    <IconComponent iconName="dashboard" />
                    <span class="text">Dashboard</span>
                </router-link>
            </li>
            <li>
                <router-link to="/vendas">
                    <IconComponent iconName="receipt_long" />
                    <span class="text">Vendas</span>
                </router-link>
            </li>
            <li>
                <router-link to="/home/products">
                    <IconComponent iconName="inbox" />
                    <span class="text">Meus Produtos</span>
                </router-link>
            </li>
            <li>
                <a href="#">
                    <IconComponent iconName="people" />
                    <span class="text">Clientes</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <IconComponent iconName="donut_large" />
                    <span class="text">Gráficos</span>
                </a>
            </li>
        </ul>
        <ul class="side-menu">
            <li>
                <a href="/" v-on:click="userLogout()" class="logout">
                    <IconComponent iconName="logout" />
                    <span class="text">Logout</span>
                </a>
            </li>
        </ul>
    </div>

    <!-- false - NAVBAR -->
    <nav v-else>
		<i class='bx bx-menu'></i>
		
		<!-- DISPLAY NONE -->
		<form action="#">
			<div class="form-input">
				<input type="search" placeholder="Search...">
				<button type="submit" class="search-btn"><i class='bx bx-search'></i></button>
			</div>
		</form>
		<!-- END DISPLAY NONE -->

		<input type="checkbox" id="switch-mode" hidden>
		<label for="switch-mode" class="switch-mode"></label>
		<a href="#" class="profile">
			<img :src="Profile">
		</a>
	</nav>

</template>