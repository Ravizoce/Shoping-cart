<template>
  <q-card class="my-card">
    <q-card-section class="bg-teal text-white">
      <div class="text-h6">Cart Details</div>
    </q-card-section>

    <q-card-section vertical align="left">
      <div>
        Total Products : {{ amountcalculator(Cart) }}
      </div>
      <div>
        Total Price : RS {{ pricecalculator(Cart) }}
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>

const prop = defineProps(['Cart']);

const amountcalculator = (products) => {
  // console.log(products);
  let total = 0;
  products.forEach(product => {
    total = total + product.amount
  });

  return total;
}
const pricecalculator = (products) => {
  // console.log(products);
  let total = 0;
  products.forEach(product => {
    total = total + product.product.price
  });

  return total;
}
</script>
