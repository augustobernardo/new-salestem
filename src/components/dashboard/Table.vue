<script setup lang="ts">
import Todo from './Todo.vue';

</script>


<template>
    <div class="table-data">
        <div class="order">
            <div class="head">
                <h3>Recent Orders</h3>
                <!-- <i class='bx bx-search'></i>
                <i class='bx bx-filter'></i> -->
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Data da Compra</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>John Doe</p>
                        </td>
                        <td>01-10-2021</td>
                       
                    </tr>
                    <tr>
                        <td>
                            <p>John Doe</p>
                        </td>
                        <td>01-10-2021</td>
                    </tr>
                    <tr>
                        <td>
                            <p>John Doe</p>
                        </td>
                        <td>01-10-2021</td>
                    </tr>
                    <tr>
                        <td>
                            <p>John Doe</p>
                        </td>
                        <td>01-10-2021</td>
                    </tr>
                    <tr>
                        <td>
                            <p>John Doe</p>
                        </td>
                        <td>01-10-2021</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Todo />
    </div>
</template>