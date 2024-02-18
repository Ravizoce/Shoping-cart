<template>
  <q-card class="my-card">
    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
      <div class="absolute-bottom">
        <div class="text-h6">{{ product.name }}</div>
        <div class="flex row content-between justify-around">
          <div class="text-subtitle2">rs: {{ product.price }}</div>
          <div class="text-subtitle2">size: {{ product.size }}</div>
        </div>
      </div>
    </q-img>

    <q-card-actions align='center'>
      <!-- <q-btn align="center" class="btn-fixed-width" color="primary" label="add to card" icon-right="shopping_cart"
        @click="$emit('AddToCart', product.id)" /> -->
      <PrimaryButton color="secondary" label="Add To Cart" icon="add_shopping_cart" @click="Cart.AddProduct(product)" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import PrimaryButton from './PrimaryButton.vue';
import { useCartStore } from 'stores/CartStore'

const Cart = useCartStore();

const prop = defineProps(['product'])

</script>

<style  scoped>
.my-card {
  width: 100%;
  max-width: 250px;
  height: fit-content;
  text-transform: uppercase;
}
</style>
