const EVENT_TOGGLE = 'toggle'

export default {
  model: {
    prop: 'visible',
    event: EVENT_TOGGLE
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 100
    },
    maskStyle: {
      type: Object,
      default: () => {}
    },
    containerStyle: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    hide () {
      this.isVisible = false
    },
    show () {
      this.isVisible = true
    }
  },
  watch: {
    isVisible (val) {
      this.$emit('update:visible', val)
      this.$emit('callback', val)
      if (this.lockScroll) {
        document.body.style.overflow = val ? 'hidden' : ''
      }
    },
    visible: {
      handler (val) {
        this.isVisible = val
      }
    }
  },
  beforeDestroy () {
    this.lockScroll && (document.body.style.overflow = '')
  }
}