<template>
  <q-page class="flex justify-end">
    <div class="q-mt-lg q-mr-xl">
      <!-- <q-btn color="primary" icon-right="mail" label="Go To Cart" /> -->
      <PrimaryButton :to="{ name: 'cart' }" label="Go To Cart" color="primary" icon="shopping_cart" />
    </div>
    <div class="flex">
      <ShopingCart class="q-ma-md" v-for="product in Cart.ProductList" :key="product.id" :product="product" />
    </div>
  </q-page>
</template>

<script setup>
import ShopingCart from 'src/components/ShopingCart.vue';
import PrimaryButton from 'src/components/PrimaryButton.vue';
import { useCartStore } from '../stores/CartStore'
import { ref } from 'vue';

const Cart = useCartStore();

// var Cart = ref([]);

// const ProductList = [
//   {
//     id: 1,
//     name: "t-shirt",
//     price: 300,
//     size: 'XL',
//   },
//   {
//     id: 2,
//     name: "t-shirt",
//     price: 300,
//     size: 'XL',
//   },
//   {
//     id: 3,
//     name: "t-shirt",
//     price: 300,
//     size: 'XL',
//   },
//   {
//     id: 4,
//     name: "t-shirt",
//     price: 300,
//     size: 'XL',
//   },
//   {
//     id: 5,
//     name: "t-shirt",
//     price: 300,
//     size: 'XL',
//   },
//   {
//     id: 6,
//     name: "t-shirt",
//     price: 300,
//     size: 'XL',
//   },
// ]

// var InCart =ref({
//   id:1,
//   Amount:2,
// });

</script>
