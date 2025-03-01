import React from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from './Icon';

interface SearchBoxProps {
  placeholder?: string;
  filterText: string;
  onChangeText: (text: string) => void;
  onCancelSearch: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder,
  filterText,
  onChangeText,
  onCancelSearch,
  onFocus,
  onBlur,
  autoCapitalize = 'sentences',
}) => {
  return (
    <View style={styles.container}>
      <Icon name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        onChangeText={onChangeText}
        value={filterText}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
        autoCorrect={false}
        autoCapitalize={autoCapitalize}
      />
      {filterText.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            onChangeText('');
            onCancelSearch();
          }}
          style={styles.cancelButton}
          hitSlop={{top: 5, right: 5, bottom: 5, left: 5}}>
          <Icon name={'close-circle'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center', // Ensure all items are aligned
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    width: '90%',
    alignSelf: 'flex-start',
    height: 40, // Explicit height to prevent expansion
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    height: '100%', // Ensure it takes the full height of the container
  },
  cancelButton: {
    marginLeft: 5, // Space from input field
  },
});

export default SearchBox;
