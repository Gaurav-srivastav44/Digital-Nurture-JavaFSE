import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const books = [
    { id: 1, title: 'React Basics', author: 'Deepak' },
    { id: 2, title: 'JavaScript Insights', author: 'Kavita' },
  ];

  const blogs = [
    { id: 1, title: 'Learning React', summary: 'A short guide to start.' },
    { id: 2, title: 'React Hooks', summary: 'Use hooks for state and effects.' },
  ];

  const courses = [
    { id: 1, name: 'Frontend Bootcamp', duration: '6 weeks' },
    { id: 2, name: 'Full Stack Course', duration: '12 weeks' },
  ];

  return (
    <div className="App">
      <h1>Blogger App</h1>
      <BookDetails books={books} />
      <BlogDetails blogs={blogs} />
      <CourseDetails courses={courses} />
    </div>
  );
}

export default App;
