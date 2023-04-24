

<template>
  <div>
    <component :is="MarkdownComponent" v-bind="attrs" />
  </div>
</template>

<script>
import { useExtensions } from "@directus/extensions-sdk";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	setup(props, {attrs, emit}) {
		const { interfaces } = useExtensions();
		const { component: MarkdownComponent } = interfaces.value.find(
		(i) => i.id === "input-rich-text-md"
		);
		return {
			attrs,
			MarkdownComponent,
		};
	}
})
</script>