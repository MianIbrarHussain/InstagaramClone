import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    width: width,
    height: 323,
    position: 'absolute',
    zIndex: 1000,
    paddingTop: 40,
  },
  profileImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2.5%',
  },
  profilePicture: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 100,
  },
  profilePicButtonWrapper: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#0097FC',
    position: 'absolute',
    bottom: -2,
    right: -2,
    borderWidth: 4,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePickButtonImage: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  scoreWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: 'white',
    marginTop: 5,
    fontSize: 16,
    fontFamily: Theme.fontFamily.regular,
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    alignSelf: 'flex-start',
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  linkText: {
    color: 'white',
    fontFamily: Theme.fontFamily.regular,
    marginLeft: 10,
    fontSize: 12,
  },
  userBio: {
    marginTop: 10,
    color: 'white',
    fontFamily: Theme.fontFamily.regular,
    fontSize: 16,
  },
  editButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonContainer: {
    borderRadius: 10,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
  },
  addFriendIcon: {
    width: 15,
    height: 15,
  },
  topTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabWrapper: {
    backgroundColor: 'black',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIndicator: {
    width: width / 3,
    backgroundColor: 'white',
    height: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2.5%',
    paddingVertical: 10,
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40,
  },
  headerNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerName: {
    color: 'white',
    fontFamily: Theme.fontFamily.bold,
    fontSize: 18,
  },
  headerCaret: {
    width: 16,
    height: 16,
    marginTop: 2,
  },
});

export default styles;
