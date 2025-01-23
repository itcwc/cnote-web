import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
        };
    },
    methods: {
        handleRegister() {
            if (this.password !== this.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            console.log(`Registering with ${this.email} and ${this.password}`);
            this.$router.push('/login'); // 注册后跳转到登录页面
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
    __VLS_styleScopedClasses['login-prompt'];
    __VLS_styleScopedClasses['login-prompt'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    (__VLS_ctx.$t("register_view.register"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleRegister) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    (__VLS_ctx.$t("register_view.email"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), required: (true), });
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    (__VLS_ctx.$t("register_view.password"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), required: (true), });
    (__VLS_ctx.password);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    (__VLS_ctx.$t("register_view.confirm_password"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), required: (true), });
    (__VLS_ctx.confirmPassword);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
    (__VLS_ctx.$t("register_view.register"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("login-prompt") }, });
    (__VLS_ctx.$t("register_view.login1"));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/login"), }));
    const __VLS_2 = __VLS_1({ to: ("/login"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    (__VLS_ctx.$t("register_view.login2"));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['input-group'];
    __VLS_styleScopedClasses['input-group'];
    __VLS_styleScopedClasses['input-group'];
    __VLS_styleScopedClasses['login-prompt'];
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
