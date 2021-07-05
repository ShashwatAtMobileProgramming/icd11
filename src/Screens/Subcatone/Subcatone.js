import React, {Component} from 'react';
import {
  ActionSheetIOS,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import actions from '../../redux/actions';
import types from '../../redux/types';
import store from '../../redux/store';
import Subcattwo from '../Subcattwo/Subcattwo';
import navigationStrings from '../../constants/navigationStrings';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import imagePath from '../../constants/imagePath';
import Header from '../../Components/Header';
import {connect} from 'react-redux';

const {dispatch} = store;

class Subcatone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainArray1: [],
      checkarrayone: [],
    };
  }

  componentDidMount = () => {
    const {MainArray1} = this.state;
    const {checkarrayone} = this.state;
    const {my_token} = this.props;
    console.log(my_token, 'access token at subcatone page');
    const {MainArray} = this.props.route.params;
    console.log(MainArray, 'at sub one');
    // let id = MainArray[0].child[0];

    for (var i = 0; i < MainArray[0].child.length; i++) {
      console.log(MainArray[0].child[i], 'printing loop of api');
      let id = MainArray[0].child[i];
      console.log(id, 'id check');
      let newid = id.slice(0, 4) + 's' + id.slice(4, 40);
      console.log(newid, 'check it');
      dispatch({
        type: types.MYID,
        payload: newid,
      });
      const Authorization = 'Bearer' + ' ' + my_token;
      console.log(Authorization, 'check authorisation token');
      let headers = {
        Authorization: Authorization,
        'API-Version': 'v2',
        'Accept-Language': 'en',
        Accept: 'application/json',
      };
      let data = {};
      console.log(headers, 'at subcategory page');

      actions
        .mainlistingdiseasescheck(newid, data, headers)
        .then(res => {
          console.log(res, 'response at subcategory page by sahil');

          checkarrayone.push(res);
          console.log(checkarrayone, 'aaaaaaaaaaaaaaa');

          this.setState({
            MainArray1: checkarrayone,
          });
        })
        .catch(err => {
          console.log(err, 'EROR');
        });
    }

    // old code

    // console.log(id, 'id check');
    // let newid = id.slice(0, 4) + 's' + id.slice(4, 40);
    // console.log(newid, 'check it');

    // let headers = {
    //   Authorization:
    //     'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MjQ4ODgyNzksImV4cCI6MTYyNDg5MTg3OSwiaXNzIjoiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQiLCJhdWQiOlsiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQvcmVzb3VyY2VzIiwiaWNkYXBpIl0sImNsaWVudF9pZCI6IjFiOGU5OTFkLTAwYzMtNGFjNS05OTFkLTc1MWVlZTllZTVjM18zMzQ0YmY3MC03ZmUwLTRkYzEtYWU0OS0xYzU4MDQxNmE4MmUiLCJzY29wZSI6WyJpY2RhcGlfYWNjZXNzIl19.wLfKwARS2SL4hePhEiB5gbyWudA6bjQmfv7s6-HRHYpccXjUqvWfrJ5CInzSuFI5eMSNinFW4_9S8MeRDTnARRwXwjhrEPU5ELq-aYaD5HJCur25JSHumnpB8jmKgO-xRxwlOIv7Um5sT86-HEbU_SyStys3zVZsjBoDAIEKraq_2GvsidNig5K_DHFSigLbedCfnW4neW71cSjm53wgOYULK7u9PSdzUfh9dh6B5gXq3VGdWmrkSOvnXVjgFOlhtKAbdt4mBCqyF9FkavWLfXIleTjHzIzgjwRZdD1hglYQjySCKNudvFAt8kR-7I4HEmVKIm6mw-DXJg3hoslj8A',
    //   'API-Version': 'v2',
    //   'Accept-Language': 'en',
    //   Accept: 'application/json',
    // };
    // let data = {};
    // console.log(headers, 'at subcategory page');
    // actions
    //   .ondiseasesone(newid, data, headers)
    //   .then(res => {
    //     console.log(res, 'response at subcategory page by sahil');
    //     let newarray1 = res;
    //     console.log(newarray1, 'resoonse at suncatone');
    //     this.setState({
    //       MainArray1: [newarray1],
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err, 'EROR');
    //   });
  };

  onClickDiseasesOne = id => {
    const {MainArray1} = this.state;
    console.log(MainArray1, 'MAinarray 1');
    const {navigation} = this.props;
    let myid = id.slice(0, 4) + 's' + id.slice(4, 40);
    console.log(myid, 'check it');

    navigation.navigate(navigationStrings.SUBCATTWO, {
      MainArray1: MainArray1,
      myid: myid,
    });
  };
  renderItem = ({item}) => {
    console.log(item, 'item in render item');
    return (
      <View style={{flex: 1}}>
        <View style={styles.mainview}>
          <TouchableOpacity
            onPress={() => this.onClickDiseasesOne(item['@id'])}>
            <Image source={imagePath.icd} style={commonStyles.imagecard} />
            <Text style={styles.headingtext}>{item['title']['@value']}</Text>
          </TouchableOpacity>
        </View>

        {/* <View>
          <Text>{item.child}</Text>
        </View> */}
      </View>
    );
  };
  render() {
    const {MainArray} = this.props.route.params;
    const {checkarrayone} = this.state;
    const {MainArray1} = this.state;
    console.log(MainArray1, 'checking Mainarray1');

    return (
      <View>
        <View>
          <Header />
        </View>
        <View>
          <FlatList
            data={checkarrayone}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{}} />}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    my_token: state.homereducers.my_token,
  };
};
export default connect(mapStateToProps)(Subcatone);

const styles = StyleSheet.create({
  mainview: {
    ...commonStyles.viewofcard,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
  },
  headingtext: {
    fontFamily: fontFamily.futuraHeavyBt,
    fontSize: 20,
  },
  bodyview: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    margin: 10,
  },
  bodytext: {
    fontFamily: fontFamily.semiBold,
  },
});
