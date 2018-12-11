# Re-publishing the repositary as an npm package

To re-publish the package you must update the package.json, the changelog.md and then republish the package.

## Steps:

1.  Update the `package.json` to the new version number
2.  Update the `CHANGELOG.md` to document the updates
3.  Run the command `npm login` and login with your credentials. If you do not have an npm account create one at https://www.npmjs.com/signup.
4.  Run the command `npm publish`
