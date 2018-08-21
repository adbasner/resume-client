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
          id: "1",
          first_name: "First Name",
          last_name: "Last Name a",
          email: "Email a",
          phone_number: "Phone Number a",
          short_bio: "Bio a"
        },
        {
          id: "2",
          first_name: "First Name",
          last_name: "Last Name b",
          email: "Email b",
          phone_number: "Phone Number b",
          short_bio: "Bio b"
        },
        {
          id: "3",
          first_name: "First Name",
          last_name: "Last Name c",
          email: "Email c",
          phone_number: "Phone Number c",
          short_bio: "Bio c"
        },
        {
          id: "4",
          first_name: "First Name",
          last_name: "Last Name d",
          email: "Email d",
          phone_number: "Phone Number d",
          short_bio: "Bio d"
        },
      ]
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/students").then(function(response) {
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
        id: "1",
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
        photo_url: "photo.com",

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
    axios.get("http://localhost:3000/api/students/" + this.$route.params.id).then(function(response) {
      this.student = response.data;
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