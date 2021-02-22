import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const getFriendName = profile => {
    profile.name.slice(1);
}

const Friend = ({ profile, isDisabled, isSelected, select, view }) => (
    <TouchableOpacity style={styles[isSelected ? 'friendButtonSelected' : isDisabled ? 'friendButtonDisabled' : 'friendButton']}
      onPress={() => { if (!isDisabled) select(profile); }} 
      onLongPress={ () => view(profile)}
      >
    <Text style={styles.courseText}>
      {`CS ${getFriendName(profile)}\n${profile.handles}`}
    </Text>
  </TouchableOpacity>
  );

const friendButtonBase = {
  flex: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  height: 60,
  padding: 10,
  minWidth: 90,
  maxWidth: 90,
}

const styles = StyleSheet.create({
  friendButton: {
    ...friendButtonBase,
    backgroundColor: '#66b0ff',
  },
  friendText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  friendButtonSelected: {
    ...friendButtonBase,
    backgroundColor: '#004a99'
  },
  friendButtonDisabled: {
    ...friendButtonBase,
    backgroundColor: '#d3d3d3',
  },
});

export default Friend;