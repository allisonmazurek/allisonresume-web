import * as React from "react"
import { Link } from "gatsby"
import Hamburger from "./Hamburger"

/*interface Timespan {
  start: Date;
  end: Date;
}*/

export interface HeaderProps{
  siteTitle: string;
}

/*const Timespan: React.FC<Timespan> = ({start, end}) => {
  return (<div className={"Horizontal"}>
    <p style={{marginRight: '15px'}}>{start.toDateString()}</p>
    <p>{end.toDateString()}</p>
  </div>)
}*/

const Header: React.FC<HeaderProps> = ({ children, siteTitle }) => (
  <header
    className={'background-complement-lightest Header'}
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
          className={'color-accent-darkest'}
        >
          <Hamburger />
          {siteTitle}
        </Link>
      </h1>
      {children}
    </div>
  </header>
)


Header.defaultProps = {
  siteTitle: ``,
}

export default Header
