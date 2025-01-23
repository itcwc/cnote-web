import { useI18n } from "vue-i18n";
export default (await import('vue')).defineComponent({
    name: "App",
    setup() {
        const { locale } = useI18n();
        // 从 localStorage 中获取已保存的语言设置，如果没有则使用默认语言
        const savedLanguage = localStorage.getItem("selectedLanguage");
        const selectedLanguage = savedLanguage || "en"; // 默认设置为英文
        // 将选中的语言设置到 locale 中
        locale.value = selectedLanguage;
        // 语言切换函数
        const changeLanguage = (event) => {
            const newLanguage = event.target.value;
            locale.value = newLanguage; // 更新 locale
            // 将新的语言设置保存到 localStorage
            localStorage.setItem("selectedLanguage", newLanguage);
        };
        return {
            selectedLanguage,
            changeLanguage,
        };
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("navbar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar-left") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), }));
    const __VLS_2 = __VLS_1({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/src/assets/images/logo.png"), alt: ("Logo"), ...{ class: ("logo") }, });
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/"), ...{ class: ("nav-link") }, activeClass: ("active"), }));
    const __VLS_8 = __VLS_7({ to: ("/"), ...{ class: ("nav-link") }, activeClass: ("active"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    (__VLS_ctx.$t("home"));
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/editor"), ...{ class: ("nav-link") }, activeClass: ("active"), }));
    const __VLS_14 = __VLS_13({ to: ("/editor"), ...{ class: ("nav-link") }, activeClass: ("active"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    (__VLS_ctx.$t("editor"));
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("/sync"), ...{ class: ("nav-link") }, activeClass: ("active"), }));
    const __VLS_20 = __VLS_19({ to: ("/sync"), ...{ class: ("nav-link") }, activeClass: ("active"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    (__VLS_ctx.$t("sync"));
    __VLS_nonNullable(__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ to: ("/settings"), ...{ class: ("nav-link") }, activeClass: ("active"), }));
    const __VLS_26 = __VLS_25({ to: ("/settings"), ...{ class: ("nav-link") }, activeClass: ("active"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    (__VLS_ctx.$t("settings"));
    __VLS_nonNullable(__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar-right") }, });
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ to: ("/login"), ...{ class: ("nav-link") }, activeClass: ("active"), }));
    const __VLS_32 = __VLS_31({ to: ("/login"), ...{ class: ("nav-link") }, activeClass: ("active"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    (__VLS_ctx.$t("login"));
    __VLS_nonNullable(__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("language-select") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.changeLanguage) }, value: ((__VLS_ctx.selectedLanguage)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("en"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("zh-CN"), });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_styleScopedClasses['navbar'];
    __VLS_styleScopedClasses['navbar-left'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['navbar-right'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['language-select'];
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
