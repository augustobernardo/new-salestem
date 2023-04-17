<script setup lang="ts">
import { onMounted } from "vue";
import ApexCharts from "apexcharts";
interface Props {
    classChart: string,
    percentage: string
}
const props = defineProps<Props>();

// const percentageColor = () => {
//     const percent = parseInt(props.percentage);

//     if (percent < 50) {
//         return "#ff7675"
//     } else if (percent < 80) {
//         return "#fdcb6e"
//     } else {
//         return "#55efc4"
//     }
// }


onMounted(() => {
    // const fillColor = percentageColor();

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
                track: {
                    background: "var(--chart-bg)",
                    strokeWidth: '100%',
                    // margin: 16, // margin is in pixels
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
                // fill: {
                //     colors: [fillColor]
                // },
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