import React, { useState } from "react";

const Searchbar = (props) => {
  const [term, setTerm] = useState("building");

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        {" "}
        <div className="field">
          <label>Search for a video</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
// class Searchbar extends React.Component {
//   state = { term: "" };
//   onInputChange = (event) => {
//     this.setState({ term: event.target.value });
//   };

//   onFormSubmit = (event) => {
//     event.preventDefault();

//     this.props.onFormSubmit(this.state.term);

//     // TODO: Make sure we call
//     // callback from parent component
//   };

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form className="ui form" onSubmit={this.onFormSubmit}>
//           {" "}
//           <div className="field">
//             <label>Video Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default Searchbar;
