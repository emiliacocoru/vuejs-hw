<template>
    <div class="song" >
        <div class="song-info">
            <span>{{ title }} by {{ singer}}</span>
            <span>{{ price }} $</span>
        </div>
        <button @click="add">Add</button>
  </div>
</template>

<script>
    export default {
        name: 'Song',
        props: {
            title: {
                type: String,
                validator: (value) => value.length > 1
            },
            singer: {
                type: String,
                validator: (value) => value.length > 1
            },
            price: {
                type: String,
                default: '0'
            }
        },
        methods: {
            add() {
                const {title, singer, price} = this;
                this.$emit('event-item', {title, singer, price});
            }
        }
    }
</script>

<style scoped>
.song {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 50px;
  padding: 10px;
  border: 1px solid purple;
  border-radius: 10px;
}
.song-info {
  display: flex;
  justify-content: space-between;
}
</style>
