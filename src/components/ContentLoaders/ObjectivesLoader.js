import React from "react"
import ContentLoader from "react-content-loader"

const ObjectivesLoader = (props) => (
  <ContentLoader 
  speed={2}
  width={"75%"}
  height={"80%"}
  viewBox="0 0 100% 100%"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
  {...props}
  >
    <rect x="5%" y="48%" rx="1" ry="1" width="100%" height="3em" /> 
    <rect x="5%" y="60%" rx="1" ry="1" width="10%" height="3em" /> 
    <rect x="17%" y="60%" rx="1" ry="1" width="20%" height="3em" /> 
    <rect x="39%" y="60%" rx="1" ry="1" width="10%" height="3em" /> 
    <rect x="51%" y="60%" rx="1" ry="1" width="20%" height="3em" /> 
    <rect x="73%" y="60%" rx="1" ry="1" width="50%" height="3em" /> 
  </ContentLoader>
)

export default ObjectivesLoader;