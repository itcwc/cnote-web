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
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Swiper,
            SwiperSlide,
        },
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("intro"), ...{ class: ("card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("title-text") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/src/assets/images/logo.png"), alt: ("Logo"), ...{ class: ("logo") }, });
    (__VLS_ctx.$t("home_view.intro"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("home_view.intro_description"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card features") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("title-text") }, });
    (__VLS_ctx.$t("home_view.features"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("home_view.features_list.step1"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("home_view.features_list.step2"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("home_view.features_list.step3"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("home_view.features_list.step4"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("home_view.features_list.step5"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card installation") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("title-text") }, });
    (__VLS_ctx.$t("home_view.installation_guide"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("browser-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/images/chrome-logo.png"), alt: ("Chrome Logo"), ...{ class: ("browser-logo") }, });
    (__VLS_ctx.$t("home_view.chrome_installation.browser_title"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("home_view.chrome_installation.step1_before"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://chromewebstore.google.com/detail/c-note-add-web-page-conte/adckfinclpmhjnijmeeejkdhocikacgd?authuser=0&hl=en"), });
    (__VLS_ctx.$t("home_view.chrome_installation.step1_text"));
    (__VLS_ctx.$t("home_view.chrome_installation.step1_after"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("home_view.chrome_installation.step2"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("browser-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/images/edge-logo.png"), alt: ("Edge Logo"), ...{ class: ("browser-logo") }, });
    (__VLS_ctx.$t("home_view.edge_installation.browser_title"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("home_view.edge_installation.step1_before"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://microsoftedge.microsoft.com/addons/detail/bdcofhehaohhfckpelmkkpmigoemecpp"), });
    (__VLS_ctx.$t("home_view.edge_installation.step1_text"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("home_view.edge_installation.step2"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card screenshots") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("title-text") }, });
    (__VLS_ctx.$t("home_view.screenshots.screenshot_title"));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.swiper;
    /** @type { [typeof __VLS_components.Swiper, typeof __VLS_components.swiper, typeof __VLS_components.Swiper, typeof __VLS_components.swiper, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ spaceBetween: ((30)), centeredSlides: ((true)), autoplay: (({
            delay: 2500,
            disableOnInteraction: false,
        })), pagination: (({
            clickable: true,
        })), navigation: ((true)), modules: ((__VLS_ctx.modules)), ...{ class: ("mySwiper") }, }));
    const __VLS_2 = __VLS_1({ spaceBetween: ((30)), centeredSlides: ((true)), autoplay: (({
            delay: 2500,
            disableOnInteraction: false,
        })), pagination: (({
            clickable: true,
        })), navigation: ((true)), modules: ((__VLS_ctx.modules)), ...{ class: ("mySwiper") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.SwiperSlide;
    /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("home_view.screenshots.screenshot_1"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/images/en/e1.png"), alt: ("Add text to notes"), });
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.SwiperSlide;
    /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("home_view.screenshots.screenshot_2"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/images/en/e2.png"), alt: ("Add text to notes"), });
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.SwiperSlide;
    /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("home_view.screenshots.screenshot_3"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/images/en/e3.png"), alt: ("Add text to notes"), });
    __VLS_nonNullable(__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.SwiperSlide;
    /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("home_view.screenshots.screenshot_4"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/images/en/e4.png"), alt: ("Add text to notes"), });
    __VLS_nonNullable(__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.SwiperSlide;
    /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("home_view.screenshots.screenshot_5"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/images/en/e5.png"), alt: ("Add text to notes"), });
    __VLS_nonNullable(__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card privacy-policy") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("title-text") }, });
    (__VLS_ctx.$t("home_view.privacy_policy.title"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("home_view.privacy_policy.description"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://itcwc.github.io/c-note-extension/cn/privacy-policy.html"), });
    (__VLS_ctx.$t("home_view.privacy_policy.links.cn"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://itcwc.github.io/c-note-extension/en/privacy-policy.html"), });
    (__VLS_ctx.$t("home_view.privacy_policy.links.en"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card contact") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("title-text") }, });
    (__VLS_ctx.$t("home_view.contact_us.title"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("home_view.contact_us.description"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("home_view.contact_us.email"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("mailto:itcwccc@gmail.com"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://github.com/itcwc/c-note-extension/issues"), });
    (__VLS_ctx.$t("home_view.contact_us.github"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card license") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("title-text") }, });
    (__VLS_ctx.$t("home_view.license.title"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("home_view.license.description1"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ style: ({}) }, href: ('https://github.com/itcwc/c-note-extension/LICENSE'), });
    (__VLS_ctx.$t("home_view.license.description2"));
    __VLS_styleScopedClasses['home-container'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['title-text'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['features'];
    __VLS_styleScopedClasses['title-text'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['installation'];
    __VLS_styleScopedClasses['title-text'];
    __VLS_styleScopedClasses['browser-title'];
    __VLS_styleScopedClasses['browser-logo'];
    __VLS_styleScopedClasses['browser-title'];
    __VLS_styleScopedClasses['browser-logo'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['screenshots'];
    __VLS_styleScopedClasses['title-text'];
    __VLS_styleScopedClasses['mySwiper'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['privacy-policy'];
    __VLS_styleScopedClasses['title-text'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['contact'];
    __VLS_styleScopedClasses['title-text'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['license'];
    __VLS_styleScopedClasses['title-text'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
