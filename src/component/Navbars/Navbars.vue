<style src="./Navbars.scss" module lang="scss"></style>
<script src="./Navbars.js"></script>

<template>
  <div>
      <AppHeader fixed v-show="signed_in()">
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" :src="`${$staticRoot}images/logo.png`" width="89" height="25" alt="Admin Full Logo">
        <img class="navbar-brand-minimized" :src="`${$staticRoot}images/logo.png`" width="30" height="30" alt="Admin Minimized Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>
        <b-nav-item class="px-3" to="/users" exact>Users</b-nav-item>
        <b-nav-item class="px-3">Settings</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">        
        <b-nav-item class="px-3" v-on:click="signout()">Sign Out</b-nav-item>
        <!-- <DefaultHeaderDropdownAccnt/> -->
      </b-navbar-nav>
      <!-- <AsideToggler class="d-none d-lg-block" />
      <AsideToggler class="d-lg-none" mobile /> -->
    </AppHeader>
    <div class="app-body">
    <AppSidebar fixed  v-show="signed_in()">
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </main>
    </div>
  </div>
</template>