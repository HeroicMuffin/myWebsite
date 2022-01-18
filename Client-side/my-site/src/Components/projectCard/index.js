import React, {useState} from "react";
import useChange from 'use-change';
import "./index.css";
import {store} from '../../App'

function ProjectCard(props) {

const [show, setShow] = useChange(store, 'show');

const [showModal, setShowModal] = useState(false)
const openModal = () =>{
    setShowModal(prev => !prev)
    setShow(!show)
    console.log(store.show)
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
           </div>
       </div>
    );
}
    




export default ProjectCard;
