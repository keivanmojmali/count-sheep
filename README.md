# Testing with Jest
## Configuration
- Make sure that Jest is ocnfigured in jest.config.js and other config files as neccessary
- npm i
- npm i vue-template-compiler vue-jest
- Tell every file ending in .vue to run through jest
- "^.+\\.vue$": "vue-jest"
-npm i @vue/test-utils
-npm i jest-serializer-vue
- Makes snapshots that are human readable
-npm i @vue/cli-plugin-unit-jest  -D
-vue add unit-jest (If testing is not set up in project)
-Add testing to already made vue project
-npm i flush-promises
-  __All test files must end in spec.js__
## What to test
Test the functionality vs. internals
If you are testing a button that increments counter by 1 - test that when clicked, it did indeed increment counter by 1. Do not test, how the counter was incremented.
## Writing tests
### Mounting
When you mount a component, it returns a wrapper object.
example: mount(TestComponent)
if you console log that, it would return an wrapper object
__This give you a lot of methods that you can use for testing. All methods can be found in the vue testing docs under wrapper__
You can start each test with a new wrapper. You can add this in beforeEach inside of the describe function
## Creating a Snapshot
You can create a snapshot and test (check docs) by
expect(wrapper.html()).toMatchSnapshot
this creates a html skeleton that is then tested by snapshot method
## Passing props
You can pass props to the wrapper by using propsData (check docs) property
## Accessing data with vm
You can access all data in a wrapper (which is derived from your component) by using wrapper.vm.nameOfDataYouWant
an example would be wrapper.vm.marvelMovies - this would return the marvelMovies object that is inside our wrapper
## Setting data for testing using setData
You can pull in vars from your component, then add data to them. then re run snapshot tests to see if they are operating correctly.
## Adding serializer
You can add jest-serializer-vue to packages. This will make snapshots more human readabale. This also allows you to take the .html method off of wrapper when creating wrappers. code would could change from expect(wrapper.html()).toMatchSnapshot to expect(wrapper()).toMatchSnapshot