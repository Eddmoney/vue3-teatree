<script lang="ts">
import { NodeType } from "../types/NodeType";
import { PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    node: {
      type: Object as PropType<NodeType>,
      required: true,
      default: {},
    },
    handleNodeLeftClick: {
      type: Function as PropType<(event: any, node: NodeType) => any>,
      required: true,
    },
    handleNodeRightClick: {
      type: Function as PropType<(event: any, node: NodeType) => any>,
      required: true,
    },
  },
  setup(props) {
    function someChildrenVisible() {
      return props.node.children.some((child: NodeType) => child.show);
    }

    function haveLeftPadding() {
      if (props.node.children && !props.node.children.length) {
        return true;
      }
      if (!someChildrenVisible()) {
        return true;
      }
      return false;
    }

    return { someChildrenVisible, haveLeftPadding };
  },
});
</script>

<template #node-name="{ node }">
  <span
    @click="handleNodeLeftClick(node, $event)"
    @contextmenu.prevent="() => handleNodeRightClick(node, $event)"
    :class="[
      'teatree-node-item-name',
      { 'teatree-node-item-name-padded': haveLeftPadding() },
    ]"
  >
    {{ node.name }}
  </span>
</template>

<style>
.teatree-node-item-name {
  display: inline-block;
  font-size: 0.875rem;
  color: #a0aec0;
  margin-left: 0.5rem;
  user-select: none;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.teatree-node-item-name-padded {
  padding-left: 1.5rem;
}
</style>
