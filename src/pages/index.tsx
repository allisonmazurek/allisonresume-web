import * as React from "react"
import { Link } from "gatsby"
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../utility/seo"
import List from "../components/List"
import Card_List from "../components/Card_List"
import UseEffectComponent from "../components/UseEffectComponent"
import UseContextComponent from "../components/UseContextComponent"

interface IState{
  Card: {
    header: string;
    body:string;
    date?:string;
    location?:string;
    image?: IGatsbyImageData;
    url?: string;
  }
}

const IndexPage: React.FC = () => {

  const [Card, setCard] = React.useState<IState["Card"]>({
    header: "Allison Mazurek",
    body: "My Name is Allison Mazurek",
    date: "January 5th, 2022",
  })

  // @ts-ignore
  return(
    <Layout>
    {/*<Seo title="Home" />
    <h1>Hello all</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/mascot.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      This boilerplate differs from the default in a number of ways:
    </p>
    <ul>
      <li>Fully TypeScript (as much as possible)</li>
      <li>SCSS from the start</li>
      <li>Dark theme via SCSS variables</li>
      <li>Automatic color palettes</li>
      <li>Google Analytics & GitHub Pages plugins builtin</li>
    </ul>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link className={'Magic'} to="/about-styling/">About Styling</Link>*/}
    <p>
      <List Card={Card}/>
      <List Card={Card}/>
      <List Card={Card}/>
{/*      <Card_List />
      <UseEffectComponent />
      <UseContextComponent />*/}
    </p>
  </Layout>
)
}
export default IndexPage
