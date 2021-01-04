<template>
    <button type="button" class="navbar-toggler"
            data-toggle="collapse"
            @click="handleClick"
            :data-target="`#${target}`"
            :aria-controls="target"
            :aria-expanded="expanded"
            aria-label="Toggle navigation">
        <span></span>
        <span></span>
    </button>
</template>
<script>

    import { EventBus } from "../../Service/eventBus";

export default {
  name: "close-button",
  props: {
    target: {
      type: [String, Number],
      description: "Close button target element"
    },
    expanded: {
      type: Boolean,
      description: "Whether button is expanded (aria-expanded attribute)"
    }
  },
    mounted(){
        EventBus.$on('closeNav',(evt)=>{
          this.handleClick(evt)
        })

    },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style>
</style>
