# YARN.com – Community Story Threads

## Description

YARN.com is an open-source platform designed to solve the problem of preserving community stories, local wisdom, and lived experiences in a structured, collaborative way. Unlike typical social media where posts get buried over time, YARN.com allows users to create "threads" on specific topics (such as surviving floods, startup journeys, cultural traditions, etc.), and enables others to add their own "strands" (contributions) to form a rich timeline of diverse perspectives.

This platform helps communities:
- **Preserve** valuable stories and experiences that might otherwise be lost
- **Connect** people through shared experiences and wisdom
- **Build** collective knowledge around important topics
- **Document** community history and cultural practices

## Tech Stack

- **MongoDB** - NoSQL database for storing threads and strands
- **Express.js** - Backend web framework for Node.js
- **React** - Frontend library for building user interfaces
- **Node.js** - JavaScript runtime for the backend
- **Mongoose** - MongoDB object modeling for Node.js
- **Vite** - Fast build tool for React development

## Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- Git

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your MongoDB connection string and port:
   ```
   MONGODB_URI=mongodb://localhost:27017/yarn-community-threads
   PORT=5000
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Running the Application

1. **Start the backend server** (from the backend directory):
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend development server** (from the frontend directory):
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Access the application** at `http://localhost:5173`

## Project Structure

```
yarn-community-threads/
├── backend/
│   ├── models/
│   │   ├── Thread.js
│   │   └── Strand.js
│   ├── routes/
│   │   ├── threads.js
│   │   └── strands.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
├── .gitignore
└── README.md
```

## Features

- **Thread Management**: Create and view story threads on specific topics
- **Strand Contributions**: Add personal experiences and perspectives to existing threads
- **Timeline View**: See chronological progression of community stories
- **Topic Tags**: Organize threads by categories and themes
- **Responsive Design**: Works on desktop and mobile devices

## Contributing

Feel free to contribute to this repository by adding new features, improving documentation, fixing bugs, or enhancing UI/UX. 

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Areas for Contribution

- **New Features**: User authentication, thread moderation, advanced search
- **UI/UX Improvements**: Better responsive design, accessibility features
- **Documentation**: API documentation, user guides, code comments
- **Bug Fixes**: Report and fix issues you encounter
- **Performance**: Optimization of database queries and frontend rendering

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Project Repository**: [GitHub Repository URL]
- **Issues**: Please report bugs and feature requests through GitHub Issues
- **Discussions**: Join community discussions in the GitHub Discussions section

## Roadmap

- [ ] User authentication and profiles
- [ ] Thread moderation and reporting
- [ ] Advanced search and filtering
- [ ] Email notifications for new strands
- [ ] Mobile app development
- [ ] Integration with social media platforms

---

**Start preserving your community's stories today with YARN.com!**
