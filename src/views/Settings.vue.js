import { ref, onMounted } from "vue";
import Editormd from "./Editormd.vue";
import { useI18n } from "vue-i18n";
export default (await import('vue')).defineComponent({
    name: "Settings",
    components: {
        Editormd
    },
    setup() {
        // 语言切换部分  ---------------------
        const { locale } = useI18n();
        // 从缓存中获取已保存的语言设置，如果没有则使用默认语言
        const savedLanguage = localStorage.getItem("selectedLanguage");
        const selectedLanguage = savedLanguage || "en"; // 默认设置为英文
        // 将选中的语言设置到 locale 中
        locale.value = selectedLanguage;
        // 语言切换函数
        const changeLanguage = (event) => {
            const newLanguage = event.target.value;
            locale.value = newLanguage; // 更新 locale
            // 将新的语言设置保存到缓存
            localStorage.setItem("selectedLanguage", newLanguage);
        };
        // 语言切换部分end ---------------------
        // 编辑器主题设置部分 ---------------------
        // 初始化主题设置，优先从缓存读取 
        const selectedFile = ref({ content: "初始内容" });
        const height = "200";
        const editLanguage = ref(savedLanguage || "en");
        const editorTheme = ref(localStorage.getItem("editorTheme") || "default");
        const editorAreaTheme = ref(localStorage.getItem("editorAreaTheme") || "default");
        const previewAreaTheme = ref(localStorage.getItem("previewAreaTheme") || "default");
        // 添加到缓存中
        const saveTheme = (key, value) => {
            localStorage.setItem(key, value);
        };
        // 编辑器主题设置部分end ---------------------
        return {
            selectedFile,
            height,
            editLanguage,
            editorTheme,
            editorAreaTheme,
            previewAreaTheme,
            saveTheme,
            selectedLanguage,
            changeLanguage,
        };
    },
    methods: {
        saveSettings() {
            // 保存设置逻辑
            alert("暂未上线");
        },
        remakeSettings() {
            // 重置设置逻辑
            location.reload();
            localStorage.clear();
            alert("重制成功");
        },
    }
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Editormd
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
    __VLS_styleScopedClasses['theme-card'];
    __VLS_styleScopedClasses['theme-card'];
    __VLS_styleScopedClasses['theme-card'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['card'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("setting"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr, __VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("language") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ id: ("select_language"), for: ("languageSelect"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.changeLanguage) }, value: ((__VLS_ctx.selectedLanguage)), ...{ class: ("language-select select") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("en"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("zh-CN"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr, __VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("theme-preview") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("radio"), name: ("theme"), value: ("theme-light"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("theme-card theme-light") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("radio"), name: ("theme"), value: ("theme-dark"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("theme-card theme-dark") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("radio"), name: ("theme"), value: ("theme-tech"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("theme-card theme-tech") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr, __VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("themes") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("theme_label"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (...[$event]) => {
                __VLS_ctx.saveTheme('editorTheme', __VLS_ctx.editorTheme);
            } }, value: ((__VLS_ctx.editorTheme)), id: ("editormd-theme-select"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ selected: ("selected"), value: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (...[$event]) => {
                __VLS_ctx.saveTheme('editorAreaTheme', __VLS_ctx.editorAreaTheme);
            } }, value: ((__VLS_ctx.editorAreaTheme)), id: ("editor-area-theme-select"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ selected: ("selected"), value: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (...[$event]) => {
                __VLS_ctx.saveTheme('previewAreaTheme', __VLS_ctx.previewAreaTheme);
            } }, value: ((__VLS_ctx.previewAreaTheme)), id: ("preview-area-theme-select"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ selected: ("selected"), value: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("test-editormd"), });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Editormd;
    /** @type { [typeof __VLS_components.Editormd, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ value: ((__VLS_ctx.selectedFile.content)), height: ((__VLS_ctx.height)), editLanguage: ((__VLS_ctx.editLanguage)), editorTheme: ((__VLS_ctx.editorTheme)), editorAreaTheme: ((__VLS_ctx.editorAreaTheme)), previewAreaTheme: ((__VLS_ctx.previewAreaTheme)), }));
    const __VLS_2 = __VLS_1({ value: ((__VLS_ctx.selectedFile.content)), height: ((__VLS_ctx.height)), editLanguage: ((__VLS_ctx.editLanguage)), editorTheme: ((__VLS_ctx.editorTheme)), editorAreaTheme: ((__VLS_ctx.editorAreaTheme)), previewAreaTheme: ((__VLS_ctx.previewAreaTheme)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.saveSettings) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.remakeSettings) }, });
    __VLS_styleScopedClasses['settings'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['language'];
    __VLS_styleScopedClasses['language-select'];
    __VLS_styleScopedClasses['select'];
    __VLS_styleScopedClasses['theme-preview'];
    __VLS_styleScopedClasses['theme-card'];
    __VLS_styleScopedClasses['theme-light'];
    __VLS_styleScopedClasses['navbar'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['theme-card'];
    __VLS_styleScopedClasses['theme-dark'];
    __VLS_styleScopedClasses['navbar'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['theme-card'];
    __VLS_styleScopedClasses['theme-tech'];
    __VLS_styleScopedClasses['navbar'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['themes'];
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
