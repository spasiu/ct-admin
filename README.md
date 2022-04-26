# C&T Admin

## Prerequsities

- Node
- Yarn
- Docker (optional - if you want full local dev) (https://docs.docker.com/get-docker/)
- Hasura CLI (optional - for CLI access to Hasura) (https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli)

## Local Setup

### Admin

1. Clone the repo and run `yarn install` in the project directory.
2. Copy _.env.example_ into a new _.env_ file and fill in missing environment variables.
3. Generate GraphQL `NEXT_PUBLIC_GRAPHQL_API="<HASURA API URL>" HASURA_ADMIN_SECRET="<HASURA ADMIN SECRET>" yarn generate` in the project root.
4. Run `yarn global add concurrently` to install the _concurrently_ package, which is used during `yarn dev`.
5. Run `yarn dev`.

### Interact with local Firebase functions (optional - can use functions already deployed to Firebase project)

1. Start the local firebase function emulator (firebase repository)
2. Set `NEXT_PUBLIC_ENV` to **local** in _.env_ file (**NOTE:** This will still use Firestore and Storage in the currently set firebase project in the cloud)
3. Start admin using `yarn dev`

### Hasura & PostgreSQL (optional)

1. Install Docker.
2. Run `docker-compose up` in the project root.

   - hasura: http://localhost:8080
   - pgadmin: http://localhost:5050

3. Set `NEXT_PUBLIC_GRAPHQL_API` to `http://localhost:8080/v1/graphql` inside of _.env_ file
4. Run `yarn dev`

#### On first run:

5. Import _schema.sql_ into Hasura via Hasura UI SQL interface or directly into Postgres DB (Can use _pgadmin_)
6. Import Hasura manifest file through Hasura UI
7. (optional) Dump DB from staging/production and import to local

**NOTE:** The _schema.sql_ file should be maintained to match the production environment

## Deployment Process

### Admin

We should look into Github hooks for the Firebase deploy, which are available, but for now, the manual deployment process is as follows:

1. (Optional, but good to avoid ambiguity with previous builds) `rm -rf .next out`
2. `yarn build`
3. `yarn deploy`

### Hasura changes

On initialization:

1. Import _schema.sql_ into Hasura instance through Hasura or directly to Postgres DB
2. Import Hasura manifest file through Hasura UI

Afterwards, Hasura can be updated in several ways:

- Directly updating fields and tables through Hasura interface
- Export migration files using Hasura CLI and import migrations (https://hasura.io/docs/latest/graphql/core/migrations/index.html)
