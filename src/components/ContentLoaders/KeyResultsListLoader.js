import React from "react"
import ContentLoader from "react-content-loader"

const KeyResultsListLoader = (props) => (
  <ContentLoader 
  speed={2}
  width={"90%"}
  height={"30%"}
  viewBox="0 0 100% 100%"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
  {...props}
  >
    <rect x="0%" y="25%" rx="1" ry="1" width="100%" height="3em" /> 
    <rect x="0%" y="60%" rx="1" ry="1" width="10%" height="3em" /> 
    <rect x="12%" y="60%" rx="1" ry="1" width="20%" height="3em" /> 
    <rect x="34%" y="60%" rx="1" ry="1" width="10%" height="3em" /> 
    <rect x="46%" y="60%" rx="1" ry="1" width="20%" height="3em" /> 
    <rect x="68%" y="60%" rx="1" ry="1" width="50%" height="3em" /> 
    
  </ContentLoader>
)

export default KeyResultsListLoader;