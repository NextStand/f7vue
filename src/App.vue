<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
     <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar class="bg-green">
              <!-- <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left> -->
              <f7-nav-center class="color-white" sliding>{{navbarTitle}}</f7-nav-center>
            <!--   <f7-nav-right>
                  <f7-link icon="icon-bars" open-panel="right"></f7-link>
                </f7-nav-right> -->
          </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar -->
            <tab1 ref="message" v-show="'tab1'==activedTab" id="tab1"></tab1>
            <tab2 ref="online" v-show="'tab2'==activedTab" id="tab2"></tab2>
            <tab3 ref="contact" v-show="'tab3'==activedTab" id="tab3"></tab3>
            <f7-toolbar tabbar labels>
              <f7-link style="padding:3px 0 2px 0" :icon="'icon icon-bars'" text="tab1" tab-link="#tab1" :active="'tab1'==activedTab"
                @click="tabActived('tab1')">
              </f7-link>
              <f7-link style="padding:3px 0 2px 0" :icon="'icon icon-bars'" text="tab3" tab-link="#tab2" :active="'tab2'==activedTab"
                @click="tabActived('tab2')">
              </f7-link>
              <f7-link style="padding:3px 0 2px 0" :icon="'icon icon-bars'" text="tab3" tab-link="#tab3" :active="'tab3'==activedTab"
                @click="tabActived('tab3')">
              </f7-link>
            </f7-toolbar>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
    <!-- Login Screen -->
    <!-- :opened="true" -->
    <f7-login-screen id="login-screen" >
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-item>
              <f7-label>Username</f7-label>
              <f7-input name="username" placeholder="Username" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Password</f7-label>
              <f7-input name="password" type="password" placeholder="Password"></f7-input>
            </f7-list-item>
          </f7-list>
          <f7-list>
            <f7-list-button title="Sign In" login-screen-close></f7-list-button>
            
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>

  </div>
</template>

<script>
import tab1 from "./pages/Tab1";
import tab2 from "./pages/Tab2";
import tab3 from "./pages/Tab3";
export default {
  data() {
    return {
      activedTab: "tab1"
    };
  },
  methods: {
    tabActived(tab) {
      this.activedTab = tab;
    }
  },
  computed: {
    navbarTitle() {
      switch (this.activedTab) {
        case "tab1":
          return "tab1";
        case "tab2":
          return "tab2";
        case "tab3":
          return "tab3";
      }
    }
  },
  components: {
    tab1,
    tab2,
    tab3
  }
};
</script>
