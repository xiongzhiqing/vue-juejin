<template>
  <div>
    <!-- <div v-intersect="{handler: handler}"></div> -->
    <UInfiniteList :items="items" :itemHeight="80" #default={sliceItems}>
      <u-list :items="sliceItems"></u-list>
    </UInfiniteList>
    <div v-intersect="{handler: fetchNext}" class="x-buttom">1</div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import UList from '../components/UList.vue'
import UInfiniteList from '../../../components/UInfiniteList.vue'
const { mapState, mapActions } = createNamespacedHelpers('topic')
export default {
  name: "u-top",
  props: ['type'],
  components: {
    UList,
    UInfiniteList
  },
  computed: {
    ...mapState({
      'items': state => state[state.activeType].items
    })
  },
  watch: {
    type: {
      handler () {
        this.fetchNext()
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      fetchData: 'FETCH_LIST_DATA'
    }),
    fetchNext (a, b, c) {
      const { type } = this
      this.fetchData({ type })
    }
  }
};
</script>
<style scoped>
.x-buttom{
  width: 100%;
  height: 40px;
  background: #333;
}
</style>