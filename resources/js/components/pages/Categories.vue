<template>
  <div class="page">

    <h3 class="text-uppercase text-h3 my-5">
      {{ $t('title.categories') }}
    </h3>

    <v-card
      class="mx-auto"
    >

      <v-list
        subheader
        two-line
        flat
      >
        <v-subheader>{{ $t('title.saved_categories') }}</v-subheader>

          <v-list-item>
            <template v-slot:default="{ active, }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="primary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-checkbox
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="primary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Video sounds</v-list-item-title>
                <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="primary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Invites</v-list-item-title>
                <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

      </v-list>
    </v-card>


  </div>
</template>

<script>

export default {
  name: 'Categories',

  data: () => ({
    title: "categories",
  }),

  methods:{

  },

  computed:{

  },

  mounted() {

  }

}
</script>
