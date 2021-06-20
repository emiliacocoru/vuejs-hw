<template>
    <div id="shop" class="shop">
        <cart :items="songsInCart">
            <template #header>
                <h1>Shopping Cart</h1>
            </template>
        </cart>

        <div class="all-songs">
            <div class="song-info" v-for="(item, index) in items" :key="index">
                <song :title="item.title" :singer="item.singer.singerName" :price="parseInt(item.songId)"  @event-item="addToCart">
                </song>
            </div>
        </div>  
    </div>
</template>

<script>
  import Song from './Song.vue'
  import Cart from './Cart.vue'

  export default {
    name: 'SongShop',
    data() {
      return {
        songsInCart: []
      }
    },
    computed: {
      items() {
        console.log("AICI" + this.$store.getters.cartItems.event);
        return this.$store.getters.cartItems;
    } 
    },
    components: {
      Song,
      Cart
    },
    methods: {
      addToCart(item) {
          this.songsInCart.push(item);
      }
    }
  }
</script>

<style scoped>
.shop {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
}
.all-songs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.song-info {
  width: 100%;
  height: 50px;
  margin: 30px;
}
</style>
