<template>
  <v-tab-item>
    <v-row
      class="mt-2">
      <v-col>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >

          <v-text-field
            class="mb-3"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            class="mb-6"
            v-model="password"
            :counter="10"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>

          <v-checkbox
            v-model="rememberCheckbox"
            label="Remember me"
          ></v-checkbox>

        </v-form>
      </v-col>
    </v-row>

    <v-row
      class="mb-3"
      justify="space-between">
      <v-col
      >

        <v-btn
          @click="activateTab('login')"
          color="teal"
        >
        Login
        </v-btn>

      </v-col>

      <v-col
        class="text-right"
      >

        <v-btn
          @click="activateTab('restore')"
          color="warning"
          plain
        >
        Restore
        </v-btn>

      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row
      class="my-3">
      <v-col
      >

        <v-btn
          text
          @click="activateTab('register')"
        >
        Register
        </v-btn>

      </v-col>
    </v-row>

  </v-tab-item>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'LoginTabItem',
  props: ['tab'],
  data: () => ({
    valid: true,
    password: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8 && v.length <= 10) || 'Name must be more then 8 and less than 10 characters',
    ],
    rememberCheckbox: false,
  }),

  methods: {
    activateTab(tabCode) {
      let tab = -1;

      switch (tabCode) {
        case 'login':
          tab = 0;
          break;
        case 'register':
          tab = 1;
          break;
        case 'restore':
          tab = 2;
          break;
      }

      if (tab > -1) {
        this.$emit('activateTab', tab);
      }

    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },

  computed:{

  },

}
</script>
