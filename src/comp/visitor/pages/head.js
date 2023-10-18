// import './app.css';

export default function head(){

    return(
        <div>
            <header id="header" class="fixed-top ">
      

      <h1 class="logo me-auto me-lg-0"><a href="index.html">TransPor<span>!Y</span></a></h1>
     
    
      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">horaire</a></li>
          <li class="dropdown"><a href="#portfolio"><span>news</span> <i
                class="bi bi-chevron-down"></i></a>
            
          </li>
         
          <li className="dropdown"><a href="/"><span>Register As</span> <i
                className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="sign-up-login/index.php">utilisateur</a></li>
              <li><a href="sign-up-login/index2.php">.</a></li>
              <li><a href="admin/admin.php">Admin</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>


    
    </header>
        </div>
    );
}