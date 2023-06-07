<script setup lang="ts">
import Profile from "../../assets/img/people.png";
</script>

<template>
	<nav>
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

