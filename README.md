Q1:Add at least 3 Project features

Ans: 
1. Dynamically showing data.
2. User Authentication and Profiles.
3. Credit remaining 20 hour.

Q2: Discuss how you managed the state in your assignment project.

Ans: React provides the useState hook for managing local component state. Here's how state management was handled in the assignment project:

1. Importing the useState Hook:The useState hook is imported from the react library to enable the management of component-level state.

2. Declaring State Variables: In this project, multiple state variables are declared using the useState hook to manage different aspects of the application's state. Each state variable serves a specific purpose:

courses: It holds the array of courses fetched from the JSON file.
selectedCourse: It stores the courses that the user has selected to add to their cart.
addedCourses: It keeps track of the courses that have been added to the cart.
totalPrice: It holds the total price of the courses in the cart.
totalDuration: It stores the total duration (in hours) of the courses in the cart.

3. Fetching Data and Updating State: The useEffect hook is used to fetch data from the courses.json file when the component mounts. The fetched data is then used to update the courses state variable.

4. Updating State on User Actions: The handleAddToCart function is responsible for managing the state when a user clicks the "Select" button to add a course to their cart. This function updates various state variables (selectedCourse, addedCourses, totalPrice, and totalDuration) based on user interactions.


