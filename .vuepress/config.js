module.exports = {
  head: [
      ['link', { rel: 'icon', href: 'https://files.reset.best/s/kiGojy889fd8EL4/preview' }]
  ],            
  title: "ReSeT Wiki",
  description: "Wiki ReSeTu",
  theme: 'thindark',
  themeConfig: {
    search: false,
    nav: [
      { text: 'Web', link: 'https://reset.best' }
    ],
    sidebar: [
      {
        title: 'Domů',
        path: '/home/',
        collapsable: false,
        children: [
          '/home/'
        ]
      },
      {
        title: 'Lobby',
        path: '/lobby/',
        collapsable: false,
        children: [
          '/lobby/'
        ]
      },
      {
        title: 'Creative',
        path: '/creative/',
        collapsable: false,
        children: [
          '/creative/'
        ]
      },
      {
        title: 'Technic 1.12',
        path: '/technicpack/',
        collapsable: false,
        children: [
          '/technicpack/'
        ]
      },
      {
        title: 'Skyblock',
        path: '/skyblock/',
        collapsable: false,
        children: [
          '/skyblock/'
        ]
      }
    ]
  },
  plugins: ['vuepress-theme-cool@1.2.0']
}