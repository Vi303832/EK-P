import { useParams } from "react-router-dom";
import Biten from "./Biten"; // verinin olduğu dosya

const Proje = () => {
    // useParams ile id'yi al
    const { id } = useParams();


    // id'yi kullanarak ilgili projeyi bul
    const project = Biten.find(item => item.id === id);

    if (!project) {
        return <div>Proje bulunamadı</div>;
    }

    return (
        <div>
            <h1>{project.İsim}</h1>
            <p>{project.Açıklama}</p>
            <img src={project.img} alt={project.İsim} />
        </div>
    );



};

export default Proje;