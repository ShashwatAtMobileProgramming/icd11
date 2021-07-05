import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../Components/Header';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';

class Subcattwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainArray2: [],
      checkarraytwo: [],
    };
  }
  componentDidMount = () => {
    const {MainArray2} = this.state;
    const {checkarraytwo} = this.state;
    const {my_token} = this.props;
    console.log(my_token, 'access token at subcatone page');
    const {MainArray1} = this.props.route.params;
    const {myid} = this.props.route.params;
    console.log(MainArray1, 'at sub one');
    // let id = MainArray[0].child[0];

    // for (var i = 0; i < MainArray1[0].child.length; i++) {
    //   console.log(MainArray1[0].child[i], 'printing loop of api');
    //   let id = MainArray1[0].child[i];
    //   console.log(id, 'id check');
    //   let newid = id.slice(0, 4) + 's' + id.slice(4, 40);
    let newid = myid;
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

        checkarraytwo.push(res);
        console.log(checkarraytwo, 'aaaaaaaaaaaaaaa');

        this.setState({
          MainArray2: checkarraytwo,
        });
      })
      .catch(err => {
        console.log(err, 'EROR');
      });
  };
  // };

  // componentDidMount = () => {
  //   const {MainArray1} = this.props.route.params;
  //   console.log(MainArray1, 'at sub two');
  //   let id = MainArray1[0].child[0];

  //   console.log(id, 'id check');
  //   let newid = id.slice(0, 4) + 's' + id.slice(4, 40);
  //   console.log(newid, 'check it at subcat two');

  //   let headers = {
  //     Authorization:
  //       'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MjQ4OTQ5OTIsImV4cCI6MTYyNDg5ODU5MiwiaXNzIjoiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQiLCJhdWQiOlsiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQvcmVzb3VyY2VzIiwiaWNkYXBpIl0sImNsaWVudF9pZCI6IjFiOGU5OTFkLTAwYzMtNGFjNS05OTFkLTc1MWVlZTllZTVjM18zMzQ0YmY3MC03ZmUwLTRkYzEtYWU0OS0xYzU4MDQxNmE4MmUiLCJzY29wZSI6WyJpY2RhcGlfYWNjZXNzIl19.KO2kYcrX4MV990IYQ0IOsrZizgp70K2IC3oRhFtRfwKXVUQ209OaTHTy6kK491koouORBibz6Y9_q-sjZcjecMh9pdCTkwMzUixsp3clQQBgK5pSDE2ZEU44v9ceI2wUUxsF8DR-Iaf9KeAsUxrCVl11NcTPiuszxi1v64sSsDo-iNuWCfYKKHWAgSPEl-Sm2r2H8gaGch79fUOYmt1gGnb-ZUjwxdADUPdmObxn7U4O0qycZ0F7orsgYxrEu6PhH757zHQeULbnXa6_nfeN1wd8d9WKCcdisZppQb0_FGx8A4ObsVCmgWTMUKT_dXLPjkhDCXlbVjMI-nBUAY4JRw',
  //     'API-Version': 'v2',
  //     'Accept-Language': 'en',
  //     Accept: 'application/json',
  //   };
  //   let data = {};
  //   console.log(headers, 'at subcategorytwo page');
  //   actions
  //     .ondiseasestwo(newid, data, headers)
  //     .then(res => {
  //       console.log(res, 'response at subcategorytwo page by sahil');
  //       let newarray2 = res;
  //       this.setState({
  //         MainArray2: [newarray2],
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err, 'EROR');
  //     });
  // };

  onClickDiseasesTwo = id => {
    const {MainArray2} = this.state;

    const {navigation} = this.props;
    let myid = id.slice(0, 4) + 's' + id.slice(4, 40);
    console.log(myid, 'check it');
    navigation.navigate(navigationStrings.SUBCATTHREE, {
      MainArray2: MainArray2,
      myid: myid,
    });
  };

  renderItem = ({item}) => {
    console.log(item, 'item in render item');
    return (
      // <ScrollView style={{flex: 1}}>
      <View>
        <View style={styles.mainview}>
          <TouchableOpacity
            onPress={() => this.onClickDiseasesTwo(item['@id'])}>
            <Text style={styles.headingtext}>{item['title']['@value']}</Text>
          </TouchableOpacity>
        </View>
        <View>{/* <Text>subcat two</Text> */}</View>
        <View style={styles.subheadingview}>
          <Text style={styles.subheadingtext}>Description</Text>
        </View>
        {item['definition'] ? (
          <View style={styles.bodyview}>
            <Text style={styles.bodytext}>{item['definition']['@value']}</Text>
          </View>
        ) : (
          <View>{/* <Text>hello sahil</Text> */}</View>
        )}

        <View style={styles.subheadingview}>
          <Text style={styles.subheadingtext}>Exclusions</Text>
        </View>

        {item['exclusion'] ? (
          <View style={styles.bodyview}>
            {item['exclusion'].map((value, index) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 'auto',
                  }}>
                  <Text style={styles.bodytext}>
                    {item['exclusion'][index]['label']['@value']}
                  </Text>
                </View>
              );
            })}
          </View>
        ) : (
          <View>{/* <Text>hello sahil</Text> */}</View>
        )}

        {item['inclusion'] ? (
          <View style={styles.bodyview}>
            {item['inclusion'].map((value, index) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    marginLeft: 10,
                  }}>
                  <Text style={styles.bodytext}>
                    {item['inclusion'][index]['label']['@value']}
                  </Text>
                </View>
              );
            })}
          </View>
        ) : (
          <View>
            <Text></Text>
          </View>
        )}
      </View>
      // </ScrollView>
    );
  };
  render() {
    const {MainArray2} = this.state;
    console.log(MainArray2, 'checking Mainarray2');
    return (
      <View>
        <View>
          <Header />
        </View>
        <TouchableOpacity onPress={this.onClickDiseasesTwo}></TouchableOpacity>

        <View>
          <FlatList
            data={MainArray2}
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
export default connect(mapStateToProps)(Subcattwo);
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
