# Configuring Jasmine

## **Install Jasmine**

1. To install Jasmine, run:
```bash
npm i jasmine
```
2. Add a reporter for outputting results to the terminal: 
```bash
npm i jasmine-spec-reporter
```

3. Add type definitions for jasmine with:
```bash
npm i --save-dev @types/jasmine
```

## **Add Testing Scripts:**
* Find the `scripts` object in the `package.json` and add the following to run jasmine:
```javascript
"jasmine": "jasmine"
```

## **Set Up the File Structure**
1. In the root directory of the project, create a folder named `spec`.
1. In the `spec` folder, create a folder named `support`.
1. In the `support` folder, create a file named `jasmine.json` to hold the primary configurations for Jasmine.
1. In the `src` folder, add a folder named `tests`.
1. In `tests` add a file named `indexSpec.ts` to hold the tests for code in the `index.js` file.
1. In the `tests` folder, add another folder named `helpers`.
1. In `helpers`, add a file named `reporter.ts`. This will be the primary configuration for your spec reporter.

## **File Structure**
```bash
├── node_modules
├── spec
│      └── support
│           └── jasmine.json
├── src
│     ├──  tests
│     │     ├── helpers
│     │     │      └── reporter.ts
│     │     └── indexSpec.ts
│     └── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json
```

## **Best Practices for naming**
When creating files for tests, a best practice is to name the `.ts` file the same as the `.js` file to be tested with `Spec` appended to the end. The more tests needed to be run, the more test files will need to be created. Be sure to follow this best practice to keep track of the `test` file that contains the tests for each `.js` file.

In `reporter.ts`, add the following code from the [jasmine-spec-reporter Typescript support](https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/typescript) documentation to configure the reporter to display Jasmine results to your terminal application. These are default settings and can be adjusted to meet your specific needs. The documentation on [GitHub](https://github.com/bcaudan/jasmine-spec-reporter) provides more options available.

```typescript
import {DisplayProcessor, SpecReporter, StacktraceOption} from "jasmine-spec-reporter";
import SuiteInfo = jasmine.SuiteInfo;

class CustomProcessor extends DisplayProcessor {
    public displayJasmineStarted(info: SuiteInfo, log: string): string {
        return `${log}`;
    }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
        displayStacktrace: StacktraceOption.NONE
    },
    customProcessors: [CustomProcessor],
}));
```

In the `jasmine.json` add the following configurations for a basic Jasmine configuration:
```json
{
    "spec_dir": "build/tests",
    "spec_files": [
        "**/*[sS]pec.js"
    ],
    "helpers": [
        "helpers/**/*.js"
    ],
    "stopSpecOnExpectationFailure": false,
    "random": false
}
```

In the `tsconfig.json` file, add `"spec"` to the list of folders that we want to exclude.
```json
  "exclude": ["node_modules", "./dist", "spec"]
  ```

  ## **Write a Basic Test**
  We'll start with a simple test: <br>
  ***index.ts***

  ```typescript
const myFunc = (num: number): number => {
  return num * num;
};

export default myFunc;
  ```

  We can write a simple test for the function: <br>
  ***indexSpec.ts***
  ```typescript
  import myFunc from '../index';

it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});
```

To test this we'll need to first run the build script and then the test script:
```bash
npm run build
npm run jasmine
```
Or we can combine the two into one script in our package.json file:
```json
"test": "npm run build && npm run jasmine"
```