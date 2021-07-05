import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../Components/Header';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';

class Subcatthree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainArray3: [],
      checkarraythree: [],
    };
  }
  componentDidMount = () => {
    const {MainArray3} = this.state;
    const {checkarraythree} = this.state;
    const {my_token} = this.props;
    console.log(my_token, 'access token at subcatthree page');
    const {MainArray2} = this.props.route.params;
    const {myid} = this.props.route.params;
    console.log(MainArray2, 'at sub three');
    // let id = MainArray[0].child[0];
    // for (var j = 0; j < MainArray2.length; j++) {
    for (var i = 0; i < MainArray2[0].child.length; i++) {
      console.log(MainArray2[0].child[i], 'printing loop of api');
      let id = MainArray2[0].child[i];
      console.log(id, 'id check');
      let newid = id.slice(0, 4) + 's' + id.slice(4, 40);
      // let newid = myid;
      console.log(newid, 'check it');
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

          checkarraythree.push(res);
          console.log(checkarraythree, 'aaaaaaaaaaaaaaa');

          this.setState({
            MainArray3: checkarraythree,
          });
        })
        .catch(err => {
          console.log(err, 'EROR');
        });
    }
  };

  // componentDidMount = () => {
  //   const {MainArray2} = this.props.route.params;
  //   console.log(MainArray2, 'at subcathree');
  //   let id = MainArray2[0].child[0];

  //   console.log(id, 'id check');
  //   let newid = id.slice(0, 4) + 's' + id.slice(4, 40);
  //   console.log(newid, 'check it at subcat three');
  //   let headers = {
  //     Authorization:
  //       'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MjQ5NjIxNzMsImV4cCI6MTYyNDk2NTc3MywiaXNzIjoiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQiLCJhdWQiOlsiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQvcmVzb3VyY2VzIiwiaWNkYXBpIl0sImNsaWVudF9pZCI6IjFiOGU5OTFkLTAwYzMtNGFjNS05OTFkLTc1MWVlZTllZTVjM18zMzQ0YmY3MC03ZmUwLTRkYzEtYWU0OS0xYzU4MDQxNmE4MmUiLCJzY29wZSI6WyJpY2RhcGlfYWNjZXNzIl19.QUkZsc2LD9fI9L5z4hGNrk9KvPAFzTAsGZ5vGzmGFEyRJsOSkkGg-Mj1_oDpT759m7ud8_XC9EoozGYj3klpvezeu6JN5pr8gRWxsKxhQDAcZr8a6FrF71NN9IleAaldWiH77YqzscZr1U2FLBqb_YC4kOBqQ5_tC3BdBi24PCEJ834k7GScwKybMQQYXiLnhJjbL7BLWfskXpP6eUqg-oaUL-XHkeya7T0xH9M2nTzdlqQv7ZzAw81mMBtIzwWpcH8rFmxiwZWUitOnL062O6SrTgnm4CkU5s10tYrMMqZlEMsLr37arvdaMP3kZROD-lO4r-oiGvmwgbBd5OOsrQ',
  //     'API-Version': 'v2',
  //     'Accept-Language': 'en',
  //     Accept: 'application/json',
  //   };
  //   let data = {};
  //   console.log(headers, 'at subcategorytwo page');
  //   actions
  //     .ondiseasesthree(newid, data, headers)
  //     .then(res => {
  //       console.log(res, 'response at subcategorythree page by sahil');
  //       let newarray3 = res;
  //       this.setState({
  //         MainArray3: [newarray3],
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err, 'EROR');
  //     });
  // };
  onClickDiseasesThree = id => {
    const {MainArray3} = this.state;
    const {navigation} = this.props;

    let myid = id.slice(0, 4) + 's' + id.slice(4, 40);
    console.log(myid, 'check it');
    navigation.navigate(navigationStrings.SUBCATFOUR, {
      MainArray3: MainArray3,
      myid: myid,
    });
  };
  renderItem = ({item}) => {
    console.log(item, 'item in render item');
    return (
      <View>
        <View style={styles.mainview}>
          <TouchableOpacity
            onPress={() => this.onClickDiseasesThree(item['@id'])}>
            <Text style={styles.headingtext}>{item['title']['@value']}</Text>
          </TouchableOpacity>
        </View>
        <View>{/* <Text>Sub cat three</Text> */}</View>
        {/* <View style={styles.bodyview}>
          <Text style={styles.bodytext}>{item['definition']['@value']}</Text>
        </View> */}
      </View>
    );
  };
  render() {
    const {MainArray3, checkarraythree} = this.state;
    return (
      <View>
        <View>
          <Header />
        </View>
        <View>
          <FlatList
            data={checkarraythree}
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
export default connect(mapStateToProps)(Subcatthree);

const styles = StyleSheet.create({
  mainview: {
    ...commonStyles.viewofcard,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingtext: {
    fontFamily: fontFamily.futuraHeavyBt,
    fontSize: 30,
  },
  // bodyview: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: 30,
  //   margin: 10,
  // },
  // bodytext: {
  //   fontFamily: fontFamily.semiBold,
  // },
  bodyview: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    margin: 10,
  },
  bodytext: {
    fontFamily: fontFamily.semiBold,
    marginLeft: 'auto',
    margin: 5,
    backgroundColor: '#fef8e8',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  subheadingtext: {
    fontSize: 30,
    fontFamily: fontFamily.regular,
  },
  subheadingview: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff3d9',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    margin: 10,
  },
});
