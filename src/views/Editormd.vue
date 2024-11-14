<template>
  <div id="editor-page">
    <div id="editor-container"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "EditorPage",
  setup() {
    onMounted(() => {
      // 初始化 Editor.md
      const editor = editormd("editor-container", {
        // width: "100%",
        // height: 600,
        path: "https://cdn.jsdelivr.net/npm/editor.md/lib/", // 如果使用 CDN，请设置此路径
        theme: "default",
        previewTheme: "default",
        editorTheme: "default",
        markdown: "### Welcome to Editor.md!",
        codeFold: true,
        syncScrolling: "single",
        toolbar: true,
        saveHTMLToTextarea: true,
        imageUpload: true,
        imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
        imageUploadURL: "/upload/path", // 替换成你的图片上传接口
        toolbarIcons: function () {
          return [
            "bold",
            "italic",
            "pagebreak",
            "|",
            "h1",
            "h2",
            "h3",
            "|",
            "hr",
            "quote",
            "list-ul",
            "list-ol",
            "|",
            "link",
            "image",
            "code",
            "preformatted-text",
            "code-block",
            "table",
            "datetime",
          ];
        },

      });
    });
  },
};
</script>

<style scoped>
#editor-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#editor-container {
  width: 100%;
}
</style>
