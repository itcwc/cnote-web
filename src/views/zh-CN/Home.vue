<template>
  <div class="home-container">
    <div id="intro" class="card">
      <h1>Cnote - 网页剪辑扩展</h1>
      <!-- <p align="center">【English | <a href="cn-index.html">中文</a>】</p> -->
      <p align="center">
        【<router-link to="/">English</router-link> |
        <router-link to="/zh-CN">中文</router-link>】
      </p>
      <p>
        <strong>Cnote</strong>
        是一个简单高效的浏览器扩展，帮助用户将网页内容剪辑为 Markdown
        笔记。支持多格式导出和云同步，便于在不同设备间访问笔记。
      </p>
    </div>

    <div class="card features">
      <h2>🌟 功能</h2>
      <ul>
        <li>📝 从网页中选择文本，并保存为 Markdown 格式的笔记。</li>
        <li>📑 将笔记导出为多种格式：.md、.pdf、.html、.docx 和 .txt。</li>
        <li>☁️ 保存笔记到云端，实现设备间的无缝同步。</li>
        <li>🖱️ 快捷右键菜单：“添加到新笔记”选项。</li>
        <li>🎨 带有实时预览的 Markdown 编辑器。</li>
      </ul>
    </div>

    <div class="card installation">
      <h2>🚀 安装指南</h2>
      <h3 class="browser-title">
        <img
          src="../assets/images/chrome-logo.png"
          alt="Chrome Logo"
          class="browser-logo"
        />
        对于 Chrome 浏览器
      </h3>
      <ol>
        <li>
          访问
          <a
            href="https://chromewebstore.google.com/detail/c-note-add-web-page-conte/adckfinclpmhjnijmeeejkdhocikacgd?authuser=0&hl=en"
            >Chrome 网上应用店</a
          >
          以下载并安装该扩展。
        </li>
        <li>安装完成后，右键选择任意文本并选择“添加到新笔记”。</li>
      </ol>

      <h3 class="browser-title">
        <img
          src="../assets/images/edge-logo.png"
          alt="Edge Logo"
          class="browser-logo"
        />
        对于 Edge 浏览器
      </h3>
      <ol>
        <li>
          访问
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/bdcofhehaohhfckpelmkkpmigoemecpp"
            >Edge 附加组件商店</a
          >.
        </li>
        <li>按照指引完成安装并开始使用扩展。</li>
      </ol>
    </div>

    <div class="card screenshots">
      <!-- <h2>📸 Screenshots</h2>
          <p>Add text to notes</p>
          <img src="../assets/images/en/e1.png" alt="Add text to notes">
          <p>Editor</p>
          <img src="../assets/images/en/e2.png" alt="Editor">
          <p>Add image to notes</p>
          <img src="../assets/images/en/e3.png" alt="Add image to notes">
          <p>Image in editor</p>
          <img src="../assets/images/en/e4.png" alt="Image in editor">
          <p>Settings</p>
          <img src="../assets/images/en/e5.png" alt="Settings"> -->

      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <h3>添加文字到笔记</h3>
          <img src="../assets/images/en/e1.png" alt="添加文字到笔记" />
        </swiper-slide>
        <swiper-slide>
          <h3>编辑文字</h3>
          <img src="../assets/images/en/e2.png" alt="编辑文字" />
        </swiper-slide>
        <swiper-slide>
          <h3>添加图片到笔记</h3>
          <img src="../assets/images/en/e3.png" alt="添加图片到笔记" />
        </swiper-slide>
        <swiper-slide>
          <h3>编辑图片</h3>
          <img src="../assets/images/en/e4.png" alt="编辑图片" />
        </swiper-slide>
        <swiper-slide>
          <h3>设置</h3>
          <img src="../assets/images/en/e5.png" alt="设置" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="card privacy-policy">
      <h2>📄 隐私政策</h2>
      <p>
        为了保护用户的隐私，我们承诺不会收集或存储任何敏感数据。详细信息请查看我们的隐私政策：
      </p>
      <ul>
        <li>
          <a
            href="https://itcwc.github.io/c-note-extension/cn/privacy-policy.html"
            >隐私政策 (CN)</a
          >
        </li>
        <li>
          <a
            href="https://itcwc.github.io/c-note-extension/en/privacy-policy.html"
            >Privacy Policy (EN)</a
          >
        </li>
      </ul>
    </div>

    <div class="card contact">
      <h2>📬 联系我们</h2>
      <p>如果您有任何问题或建议，请随时联系我们：</p>
      <ul>
        <li><strong>Email</strong>: itcwccc@gmail.com</li>
        <li>
          <strong>GitHub Issues</strong>:
          <a href="https://github.com/itcwc/c-note-extension/issues"
            >提交问题</a
          >
        </li>
      </ul>
    </div>

    <div class="card license">
      <h2>⚠️ 许可协议</h2>
      <p>
        本项目基于
        <a href="https://github.com/itcwc/c-note-extension/LICENSE">MIT License</a>开源，您可以自由地使用和修改。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default defineComponent({
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
});
</script>

<style scoped>
.home-container {
  font-family: Arial, sans-serif;
  margin: 20px;
  /* background-color: #f5f5f5; */
}

.card {
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
}

.swiper-container {
  max-width: 800px;
  margin: 0 auto;
}

.my-swiper img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: opacity 0.3s;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}

.swiper-button-prev,
.swiper-button-next {
  color: #000;
}

.browser-title {
  display: inline-flex;
  align-items: center;
}

.browser-logo {
  width: 50px;
  height: 50px;
  margin-right: 8px;
}

h1,
h2,
h3 {
  margin-top: 0;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

pre {
  background-color: #272822;
  color: #f8f8f2;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}

img {
  max-width: 100%;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}
</style>
