<template>
    <v-navigation-drawer
      absolute
      right
      class="lrr-drawer"
      :permanent="showLRRDrawer"
      :value="showLRRDrawer"
    >

    <template v-slot:prepend>
      <v-list-item two-line>

        <v-list-item-avatar>
          <v-icon>{{ currentLRRIcon }}</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          {{ currentLRRTitle }}
        </v-list-item-content>

        <v-btn
          icon
          @click="closeLRRDrawer"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-row
      class="mt-2 px-6">
      <v-col>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >

          <v-expansion-panels
            :value="panels"
            multiple
            >
          <v-expansion-panel class="invisable">
            <v-expansion-panel-content>
              <v-text-field
                v-model="name"
                ref="name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="invisable">
            <v-expansion-panel-content>
              <v-text-field
                v-model="email"
                ref="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>

        <v-expansion-panel class="invisable">
          <v-expansion-panel-content>
            <v-text-field
              v-model="password"
              ref="password"
              :rules="passwordRules"
              label="Password"
              required
            ></v-text-field>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="invisable">
          <v-expansion-panel-content>
            <v-text-field
              v-model="confirmPassword"
              ref="confirmPassword"
              :rules="confirmPasswordRules"
              label="Confirm Password"
              required
            ></v-text-field>
          </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>

        </v-form>
      </v-col>
    </v-row>

    <v-row
      class="mb-3 px-6"
      justify="space-between">
      <v-col
      >

        <v-btn
          @click="startAction()"
          color="teal"
        >
        OK
        </v-btn>

      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row
      class="my-3 px-6"
      justify="space-between">

      <v-col
      >
        <v-btn
          @click="activateTab(1)"
          plain
        >
        Login
        </v-btn>
      </v-col>

      <v-col
      >
        <v-btn
          @click="activateTab(2)"
          plain
        >
        Register
        </v-btn>
      </v-col>

      <v-col
      >
        <v-btn
          @click="activateTab(3)"
          plain
        >
        Restore
        </v-btn>
      </v-col>

    </v-row>

    </v-navigation-drawer>
</template>

<script>

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

import LoginTabItem from './LoginTabItem';

const STATE_LOGIN = 1;
const STATE_REGISTER = 2;
const STATE_RESTORE = 3;

export default {
  name: 'LRRDrawer',
  components:{
    LoginTabItem,
  },
  data: () => ({
    group: true,
    mini: true,
    valid: true,
    currentLRRState: 1,
    name: '',
    email: 'artemdutchak@gmail.com',
    password: 'artart66',
    confirmPassword: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length >= 2) || 'Name must be more then 2',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8 && v.length <= 10) || 'Password must be more then 8 and less than 10 characters',
    ],
    confirmPasswordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8 && v.length <= 10) || 'Password must be more then 8 and less than 10 characters',
    ],
  }),

  methods:{
    activateTab(LRRState){
      this.currentLRRState = LRRState;
    },
    toggleDrawer(){
      this.drawer = !this.drawer;
    },
    startAction(){
      const data = this.makeSendData();
      const url = this.makeURL();

      this.$sendData(url, data).then(response => {
        this.callbackAction(url, response);
      });
    },
    makeSendData(){
      const sendData = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword,
      };
      switch (this.currentLRRState) {
        case STATE_LOGIN:
          delete sendData.name;
          delete sendData.password_confirmation;
          break;
        case STATE_REGISTER:

          break;
        case STATE_RESTORE:
          delete sendData.name;
          delete sendData.password;
          delete sendData.password_confirmation;
          break;
      }
      return sendData;
    },
    callbackAction(url, response){
      switch (url) {
        case 'login':
          this.loginCallbackAction(response)
          break;
        case 'register':
          this.registerCallbackAction(response)
          break;
      }
    },
    loginCallbackAction(response){
      if (response.success) {
        this.setUser(response.data);
        this.closeLRRDrawer();
      }
    },
    registerCallbackAction(response){

    },
    makeURL(){
      let url = false;
      switch (this.currentLRRState) {
        case STATE_LOGIN:
          url = 'login';
          break;
        case STATE_REGISTER:
          url = 'register';
          break;
        case STATE_RESTORE:
          url = 'password/reset';
          break;
      }
      return url;
    },
    ...mapActions({
      closeLRRDrawer: 'drawerModule/closeLRRDrawer',
      setUser: 'userModule/setUser'
    }),
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
    title(){
      return 'App Bar Title'
    },
    currentLRRIcon(){
      let icon = '';
      switch (this.currentLRRState) {
        case STATE_LOGIN:
          icon = 'mdi-login';
          break;
        case STATE_REGISTER:
          icon = 'mdi-account-plus';
          break;
        case STATE_RESTORE:
          icon = 'mdi-restore';
          break;

      }
      return icon;
    },
    currentLRRTitle(){
      let title = '';
      switch (this.currentLRRState) {
        case STATE_LOGIN:
          title = 'Login';
          break;
        case STATE_REGISTER:
          title = 'Register';
          break;
        case STATE_RESTORE:
          title = 'Restore';
          break;

      }
      return title;
    },
    ...mapGetters({
      showLRRDrawer: 'drawerModule/showLRRDrawer'
    }),

    isLoginView(){ return this.currentLRRState === STATE_LOGIN; },
    isRegisterView(){ return this.currentLRRState === STATE_REGISTER; },
    isRestoreView(){ return this.currentLRRState === STATE_RESTORE; },

    showNameField(){ return this.isRegisterView; },
    showEmailField(){ return true; },
    showPasswordField(){ return (this.isLoginView || this.isRegisterView); },
    showConfirmPasswordField(){ return this.isRegisterView; },

    panels(){
      const out = [];
      if (this.showNameField) { out.push(0); }
      if (this.showEmailField) { out.push(1); }
      if (this.showPasswordField) { out.push(2); }
      if (this.showConfirmPasswordField) { out.push(3); }
      return out;
    },

  },

  mounted(){

  },

}
</script>
