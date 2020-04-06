import { observable, action } from 'mobx';

export default class SpinnerStore {
  @observable isShowSpinner = false;

  @action showSpinner = () => {
    this.isShowSpinner = true;
  }

  @action hideSpinner = () => {
    this.isShowSpinner = false;
  }
}