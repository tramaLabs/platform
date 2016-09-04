import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './InterestLink.css';

import Link from '../Link';

const InterestLink = ({ interest }) =>
  <Link className={s.link} to={`/?q=${interest}`}>{interest}</Link>;

InterestLink.propTypes = {
  interest: PropTypes.string.isRequired,
};

export default withStyles(s)(InterestLink);
