<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ product.productName }}</h2>
        <br />

        <p>
          Product Price: <br /><strong>{{ formattedPrice }}</strong>
        </p>
        <p>
          Product ID: <br /><strong>{{ product.ProductID }}</strong>
        </p>
        <p>
          Category ID: <br /><strong>{{ product.CategoryID }}</strong>
        </p>
        <p>
          Category Name: <br /><strong>{{ product.CategoryName }}</strong>
        </p>
      </div>
    </div>
    <br />

    <router-link v-if="auth" :to="`/products/${this.$route.params.pk}/review`"
      ><button class="btn btn-success">Add a Review</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign In to Add a Review
      </button></router-link
    >
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      let allProducts = this.$store.state.products;

      let thisProduct = allProducts.find((aProduct) => {
        return aProduct.ProductID == this.$route.params.pk;
      });

      return thisProduct;
    },
    formattedPrice() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.product.productPrice);
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
