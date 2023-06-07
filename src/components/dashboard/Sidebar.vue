<script setup lang="ts">
import IconComponent from '../IconComponent.vue';
import { useAuth } from '../../store/authStore';

const { logout } = useAuth();

function userLogout() {
	logout();
}
</script>

<template>
	<a href="#" class="brand">
		<IconComponent iconName="store" />
		<span class="text">SALESTEM</span>
	</a>
	<ul class="side-menu top">
		<li class="active">
			<a href="#">
				<IconComponent iconName="dashboard" />
				<span class="text">Dashboard</span>
			</a>
		</li>
		<li>
			<a href="#">
				<IconComponent iconName="receipt_long" />
				<span class="text">Vendas</span>
			</a>
		</li>
		<li>
			<a href="#">
				<IconComponent iconName="inbox" />
				<span class="text">Meus Produtos</span>
			</a>
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
</template>
