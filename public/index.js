/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Find and view the best developer resumes"
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
      students: [
        {
          id: "",
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          short_bio: "",
          linkedin_url: "",
          twitter_handle: "",
          website_url: "",
          online_resume_url: "",
          github_url: "",
          photo_url: ""
        }
      ]
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
      student: {
        information: {
          first_name: "Bob",
          last_name: "Jones",
          email: "email@email.com",
          phone_number: "8675309",
          short_bio: "bio goes here",
          linkedin_url: "linkedin url",
          twitter_handle: "twitterdev",
          website_url: "web@site.com",
          online_resume_url: "resume.com",
          github_url: "github.com/profile",
          photo_url: "photo.com"
        },

        experiences: [
          {
            start_date: "birth",
            end_date: "death",
            job_title: "food eater",
            company_name: "the best place to eat",
            details: "I ate lots of food and kiwis with no skin"
          },
          {
            start_date: "birth",
            end_date: "death",
            job_title: "food eater",
            company_name: "the best place to eat",
            details: "I ate lots of food and kiwis with no skin"
          },
        ],

        educations: [
          {
            start_date: "last year",
            end_date: "this year",
            degree: "bs",
            university_name: "school of hard knocks",
            details: "JZ taught me everything"
          },
          {
            start_date: "last year",
            end_date: "this year",
            degree: "bs",
            university_name: "school of hard knocks",
            details: "JZ taught me everything"
          },
        ],

        skills: [
          {
            skill_name: "Eating food"
          },
          {
            skill_name: "Eating food"
          },
        ],

        capstones: [
          {
            name: "Mega Capstone",
            description: "vary cool capstone",
            url: "awesomesite.com",
            image_url: "capstone.url"
          },
          {
            name: "Mega Capstone",
            description: "vary cool capstone",
            url: "awesomesite.com",
            image_url: "capstone.url"
          },
        ]
      }
    };
  },
  created: function() {
    console.log(this.student);
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
    { path: "/students/:id", component: ShowPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});