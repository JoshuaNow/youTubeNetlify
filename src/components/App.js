import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
// import youtube from "./youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
require("dotenv").config();
//TODO for after break, learn grid system with semantic ui
//TODO fix default video when we re search another video
// to make jsx resuable we use components, to make functions and calls, reusable was can do custom hooks

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("star wars");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />{" "}
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTermSubmit} />{" "}
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
