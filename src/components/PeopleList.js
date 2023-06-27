import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PersonCard } from './PersonCard';
import { NewFriendCard } from './NewFriendCard';
import styles from './PeopleList.module.css';

const PeopleList = ({ 
  people,
  onClickPerson = () => {},
  personActionName,
  onPersonAction,
  allowAdditions,
}) => {
  const history = useHistory();
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
      ))}
        { allowAdditions && (
         <div className={styles.peopleListItem}>
          <NewFriendCard onClick={() => history.push('/new-friend')} />
          </div>
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
  allowAdditions: PropTypes.bool,
}

export { PeopleList };