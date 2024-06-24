# Re-publishing the repositary as an npm package

To re-publish the package you must update the package.json, the changelog.md and then republish the package.

## Steps:

1.  Update the `package.json` to the new version number
2.  Update the `CHANGELOG.md` to document the updates
3.  Check with existing developers that you are part of the correct NPM organisation and have permissions to publish new versions
4.  Run the command `npm login` and login with your credentials. If you do not have an npm account create one at https://www.npmjs.com/signup.
5.  Run the command `npm publish`
6.  Within your register-a-food-business-front-end/package.json, update the "@slice-and-dice/register-a-food-business-validation": "X.X.X", to the latest version that you have in your validation/package.json and 'npm install'
