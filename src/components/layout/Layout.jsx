import './layout.css'
import Topbar from '../topbar/Topbar'
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout-comp">
        <Topbar />

        <main>
            {children}
        </main>

        <Footer />
    </div>
  )
}

export default Layout