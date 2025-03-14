import { useParams } from "react-router-dom";
import Biten from "./Biten"; // verinin olduğu dosya

const Proje = () => {
    // useParams ile id'yi al
    const { id } = useParams();


    // id'yi kullanarak ilgili projeyi bul
    const p = Biten.find(item => item.id === id);

    if (!p) {
        return <div>Proje bulunamadı</div>;
    }

    return (
        <div>
            <div className="py-30 flex justify-center text-4xl bg-mavi">
                {p.kategori}
            </div>
            <div className="p-10 flex gap-5">
                <div className="w-[80%]">
                    <img src={p.img} alt="projefotosu" />
                </div>
                <div className="flex flex-col items-center gap-10 p-10 w-[50%]">
                    <div className="text-3xl">{p.İsim}</div>
                    <div>{p.Bilgi}</div>
                </div>


            </div>

        </div>
    );



};

export default Proje;