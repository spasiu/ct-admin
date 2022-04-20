import { ApolloClient } from '@apollo/client';
import { INSERT_DATASET } from 'src/graphql/mutations';
import {
  GET_DATASETS,
  GET_DIVISION_DATA,
  GET_TEAM_DATA,
} from 'src/graphql/queries';

export const DatasetManager = (client: ApolloClient<any>) => ({
  automatic: async (
    year: number,
    category: string,
    subcategory: string | null = null,
  ): Promise<boolean> => {
    const { data: existing } = await client.query({
      query: GET_DATASETS,
      variables: {
        year: year,
        category: category.toLowerCase(),
        subcategory: subcategory ? { _eq: subcategory } : {},
        type: {},
      },
    });

    if (existing.datasets.length > 0) return true;

    const { data: teamData } = await client.query({
      query: GET_TEAM_DATA,
      variables: { year: year, sport: category.toLowerCase() },
    });

    if (teamData.Teams.length > 0) {
      client
        .query({
          query: INSERT_DATASET,
          variables: {
            data: {
              year: year,
              category: category.toLowerCase(),
              subcategory: subcategory || null,
              type: 'TEAM',
              data: teamData.Teams,
            },
          },
        })
        .catch((e) =>
          console.log(
            `Error adding team dataset for ${year} ${category}: ${e}`,
          ),
        );
    }

    const { data: divisionData } = await client.query({
      query: GET_DIVISION_DATA,
      variables: { sport: category.toLowerCase() },
    });

    if (divisionData.Divisions.length > 0) {
      client
        .query({
          query: INSERT_DATASET,
          variables: {
            data: {
              year: year,
              category: category.toLowerCase(),
              subcategory: subcategory || null,
              type: 'DIVISION',
              data: divisionData.Divisions,
            },
          },
        })
        .catch((e) =>
          console.log(
            `Error adding division dataset for ${year} ${category}: ${e}`,
          ),
        );
    }

    if (teamData.Teams.length > 0 || divisionData.Divisions.length > 0)
      return true;

    return false;
  },
  manual: async (
    year: number,
    category: string,
    subcategory: string | null,
    datasetType: string | null,
    dataset: Object[],
  ): Promise<boolean> => {
    return client
      .query({
        query: INSERT_DATASET,
        variables: {
          data: {
            year: year,
            category: category.toLowerCase(),
            subcategory: subcategory,
            type: datasetType,
            data: dataset,
          },
        },
      })
      .then(() => true)
      .catch((e) => {
        console.log(
          `Error adding ${datasetType} dataset for ${year} ${category}: ${e}`,
        );
        return false;
      });
  },
});
