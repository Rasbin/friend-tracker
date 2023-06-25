import PropTypes from 'prop-types';
import { PersonCard } from './PersonCard';
import styles from './PeopleList.module.css';

const PeopleList = ({ 
  people,
  onClickPerson = () => {},
  personActionName,
  onPersonAction,
}) => {
  return (
    <div className={styles.peopleList}>
      {people.map(person => (
        <div key={person.id} className={styles.peopleListItem}>
          <PersonCard
            person={person}
            onCardClicked={onClickPerson}
            actionName={personActionName}
            onAction={onPersonAction} />
        </div>
        )
      )}
    </div>
  );
}

PeopleList.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profilePicUrl: PropTypes.string,
      age: PropTypes.number,
    })
  ).isRequired,
  onClickPerson: PropTypes.func,
  personActionName: PropTypes.string,
  onPersonAction: PropTypes.func,
}

export { PeopleList };