import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './InitiativeCard.css';

const InitiativeCard = ({ initiative: { picture, title, interests, description, slug } }) => {
  return (
    <div className={s.card}>
      <img className={s.image} src={picture} width="100%" height="100%" />
      <a className={s.link} href={`/initiatives/${slug}`} />
      <div className={s.info}>
        <div className={s.title}>{title}</div>
        <ul className={s.interests}>
          {interests.map((interest, i) =>
            <li key={i}><a className={s.link} href={`/${interest}`}>{interest}</a></li>
          )}
        </ul>
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
