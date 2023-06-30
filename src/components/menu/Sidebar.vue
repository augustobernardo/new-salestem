<script setup lang="ts">
import IconComponent from '../IconComponent.vue';
import { useAuth } from '../../store/authStore';

const { logout } = useAuth();

function userLogout() {
	logout();
}
</script>

<template>
	<RouterLink to="/dashboard" class="brand">
		<IconComponent iconName="store" />
		<span class="text">SALESTEM</span>
	</RouterLink>

	<ul class="side-menu top">
		<li v-for="item in menuItems" :key="item.id" :class="{ active: activeMenu === item.id }">
			<Router-link :to="`/${item.name.toLowerCase()}`">
				<IconComponent v-if="item.name == 'Dashboard'" iconName="dashboard" />
				<IconComponent v-if="item.name == 'Vendas'" iconName="receipt_long" />
				<IconComponent v-if="item.name == 'Produtos'" iconName="inbox" />
				<IconComponent v-if="item.name == 'Clientes'" iconName="people" />
				<span class="text">{{ item.name }}</span>
			</Router-link>
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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    activeMenu: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      menuItems: [
        { id: 1, name: 'Dashboard' },
        { id: 2, name: 'Vendas' },
        { id: 3, name: 'Produtos' },
        { id: 4, name: 'Clientes' }
      ] as MenuItem[]
    };
  }
});

interface MenuItem {
  id: number;
  name: string;
}
</script>
