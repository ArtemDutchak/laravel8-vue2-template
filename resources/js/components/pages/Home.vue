<template>

  <v-container>

    <v-row>
      <v-col class="text-center">
        <span>
          {{ title }}
        </span>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>

export default {
  name: 'Home',

  data: () => ({
    title: "_title",
  }),

  methods:{

  },

  computed:{

  },

  mounted() {

  }

}
</script>
