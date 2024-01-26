<script lang="ts">
import TeatreeNode from "./TeatreeNode.vue";
import { NodeType } from "../types/NodeType";
import { PropType, defineComponent } from "vue"

export default defineComponent({
  components: { TeatreeNode },
  props: {
    roots: {
      type: Array as PropType<NodeType>,
      required: true,
      default: () => []
    }
  },
  setup(props) {
  }
});
</script>
<template>
  <div class="teatree">
    <div>
      <TeatreeNode v-for="(node, index) in roots" :node="node" :key="index">
        <!-- Recursive node toggle slot -->
        <template v-slot:node-toggle="{node}">
          <slot name="node-toggle" :node="node"></slot>
        </template>

        <!-- Recursive node name slot -->
        <template v-slot:node-name="{node}">
          <slot name="node-name" :node="node"></slot>
        </template>
      </TeatreeNode>
    </div>
  </div>
</template>

<style>
.teatree {
  cursor: pointer;
  height: 100%;
  overflow: hidden;
}
</style>
