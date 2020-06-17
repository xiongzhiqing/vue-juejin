<template>
  <div class="about">
    <!-- about me!!! -->
    Hello, Vue!!! ---- {{value}}
    <div>
      <input v-model="value" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.about {
  padding: 30px;
  text-align: center;
}
</style>
