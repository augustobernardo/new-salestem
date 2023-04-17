<script setup lang="ts">
import ChartComponent from "./ChartComponent.vue"
</script>

<template>
    <ul class="box-info">
        <li>
            <ChartComponent classChart="chart3" percentage="10" />
            <span class="text">
                <h3>R$ 2543,47</h3>
                <p>Vendas de hoje</p>
            </span>
        </li>
        <li>
            <ChartComponent classChart="chart" percentage="70" />
            <span class="text">
                <h3>R$ 1020.90</h3>
                <p>Vendas da última semana</p>
            </span>
        </li>
        <li>
            <ChartComponent classChart="chart2" percentage="100" />
            <span class="text">
                <h3>R$ 2834,00</h3>
                <p>Vendas do último mês</p>
            </span>
        </li>
    </ul>
</template>