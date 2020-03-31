/* eslint-env node */

const eslint = require('eslint');

const formatter = eslint.CLIEngine.getFormatter('stylish');

const cliEngine = new eslint.CLIEngine({});
const report = cliEngine.executeOnFiles([
  "src/app/components/another-components/**/*.ts",
  "src/app/components/some-components/**/*.ts"
]);

const results = eslint.CLIEngine.getErrorResults(report.results);

const output = formatter(results);

if (output) {
  console.log(output);
}

return 0;
