import React, {useState} from "react";
import { Modal } from "../DemoModal";
import "./index.css";


function ProjectCard(props) {



const [showModal, setShowModal] = useState(false)
const openModal = () =>{
    setShowModal(prev => !prev)
}


    const { image,gif,description,title}= props.data

    return (
       <div className="card text-center shadow">
           <div className="overflow">
               <img src={image} alt="" className="card-img-top"/>
           </div>
           <div className="card-body text-dark">
               <h4 className="card-title">{title}</h4>
               <p className="card-text text-secondary">{description}</p>
               <button className="btn btn-outline-success" onClick={openModal}>Demo</button>
               <Modal className="modalBG"  showModal={showModal} setShowModal={setShowModal} gif={gif}/>
           </div>
       </div>
    );
}
    




export default ProjectCard;
