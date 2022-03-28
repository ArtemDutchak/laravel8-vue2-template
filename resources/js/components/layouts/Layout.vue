<template>
  <transition>

      <component :is="Component" :key="route.path" />
  </transition>
</template>

<script>


export default {
  name: 'Layout',
  data: ()=>({

  }),
  methods: {

  },
  computed: {

  },
  created() {

  },
  beforeUnmount() {

  }
};
</script>
