import styles from './App.module.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects/projects'

function App() {
  

  return (
    <div className={styles.App}>
      <NavBar></NavBar>
      <Hero></Hero>
      {/* <About></About> */}
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
      
  )
}

export default App
