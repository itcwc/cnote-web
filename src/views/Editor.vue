<template>
  <div id="editor-page">
    <!-- 左侧文件管理区域 -->
    <aside class="sidebar">
      <p>文件管理</p>
      <button @click="createNewFile">新建文件</button>
      <button @click="createNewFolder">新建文件夹</button>
      <button
        v-if="selectedFile"
        @click="selectedFile = null"
        class="back-to-home-btn"
      >
        返回编辑首页
      </button>
      <div class="file-tree">
        <FileTreeItem
          v-for="file in files"
          :key="file.id"
          :item="file"
          @select-file="selectFile"
        />
      </div>
    </aside>

    <!-- 右侧编辑区域 -->
    <main class="editor-area">
      <div v-if="!selectedFile" class="note-cards">
        <div v-for="note in notes" :key="note.id" class="note-card">
          <div class="note-card-title">
            <p>{{ note.title }}</p>
          </div>
          <div class="note-card-preview">
            <p class="preview-text">{{ note.preview }}</p>
          </div>
        </div>
      </div>

      <div v-else class="md-editor">
        <textarea
          v-model="selectedFile.content"
          placeholder="在这里编辑..."
        ></textarea>
      </div>
    </main>
  </div>
</template>

<script>
import FileTreeItem from "./FileTreeItem.vue";

export default {
  name: "ParentComponent",
  components: {
    FileTreeItem, // 注册组件
  },

  data() {
    return {
      files: [
        {
          id: 1,
          name: "文件夹1",
          isFolder: true,
          children: [
            { id: 2, name: "文件1.txt", isFolder: false },
            {
              id: 3,
              name: "子文件夹1",
              isFolder: true,
              children: [{ id: 4, name: "文件2.txt", isFolder: false }],
            },
          ],
        },
        { id: 5, name: "文件3.txt", isFolder: false },
      ],
      selectedFile: null, // 当前选中的文件
      notes: [
        { id: 1, title: "示例笔记1", preview: "这是一个示例笔记摘要不不不不不不不不不不不不不不不不不不不不不不不cccc不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不..." },
        { id: 2, title: "示例笔记2", preview: "这是另一个示例笔记摘要..." },
        { id: 2, title: "示例笔记2", preview: "这是另一个示例笔记摘要..." },
        { id: 2, title: "示例笔记2", preview: "这是另一个示例笔记摘要..." },
        { id: 2, title: "示例笔记2", preview: "这是另一个示例笔记摘要..." },
        { id: 2, title: "示例笔记2", preview: "这是另一个示例笔记摘要..." },
        { id: 2, title: "示例笔记2", preview: "这是另一个示例笔记摘要..." },
        { id: 2, title: "示例笔记2", preview: "这是另一个示例笔记摘要..." },
        { id: 2, title: "示例笔记2", preview: "这是另一个示例笔记摘要..." },
        { id: 2, title: "示例笔记2", preview: "这是另一个示例笔记摘要..." },
        { id: 2, title: "示例笔记2", preview: "这是另一个示例笔记摘要..." },
        { id: 2, title: "示例笔记2", preview: "这是另一个示例笔记摘要..." },
        {
          id: 2,
          title: "示例笔记2",
          preview:
            "这是另一个示例笔记摘要...",
        },

        // 可以添加更多的预设笔记
      ],
    };
  },
  methods: {
    createNewFile() {
      // 创建新文件逻辑
    },
    createNewFolder() {
      // 创建新文件夹逻辑
    },
    selectFile(file) {
      this.selectedFile = file;
    },
  },
};
</script>

<style scoped>
#editor-page {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin: 10px 0;
}

.file-list {
  list-style: none;
  padding: 0;
}

.file-list li {
  padding: 10px;
  cursor: pointer;
}

.file-list li:hover {
  background-color: #e0e0e0;
}

.editor-area {
  flex: 1;
  padding: 20px;
}

/* .back-to-home-btn {
  margin: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
} */

/* .back-to-home-btn:hover {
  background-color: #0056b3;
} */

.note-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.note-card {
  width: 212px;
  height: 260px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  flex-direction: column;
  border-radius: 5px;
}

.md-editor {
  height: 100%;
}

.md-editor textarea {
  width: 100%;
  height: 90%;
  resize: none;
  border: 1px solid #ddd;
  padding: 15px;
  font-family: monospace;
}

.note-card-title {
  font-size: 16px;
}

.note-card-preview {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  line-clamp: 9;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #a9b2c2;
}

.preview-text {
  display: block;
  white-space: normal; /* 允许换行 */
  word-wrap: break-word; /* 确保长单词也能换行 */
}

.file-tree {
  list-style: none;
  padding: 0;
}

.file-tree-item {
  margin-bottom: 5px;
}

.item-label:hover {
  background-color: #f0f0f0;
}
</style>
