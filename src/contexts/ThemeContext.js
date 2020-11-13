import React, {Component, createContext} from 'react'

const ThemeContext = createContext();

export default class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: true}
  }
  render() {
    return(
    <ThemeContext.Provider value={{...this.state, taste: 'Like Chicken'}}>
      {this.props.children}
    </ThemeContext.Provider>
    )
  }
}