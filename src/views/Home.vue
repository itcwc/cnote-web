<template>
  <div class="home-container">
    <div id="intro" class="card">
      <p class="title-text" style="display: inline-flex; align-items: center">
        <img src="/src/assets/images/logo.png" alt="Logo" class="logo" />
        {{ $t("home_view.intro") }}
      </p>
      <p>{{ $t("home_view.intro_description") }}</p>
    </div>

    <div class="card features">
      <p class="title-text">{{ $t("home_view.features") }}</p>
      <ul>
        <li>
          {{ $t("home_view.features_list.step1") }}
        </li>
        <li>
          {{ $t("home_view.features_list.step2") }}
        </li>
        <li>
          {{ $t("home_view.features_list.step3") }}
        </li>
        <li>
          {{ $t("home_view.features_list.step4") }}
        </li>
        <li>
          {{ $t("home_view.features_list.step5") }}
        </li>
      </ul>
    </div>

    <div class="card installation">
      <p class="title-text">{{ $t("home_view.installation_guide") }}</p>

      <p class="browser-title">
        <img
          src="../assets/images/chrome-logo.png"
          alt="Chrome Logo"
          class="browser-logo"
        />
        {{ $t("home_view.chrome_installation.browser_title") }}
      </p>
      <ol>
        <li>
          {{ $t("home_view.chrome_installation.step1_before") }}
          <a
            href="https://chromewebstore.google.com/detail/c-note-add-web-page-conte/adckfinclpmhjnijmeeejkdhocikacgd?authuser=0&hl=en"
            >{{ $t("home_view.chrome_installation.step1_text") }}
          </a>
          {{ $t("home_view.chrome_installation.step1_after") }}
        </li>
        <li>
          {{ $t("home_view.chrome_installation.step2") }}
        </li>
      </ol>

      <p class="browser-title">
        <img
          src="../assets/images/edge-logo.png"
          alt="Edge Logo"
          class="browser-logo"
        />
        {{ $t("home_view.edge_installation.browser_title") }}
      </p>
      <ol>
        <li>
          {{ $t("home_view.edge_installation.step1_before") }}
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/bdcofhehaohhfckpelmkkpmigoemecpp"
            >{{ $t("home_view.edge_installation.step1_text") }}
          </a>
          .
        </li>
        <li>
          {{ $t("home_view.edge_installation.step2") }}
        </li>
      </ol>
    </div>

    <div class="card screenshots">
      <p class="title-text">
        {{ $t("home_view.screenshots.screenshot_title") }}
      </p>
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
          <p>{{ $t("home_view.screenshots.screenshot_1") }}</p>
          <img src="../assets/images/en/e1.png" alt="Add text to notes" />
        </swiper-slide>
        <swiper-slide>
          <p>{{ $t("home_view.screenshots.screenshot_2") }}</p>
          <img src="../assets/images/en/e2.png" alt="Add text to notes" />
        </swiper-slide>
        <swiper-slide>
          <p>{{ $t("home_view.screenshots.screenshot_3") }}</p>
          <img src="../assets/images/en/e3.png" alt="Add text to notes" />
        </swiper-slide>
        <swiper-slide>
          <p>{{ $t("home_view.screenshots.screenshot_4") }}</p>
          <img src="../assets/images/en/e4.png" alt="Add text to notes" />
        </swiper-slide>
        <swiper-slide>
          <p>{{ $t("home_view.screenshots.screenshot_5") }}</p>
          <img src="../assets/images/en/e5.png" alt="Add text to notes" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="card privacy-policy">
      <p class="title-text">{{ $t("home_view.privacy_policy.title") }}</p>
      <p>
        {{ $t("home_view.privacy_policy.description") }}
      </p>
      <ul>
        <li>
          <a
            href="https://itcwc.github.io/c-note-extension/cn/privacy-policy.html"
            >{{ $t("home_view.privacy_policy.links.cn") }}</a
          >
        </li>
        <li>
          <a
            href="https://itcwc.github.io/c-note-extension/en/privacy-policy.html"
            >{{ $t("home_view.privacy_policy.links.en") }}</a
          >
        </li>
      </ul>
    </div>

    <div class="card contact">
      <p class="title-text">{{ $t("home_view.contact_us.title") }}</p>
      <p>
        {{ $t("home_view.contact_us.description") }}
      </p>
      <ul>
        <li>
          {{ $t("home_view.contact_us.email") }}
          <a href="mailto:itcwccc@gmail.com">itcwccc@gmail.com</a>
        </li>
        <li>
          GitHub Issues:
          <a href="https://github.com/itcwc/c-note-extension/issues">{{
            $t("home_view.contact_us.github")
          }}</a>
        </li>
      </ul>
    </div>

    <div class="card license">
      <p class="title-text">{{ $t("home_view.license.title") }}</p>
      <p>{{ $t("home_view.license.description1") }} <a style='color: #007bff;' href='https://github.com/itcwc/c-note-extension/LICENSE'>MIT License</a> {{ $t("home_view.license.description2") }}</p>
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
  margin: 10px 0 0 0;
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
  width: 25px;
  height: 25px;
  margin-right: 8px;
}

.title-text {
  font-size: 22px;
}

.logo {
  width: 34px; /* 调整图标大小 */
  height: auto;
  margin-right: 8px; /* 图标与文本之间的间距 */
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

a {
  color: #007bff;
}
</style>
