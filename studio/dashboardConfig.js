export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5de162fb9f03ff7f37742929',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-2-studio-5one5bpv',
                  apiId: 'f0ec21b8-5743-4e2f-b3f6-88b36c80f9f3'
                },
                {
                  buildHookId: '5de162fc8180f2e027960529',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-2-web-9q3nmvqw',
                  apiId: '4c39182c-7399-4d0b-a384-bc3fc18232db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/sanity-gridsome-blog-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-2-web-9q3nmvqw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
