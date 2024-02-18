import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('useCartStore', () => {

  var Cart = ref([]);

  var ProductList = [
    {
      id: 1,
      name: "t-shirt",
      price: 300,
      size: 'XL',
    },
    {
      id: 2,
      name: "t-shirt",
      price: 300,
      size: 'XL',
    },
    {
      id: 3,
      name: "t-shirt",
      price: 300,
      size: 'XL',
    },
    {
      id: 4,
      name: "t-shirt",
      price: 300,
      size: 'XL',
    },
    {
      id: 5,
      name: "t-shirt",
      price: 300,
      size: 'XL',
    },
    {
      id: 6,
      name: "t-shirt",
      price: 300,
      size: 'XL',
    },
  ]



  const AddProduct = (product) => {
    // console.log(ProductList);
    let tempId = ref(null);
    Cart.value.forEach(element => {
      if (element.id == product.id) {
        tempId.value = product.id;
        element.amount++;

      }
    })

    if (tempId.value == null) {
      Cart.value.push({
        id: product.id,
        product: product,
        amount: 1
      });
    }
    console.log(Cart.value)
  };

  const RemoveProduct = (product) => {
    let tempId = ref(null);
    Cart.value.forEach((element, index) => {
      if (element.id == product.id) {
        element.amount--;
        if (element.amount == 0) {
          Cart.value.splice(index, 1);
        }
      }
    })
    console.log(Cart.value)
  }

  return {
    Cart, ProductList, AddProduct, RemoveProduct
  }
})
