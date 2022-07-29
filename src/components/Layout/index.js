import { Outlet } from 'react-router-dom'
import LeftSidebar from '../LeftSidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <LeftSidebar />
      <div className="page">
        <span className="tags top-tags">Function website:</span>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout