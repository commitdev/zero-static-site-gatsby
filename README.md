# Zero Static Site - Gatsby

This is a [Zero] module which sets up a
Gatsby site bundled and statically served through CloudFront and S3 from the [zero-aws-eks-stack][zero-infra].

The `/templates` folder is meant to be filled in via [Zero][zero] `create` step and results in Simple Gatsby getting started application. It also contains a simple CircleCI pipeline which defines how to build and deploy the service.

This repository is business-logic agnostic; mainly showcasing some universal best practices:

- Creating an optimized build of your Gatsby landing page.
- Out of the box CI/CD workflow using CircleCi.
  - testing
  - building your Gatsby site as a static distribution in /public folder.
  - syncs the built bundle to AWS S3.
  - invalidates existing Cloudfront cached version.

## Repository structure

```sh
/   # file in the root directory is for initializing the user's repo and declaring metadata
|-- Makefile                         # make command triggers the initialization of repository
|-- zero-module.yml                  # module declared required parameters
|   # files in templates become the repo for users
|   templates/
|   |
|   |-- docs/
|   |   | create-gatsby-site.md      # documentation on how to work with your gatsby application and external developer resources.
|   |-- __mocks__/                   # mocks some core gatsby objects for easier testing
|   |   |-- file-mock.js
|   |-- .circleci/
|   |   |-- config.yml               # circle ci build & deployment configuration
|   |-- src/                         # src contains your gatsby application code
|   |-- .gitignore
|   |-- README.md
|   |-- package.json
|   |-- yarn.lock

```

## Prerequisites

- Have CircleCI and GitHub token setup with the Zero project.
- CI-user created via EKS-stack with access to AWS S3.


## Initialization

This step is meant to be executed during `zero apply`, includes following steps:

- Adding environment variables to CircleCI project.
- Linking the CircleCi with the GitHub repository
  - Linking the circleCI will automatically trigger the first build and deploy your application to AWS S3

## FAQ

Why is my Gatsby landing page application not yet accessible?

- It takes about 35 - 50 mins for your deployed application to be initially globally available through AWS CloudFront CDN.

## Other links

Project board: [zenhub][zenhub-board]

<!-- Links -->
[zero]: https://github.com/commitdev/zero
[zero-infra]: https://github.com/commitdev/zero-aws-eks-stack

[zenhub-board]: https://app.zenhub.com/workspaces/commit-zero-5da8decc7046a60001c6db44/board?filterLogic=any&repos=203630543,247773730,257676371,258369081
