import React, { PureComponent } from 'react';

export default class EquipSet extends PureComponent {
  state = {
    clicked: false
  }

  handleClick = () => this.setState({ clicked: !this.state.clicked });

  render() {
    const { setName, data } = this.props;
    const { NAME, SWORD, SHIELD, ARMOR, HELM, STAT, HP, BONUS } = data;
    const imgPath = `images/equipment/${setName.toLowerCase()}.png`;

    // const containerStyles = cn(
    //   'm-10',
    //   'outline-darkbrown',
    //   'border-brown',
    //   'bg-lightbrown',
    //   'pointer'
    // );
    // const titleStyles = cn(
    //   'mt-10',
    //   'text-center',
    //   'fontsize-14',
    //   'darkbrown',
    //   'uppercase'
    // );
    // const bodyStyles = cn(
    //   'm-10',
    //   'width-500',
    //   'height-250',
    //   'ubuntu',
    //   'fontsize-10'
    // );
    // const contentStyles = cn(
    //   'size-fill',
    //   'text-left'
    // );

    const body = this.state.clicked
      ? (
          <table>
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
      )
      : <img src={imgPath} />;

    return (
      <div onClick={this.handleClick}>
        <h1>{NAME}</h1>
          <div>{body}</div>
      </div>
    );
  }
}
