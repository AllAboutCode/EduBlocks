import React = require('preact');
import { Component } from 'preact';

interface AlertModalProps<T extends AlertModalOption> {
  title: string;
  visible: boolean;
  text: string;

  onCancel(): void;
  onButtonClick(key: string): void;
}

interface AlertModalState {

}

export interface AlertModalOption {
  title: string;
  text: string;
}

export default class AlertModal<T extends AlertModalOption> extends Component<AlertModalProps<T>, AlertModalState> {
  public render() {

    return (
      <div class='modal'>
        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />
        <label for='modal_1' class='overlay'></label>
        <article class="AlertModel__container"> 
          <header class="SelectModal__header">
            <h3>{this.props.title}</h3>
            <a class='SelectModal__close close' onClick={() => this.props.onButtonClick('close')}>&times;</a>
          </header>

          <section class='SelectModel__content'>
            {this.props.text}
          </section>
          <footer class="alertFooter">
            <label for="modal_1" class="button dangerous" onClick={() => this.props.onButtonClick('close')}>
              Close
            </label>
          </footer>
        </article>
      </div>
    );
  }
}
