<style scoped>
.my-card {
  display: flex;
  width: auto;
  background: rgb(211, 126, 126);
}

.image {
  width: 10%;
  height: 10%;
}

.product_body {
  display: flex;
  flex-direction: column;
}

.ACtions {
  padding: 5px;
}

.ACtions .btn_one {
  margin: 5px;
}

.product_body .product_details .descreption {
  display: flex;
  direction: row;
}

.product_body .product_details .descreption .price {
  margin-right: 10px;
}
</style>

<template>
  <div class="my-card">
    <div class="image">
      <img src="src/assets/quasar-logo-vertical.svg" alt="Popto of card">
    </div>
    <div class="product_body">
      <div class="product_details">
        <div class="title">{{ product.product.name }}</div>
        <div class="descreption">
          <div class="price">RS: {{ product.product.price }}</div>
          <div class="size">Size {{ product.product.size }}</div>
        </div>
      </div>
      <div class="ACtions">
        <PrimaryButton class="btn_one" color="secondary" label="" icon="remove"
          @click="CartStore.RemoveProduct(product)" />
        <PrimaryButton color="primary" icon="add" @click="CartStore.AddProduct(product)" />
      </div>
    </div>
  </div>
</template>
<script setup>
import PrimaryButton from './PrimaryButton.vue';
import { useCartStore } from 'src/stores/CartStore';

const CartStore = useCartStore();
const prop = defineProps(['product'])
</script>
