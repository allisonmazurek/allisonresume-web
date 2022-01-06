import React from "react";
import { IGatsbyImageData } from "gatsby-plugin-image"

interface ICard{
  Card: {
    header: string;
    body:string;
    date?:string;
    location?:string;
    image?: IGatsbyImageData;
    url?: string;
  }
}


const List: React.FC<ICard> = ({Card}) => {

  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);

  const [background, setBackground] = React.useState<string>("#fdfdfd");

  /*onMouseEnter={() => setBackground("blue")}*/
  /*onMouseOut={() => setBackground("#fdfdfd")}*/

  return (
      <div
        className={hovered ? 'Card-Active' : 'Card'}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <h1>Hello</h1>
        <p>My name is Allison</p>
      </div>
  );
}


export default List