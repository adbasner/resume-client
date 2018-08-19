/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var IndexPage = {
  template: "#index-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      students: []
    };
  },
  created: function() {
    axios.get("").then(function(response) {
      console.log(response.data);
      this.students = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};

var ShowPage = {
  template: "#show-page",
  data: function() {
    return {
      resume: {
        student: {
          first_name: "Bob",
          last_name: "Jones",
          email: "email@email.com",
          phone_number: "8675309",
          short_bio: "bio goes here",
          linkedin_url: "linkedin url",
          twitter_handle: "twitter",
          website_url: "web@site.com",
          online_resume_url: "resume.com",
          github_url: "github.com/profile",
          photo_url: "photo.com"
        },
      }
    };
  },
  created: function() {
    axios.get("/api/resumes/" + this.$route.params.id).then(function(response) {
      this.resume = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/students", component: IndexPage},
    { path: "/resumes/:id", component: ShowPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});