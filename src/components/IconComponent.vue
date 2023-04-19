<script setup lang="ts">
interface Props {
    iconName: string
}
const props = defineProps<Props>();

</script>

<template>
    <!-- Material Icons -->
    <span class="material-icons-round">{{ iconName }}</span>
</template>