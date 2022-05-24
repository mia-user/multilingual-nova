<template>
  <PanelItem :index="index" :field="field">
   <template #value>
      <LanguageUI
              :field="field"
              v-on:change="redirect"
              v-on:delete="deleteLocale"
      />
    </template>
  </PanelItem>
</template>

<script>
    import LanguageUI from "./LanguageUI";
    import {global} from '../mixin/global'

    export default {
        props: ["index", "resource", "resourceName", "resourceId", "field"],
        mixins: [global],
        components: {
            LanguageUI
        },
        mounted() {
            if (
                this.field.value.style == "list" ||
                (this.field.value.style == "mix" &&
                    this.field.value.locales.length >
                    this.field.value.convert_to_list_after)
            ) {
                let locales = this.field.value.locales;
                locales.map(function (item) {
                    if (item.translated) item.label += " -translated";
                    return item;
                });
                Object.assign(this.field, {options: this.field.value.locales});
            }
        }
    };
</script>
