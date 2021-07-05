import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../Components/Header';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';

class Subcatfive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainArray5: [],
      checkarrayfive: [],
    };
  }
  componentDidMount = () => {
    const {MainArray4} = this.props.route.params;
    const {myid} = this.props.route.params;
    const {my_token} = this.props;
    console.log(my_token, 'access token at subcatone page');
    const {MainArray5, checkarrayfive} = this.state;
    console.log(MainArray4, 'at subcatfive');
    for (var i = 0; i < MainArray4[0].child.length; i++) {
      let id = MainArray4[0].child[i];

      console.log(id, 'id check');
      let newid = id.slice(0, 4) + 's' + id.slice(4, 40);
      // let newid = myid;
      console.log(newid, 'check it at subcat five');
      const Authorization = 'Bearer' + ' ' + my_token;
      console.log(Authorization, 'check authorisation token');
      let headers = {
        Authorization: Authorization,
        'API-Version': 'v2',
        'Accept-Language': 'en',
        Accept: 'application/json',
      };
      let data = {};
      console.log(headers, 'at subcategoryfive page');
      actions
        .mainlistingdiseasescheck(newid, data, headers)
        .then(res => {
          console.log(res, 'response at subcategoryfive page by sahil');
          checkarrayfive.push(res);
          let newarray5 = res;
          this.setState({
            MainArray5: [checkarrayfive],
          });
        })
        .catch(err => {
          console.log(err, 'EROR');
        });
    }
  };
  onClickDiseasesFive = id => {
    const {MainArray5, checkarrayfive} = this.state;
    const {navigation} = this.props;
    let myid = id.slice(0, 4) + 's' + id.slice(4, 40);
    console.log(myid, 'check it');
    navigation.navigate(navigationStrings.SUBCATSIX, {
      MainArray5: MainArray5,
      myid: myid,
    });
  };
  renderItem = ({item}) => {
    console.log(item, 'item in render item');
    return (
      <View>
        <View style={styles.mainview}>
          <TouchableOpacity
            onPress={() => this.onClickDiseasesFive(item['@id'])}>
            <Text style={styles.headingtext}>{item['title']['@value']}</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.bodyview}>
          <Text style={styles.bodytext}>{item['title']['@value']}</Text>
        </View> */}
        <View>{/* <Text>Sub cat five</Text> */}</View>
      </View>
    );
  };
  render() {
    const {MainArray5, checkarrayfive} = this.state;
    console.log(MainArray5, 'at subcategory 5 page');
    return (
      <View>
        <View>
          <Header />
        </View>
        <TouchableOpacity
          onPress={this.onClickDiseasesThree}></TouchableOpacity>
        <View>
          <FlatList
            data={checkarrayfive}
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
export default connect(mapStateToProps)(Subcatfive);
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
