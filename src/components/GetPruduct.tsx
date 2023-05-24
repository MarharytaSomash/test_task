// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store/reducers/rootReducer";
// import useData from "../hooks/useData";
// import { Product } from "../store/interface";
// import "./style/productStyle.css";

// function GetProduct() {
//     const dispatch = useDispatch();
//     const { products }: { products: Product[] } = useSelector((state: RootState) => state.product);
//     const { getData } = useData();
//     useEffect(() => {
//         getData();
//     }, []);

//     const { error } = useSelector((state: RootState) => state.error);

//     return (
//         <div className="card-wrapper">
//             {products.map((item) => (
//                 <div key={item.id} className="card-wrapper-details">
//                     {item.images && item.images.length > 0 && (
//                         <div className="card-img-wrapper">
//                             <button className="card-img-wrapper-add">USED</button>
//                             <img
//                                 key={item.images[0].id}
//                                 src={item.images[0].src}
//                                 alt={item.title}
//                                 className="card-img"
//                             />
//                         </div>
//                     )}
//                     <div className="card-content">
//                         <h3>{item.title}</h3>
//                         <p>{item.price}</p>
//                         <p>Condition</p>
//                         <p>Slightly used</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default GetProduct;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import useData from "../hooks/useData";
import { Product } from "../store/interface";
import "./style/productStyle.css";

function GetProduct() {
    const dispatch = useDispatch();
    const { products }: { products: Product[] } = useSelector((state: RootState) => state.product);
    const { getData } = useData();
    useEffect(() => {
        getData();
    }, []);

    const { error } = useSelector((state: RootState) => state.error);

    return (
        <div className="card-wrapper">
            {products.map((item) => (
                <div key={item.id} className="card-wrapper-details">
                    {item.images && item.images.length > 0 && (
                        <div className="card-img-wrapper">
                            <img
                                key={item.images[0].id}
                                src={item.images[0].src}
                                alt={item.title}
                                className="card-img"
                            />
                            <button className="card-img-wrapper-add">USED</button>
                        </div>
                    )}
                    <div className="card-content-wrapper">
                        <div className="card-content-info-main">
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </div>
                        <div className="card-content-info">
                            <p>Condition</p>
                            <p>Slightly used</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GetProduct;