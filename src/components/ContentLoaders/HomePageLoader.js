import React from "react"
import ContentLoader from "react-content-loader"

const HomePageLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={"90%"}
    height={"90%"}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5%" y="25%" rx="1" ry="1" width="90%" height="10%" /> 
    <rect x="5%" y="40%" rx="1" ry="1" width="21%" height="20%" /> 
    <rect x="28%" y="40%" rx="1" ry="1" width="21%" height="20%" /> 
    <rect x="51%" y="40%" rx="1" ry="1" width="21%" height="20%" /> 
    <rect x="74%" y="40%" rx="1" ry="1" width="21%" height="20%" /> 
  </ContentLoader>
)

export default HomePageLoader;