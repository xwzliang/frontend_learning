Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
      <div class="product">
        <div class="product-image">
          <img :src="image"/>
        </div>

        <div class="product-info">
          <h1>{{ productTitle }}</h1>
          <p v-if="inStock > 10">In Stock</p>
          <p v-else-if="inStock > 0 && inStock <= 10">Almost sold out</p>
          <p v-else>Out of Stock</p>
          <p v-show="isVisible">Is visible</p>
          <p>User is premium: {{ premium }}</p>
          <p>Shipping: {{ calcShippingFee }}</p>

          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div v-for="(variant, index) in variants"
               :key="variant.variantId"
               class="color-box"
               :style="{ backgroundColor: variant.variantColor }"
               @mouseover="updateProduct(index)">
          </div>

          <!-- <button v-on:click="cart += 1">Add to Cart</button> -->
          <button v-on:click="addToCart"
                  :disabled="!inStock"
                  :class="{ disabledButton: !inStock }">Add to Cart</button>

        </div>
      </div>
    `,
    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariantIndex: 0,
            inventory: 8,
            isVisible: true,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: "./assets/vmSocks-green-onWhite.jpg",
                    variantQuantity: 10,
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                    variantQuantity: 0,
                }
            ],
        }
    } ,
    methods: {
        addToCart: function () {
            this.$emit("add-to-cart", this.variants[this.selectedVariantIndex].variantId)
        },
        updateProduct(index) {
            this.selectedVariantIndex = index
            console.log(index)
        }
    },
    computed: {
        productTitle() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariantIndex].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariantIndex].variantQuantity
        },
        calcShippingFee() {
            if (this.premium) {
                return "Free"
            } else {
                return 2.99
            }
        },
    }

})
var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})
