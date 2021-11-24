import React from "react"
import ContentLoader from "react-content-loader"

const TeamLoader = (props) => (
  <ContentLoader 
  speed={2}
    width={"100%"}
    height={"100%"}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10%" y="2%" rx="1" ry="1" width="35%" height="100%" /> 
    <rect x="55%" y="2%" rx="1" ry="1" width="35%" height="100%" /> 
    
  </ContentLoader>
)

export default TeamLoader;