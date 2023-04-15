<script setup lang="ts">
import { onMounted } from "vue";
import ApexCharts from "apexcharts";
// import Chart from 'chart.js/auto';



onMounted(() => {
    var options = {
        chart: {
            height: 150,
            width: 150,
            type: 'radialBar',
        },
        series: [70],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: "70%"
                },

                dataLabels: {
                    showOn: "always",
                    // name: {
                    //     offsetY: -10,
                    //     show: true,
                    //     color: "#888",
                    //     // fontSize: "13px"
                    // },
                    // value: {
                    //     color: "#111",
                    //     fontSize: "15px",
                    //     show: true
                    // }
                },


            }
        },

        stroke: {
            lineCap: "round",
        },
        labels: ['Vendas'],

    }

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
})

</script>


<template>
    <ul class="box-info">
        <li>
            <!-- <i class='bx bxs-calendar-check'></i> -->
            <div class="bx-custom ">
                <div id="chart"></div>
                <!-- <div class="canvas"></div> -->
            </div>
            <span class="text">
                <h3>1020</h3>
                <p>Vendas</p>
                <p>Mensais</p>
            </span>
        </li>
        <li>
            <i class='bx bxs-group'></i>
            <span class="text">
                <h3>2834</h3>
                <p>Visitors</p>
            </span>
        </li>
        <li>
            <i class='bx bxs-dollar-circle'></i>
            <span class="text">
                <h3>$2543</h3>
                <p>Total Sales</p>
            </span>
        </li>
    </ul>
</template>