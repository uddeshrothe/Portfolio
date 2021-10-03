import './navbar.scss'

function Navbar() {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#intro">Ore wa</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#intro">Intro</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#testimonials">Testimonials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#contact">Contact</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
</div>
    )
}

export default Navbar
