steps

install create react app
add redux, redux router
set up basic routing
set up store
add redux tooling
add sass or use styled components


build layout
build individual components

https://github.com/facebook/create-react-app
https://yarnpkg.com/en/docs/usage
https://github.com/ReactTraining/react-router

> cd Documents/development/sidecar
> yarn start

# Todo

move things out of rootReducer.js
add default avatar image
refactor doctors reducer cases to be more functional/readable
add Prettier to workflow
assess and convert components to functions if stateless
ask product about distance
investigate proptypes and use with redux

add routing for review form(s)

/doctor/:doctorId/ <DoctorView />
/doctor/:doctorId/review/ <AddReview edit="false" />
/doctor/:doctorId/review/edit/:reviewId <AddReview edit="true" reviewId=:reviewId />





time logging:

 

7:20pm to 7:52
initial planning
installed required packages
set up initial route
added first component
decided to use styled-components (this is where I might be biting off more than I can chew)

9:00pm to 11:00pm
Built out static placeholder modules for header, Doctor list and Doctor view and other, smaller sub-modules

Thursday:
9:00pm to 11:45pm
Added redux store, reviews and doctors reducers, and initial data
Added routing

Friday:
6pm to 6:30pm
Wired up the review list to the store, cleaned up some things

7:15pm to 8:05pm
Started adding Add/Edit/Remove review component
10:30 to 12:10pm
Wiring up Add/Edit/Remove review Redux functionality

Sat
10:00am to 11:45am
Finished Add/Edit/Remove review Redux functionality
Tighted up numerous small things

10:45pm to 11:45pm
Forgot to log, most likely continued tightening up small things

Sun
1pm to 2pm
Implemented workaround solution for active style missing from current doctor list item

3pm to 5pm
Completed styling

8:30pm to 9pm
Added redirect to root url to set first doctor on the list as active by default






Good evening Erik

 

Our team was excited talking to you and this is the coding challenge that they mentioned on the call. I am copying Jacob and Tai on this note and if you have any questions related to the assignment please feel free to reach out to them and they will be happy to guide you.

 

For the UI Coding Challenge, we would like to see a mini-app showcasing a list of doctors and their reviews. Users should also have the ability to edit and remove reviews. Since we are a React/Redux shop, we would like this to be built with create-react-app, using Redux to manage state and React-Router for page routing.

 

Use cases:

1) User should see a list of doctors with basic info.

2) When a list item is clicked, user should see the reviews for that doctor on the right panel.

3) When user clicks "Leave Review", they are taken to the add review form.

4) When user clicks "Add Review", they are taken back to the doctor review page and their review is displayed.

5) When the user clicks "Edit" for a review, they are taken to the review form, pre-populated with review info.

6) When the user clicks "Update" they are taken back to the review page and their update is displayed.

7) When the user clicks "Remove" they are taken back to the review page and their review should be gone.

 

Considerations:

- Design does not need to be pixel perfect, but look and feel should be consistent and colors should match.

- The doctor photo can be of anything, including a color.

- The icons don't need to be exactly the same. Any free font package or even colored shapes are acceptable.

- Use of Functional Programming is a plus.

- Only needs to work in modern browsers.

- Keep track of how long you spend on this.

- You may use any tools or UI library.

 

Design mockups can be found at: https://invis.io/WYN2CI678RX

 

Please post your final work to a public GitHub (or similar) repo and, feel free to reach out to us if you need any clarifications or have any questions related to the assignment.







// export const appChangeCurrentDoctor = (currentDoctorId) => {
//     return {
//         type: APP_CHANGE_CURRENT_DOCTOR,
//         payload: {
//             currentDoctorId,
//         }
//     }
// }

// export const APP_CHANGE_CURRENT_DOCTOR = 'App/CHANGE_CURRENT_DOCTOR';

// const app = (state = { currentDoctorId: null }, action) => {
//     switch (action.type) {
//         case APP_CHANGE_CURRENT_DOCTOR:
//             return merge({}, state, action.payload);
//         default:
//             return state;
//     }
// }