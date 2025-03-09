
import logo from "../assests/logo.png"

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand ms-4" href="#"><img src={logo} alt="Girl in a jacket" width="100" height="20"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-2 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-disabled="true">About Us</a>
        </li>
      </ul>
    </div>
    <div className="d-flex magnify">
        <div className="mx-2"><i class="fa-solid fa-magnifying-glass "></i></div>
        <div>
        <button type="button" class="btn btn-warning">Talk An Experts</button>
        </div>
    </div>
  </div>
</nav>
    </>
  )
}
