# <% .Name %> Landing Page

## Getting Started

You now have a repo to create your landing page. This project was bootstrapped with [`gatsby new`](https://www.gatsbyjs.org/docs/gatsby-cli/#new).

See full documentation [here](docs/create-gatsby-site.md)

## Deployment

Your application is deployed to an AWS S3 bucket through CircleCi.

## Circle CI

Your repository comes with a end-to-end CI/CD pipeline, which includes the following steps:

1. Checkout
2. Build for Staging
3. Deploy Staging
4. Build for Production
5. Deploy Production

The *Deploy* step does a:

- AWS S3 Bucket Sync
- Cloudfront Invalidation

To learn more your pipeline checkout your [CircleCi config file](.circleci/config.yml)


## Environment Configs

<!-- These are set by `REACT_APP_CONFIG` enviroment variable at build time. This corresponds to a json file in the config directory.

For example to build the staging site and host it you would use: -->

You can provide environment variables to your site to customize its behavior in different environments.

Environment variables can be distinguished between different types.

There are environment variables that are defined in special places intended to be used in different deployment environments. You can call these “Project Env Vars”.

And there are true OS-level environment variables that might be used in command-line calls. You can call these “OS Env Vars”.

<!-- TODO: example goes here-->

```shell
#example
```
