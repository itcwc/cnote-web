<template>
  <div id="editor-page">
    <!-- 左侧文件管理区域 -->

    <div class="action-bar">
      <p>{{ $t('editor_view.left.title') }}</p>
      <button @click="createNewFile">{{ $t('editor_view.left.new_file') }}</button>
      <button @click="createNewFolder">{{ $t('editor_view.left.new_folder') }}</button>
      <button v-if="selectedFile" @click="selectedFile = null" class="back-to-home-btn">
        {{ $t('editor_view.left.back_to_edit_page') }}
      </button>
    </div>

    <aside class="sidebar">
      <div class="file-tree">
        <FileTreeItem v-for="file in files" :key="file.id" :item="file" @select-file="selectFile" />
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
        <Editormd :value="selectedFile.content" />
      </div>
    </main>
  </div>
</template>

<script>
import FileTreeItem from "./FileTreeItem.vue";
import Editormd from "./Editormd.vue";

export default {
  name: "ParentComponent",
  components: {
    FileTreeItem, // 注册组件
    Editormd
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
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
        { id: 5, name: "文件3.txt", isFolder: false },
      ],
      selectedFile: "cccc", // 当前选中的文件
      notes: [
        {
          id: 1,
          title: "示例笔记1",
          preview:
            "这是一个示例笔记摘要不不不不不不不不不不不不不不不不不不不不不不不cccc不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不...",
        },
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
          preview: "这是另一个示例笔记摘要...",
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
  height: 90vh;
  background-color: #f0f3f5;
  margin: 10px 0 0 0;
  padding: 0 0 0 15px;
}

.sidebar {
  width: 200px;
  background-color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  margin: 10px 0px 5px 0px;
  border-radius: 5px;

  overflow: hidden;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 80%;
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
  padding: 10px;
  overflow: hidden;
}

.note-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  max-height: 99%;
  overflow-y: auto;
  padding: 10px 0 10px 10px;
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
  white-space: normal;
  word-wrap: break-word;
}

.file-tree {
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;

  max-height: 99%;
  overflow-y: auto;
}

.file-tree-item {
  margin-bottom: 5px;
}

.item-label:hover {
  background-color: #f0f0f0;
}
</style>
