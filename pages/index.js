import Layout from "../components/layout"


import { Habilidades, Experiencia, projects } from "../profile"

console.log(Experiencia)
console.log(Habilidades)
const Index = () => (
    <Layout>
        {/** Header card */}

        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="joseluis.jpg.jpg" alt="" width="297" height="320" />
                        </div>
                        <div className="col-md-8">
                            <h1>Jose Luis Fajardo Puma</h1>
                            <h3>Systems Engineer</h3>
                            <p>Los ingenieros de sistemas supervisan todos los aspectos de un proyecto o sistema en una variedad de campos, como software, transporte, desarrollo de productos y fabricación. Su trabajo es desarrollar un sistema que cree un producto desde el principio hasta el final</p>
                            <a href="/hireme">Contratame</a>

                        </div>
                    </div>
                </div>
            </div>

        </header>

        {/** Second section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Habilidades</h1>

                        {
                            Habilidades.map(({ Habilidades, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{Habilidades}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${percentage}%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                <div className="col-md-30">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Experiencia</h1>

                            <ul>
                                {
                                    Experiencia.map(({ title, description, from, to }, index) => (
                                        <li key={index}>
                                            <h3>{title}</h3>
                                            <h5>{from}-{to}</h5>
                                            <p>
                                                {description}
                                            </p>
                                        </li>
                                    )
                                    )
                                }
                            </ul>
                           <a href="/Experiancia" className="btn btn-light">
                            Saber mas
                           </a>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/**Portafolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">portafolio</h1>
                        </div>
                        {
                            projects.map(({name, description, img}, i) => (
                                <div className="col-md-4 p-2" key={i}>
                            <div className="card h-100">
                                <div className="overflow">
                                <img src={`/${img}`} alt="" className="card-img-top" width="297" height="320" className="img-fluid"/>
                                    </div>
                                
                                <div className="card-body">
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <a href="#!">saber mas</a>
                                </div>
                            </div>
                        </div>
                            ))

                        }
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="text-center mt-4">
                         
                    <a href="/Experiancia" className="btn btn-light">
                            More Proyects
                           </a>

                    </div>
                </div>
            </div>
        </div>

    </Layout>

)
export default Index; 