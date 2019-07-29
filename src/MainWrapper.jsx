import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class MainWrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const wrapperClass = classNames({
      wrapper: true,
    });

    const { children } = this.props;
    return (
      <div>
        <div className={`${wrapperClass} hero-image`}>
          {children}
        </div>
      </div>
    );
  }
}

export default MainWrapper;
