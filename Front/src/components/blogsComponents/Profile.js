import React, { Component } from "react";
import "./profile.css";
class Profile extends Component {
  state = {
    data: [
      {
        name: "Charlie Barber",
        job: "Senior blog writer",
        bio:
          "Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.",
        posts: ["React", "JavaScript"],
        catgories: [
          { field: "Web development", count: 35 },
          { field: "Web development", count: 35 }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="col-xl-4 col-l-6 col-md-6 profileContainer" key={this.state.data.name}>
          <form>
              <input className="profileSearchBar" type="search"  placeholder="Search posts"/>
              <i className="fas fa-search search"></i>
          </form>
        {this.state.data.map(person => (
          <div className="data">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
            <h4 className="centeredTxt">{person.name}</h4>
            <p className="centeredTxt">{person.job}</p>
            <p className="centeredTxt">{person.bio}</p>
            <h4 className="coloedrBackground">Popular Posts</h4>
            <div>
              {person.posts.map(i => (
                <a href="#"><p className="alignedTxt">{i}</p></a>
              ))}
            </div>
            <h4 className="coloedrBackground">Catgories</h4>
            <div>
              {person.catgories.map(catgory => (
                <div>
                  <a href="#"><p className="alignedTxt">{catgory.field}</p></a>
                  <p className="alignedTxt number">{catgory.count}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Profile;
