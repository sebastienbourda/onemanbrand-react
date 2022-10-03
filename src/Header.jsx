import './Header.scss'

function Header() {
  return (
    <header>
      <img src="logo.png" alt="one man brand" className='logo'/>
      <div className="menu">
        <span className="menu-text">MENU</span>
        <div className="menu-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header;
