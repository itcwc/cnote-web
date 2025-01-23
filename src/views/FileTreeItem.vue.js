export default (await import('vue')).defineComponent({
    name: "FileTreeItem",
    props: {
        item: Object,
    },
    data() {
        return {
            isOpen: false, // 控制文件夹展开/关闭状态
        };
    },
    methods: {
        toggle() {
            if (this.item.isFolder) {
                this.isOpen = !this.isOpen; // 切换文件夹展开状态
            }
            else {
                this.$emit("select-file", this.item); // 触发选择文件事件
            }
        },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("file-tree-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggle) }, ...{ class: ("item-label") }, });
    if (__VLS_ctx.item.isFolder) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.isOpen ? '📂' : '📁');
        (__VLS_ctx.item.name);
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.item.name);
    }
    if (__VLS_ctx.isOpen && __VLS_ctx.item.isFolder) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("children") }, });
        for (const [child] of __VLS_getVForSourceType((__VLS_ctx.item.children))) {
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.FileTreeItem;
            /** @type { [typeof __VLS_components.FileTreeItem, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSelectFile': {} }, key: ((child.id)), item: ((child)), }));
            const __VLS_2 = __VLS_1({ ...{ 'onSelectFile': {} }, key: ((child.id)), item: ((child)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            let __VLS_6;
            const __VLS_7 = {
                onSelectFile: (...[$event]) => {
                    if (!((__VLS_ctx.isOpen && __VLS_ctx.item.isFolder)))
                        return;
                    __VLS_ctx.$emit('select-file', child);
                }
            };
            let __VLS_3;
            let __VLS_4;
            const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
    }
    __VLS_styleScopedClasses['file-tree-item'];
    __VLS_styleScopedClasses['item-label'];
    __VLS_styleScopedClasses['children'];
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
