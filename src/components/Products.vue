<template>
  <div>
    <h1>Products</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Category Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aProduct in theProducts" :key="aProduct.ProductID">
          <th>{{ aProduct.productName }}</th>
          <th>{{ aProduct.productPrice }}</th>
          <th>{{ aProduct.CategoryName }}</th>
          <th>
            <router-link :to="`/products/${aProduct.ProductID}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>

      <tbody></tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theProducts() {
      return this.$store.state.products;
    },
  },
};
</script>

<style></style>
