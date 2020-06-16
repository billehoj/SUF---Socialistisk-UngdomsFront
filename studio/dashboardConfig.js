export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee8bddd0e6a9901dd0a89b1',
                  title: 'Sanity Studio',
                  name: 'SUF---Socialistisk-UngdomsFront-studio',
                  apiId: 'dc6a4d45-03c8-40e3-8a01-f1e77d86b90d'
                },
                {
                  buildHookId: '5ee8bddd5638cf026c08204e',
                  title: 'Landing pages Website',
                  name: 'SUF---Socialistisk-UngdomsFront',
                  apiId: '83d332c3-2aef-4ded-b2d8-714e04bf8685'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/billehoj/SUF---Socialistisk-UngdomsFront',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://SUF---Socialistisk-UngdomsFront.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
