<script setup lang="ts">
import ChartComponent from "./ChartComponent.vue"
</script>

<template>
    <ul class="box-info">
        <li>
            <ChartComponent classChart="chart" percentage="70" />
            <span class="text">
                <h3>1020</h3>
                <p>Vendas Semanais</p>
            </span>
        </li>
        <li>
            <ChartComponent classChart="chart2" percentage="100" />
            <span class="text">
                <h3>2834</h3>
                <p>Vendas Mensais</p>
            </span>
        </li>
        <li>
            <ChartComponent classChart="chart3" percentage="10" />
            <span class="text">
                <h3>$2543</h3>
                <p>Vendas Diárias</p>
            </span>
        </li>
    </ul>
</template>