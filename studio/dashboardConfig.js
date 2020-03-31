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
                  buildHookId: '5e82fc8cf5b28b49c4030115',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-z4c3kdxh',
                  apiId: '32b07c05-a223-47e6-9eed-2ec186aa1945'
                },
                {
                  buildHookId: '5e82fc8c573c05242ee0120a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-afvufhue',
                  apiId: '417ef345-5c11-4217-9220-43eac8e2faee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-afvufhue.netlify.com', category: 'apps'}
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
