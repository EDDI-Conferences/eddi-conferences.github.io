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
          description: "17th European DDI User Conference (1-5 December 2025)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/current/";
          },
        },{id: "nav-past-conferences",
          title: "Past Conferences",
          description: "Previous EDDI Conferences",
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
          description: "Presentations, papers and workshop materials from past EDDI Conferences",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/About/";
          },
        },{id: "conferences-eddi-2018",
          title: 'EDDI 2018',
          description: "10th European DDI User Conference (Berlin)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2018/";
            },},{id: "conferences-eddi-2019",
          title: 'EDDI 2019',
          description: "11th European DDI User Conference (Tampere)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2019/";
            },},{id: "conferences-eddi-2020",
          title: 'EDDI 2020',
          description: "12th European DDI User Conference (Paris)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2020/";
            },},{id: "conferences-eddi-2021",
          title: 'EDDI 2021',
          description: "13th European DDI User Conference (Paris)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2021/";
            },},{id: "conferences-eddi-2022",
          title: 'EDDI 2022',
          description: "14th European DDI User Conference (Paris)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2022/";
            },},{id: "conferences-eddi-2023",
          title: 'EDDI 2023',
          description: "15th European DDI User Conference (Ljubljana)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2023/";
            },},{id: "conferences-eddi-2024",
          title: 'EDDI 2024',
          description: "16th European DDI User Conference (Chur)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2024/";
            },},{id: "conferences-eddi-2009",
          title: 'EDDI 2009',
          description: "1st European DDI User Conference (Bonn)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2009/";
            },},{id: "conferences-eddi-2010",
          title: 'EDDI 2010',
          description: "2nd European DDI User Conference (Utrecht)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2010/";
            },},{id: "conferences-eddi-2011",
          title: 'EDDI 2011',
          description: "3rd European DDI User Conference (Gotheburg, Sweden)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2011/";
            },},{id: "conferences-eddi-2012",
          title: 'EDDI 2012',
          description: "4th European DDI User Conference (Bergen)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2012/";
            },},{id: "conferences-eddi-2013",
          title: 'EDDI 2013',
          description: "5th European DDI User Conference (Paris)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2013/";
            },},{id: "conferences-eddi-2014",
          title: 'EDDI 2014',
          description: "6th European DDI User Conference (London)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2014/";
            },},{id: "conferences-eddi-2015",
          title: 'EDDI 2015',
          description: "7th European DDI User Conference (Copenhagen)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2015/";
            },},{id: "conferences-eddi-2016",
          title: 'EDDI 2016',
          description: "8th European DDI User Conference (Cologne)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2016/";
            },},{id: "conferences-eddi-2017",
          title: 'EDDI 2017',
          description: "9th European DDI User Conference (Lausanne)",
          section: "Conferences",handler: () => {
              window.location.href = "/eddi-2017/";
            },},{id: "news-presentations-and-tutorials-from-eddi-2024-are-now-available-on-zenodo",
          title: 'Presentations, and tutorials from EDDI 2024 are now available on Zenodo',
          description: "",
          section: "News",},{id: "news-in-2025-we-will-be-meeting-in-budapest-and-it-will-be-hosted-by-the-research-documentation-centre-at-the-hun-ren-centre-for-social-sciences-more-information",
          title: 'In 2025 we will be meeting in Budapest and it will be hosted...',
          description: "",
          section: "News",},{id: "news-call-for-proposals-is-now-open-we-will-be-accepting-submissions-through-1-september-2025-more-information",
          title: 'CALL FOR PROPOSALS is now OPEN. We will be accepting submissions through 1...',
          description: "",
          section: "News",},{id: "news-registration-for-eddi-2025-is-now-open",
          title: 'Registration for EDDI 2025 is now open.',
          description: "",
          section: "News",},{id: "news-draft-program-and-timetable-is-now-published",
          title: 'Draft Program and timetable is now published.',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/european-ddi.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%64%64%69%32%35-%70%72%6F%67@%67%6F%6F%67%6C%65%67%72%6F%75%70%73.%63%6F%6D", "_blank");
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
