import React, {Component} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {saveTodoDetails} from '../../actions/todoAction';
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

  doAddAction = () => {
    if (this.isValid()) {
      const {title, description} = this.state;

      // construct todo obj
      const listing = {
        title: title,
        description: description,
      };

      // call actions with obj
      this.props.saveTodoDetails(listing);

      // navigate to home
      this.props.navigation.navigate('Home');
    } else {
      Alert.alert('Fill out all the fields');
    }
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <ScrollView
            style={{flex: 1, marginBottom: 80}}
            keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
              <Text style={styles.titleText}>{'Title'}</Text>
              <TextInput
                style={styles.textContainer}
                placeholder="Enter Title"
                returnKeyType="next"
                onChangeText={title => {
                  this.setState({title, isTitleEmpty: false});
                }}
              />
              <Text style={styles.titleText}>{'Description'}</Text>
              <TextInput
                style={styles.textContainer}
                placeholder="Enter Description"
                returnKeyType="done"
                onChangeText={description =>
                  this.setState({description, isDescriptionEmpty: false})
                }
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.button}
          testID={'addAction'}
          onPress={() => this.doAddAction()}>
          <Text style={styles.submitText}>{'SAVE'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveTodoDetails: listing => {
      dispatch(saveTodoDetails(listing));
    },
  };
};

export default connect(null, mapDispatchToProps)(Add);
