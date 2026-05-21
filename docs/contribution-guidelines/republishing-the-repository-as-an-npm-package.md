# Re-publishing the repository as an npm package

To re-publish the package you must update the package.json, the changelog.md and then republish the package.

## Steps:

1.  Update the `package.json` version field to the new version number.
2.  Update the `CHANGELOG.md` to document the package changes.
3.  Confirm with the team that you are publishing under the correct npm organisation and that you have publish permissions.
4.  Run `npm login` and sign in with your npm account. If you do not have an account, create one at https://www.npmjs.com/signup.
5.  Run `npm publish` from the package root.
6.  In `register-a-food-business-front-end/package.json`, update the dependency `"@slice-and-dice/register-a-food-business-validation"` to the new version, then run `npm install`.
