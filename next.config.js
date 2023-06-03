/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pages: [
    {path: '/AboutMe',
      component: require('./pages/AboutMe.js').default
    },
    {path: '/Business',
      component: require('./pages/Business.js').default
    },
    {path: '/Couples',
      component: require('./pages/Couples.js').default
    },
    {path: '/Families',
      component: require('./pages/Families.js').default
    },
    {path: '/Solos',
      component: require('./pages/Solos.js').default
    }
  ]

}

module.exports = nextConfig
