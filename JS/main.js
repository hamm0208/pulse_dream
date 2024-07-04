
const routes = [
  { path: '/', component: Index },
  {path: '/inquiry', component: Inquiry},
  {path: '/inquiry/:carName', name: 'inquiry', component: Inquiry},
  { path: '/daily', component: Daily},
  { path: '/family', component: Family},
  { path: '/luxury', component: Luxury},
];
const router = new VueRouter({
  routes
});

Vue.component('app-nav', {
  template: `
    <div class="latisca_text">
            <div class="container-fluid pt-2">
                <div class="row">
                    <div class="col-lg-4 logo">
                    <router-link to="/" class="index_link">
                        <p class="company_name">PORSCHE</p>
                    </router-link>
                    </div>
                    <div class="col my-3">
                        <div class="nav_links">
                            <ol class="list-inline align-items-center  ">
                                <li class="list-inline-item mx-3 d-lg-inline-block d-none">
                                  <router-link to="/daily" class="nav-link mx-3 d-lg-inline-block d-none" style="letter-spacing: 3px;">
                                    <span class='link_title'>Daily</span>
                                  </router-link>
                                </li>
                                <li class="list-inline-item mx-3 d-lg-inline-block d-none">
                                  <router-link to="/family" class="nav-link mx-3 d-lg-inline-block d-none" style="letter-spacing: 3px;">
                                    <span class='link_title'>Family</span>
                                  </router-link>
                                </li>
                                <li class="list-inline-item mx-3 d-lg-inline-block d-none">
                                  <router-link to="/luxury" class="nav-link mx-3 d-lg-inline-block d-none" style="letter-spacing: 3px;">
                                    <span class='link_title'>Luxury</span>
                                  </router-link>
                                </li>
                                <li class="list-inline-item mx-3 d-lg-inline-block d-none">
                                  <router-link to="/inquiry" class="nav-link mx-3 d-lg-inline-block d-none" style="letter-spacing: 3px;">
                                    <span class='link_title'>Inquiry</span>
                                  </router-link>
                                </li>
                                <li class="d-lg-none d-flex hamburger" onclick="showSidebar()">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <ol class="list-inline sidebar nav_links">
                        <li onclick="hideSidebar()">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" class="x" width="30"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        </li>
                        <li class="list-inline-item mx-3 my-3">
                          <router-link to="/daily" class="nav-link list-inline-item mx-3" style="letter-spacing: 3px;">
                            <span class='link_title'>Daily</span>
                          </router-link>
                        </li>
                        <li class="list-inline-item mx-3 my-3">
                          <router-link to="/family" class="nav-link list-inline-item mx-3" style="letter-spacing: 3px;">
                            <span class='link_title'>Family</span>
                          </router-link>
                        </li>
                        <li class="list-inline-item mx-3 my-3">
                          <router-link to="/luxury" class="nav-link list-inline-item mx-3" style="letter-spacing: 3px;">
                            <span class='link_title'>Luxury</span>
                          </router-link>
                        </li>
                        <li class="list-inline-item mx-3 my-3">
                          <router-link to="/inquiry" class="nav-link list-inline-item mx-3" style="letter-spacing: 3px;">
                            <span class='link_title'>Inquiry</span>
                          </router-link>
                        </li>
                    </ol>
                </div>
            </div>
      </div>
      
  `
});

new Vue({
  el: '#app',
  router
});