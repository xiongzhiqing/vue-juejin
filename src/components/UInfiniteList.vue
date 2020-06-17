<template>
  <div class="x-infinite" ref="container" :style="{padding: padding}">
    <slot :sliceItems="sliceItems"></slot>
  </div>
</template>

<script>
import { throttle } from '../util/throttle'
export default {
  props: {
    items: {
      require: true,
      type: Array
    },
    itemHeight: {
      require: true,
      type: Number
    }
  },
  data () {
    return {
      // 提升用户体验值 多展示条数
      buffer: 2,
      // 页面滚动高度
      scrollTop: 0,
      // 当前视口的高度
      viewportHeight: 0
    }
  },
  computed: {
    // 已经滚动过的节点
    over () {
      return Math.max(this.scrollTop / this.itemHeight - this.buffer, 0)
    },
    // 当前滚动 + 视口所要滚动到的节点
    down () {
      return Math.min(
        Math.ceil((this.scrollTop + this.viewportHeight) / this.itemHeight + this.buffer),
        this.items.length
      )
    },
    // 中间数据片段
    sliceItems () {
      return this.items.slice(this.over, this.down)
    },
    // 填充滚动条
    padding () {
      return `${this.over * this.itemHeight}px 0px ${Math.max((this.items.length - this.down) * this.itemHeight, 0)}px 0px`
    }
  },
  created () {
    this.onScroll()
    document.addEventListener('scroll', this.onScroll, {
      passive: true
    })
  },
  destroyed () {
    document.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    getScrollTop () {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    },
    onScroll: throttle(function (e) {
      this.scrollTop = this.getScrollTop()
      this.viewportHeight = window.innerHeight
    })
  }
}
</script>