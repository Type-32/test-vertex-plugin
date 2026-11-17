// \0vertex-shared:@type32/vertex-plugin
var e = globalThis.__vertexModules["@type32/vertex-plugin"].definePlugin, t = globalThis.__vertexModules.vue.createElementBlock, n = globalThis.__vertexModules.vue.createElementVNode, r = globalThis.__vertexModules.vue.createVNode, i = globalThis.__vertexModules.vue.defineComponent, a = globalThis.__vertexModules.vue.h, o = globalThis.__vertexModules.vue.openBlock, s = globalThis.__vertexModules.vue.ref, c = globalThis.__vertexModules.vue.resolveComponent, l = globalThis.__vertexModules.vue.toDisplayString, u = { class: "test-vertex-plugin flex items-center gap-2 p-3 text-sm text-muted" }, d = ["src"], f = { "data-version": "" }, p = /* @__PURE__ */ i({
	__name: "View",
	props: {
		version: {},
		logo: {}
	},
	setup(e) {
		let i = e, a = s(0);
		return (e, s) => {
			let p = c("UButton");
			return o(), t("div", u, [
				n("img", {
					class: "size-4",
					src: i.logo,
					alt: ""
				}, null, 8, d),
				n("span", f, "Test plugin " + l(i.version), 1),
				r(p, {
					size: "xs",
					label: `Clicked ${a.value}`,
					onClick: s[0] ||= (e) => a.value++
				}, null, 8, ["label"])
			]);
		};
	}
}), m = e({ setup(e) {
	let t = {
		version: e.plugin.version,
		logo: e.plugin.assetUrl("logo.svg")
	};
	e.views.panel({
		id: "test-vertex-plugin",
		label: "Test plugin",
		icon: "i-lucide-flask-conical",
		defaultArea: "right",
		component: async () => ({ render: () => a(p, t) })
	});
} });
export { m as default };
