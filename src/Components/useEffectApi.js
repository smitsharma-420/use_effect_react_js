import React, { useEffect, useState } from "react";

function UseEffectApi() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.org/posts");

    setUsers(await response.json());
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="useEffectApi">
      <h2 className="github-main-heading">List of GitHub Users</h2>
      <div className="github-users-main">
        <div className="github-users-wrap">

          {
            users.map((curElem) => {
              return (
                <div className="user-card">
                  <div className="user-card-wrp">
                    <div className="profile-image">
                      <img
                        src={curElem.image}
                        alt="profile-photo"
                        width="160px"
                        height="160px"
                      />
                    </div>
                    <div className="user-details">
                      <p className="username">{curElem.slug}</p>
                      <p className="userId">{curElem.userId}</p>
                      <div className="userDetails-wrp">
                        <div>
                          <p className="articals small-heading">Published At</p>{" "}
                          <span className="number1">{curElem.publishedAt}</span>
                        </div>
                        <div>
                          <p className="followers small-heading">Updated At</p>{" "}
                          <span className="number2">{curElem.updatedAt}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
  
        </div>
      </div>
    </div>
  );
}

export default UseEffectApi;
