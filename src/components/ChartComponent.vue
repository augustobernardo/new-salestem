<script setup lang="ts">
import { onMounted } from "vue";
import ApexCharts from "apexcharts";
interface Props {
    classChart: string,
    percentage: string
}
const props = defineProps<Props>();

onMounted(() => {
    var options = {
        chart: {
            height: 150,
            width: 150,
            type: 'radialBar',
        },
        series: [props.percentage],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 16,
                    size: "60%",
                },
                dataLabels: {
                    showOn: "always",
                    name: {
                        offsetY: 5,
                        show: true,
                        color: "var(--chart-color)",
                        fontSize: "17px"
                    },
                    value: {
                        show: false
                    }
                },
            }
        },
        stroke: {
            lineCap: "round",

        },
        labels: [props.percentage + "%"],
    }
    var chart = new ApexCharts(document.querySelector(`#${props.classChart}`), options);
    chart.render();
})
</script>

<template>
    <div class="bx-custom">
        <div :id="`${props.classChart}`"></div>
    </div>
</template>