# <% .Name %> Landing Page

## Getting Started

You now have a repo to create your landing page. This project was bootstrapped with [`gatsby new`](https://www.gatsbyjs.org/docs/gatsby-cli/#new).

See full documentation [here](docs/create-gatsby-site.md)

## Deployment

Your application is deployed to an AWS S3 bucket through CircleCi.

## Circle CI

Your repository comes with a end-to-end CI/CD pipeline, which includes the following steps:

1. Checkout.
2. Unit Tests.
3. Build for Staging.
4. Build for Production.
5. Deploy Staging.
6. Approval Step.
7. Deploy Production.

The *Deploy* step does a:

- AWS S3 Bucket Sync.
  - this step copies your bundled build in `public` to an AWS S3 Bucket where it it served.
- Cloudfront Invalidation
  - this step instructs CloudFront to invalidated any previously cached distributions.

To learn more about your pipeline checkout your [CircleCi config file](.circleci/config.yml)

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
