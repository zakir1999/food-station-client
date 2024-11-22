// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Meta from "../Shared/Meta";

const Error = () => {
  return (
    <>
      <Meta title={"404"}></Meta>
      <div>
      <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link to='/'><button className="bg-primary">GoBack to Home</button></Link>
		</div>
	</div>
</section>
    
      </div>
      {/* <h2 className="text-xl text-center">404 Not Found</h2> */}
    </>
  );
};

export default Error;
