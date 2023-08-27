import React from "react";
import { useState, useEffect } from "react";

function AllPosts() {
  const [posts, setPosts] = useState([]); // store all posts

  // fetch all posts from API using Es6 fetch
  const getAllPosts = () => {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setPosts(json);
      });

  };

  // we want to load data on page load of this component
  useEffect(() => {
    //console.log("All posts loaded");
    getAllPosts();
  }, []);

  // Empty array as second argument ensures that this effect runs only once.
  return (
    <div>
      <section className=" container pt-2">
        <h3 className="text-center text-uppercase py-4">All Posts</h3>
        <div className="row">
          { posts.map((post, index,) => {

          return (<div key={post.id} className="col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <img
                src="https://source.unsplash.com/random/400*400/?city,night"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                 {post.body}
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>)
          })}
        </div>
      </section>
    </div>
  );
}

export default AllPosts;
