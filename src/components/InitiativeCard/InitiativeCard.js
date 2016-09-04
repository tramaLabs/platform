import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './InitiativeCard.css';

import InterestLink from '../InterestLink';
import Link from '../Link';

const InitiativeCard = ({ initiative: { picture, title, interests, description, slug } }) => {
  return (
    <div className={s.card}>
      <img className={s.image} src={picture} width="100%" height="100%" />
      <Link className={s.link} to={`/initiatives/${slug}`} />
      <div className={s.info}>
        <div className={s.title}>{title}</div>
        <div className={s.interests}>
          {interests.map((interest, i) =>
            <InterestLink key={i} interest={interest} />
          )}
        </div>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  )
}

InitiativeCard.propTypes = {
  initiative: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    interests: PropTypes.array.isRequired,
    picture: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired
}

export default withStyles(s)(InitiativeCard);
