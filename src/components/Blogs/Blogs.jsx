const Blogs = () => {
  return (
    <div>
      <br />
      <h1 className="text-7xl text-center">Questions and Answers</h1>
      <br />
      <div className="text-center">
        <div className="card-body shadow-2xl rounded-lg">
          <h2 className="text-2xl">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p>
            Access token is a temporary credential which is used to authorized a
            user to a protected info and contains some info of the user within
            it. Refresh token is more long term and it is used for generating
            access token for the users. Access and Refresh tokens are sent to
            server side and verified once a user calls an api to see some info.
            We should store them using HTTP only cookie on the client side
          </p>
        </div>
        <div className="card-body shadow-2xl rounded-lg">
          <h2 className="text-2xl">Compare SQL and NoSQL databases?</h2>
          <p>
            SQL databases are well organized tables with fixed structures which
            suits the complext structured data. Whereas NoSQL database is more
            flexible using dynamic data models.{" "}
          </p>
        </div>
        <div className="card-body shadow-2xl rounded-lg">
          <h2 className="text-2xl">What is express js? What is Nest JS</h2>
          <p>
            express.js is a framework for Node.js. It is used for build web
            servers and api using javascript. Whereas Nest.js is also a
            framework for Node.js which is used for server side applications but
            it uses typescript.
          </p>
        </div>
        <div className="card-body shadow-2xl rounded-lg">
          <h2 className="text-2xl">
            What is MongoDB aggregate and how does it work
          </h2>
          <p>
            MongoDB aggregate is a feature of MongoDB which helps to process and
            analyze data which uses certain operations to do so. It works sort
            of in chain of operations where certain and specific request can be
            made to process data to get the desired output.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
