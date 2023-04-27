import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="/">Mi Portafolio Jose</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="acercadeMi">Acerca de Mi <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/blog">Habilidades</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/proyectos">Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/experienciaLaboral">Experiencia Laboral</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/educacion">Educacion</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar;