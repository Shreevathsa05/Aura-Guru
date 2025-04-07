import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="text-orange-400 hover:text-orange-600">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
