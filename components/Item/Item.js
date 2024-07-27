import React from 'react';
import {View, Text} from 'react-native';
import propTypes from 'prop-types';
const Item = ({name, price}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
};
Item.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};

export default Item;
