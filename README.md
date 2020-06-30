## Cleo Frontend Interview - HARDIK MANDAVIA
## Option
I have opted to complete the below set of tasks using the first option: i.e. time boxed 2-3 hours. In this time I prioritised the application setup as well as showcasing the general set of technologies outlined in the `Notes` section below.

## Workflow
The below is a workflow list on the steps I took to build out this project:
- Spent time to turn the project into a TypeScript project.
- Set up linting extending from recommended set of rules and prettier with some basic config
- Installed redux and set up the initial store and actions for the bills object.
- Installed sagas and set up bills saga and root saga.
- Added services to handle requests to the server.
- Installed styled-components
- Wrote the bulk of the components to serve the tasks outlined below.
- Added new set of actions for updating a given Bill.
- Added new saga method to serve updating a bill.
- Added new patch service method.
- Wired up UI controls for "Remove Bill" and "Add as Bill" functionality.

## Notes
I have opted to go with a `container`/`component` split approach for my components where the `containers` are the smart components that will connect to the store and handle any dispatch calls, and the `components` are the UI components that serve the application. For the `components` folder I've decided to use a nested folder structure for the component (as opposed to a flat structure) as I prefer to keep child components nested within their parent components...if any child component was evident it should be more generic instead, it would be stracted out into the root component folder as a standalone generic component instead.

For the store structure, I am converting the list of bills into a key/value pair object where the bill `id` is the key and actual `bill` object is the value. This allows for greater efficiency when selecting individual bills from the list (here there is a single loop to convert the data structure whereas otherwise you'd have to loop over the array every time you need to select a specific bill). I am also storing an array of bill id's in cases where we'd need to use the bills as an array instead (choosing to store an array of id's instead of the full list of bills as storing the bills array would mean a duplication of data stored and therefor increase the size complexity of data being stored in the UI).

I am using styled-components to handle styling of my components. styled-components is my preferred method of styling in React projects as it follows a natural extension of React best practices, i.e. having explicitly defined single function components. It also allows for better readability for the component structure with explicit naming for styled elements rather than relying on class names.

## Further considerations
As I only spent a small amount of time on this overall, there are a number of things I would've liked to include / done differently with more time. 

Firstly I chose not to include any testing in the limited time as I'd rather have completed the tasks in the time instead. I prefer to ensure all my code is well tested with meaningful unit testing using `jest` throughout. I usually aim for a 100% test coverage and employ snapshots in `enzyme` as well to ensure consistent UI.

Secondly, I would've liked to split my store and sagas further to be more single purpose, i.e. separate saga for the update etc. This avoids any build up of monolithic files and ensures a more streamline workflow going forward when scaling the application.

Thirdly, I have quite a few repeated "Wrapper" components, i.e. styled div elements with similar or same styling applied. I wouldve preferred to extract these "Wrapper" components as well as any other repeated styled components out into a more generic set of styled components which I'd use where applicable or at the very least, create styled-components extended from the base set where ever more bespoke styling is required.

AND Finally, I would've spent a lot more time on styling some of the UI to be a bit more polished as well as add animations to some of the transitions.


### Get Started
1. Fork or clone this repo (a simple [`create-react-app`](https://github.com/facebook/create-react-app) extended with [`json-server`](https://github.com/typicode/json-server) and some Cleo-specific goodies)
1. Install dependencies via `yarn` (or `npm`)
1. Run `yarn start` to start the dev server
1. Run `yarn api` in a different terminal to start the json-api server

### The Task
1. Create a Tabs component that allows multiple pages to be switched between.
1. One tab should show a list of bills. These can be found at http://localhost:3002/bills/. Bills have a flag `isBill` set to `true`.
1. Another tab should show a list of transactions which are potential bills. These can also be found at http://localhost:3000/bills/. Potential bills have a flag `isBill` set to `false`.
1. Under each bill row for both lists, should be a hidden list of transactions for that bill. This should show when the bill row is clicked.
1. Under the name of each bill should show a count of the transactions for it
1. Add an action to the bills tab for each bill called "remove bill" which updates the relevant bill's `isBill` flag to `false`. You can use a `PATCH` request to `http://localhost:3000/bills/:id` using the id of the bill to update the bill resource.
1. Add an action to the potential bills tab for each potential bill called "Add as bill" which updates the relevant bill's `isBill` flag to `true`.
1. After each action, the lists should reflect the changes.

### Notes
- Please aim to spend 2-3 hours completing this task
- We'd like to see state management tools being used
- Tools we use at Cleo include styled-components, Typescript and Redux (with Sagas)
- Style the components however you see fit. SASS or PostCSS are fine, but we'd prefer CSS in JS
- We love tests, linted code and great looking UIs
- The API contains other data, feel free to use this creatively if you have the time
- Remember to check your project runs before submitting
