// @vue/component
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export default {
  name: 'Mtable',
  props: {
    caption: {
      type: String,
      default: '',
    },
    hover: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: [],
    },
    fields: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    currentPage: 1,
    perPage: 5,
    totalRows: 0,
  }),
  methods: {
    info(item, index, button) {
      console.log(item);
    },
    getBadge(status) {
      return status === 'Active'
        ? 'success'
        : status === 'Inactive'
          ? 'secondary'
          : status === 'Pending'
            ? 'warning'
            : status === 'Banned'
              ? 'danger'
              : 'primary';
    },
    getRowCount(items) {
      return items.length;
    },
  },
};
