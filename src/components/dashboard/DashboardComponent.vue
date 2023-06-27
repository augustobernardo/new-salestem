<script setup lang="ts">
import Table from './Table.vue';
import Cards from './Cards.vue';
</script>

<template>
    <main>
        <div class="head-title">
            <div class="left">
                <h1>Dashboard</h1>
                <!-- <ul class="breadcrumb">
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <span class="material-icons-round">
                            chevron_right
                        </span>
                        </li>
                        <li>
                    <a class="active" href="#">Home</a>
                </li>
            </ul> -->
            </div>
            <!-- <a href="#" class="btn-download">
                        <i class='bx bxs-cloud-download'></i>
                        <span class="text">Download PDF</span>
            </a> -->
        </div>

        <Cards />
        <Table />
    </main>
</template>
