import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="my-7 w-3/4 mx-auto">
      <div>
        <h1 className="text-5xl mb-4">WELCOME</h1>
        <h1 className="text-2xl mb-7">
          Hope you find what you are looking for.
        </h1>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          What are the differences between SQL and NoSQL?{" "}
        </div>
        <div className="collapse-content">
          <p>
            SQL databases are relational, NoSQL databases are non-relational.
            SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed. Authentication server
            verifies the credentials and issues a jwt signed using either a
            secret salt or a private key. User's Client uses the JWT to access
            protected resources by passing the JWT in HTTP Authorization header.
            Resource server then verifies the authenticity of the token using
            the secret salt/ public key.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          What is the difference between Javascript and NodeJs?
        </div>
        <div className="collapse-content">
          <p>
            NodeJS is a cross-platform and open source Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development. On
            the other hand, Javascript is a Scripting language. It is mostly
            abbreviated as JS. It can be said that Javascript is the updated
            version of the ECMA script. Javascript is a high-level programming
            language that uses the concept of Oops but it is based on prototype
            inheritance.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded"
      >
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?{" "}
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
