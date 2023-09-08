import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

const UserProfilePage = () => {
  const user = {
    name: 'John Doe',
    profilePicture: require('../assets/profile-picture.png'),
    bio: 'Marie jane 🌅 | Tourist 🌅',
    posts: [
      {id: 1, content: 'Enjoying the beautiful sunset! 🌅'},
      {id: 2, content: 'Exploring new places and making memories.'},
      // ... other posts
    ],
    friends: [
      {id: 1, name: 'James', profilePicture: require('../assets/friend1.png')},
      {
        id: 2,
        name: 'William',
        profilePicture: require('../assets/friend2.png'),
      },
      {id: 3, name: 'Harry', profilePicture: require('../assets/friend1.png')},
      {id: 4, name: 'Petter', profilePicture: require('../assets/friend2.png')},
      // ... other friends
    ],
  };

  const renderPost = ({item}) => (
    <View style={styles.postRow}>
      <Text style={{color: '#000000'}}>{item.content}</Text>
    </View>
  );

  const renderFriend = ({item}) => (
    <TouchableOpacity style={{margin: 10}}>
      <Image source={item.profilePicture} style={styles.friendProfilePicture} />
      <Text style={{color: '#000000'}}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{flex: 1, padding: 10}}>
      <View style={styles.container}>
        <View style={{alignItems: 'center', padding: 20}}>
          <Image source={user.profilePicture} style={styles.proPic} />
          <Text style={styles.bioText}>{user.bio}</Text>
        </View>

        <Text style={styles.sectionHeader}>User's Posts</Text>
        <FlatList
          data={user.posts}
          keyExtractor={item => item.id.toString()}
          renderItem={renderPost}
        />

        <Text style={styles.sectionHeader}>Friends List</Text>
        <FlatList
          data={user.friends}
          keyExtractor={item => item.id.toString()}
          renderItem={renderFriend}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}
        />
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfilePage;
