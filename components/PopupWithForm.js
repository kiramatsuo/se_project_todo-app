import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handlFormSubmit }) {
    super({ popupSelector });
  }
}

export default PopupWithForm;
