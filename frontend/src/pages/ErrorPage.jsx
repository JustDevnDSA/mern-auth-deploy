import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col gap-6 -mt-16">
      <h1 className="text-4xl  font-medium ">ERROR ! Page Not Found</h1>
      <Link to={'/'}>
      <button  className="bg-gray-800 bg-opacity-50   text-gray-300 font-medium px-5 py-2 rounded-md hover:bg-opacity-60 ">
        Go back to home
      </button>
      </Link>
    </div>
  )
}

export default ErrorPage
