// @vue/component
import nav from '../../_nav';

import {
  Header as AppHeader,
  SidebarToggler,
  Sidebar as AppSidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  Aside as AppAside,
  AsideToggler,
  Footer as TheFooter,
  Breadcrumb,
} from '@coreui/vue';

export default {
  name: 'Navbars',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
  },
  data() {
    return {
      signed_in: () => {
        //console.log(this.$router.history.current.path == '/login');
        return this.$router.history.current.path !== '/login';
      },
      nav: nav.items,
    };
  },
  methods: {
    signout() {
      this.$localStorage.remove('access_token');
      this.$router.push({path:'login'});
    }
  },
  created() {

  },
};
