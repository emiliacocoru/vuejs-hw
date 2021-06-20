<template>
    <div class="cart">
        <slot name="header"></slot>
        <div>
         <span>Products in your cart:</span>
            <div v-for="(item, index) in items" :key="index">
                {{ item.name }} - {{ item.price }}
            </div>
        </div>  
         <div>You have {{ nrProducts }} products. Total price: {{ totalPrice }}$</div>
    </div>
</template>

<script>
    export default {
        name: 'Cart',
        props: {
            items: {
                type: Array,
                default: () => []
            },
        },
        computed: {
            nrSongs() {
                return this.items.length;
            },
            totalPrice() {
                return this.items.reduce((a, b) => a + b.price, 0);
            }
        }
    }
</script>

<style scoped>
</style>
