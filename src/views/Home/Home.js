import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Home.style';

class Home extends Component {
  // navigate to add screen
  goToAddScreen = () => {
    this.props.navigation.navigate('Add');
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent barStyle="light-content" />
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.goToAddScreen}>
            <Text style={styles.text}>{'ADD'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
