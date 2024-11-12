<template>
    <div class="file-tree-item">
      <!-- 文件夹和文件的显示逻辑 -->
      <div @click="toggle" class="item-label">
        <span v-if="item.isFolder">{{ isOpen ? '📂' : '📁' }} {{ item.name }}</span>
        <span v-else>📄 {{ item.name }}</span>
      </div>
      <!-- 子文件夹递归调用 -->
      <div v-if="isOpen && item.isFolder" class="children">
        <FileTreeItem
          v-for="child in item.children"
          :key="child.id"
          :item="child"
          @select-file="$emit('select-file', child)"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FileTreeItem",
    props: {
      item: Object,
    },
    data() {
      return {
        isOpen: false, // 控制文件夹展开/关闭状态
      };
    },
    methods: {
      toggle() {
        if (this.item.isFolder) {
          this.isOpen = !this.isOpen; // 切换文件夹展开状态
        } else {
          this.$emit("select-file", this.item); // 触发选择文件事件
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .item-label {
    cursor: pointer;
    margin-left: 10px;
  }
  .children {
    margin-left: 20px;
  }
  </style>
  