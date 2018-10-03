// @vue/component
export default {
  name: 'HomePage',
  mounted() {
    this.$localStorage.set('someNumber', 1234);
  },
};
