export default function Navbar(){
    function showSidebar(){
        let sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.classList.toggle('active')
    }
    function hideSidebar(){
        let sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.classList.toggle('active')
    }
    return(
        <>
        <div className="sidebar">
            <div className="sidebar-options">
                <div className="close-btn-div"><button className="close-sidebar-btn" onClick={hideSidebar}><svg style={{color:'white'}}xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg></button></div>
                <div className="sign-in-div"><span  className="sign-in-text">Sign in</span></div>
                <div className="orders-div"><span className="orders-span">& Orders</span></div>
                <div className="shopping-cart-div"><span className="shopping-cart">Cart <svg style={{color:'white'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white"></path> </svg></span></div>
            </div>
        </div>
        <nav className="navbar">
            <img className="amazon-icon" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
            <div className="search-div"><input className="search-box" type="text" />
            <svg className="search-icon" focusable="true" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div>
            <div className="options">
            <span className="sign-in-text">Sign in</span>
            <span className="orders-span">& Orders</span>
            <span className="shopping-cart"><svg style={{color:'white'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white"></path> </svg></span>
            </div>
            <button className="hamburger-menu-btn" onClick={showSidebar}>
            <ul className="hamburger-menu">
                <li></li>
                <li></li>
                <li></li>
            </ul>
    
            </button>
        </nav>
        </>
    )
}