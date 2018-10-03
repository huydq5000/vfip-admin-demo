<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-primary">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Scooter online</p>
          </b-card-body>
          <CardLineChart chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-info">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
              <template slot="button-content">
                <i class="icon-location-pin"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Newly registered this month</p>
          </b-card-body>
          <CardLineChart chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-warning">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Deactivated scooters</p>
          </b-card-body>
          <CardLineChart chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-danger">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <BarChart chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
      </b-col>
    </b-row>

    <b-card>
      <b-row>
        <b-col sm="5">
          <h4 id="traffic" class="card-title mb-0">Server Traffic</h4>
          <div class="small text-muted">November 2018</div>
        </b-col>
        <b-col sm="7" class="d-none d-md-block">
          <b-button type="button" variant="primary" class="float-right"><i class="icon-cloud-download"></i></b-button>
          <b-button-toolbar class="float-right" aria-label="Toolbar with buttons group">
            <b-form-radio-group class="mr-3" id="radiosBtn" buttons button-variant="outline-secondary" v-model="selected" name="radiosBtn">
              <b-form-radio class="mx-0" value="Day">Day</b-form-radio>
              <b-form-radio class="mx-0" value="Month">Month</b-form-radio>
              <b-form-radio class="mx-0" value="Year">Year</b-form-radio>
            </b-form-radio-group>
          </b-button-toolbar>
        </b-col>
      </b-row>
      <MainChart chartId="main-chart-01" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></MainChart>
      <div slot="footer">
        <b-row class="text-center">
          <b-col class="mb-sm-2 mb-0">
            <div class="text-muted">Visits</div>
            <strong>29.703 Users (40%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="success" :value="40"></b-progress>
          </b-col>
          <b-col class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Unique</div>
            <strong>24.093 Users (20%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="info" :value="20"></b-progress>
          </b-col>
          <b-col class="mb-sm-2 mb-0">
            <div class="text-muted">Pageviews</div>
            <strong>78.706 Views (60%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="warning" :value="60"></b-progress>
          </b-col>
          <b-col class="mb-sm-2 mb-0">
            <div class="text-muted">New Users</div>
            <strong>22.123 Users (80%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="danger" :value="80"></b-progress>
          </b-col>
          <b-col class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Bounce Rate</div>
            <strong>Average Rate (40.15%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" :value="40"></b-progress>
          </b-col>
        </b-row>
      </div>
    </b-card>
    <b-row>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-facebook">
            <i class="fa fa-facebook"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-01" :data="[65, 59, 84, 84, 51, 55, 40]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">89k</div>
              <div class="text-uppercase text-muted small">friends</div>
            </div>
            <div>
              <div class="text-value">459</div>
              <div class="text-uppercase text-muted small">feeds</div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-twitter">
            <i class="fa fa-twitter"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-02" :data="[1, 13, 9, 17, 34, 41, 38]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">973k</div>
              <div class="text-uppercase text-muted small">followers</div>
            </div>
            <div>
              <div class="text-value">1.792</div>
              <div class="text-uppercase text-muted small">tweets</div>
            </div>
          </div>
          </div>
      </b-col>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-linkedin">
            <i class="fa fa-linkedin"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-03" :data="[78, 81, 80, 45, 34, 12, 40]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">500+</div>
              <div class="text-uppercase text-muted small">contacts</div>
            </div>
            <div>
              <div class="text-value">292</div>
              <div class="text-uppercase text-muted small">feeds</div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-google-plus">
            <i class="fa fa-google-plus"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-04" :data="[35, 23, 56, 22, 97, 23, 64]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">894</div>
              <div class="text-uppercase text-muted small">followers</div>
            </div>
            <div>
              <div class="text-value">92</div>
              <div class="text-uppercase text-muted small">circles</div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    
  </div>
</template>