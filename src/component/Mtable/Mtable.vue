<style src="./Mtable.scss" module lang="scss"></style>
<script src="./Mtable.js"></script>

<template>
  <b-card :header="caption">
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <template slot="status" slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
        <b-button size="sm" @click.stop="info(data.item, data.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
      </template>
      
    </b-table>
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
  </b-card>
</template>
