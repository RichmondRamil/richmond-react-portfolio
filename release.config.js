const config = {
  branches: ["master"], // We are telling the semantic-release to only release from the master branch
  plugins: [
    "@semantic-release/commit-analyzer", // It will look all the commits and commit messages since the last release or since the start of the repositiory if there is no release yet and it will increament the version for us according to the release prefixes that it found
    "@semantic-release/release-notes-generator", // it will take the commits and commit messages and generate a release note for us also it will create a little markdown string
    [
      "@semantic-release/git",// it takes all of the assets and it will stage our commit and push them to our repository
      {
        assets: ["package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}", // we can also give the git commit our own message
          /**
           * chore(release) this is just a chore of pushing up the build filed
           * [skip ci] this indicates with this commit it is not supposed to trigger any workflows that are usually triggered by push events
           * it is important because when you automate the releases to a point that on any push to a main branch semantic release triggered you will go with an endless loop if the build and push
           */
      },
    ],
    "@semantic-release/github", // it create release itself on github and it also create the tech and the correct version for us
  ],
};

module.exports = config;
