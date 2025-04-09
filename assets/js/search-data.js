// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-eddi-2025",
          title: "EDDI 2025",
          description: "17th European DDI User Conference",
          section: "Navigation",
          handler: () => {
            window.location.href = "/_pages/current/";
          },
        },{id: "nav-previous-eddi-conferences",
          title: "Previous EDDI Conferences",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/conferences/";
          },
        },{id: "nav-committees",
          title: "Committees",
          description: "EDDI Committees 2025",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Committees/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Presentations, papers, workshop materials from past EDDI Conferences",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "conferences-eddi-2009",
          title: 'EDDI 2009',
          description: "1st European DDI User Conference (Bonn, Germany)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2009/";
            },},{id: "conferences-eddi-2010",
          title: 'EDDI 2010',
          description: "2nd European DDI User Conference (Utrecht, Netherlands)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2010/";
            },},{id: "conferences-eddi-2011",
          title: 'EDDI 2011',
          description: "3rd European DDI User Conference (Gotheburg, Sweden)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2011/";
            },},{id: "conferences-eddi-2012",
          title: 'EDDI 2012',
          description: "4th European DDI User Conference (Bergen, Norway)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2012/";
            },},{id: "conferences-eddi-2013",
          title: 'EDDI 2013',
          description: "5th European DDI User Conference (Paris, France)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2013/";
            },},{id: "news-a-place-for-news-and-announcements",
          title: 'A place for news and announcements',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
