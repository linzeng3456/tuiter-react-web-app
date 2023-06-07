import React, {useState} from "react";
import { AiOutlinePicture } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdFormatListBulleted } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';
import { BiBold, BiItalic } from 'react-icons/bi';
import {createTuit} from "./tuits/tuits-reducer";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening
    }
    dispatch(createTuit(newTuit));
    setWhatsHappening("");
  }
  return (
    <div className="row">
      <div className="col-auto">
        <img src={require(`./images/nasa.png`)} width={60} alt={""}/>
      </div>
      <div className="col-10">
        <textarea value={whatsHappening} placeholder="What's happening?"
                  className="form-control border-0"
                  onChange={(event) => setWhatsHappening(event.target.value)}>
        </textarea>
        <div>
          <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                  onClick={tuitClickHandler}>
            Tuit
          </button>
          <div className="text-primary fs-2">
            <i className="bi bi-image me-3"></i>
            <i className="bi bi-filetype-gif me-3"></i>
            <i className="bi bi-reception-4 me-3"></i>
            <i className="bi bi-emoji-smile me-3"></i>
            <i className="bi bi-geo-alt me-3"></i>
          </div>
        </div>
      </div>
        <div className="col-12"><hr/></div>
      </div>
  );
}
export default WhatsHappening;