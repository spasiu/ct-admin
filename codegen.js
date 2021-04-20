module.exports = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_GRAPHQL_API]: {},
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
