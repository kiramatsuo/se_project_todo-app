class FormValidator {
  constructor(settings, formEl) {
    this._formEl = formEl;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
  }

  _checkValidity() {}

  _changeSubmitButton() {}

  _addHandlers() {}

  enableValidation() {}

  disableSubmitButton() {}
}

export default FormValidator;
