<template>
  <div class="home-container">
    <div id="intro" class="card">
      <h1>Cnote - Web Clipper Extension</h1>
      <!-- <p align="center">【English | <a href="cn-index.html">中文</a>】</p> -->
      <p align="center">
        【<router-link to="/">English</router-link> |
        <router-link to="/zh-CN">中文</router-link>】
      </p>
      <p>
        <strong>Cnote</strong> is a simple and efficient browser extension that
        helps users clip content from web pages into Markdown notes. It supports
        multi-format export and cloud synchronization to keep your notes
        accessible across devices.
      </p>
    </div>

    <div class="card features">
      <h2>🌟 Features</h2>
      <ul>
        <li>
          📝 Select text from web pages and save it as a note in Markdown
          format.
        </li>
        <li>
          📑 Export notes in multiple formats: .md, .pdf, .html, .docx, and
          .txt.
        </li>
        <li>
          ☁️ Save notes to the cloud for seamless synchronization across
          devices.
        </li>
        <li>🖱️ Quick right-click menu: "Add to New Note" option.</li>
        <li>🎨 Markdown editor with a real-time preview.</li>
      </ul>
    </div>

    <div class="card installation">
      <h2>🚀 Installation Guide</h2>

      <h3 class="browser-title">
        <img
          src="../assets/images/chrome-logo.png"
          alt="Chrome Logo"
          class="browser-logo"
        />
        For Chrome Browser
      </h3>
      <ol>
        <li>
          Visit the
          <a
            href="https://chromewebstore.google.com/detail/c-note-add-web-page-conte/adckfinclpmhjnijmeeejkdhocikacgd?authuser=0&hl=en"
            >Chrome Web Store</a
          >
          to download and install the extension.
        </li>
        <li>
          Once installed, right-click on any selected text and choose "Add to
          New Note."
        </li>
      </ol>

      <h3 class="browser-title">
        <img
          src="../assets/images/edge-logo.png"
          alt="Edge Logo"
          class="browser-logo"
        />
        For Edge Browser
      </h3>
      <ol>
        <li>
          Visit the
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/bdcofhehaohhfckpelmkkpmigoemecpp"
            >Edge Add-ons Store</a
          >.
        </li>
        <li>
          Follow the instructions to install and start using the extension.
        </li>
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
          <h3>Add text to notes</h3>
          <img src="../assets/images/en/e1.png" alt="Add text to notes" />
        </swiper-slide>
        <swiper-slide>
          <h3>Editor</h3>
          <img src="../assets/images/en/e2.png" alt="Add text to notes" />
        </swiper-slide>
        <swiper-slide>
          <h3>Add image to notes</h3>
          <img src="../assets/images/en/e3.png" alt="Add text to notes" />
        </swiper-slide>
        <swiper-slide>
          <h3>Image in editor</h3>
          <img src="../assets/images/en/e4.png" alt="Add text to notes" />
        </swiper-slide>
        <swiper-slide>
          <h3>Settings</h3>
          <img src="../assets/images/en/e5.png" alt="Add text to notes" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="card privacy-policy">
      <h2>📄 Privacy Policy</h2>
      <p>
        We are committed to protecting your privacy and ensuring your data is
        secure. For more details, please refer to our privacy policy:
      </p>
      <ul>
        <li>
          <a
            href="https://itcwc.github.io/c-note-extension/cn/privacy-policy.html"
            >Privacy Policy (CN)</a
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
      <h2>📬 Contact Us</h2>
      <p>
        If you have any questions or feedback, feel free to reach out to us:
      </p>
      <ul>
        <li><strong>Email</strong>: itcwccc@gmail.com</li>
        <li>
          <strong>GitHub Issues</strong>:
          <a href="https://github.com/itcwc/c-note-extension/issues"
            >Submit an Issue</a
          >
        </li>
      </ul>
    </div>

    <div class="card license">
      <h2>⚠️ License</h2>
      <p>
        This project is open source and licensed under the
        <a href="LICENSE">MIT License</a>. You are free to use, modify, and
        distribute it.
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
