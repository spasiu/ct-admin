module.exports = {
  schema: [
    {
      ['https://' + process.env.NEXT_PUBLIC_GRAPHQL_API]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: [
    './src/**/*.tsx',
    './src/**/*.ts',
    './pages/**/*.tsx',
    './pages/**/*.ts',
  ],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};
