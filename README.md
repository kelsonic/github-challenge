# GitHub Challenge

## Get Started

```js
> npm install
> npm start
```

Follow directions on the [ca-test-api](ca-test-api).

### Application Description

You will use the boilerplate provided to you to build an application that will tap into the github api as a datasource. The application will allow a user to favorite repositories on github by typing the name of the repository into a search field. For example they could type Facebook/React. Once the user adds a repository to their favorite list it will show up below the search field and will display the name of the repository and the number of stars that repository has. It will also display a list of the last three commits on that repository.

You will see numerous comments throughout the codebase. Read them carefully and
follow any directions they may have. You should also remove them before submitting your final product.

**Requirements**
* Users should be able to search or repositories by name in the search field.
* Users should be able to easily add the repository to their favorite list once it is found.
* Favorites should be able to be removed.
* Each favorite will display the name of the repository, the number of stars that repository has and the last 3 commits to that repository.
* Each of the commits should display the author’s name and the commit message as well as how long ago it occurred (ex: ‘7 days ago’)
* Clicking the author’s name should go to a separate page that displays the authors info.
* Author’s info page should display their profile data creatively but should include at least their name, avatar, bio, # of followers and how long they have been on github.
* If the user leaves the application and returns later they should be able to see the repositories as they were the last time they visited.
* The application components should follow material design and utilize [material-ui](http://www.material-ui.com/#/) to create components.
* It must pass our linting tests. You can run `npm run lint` to see any
linting errors that you may have.

**Bonus Points**
* use [graphqlhub](https://www.graphqlhub.com/) and [apollo](http://docs.apollostack.com/apollo-client/) to query the Github api and populate data.
* Utilize server side rendering for the initial render.
* Add clear and concise comments to your code explaining your reasoning
* Creativity ;)
