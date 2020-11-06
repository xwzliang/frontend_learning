var app = new Vue({
    el: '#app',
    data: {
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
        cart: 0,
    },
    methods: {
        addToCart: function () {
            this.cart += 1
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
        }
    }
})
