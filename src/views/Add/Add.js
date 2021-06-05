import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Add.style';

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      isTitleEmpty: false,
      isDescriptionEmpty: false,
    };
  }

  // validation of text inputs
  isValid = () => {
    const {title, description} = this.state;

    if (title.length === 0) {
      this.setState({
        isTitleEmpty: true,
      });
    } else {
      this.setState({isTitleEmpty: false});
    }

    if (description.length === 0) {
      this.setState({
        isDescriptionEmpty: true,
      });
    } else {
      this.setState({isDescriptionEmpty: false});
    }

    return title.length > 0 && description.length > 0;
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <Text style={styles.titleText}>{'Title'}</Text>
            <TextInput
              style={styles.textContainer}
              placeholder="Enter Title "
              onChangeText={title =>
                this.setState({title, isTitleEmpty: false})
              }
            />
            <Text style={styles.titleText}>{'Description'}</Text>
            <TextInput
              style={styles.textContainer}
              placeholder="Enter Description "
              onChangeText={description =>
                this.setState({description, isDescriptionEmpty: false})
              }
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.submitText}>{'SAVE'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Add;
