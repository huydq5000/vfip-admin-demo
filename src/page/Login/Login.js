// @vue/component
// const loginApiUrl = 'api-gateway/v1/system-user/oauth/token';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: { username: '', password: '' },
    };
  },
  methods: {
    login() {
      //
      console.log(this);
      const loginApiUrl = `${this.$staticRoot}token.json`;
      // this is a sample call to json file, need to be replaced with 'post' later
      this.$http.get(loginApiUrl, this.loginForm).then(
        response => {
          // process login information
          console.log(response.data.access_token);
          this.$localStorage.set('access_token', response.data.access_token);
          this.$router.push({path: 'home'});
        },
        () => {
          this.$refs.myModal.show();
        },
      );
    },
    hideModal() {
      this.$refs.myModal.hide();
    },
  },
};
