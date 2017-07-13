import React, { PureComponent } from 'react';
import cn from 'classnames';

export default class EquipSet extends PureComponent {
  state = {
    clicked: false
  }

  handleClick = () => this.setState({ clicked: !this.state.clicked });

  render() {
    const { setName, data } = this.props;
    const { NAME, SWORD, SHIELD, ARMOR, HELM, STAT, HP, BONUS } = data;
    const imgPath = `images/equipment/${setName.toLowerCase()}.png`;

    const containerStyles = cn(
      'margin-10',
      'outline-darkbrown',
      'border-brown',
      'bg-lightbrown',
      'pointer'
    );
    const titleStyles = cn(
      'mt-10',
      'text-center',
      'fontsize-4',
      'darkbrown',
      'uppercase'
    );
    const bodyStyles = cn(
      'margin-10',
      'width-500',
      'height-235',
      'ubuntu',
      'fontsize-3'
    );
    const contentStyles = cn(
      'size-fill',
      'text-left'
    );

    const body = this.state.clicked
      ? (
        <div className={bodyStyles}>
          <table className={contentStyles}>
            <tr>
              <th>Item</th>
              <th>Stat</th>
              <th>Bonus</th>
            </tr>
            <tr>
              <td>{SWORD.NAME}</td>
              <td>+{STAT} Attack</td>
              <td>{SWORD.BONUS}</td>
            </tr>
            <tr>
              <td>{SHIELD.NAME}</td>
              <td>+{STAT} Ranged Defense</td>
              <td>{SHIELD.BONUS}</td>
            </tr>
            <tr>
              <td>{ARMOR.NAME}</td>
              <td>+{STAT} Defense</td>
              <td>{ARMOR.BONUS}</td>
            </tr>
            <tr>
              <td>{HELM.NAME}</td>
              <td>+{HP} Max HP</td>
              <td>{HELM.BONUS}</td>
            </tr>
          </table>
        </div>
      )
      : (
        <div className={bodyStyles}>
          <img className={contentStyles} src={imgPath} />
        </div>
      );

    return (
      <div className={containerStyles} onClick={this.handleClick}>
        <h1 className={titleStyles}>{NAME}</h1>
        {body}
      </div>
    );
  }
}
