import { ref } from "vue";
import FileTreeItem from "./FileTreeItem.vue";
import Editormd from "./Editormd.vue";
export default (await import('vue')).defineComponent({
    name: "ParentComponent",
    components: {
        FileTreeItem, // 注册组件
        Editormd
    },
    setup() {
        const selectedFile = ref({ content: "初始内容" });
        const height = "100%";
        const editLanguage = ref(localStorage.getItem("selectedLanguage") || "en");
        const editorTheme = localStorage.getItem("editorTheme") ?? "default";
        const editorAreaTheme = localStorage.getItem("editorAreaTheme") ?? "default";
        const previewAreaTheme = localStorage.getItem("previewAreaTheme") ?? "default";
        return {
            selectedFile,
            height,
            editLanguage,
            editorTheme,
            editorAreaTheme,
            previewAreaTheme,
        };
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
                    preview: "这是一个示例笔记摘要不不不不不不不不不不不不不不不不不不不不不不不cccc不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不cccc不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不cccc不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不cccc不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不cccc不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不cccc不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不...",
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
        toggleFullscreen() {
            this.isFullscreen = !this.isFullscreen;
        },
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            FileTreeItem, // 注册组件
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
    __VLS_styleScopedClasses['file-list'];
    __VLS_styleScopedClasses['file-list'];
    __VLS_styleScopedClasses['note-card'];
    __VLS_styleScopedClasses['md-editor'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("editor-page"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("action-bar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t('editor_view.left.title'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.createNewFile) }, });
    (__VLS_ctx.$t('editor_view.left.new_file'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.createNewFolder) }, });
    (__VLS_ctx.$t('editor_view.left.new_folder'));
    if (__VLS_ctx.selectedFile) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.selectedFile)))
                        return;
                    __VLS_ctx.selectedFile = null;
                } }, ...{ class: ("back-to-home-btn") }, });
        (__VLS_ctx.$t('editor_view.left.back_to_edit_page'));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({ ...{ class: ("sidebar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("file-tree") }, });
    for (const [file] of __VLS_getVForSourceType((__VLS_ctx.files))) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.FileTreeItem;
        /** @type { [typeof __VLS_components.FileTreeItem, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSelectFile': {} }, key: ((file.id)), item: ((file)), }));
        const __VLS_2 = __VLS_1({ ...{ 'onSelectFile': {} }, key: ((file.id)), item: ((file)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        let __VLS_6;
        const __VLS_7 = {
            onSelectFile: (__VLS_ctx.selectFile)
        };
        let __VLS_3;
        let __VLS_4;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("editor-area") }, });
    if (!__VLS_ctx.selectedFile) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("note-cards") }, });
        for (const [note] of __VLS_getVForSourceType((__VLS_ctx.notes))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((note.id)), ...{ class: ("note-card") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("note-card-title") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (note.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("note-card-preview") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("preview-text") }, });
            (note.preview);
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("md-editor") }, });
        const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.Editormd;
        /** @type { [typeof __VLS_components.Editormd, ] } */
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ value: ((__VLS_ctx.selectedFile.content)), height: ((__VLS_ctx.height)), editLanguage: ((__VLS_ctx.editLanguage)), editorTheme: ((__VLS_ctx.editorTheme)), editorAreaTheme: ((__VLS_ctx.editorAreaTheme)), previewAreaTheme: ((__VLS_ctx.previewAreaTheme)), }));
        const __VLS_10 = __VLS_9({ value: ((__VLS_ctx.selectedFile.content)), height: ((__VLS_ctx.height)), editLanguage: ((__VLS_ctx.editLanguage)), editorTheme: ((__VLS_ctx.editorTheme)), editorAreaTheme: ((__VLS_ctx.editorAreaTheme)), previewAreaTheme: ((__VLS_ctx.previewAreaTheme)), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    }
    __VLS_styleScopedClasses['action-bar'];
    __VLS_styleScopedClasses['back-to-home-btn'];
    __VLS_styleScopedClasses['sidebar'];
    __VLS_styleScopedClasses['file-tree'];
    __VLS_styleScopedClasses['editor-area'];
    __VLS_styleScopedClasses['note-cards'];
    __VLS_styleScopedClasses['note-card'];
    __VLS_styleScopedClasses['note-card-title'];
    __VLS_styleScopedClasses['note-card-preview'];
    __VLS_styleScopedClasses['preview-text'];
    __VLS_styleScopedClasses['md-editor'];
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
