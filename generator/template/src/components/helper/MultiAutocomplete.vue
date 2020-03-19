<template>
  <v-autocomplete
    v-model="model"
    :validateOnBlur="validateOnBlur"
    :item-value="itemValue"
    :item-text="itemText"
    :disabled="disabled"
    :multiple="multiple"
    :rules="rules"
    :items="items"
    :label="label"
  >
    <v-list-item
      v-if="withSelectAll"
      slot="prepend-item"
      ripple
      @click="toggleAll"
    >
      <v-list-item-action>
        <v-icon
          :color="model && model.length > 0 ? 'primary' : ''"
        >{{ icon }}</v-icon>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>{{ labelSelectAll || 'Выбрать все' }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <!-- <template #item="data">
      <v-list-item
        v-if="!hideItems"
        ripple
        @click="select(data.item)"
      >
        <v-list-item-action>
          <v-icon
            :color="selectedItem(data.item) ? 'primary' : ''"
          >{{ selectedItemIcon(data.item) }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-layout align-center>
            <v-icon
              v-if="withIcons"
              :color="data.item.color"
              class="mr-2"
            >{{ data.item.icon }}</v-icon>
            <div>{{ itemText ? data.item[itemText] : data.item }}</div>
          </v-layout>
        </v-list-item-content>
      </v-list-item>
    </template> -->

    <v-divider class="mt-2" />
    <template #selection="data">
      <v-chip v-if="chips && data.index === 0">
        <span>{{ itemText ? data.item[itemText] : data.item }}</span>
      </v-chip>

      <span v-else-if="data.index === 0" class="mr-1">
        {{ itemText ? data.item[itemText] : data.item }}
      </span>

      <span
        v-if="data.index === 1"
        class="grey--text caption"
      >(+{{ model.length - 1 }} ещё)</span>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  name: 'RefreshSelect',
  props: {
    value: {
      type: [Array, Number, String],
    },
    items: {
      type: Array,
      default: () => [],
    },
    rules: {
      type: Array,
      default: () => [],
    },
    validateOnBlur: Boolean,
    deletableChips: Boolean,
    withSelectAll: Boolean,
    labelSelectAll: String,
    withIcons: Boolean,
    hideItems: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    itemValue: String,
    itemText: String,
    chips: Boolean,
    label: String,
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(model) {
        this.$emit('input', model);
      },
    },

    selectAll() {
      if (!this.model) return;
      return this.items.length === this.model.length;
    },
    selectSome() {
      if (!this.model) return;
      return this.model.length > 0 && !this.selectAll;
    },

    icon() {
      if (this.selectAll) return "mdi-checkbox-marked";
      if (this.selectSome) return "mdi-minus-box";

      return "mdi-checkbox-blank-outline";
    },
  },
  methods: {
    select(item) {
      if (this.itemValue) {
        item = item[this.itemValue];
      }
      if (!this.model.find(i => i === item)) {
        this.model = [item, ...this.model];
      }
      else this.model = this.model.filter(i => i !== item);
    },

    toggleAll() {
      if (this.selectAll) this.model = [];
      else if (this.itemValue) {
        this.model = this.items.map(i => i[this.itemValue]);
      }
      else {
        this.model = this.items;
      }
    },

    selectedItem(item) {
      if (this.itemValue) item = item[this.itemValue];
      return !!this.model.find(c => c === item);
    },
    selectedItemIcon(item) {
      if (this.itemValue) item = item[this.itemValue];

      if (!!this.model.find(i => i === item)) return "mdi-checkbox-marked";
      return "mdi-checkbox-blank-outline";
    },
  },
};
</script>
