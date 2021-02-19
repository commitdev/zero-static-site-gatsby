# <% .Name %> Landing Page

## Getting Started

You now have a repo to create your landing page. This project was bootstrapped with [`gatsby new`](https://www.gatsbyjs.org/docs/gatsby-cli/#new).

See full documentation [here](docs/create-gatsby-site.md)

## Deployment

Your application is deployed to an AWS S3 bucket through CircleCi.

<%if eq (index .Params `CIVendor`) "circleci" %>## Circle CI

Your repository comes with a end-to-end CI/CD pipeline, which includes the following steps:

1. Checkout
2. Unit Tests
3. Build for Staging
4. Deploy Staging
5. Build for Production
6. Deploy Production

The *Deploy* step does a:

- AWS S3 Bucket Sync
- Cloudfront Invalidation

To learn more your pipeline checkout your [CircleCi config file](.circleci/config.yml)
<% else if eq (index .Params `CIVendor`) "github-actions" %>## Github actions
Your repository comes with a end-to-end CI/CD pipeline, which includes the following steps:
1. Checkout
2. Unit Tests
3. Build frontend (stage / prod)
4. Deploy Staging
5. Integration tests
6. Deploy Production

**Note**: you can add a approval step using Github Environments(Available for Public repos/Github pro), you can configure an environment in the Settings tab then simply add the follow to your ci manifest (`./github/workflows/ci.yml`)
```yml
deploy-production: # or any step you would like to require Explicit approval
  enviroments:
    name: <env-name>
```
### Branch Protection
Your repository comes with a protected branch `master` and you can edit Branch protection in **Branches** tab of Github settings. This ensures code passes tests before getting merged into your default branch.
By default it requires `[lint, unit-test]` to be passing to allow Pull requests to merge.

<% end %>

## Environment Configs

You can provide environment variables to your site to customize its behavior in different environments.

Environment variables can be distinguished between different types.

There are environment variables that are defined in special places intended to be used in different deployment environments. You can call these “Project Env Vars”.

And there are true OS-level environment variables that might be used in command-line calls. You can call these “OS Env Vars”.

### Project Environment Variables

```shell
#example
#file: .env.development
GATSBY_API_URL=https://dev.example.com/api


#setting the active env variable would load the relevant .env.*
GATSBY_ACTIVE_ENV=development npm run develop
```

*OS Env Vars* are only directly available at build time, or when Node.js is running. They aren’t immediately available at run time of the client code; they need to be actively captured and embedded into client-side JavaScript. This is achieved during the build using webpack’s [DefinePlugin][define-plugin].

learn more about [Gatsby Environment Variables][gatsby-env-var]

<!-- Links -->

[gatsby-env-var]: https://www.gatsbyjs.com/docs/environment-variables/
[define-plugin]: https://webpack.js.org/plugins/define-plugin/
