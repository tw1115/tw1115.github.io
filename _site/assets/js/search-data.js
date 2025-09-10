// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/cv_twkim_250811.pdf";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research-projects",
          title: "Research Projects",
          description: "An archive of posters and reports from my research projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-updates",
          title: "Updates",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/updates/index.html";
          },
        },{id: "post-my-first-co-authored-publication",
        
          title: "My First Co-Authored Publication",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/FirstPaper/";
          
        },
      },{id: "post-undergraduate-research-assistant-at-prof-nam-soon-choi-39-s-lab-at-kaist",
        
          title: "Undergraduate Research Assistant at Prof. Nam-Soon Choi&#39;s lab at KAIST",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/NewURA/";
          
        },
      },{id: "post-wrapping-up-my-georgia-tech-exchange-journey",
        
          title: "Wrapping up my Georgia Tech Exchange Journey",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/GeorgiaTechExchange/";
          
        },
      },{id: "post-georgia-tech-19th-urop-spring-symposium",
        
          title: "Georgia Tech 19th UROP Spring Symposium",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/UROPPoster/";
          
        },
      },{id: "post-georgia-tech-12th-annual-mrs-poster-competition",
        
          title: "Georgia Tech 12th Annual MRS Poster Competition",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/MRSPoster/";
          
        },
      },{id: "post-exchange-semester-at-georgia-institute-of-technology",
        
          title: "Exchange Semester at Georgia Institute of Technology",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/GeorgiaTechExchange/";
          
        },
      },{id: "post-excellent-social-service-personnel-award",
        
          title: "Excellent Social Service Personnel Award",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/BestAgentAward/";
          
        },
      },{id: "post-best-study-award-at-kpf-student-academic-conference",
        
          title: "Best Study Award at KPF Student Academic Conference",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/KPFBestStudyAward/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-i-started-a-new-undergraduate-research-assistant-in-prof-nam-soon-choi-39-s-lab-at-kaist",
          title: 'I started a new undergraduate research assistant in Prof. Nam-Soon Choi&amp;#39;s lab at...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%61%65%77%31%31%31%35@%6B%61%69%73%74.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/justaew0o", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/taewoo-kim-0a1619260", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
