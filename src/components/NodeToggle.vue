<script lang="ts">
import ChevronRight from "./ChevronRight.vue";
import ChevronDown from "./ChevronDown.vue";
import { NodeType } from "../types/NodeType";
import { PropType, defineComponent } from "vue";

export default defineComponent({
  components: { ChevronRight, ChevronDown },
  props: {
    node: {
      type: Object as PropType<NodeType>,
      required: true,
      default: {},
    },
  },
  setup(props) {
    function someChildrenVisible() {
      return props.node.children.some((child: NodeType) => child.show);
    }
    function toggleChildren(node: NodeType) {
      node.showChildren = !node.showChildren;
    }
    return {someChildrenVisible, toggleChildren}
  },
});
</script>

<template #node-toggle="{ node }">
  <span
    class="teatree-node-item-icon"
    @click="toggleChildren(node)"
    v-if="node.children && node.children.length && someChildrenVisible()"
  >
    <chevron-down v-if="node.showChildren" width="20" />
    <chevron-right v-else width="20" />
  </span>
</template>

<style>
.teatree-node-item-icon {
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  color: #cbd5e0;
}
</style>
