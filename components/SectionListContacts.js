import React from 'react';
import { SectionList, Text } from 'react-native';
import PropTypes from 'prop-types';

import Row from './Row';

const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>;

const SectionListContacts = props => {
  // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,    // return the same object in a new immutable object
      [firstLetter]: [...(obj[firstLetter] || []), contact],    // overwrite the object[firstLetter]
    };
  }, {});

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map(letter => ({
      data: contactsByLetter[letter],
      title: letter,
    }));

  return (
    <SectionList
      keyExtractor={item => item.phone}
      sections={sections}
      renderItem={({ item }) => <Row {...item} onSelectContact={(contract)=>props.onSelectContact(contract)} /> }
      renderSectionHeader={renderSectionHeader}
    />
  );
};

SectionListContacts.propTypes = {
  contacts: PropTypes.array,
};

export default SectionListContacts;
