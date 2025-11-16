Weather App

This is a mern-stack weather application built with React with Tailwind (frontend) and Node.js + Express (backend). It allows users to search for the current weather in any city around the world using the OpenWeatherMap API.


    Tools & Technologies
    Frontend (React)

- React.js (Create React App).
- Tailwind CSS.
- Axios.
- React Icons.

  
   Backend (Node.js + Express)

- Node.js.
- Express.js.
- dotenv (for environment variables).
- Axios (server-side requests).
- CORS.



       Setup Instructions

       Clone the Repository

       cd weather-app

       Backend Setup (Node.js + Express)
 
       cd weather-backend
       npm install


       Create .env file:

       WEATHER_API_KEY=your_openweathermap_api_key
       PORT=5000


        Start Backend Server:
        npm start

        The server will run at http://localhost:5000.




        Frontend Setup (React + Tailwind CSS)
        cd ../weather-frontend
        npm install


        Create .env file:
        REACT_APP_BACKEND_URL=http://localhost:5000

 
        Start Frontend Server:
        npm start




        Features

Live weather search by city name

Responsive UI using Tailwind CSS

Background image based on weather

Real-time data fetched from backend using Axios

Backend proxy for OpenWeatherMap API



   API Used
OpenWeatherMap API



