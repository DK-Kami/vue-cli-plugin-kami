<template>
  <v-navigation-drawer
    class="drawer"
    color="blue-grey lighten-5"
    permanent
    overflow
    clipped
    app
  >
    <v-list avatar nav>
      <template v-for="(item, index) in menu">
        <v-list-group
          v-if="item.items && item.items.length"
          :prepend-icon="item.icon"
          :value="item.value"
          :key="item.icon + index"
        >
          <template v-slot:activator>
            <v-list-item-title class="body-2">{{ item.text }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(subItem, index) in item.items"
            :key="subItem.icon + index"
            :to="subItem.to"
            class="cursor--pointer body-2"
            ripple
          >
            <v-list-item-avatar>
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-item-avatar>

            {{ subItem.text }}
          </v-list-item>
        </v-list-group>

        <v-list-item
          v-else
          :key="item.icon"
          :to="item.to"
          class="cursor--pointer body-2"
          ripple
        >
          <v-list-item-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-avatar>

          {{ item.text }}
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
/**
 * Компонент бокового меню
 */

const menu = [
  { text: '',    icon: '',   to: '/' },
];

export default {
  name: 'TheMenu',

  data: () => ({
    menu,
  }),
};
</script>