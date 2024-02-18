<style scoped>
.cart_main {
  display: flex;
  direction: row;
}

.cart_products_wrapper {
  flex-basis: 69%;
  padding: 2px;
  height: 80vh;
}

.cart_products_wrapper .cart_product {
  margin-top: 5px;
  border-radius: 5px;
}

.cart_details {
  margin-top: 5px;
  flex-basis: 30%;
}
</style>
<template>
  <div class="cart_main">
    <div class="cart_products_wrapper">
      <CartProduct class="cart_product" v-for="product in Cart.Cart" :key="product.id" :product="product" />
    </div>
    <div class="cart_details">
      <CartDetails :Cart="Cart.Cart" />
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from 'src/stores/CartStore';
import CartProduct from 'components/CartProduct.vue'
import CartDetails from 'src/components/CartDetails.vue';
const Cart = useCartStore();
</script>

