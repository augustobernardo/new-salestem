<script setup lang="ts">
import IconComponent from '../IconComponent.vue';
</script>

<template>
	<a href="#" class="brand">
		<!-- <span class="material-icons-round">
			store
		</span> -->
		<IconComponent iconName="store" />
		<span class="text">SALESTEM</span>
	</a>
	<ul class="side-menu top">
		<li class="active">
			<a href="#">
				<!-- <span class="material-icons-round">
					dashboard
				</span> -->
				<IconComponent iconName="dashboard" />
				<span class="text">Dashboard</span>
			</a>
		</li>
		<li>
			<a href="#">
				<!-- <span class="material-icons-round">
					receipt_long
				</span> -->
				<IconComponent iconName="receipt_long" />
				<span class="text">Vendas</span>
			</a>
		</li>
		<li>
			<a href="#">
				<!-- <span class="material-icons-round">
					inbox
				</span> -->
				<ItemComponent iconName="inbox" />
				<span class="text">Meus Produtos</span>
			</a>
		</li>
		<li>
			<a href="#">
				<!-- <span class="material-icons-round">
					people
				</span> -->
				<IconComponent iconName="people" />
				<span class="text">Clientes</span>
			</a>
		</li>
		<li>
			<a href="#">
				<!-- <span class="material-icons-round">
					donut_large
				</span> -->
				<IconComponent iconName="donut_large" />
				<span class="text">Gráficos</span>
			</a>
		</li>
	</ul>
	<ul class="side-menu">
		<li>
			<a href="#" class="logout">
				<!-- <span class="material-icons-round">
					logout
				</span> -->
				<IconComponent iconName="logout" />
				<span class="text">Logout</span>
			</a>
		</li>
	</ul>
</template>
