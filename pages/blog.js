import Layout from "../components/layout";
import { Habilidades, Experiencia, projects} from "../profile";

const Blog = () => (
    <Layout>
        {/**Portafolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="cold-md-12">
                            <h1 className="text-center text-light">Mis Habilidades</h1>
                        </div>
                        {
                            projects.map(({ name, description, img }, i) => (
                                <div className="cold-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${img}`} alt="" className="card-img-top" width="297" height="320" className="img-fluid" />
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

                <div className="cold-md-12">
                    <div className="text-center mt-4">

                        <a href="/Experiancia" className="btn btn-light">
                            More Proyects
                        </a>

                    </div>
                </div>
            </div>
        </div>
        <h1>Mis Habilidades</h1>
    </Layout>
)


export default Blog;