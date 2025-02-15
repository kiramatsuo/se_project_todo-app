import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handlFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this.__popupForm.querySelectorAll(".popup__input");
    this._inputList.forEach((input) => {});
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValue = this._getInputValues();
      this._handleFormSubmit(evt);
    });
  }
}

export default PopupWithForm;
