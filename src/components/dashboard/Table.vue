<script setup lang="ts">
import Todo from './Todo.vue';

interface Items {
    id: number;
    name: string;
    date: string;
}

const menuItems: Items[] = [
    { id: 1, name: 'John Doe', date: '01-10-2021' },
    { id: 2, name: 'John Doe', date: '01-10-2021' },
    { id: 3, name: 'John Doe', date: '01-10-2021' },
    { id: 4, name: 'John Doe', date: '01-10-2021' }
];
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
                        <th>User</th>
                        <th>Date Order</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in menuItems" :key="item.id">
                        <td>
                            <p>{{ item.name }}</p>
                        </td>
                        <td>{{ item.date  }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Todo />
    </div>
</template>