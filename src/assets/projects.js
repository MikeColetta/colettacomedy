import theRelocator from "./images/TheRelocator.JPG";
import dankReviews from "./images/DankReviews.JPG";
import codingQuiz from "./images/CodingQuiz.JPG";
import weatherDashboard from "./images/WeatherDashboard.JPG";
import employeeDirectory from "./images/EmployeeDirectory.JPG";
import budgetTracker from "./images/OnlineOfflineBudgetTracker.JPG";


const portfolioProjects = [
    {
        title: "Employee Directory",
        img: employeeDirectory,
        heading: "Filter and sort random employees!",
        description: `An employee directory application built in React. 
        The application pulls between 10-20 users using the Random User Generator API. 
        You can then filter and sort users by hire date, first name, last name, email and phone number.`,
        tech: "React.js, Random User Generator API, Javascript",
        link: "https://mikecoletta.github.io/Employee-Directory/",
        github: "https://github.com/MikeColetta/Employee-Directory"
    },
    {
        title: "Dank Reviews",
        img: dankReviews,
        heading: "Review Memes from Reddit!",
        description: `Dank Reviews lets users create an account and review silly
        memes from Reddit.
        It uses the reddit.images NPM package to pull a random meme. Users can see other users
        reviews and all of the reviews
        are stored in a MySQL database.`,
        tech: "Reddit.images API, Sequelize, Bcrypt, DOTENV, MySQL2, Express, Handlebars, Session, MySQL",
        link: "https://bootcamp-project2-uw.herokuapp.com/",
        github: "https://github.com/kharam/Dank-Reviews"
    },
    {
        title: "Online/Offline Budget Tracker",
        img: budgetTracker,
        heading: "Track your expenses online and offline!",
        description: `This online/offline budget tracker uses IndexedDB to store user
         input data offline, so when the user is back online, the IndexedDB data is added to the MongoDB.`,
        tech: "IndexedDB, MongoDB, Javascript, Express",
        link: "https://thawing-mesa-54023.herokuapp.com/",
        github: "https://github.com/MikeColetta/Online-Offline-Budget-Trackers"
    },
    {
        title: "The Relocator",
        img: theRelocator,
        heading: "Find your forever home!",
        description: `The Relocator is an app for users that want to compare two cities. The app compares the location, cost of living, and weather data of two cities. The
        Relocator also stores previous user searches for later use.`,
        tech: "W3 CSS Framework, JQuery, Open Weather API, Numbeo API, OpenStreetMap API, MapBox, Day.js",
        link: "https://mikecoletta.github.io/Group-Project-One/",
        github: "https://github.com/MikeColetta/Group-Project-One"
    },
    {
        title: "Weather Dashboard",
        img: weatherDashboard,
        heading: "Check the weather!",
        description: `A weather dashboard app that displays both the current
        weather and the five day forecast for a searched city. The The UV index is
        color coded based on the severity level. The user's search history is
        saved in local storage.`,
        tech: "HTML5, Bootstrap, Javascript, Open Weather API",
        link: "https://mikecoletta.github.io/Weather-Dashboard/",
        github: "https://github.com/MikeColetta/Weather-Dashboard"
    },
    {
        title: "Coding Quiz",
        img: codingQuiz,
        heading: "Test your coding knowledge!",
        description: `When the player starts the game they have 75 seconds to
        complete the quiz. Every wrong answer takes time off the clock. The final score is the time
        left on the clock. High scores are saved to local storage.`,
        tech: "HTML5, Bootstrap, Javascript",
        link: "https://mikecoletta.github.io/Code-Quiz/",
        github: "https://github.com/MikeColetta/Code-Quiz"
    }
]

export default portfolioProjects;