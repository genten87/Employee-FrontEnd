import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4d9d3',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },

  cardWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  card: {
    backgroundColor: '#e4f0ec',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 16,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    height: 600
  },

  companyImage: {
    width: 260,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },

  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
  },

  skillsLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
    color: '#555',
    alignSelf: 'flex-start',
  },

  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    marginBottom: 10,
    gap: 6,
  },

  skillTag: {
    backgroundColor: '#9dc8b8',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 4,
  },

  skillText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },

  basicInfoLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 4,
    color: '#333',
  },

  infoText: {
    fontSize: 11,
    color: '#444',
    alignSelf: 'stretch',
    borderBottomWidth: 0.8,
    borderColor: '#ccc',
    marginBottom: 4,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10,
    marginBottom: 50,
  },

  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c5e5dc',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },

  rejectButton: {
    backgroundColor: '#f25656',
    
  },

  acceptButton: {
    backgroundColor: '#70c78d',
  },

  buttonText: {
    fontSize: 24,
    color: '#fff',
  },

  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#6cbba6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    width: '100%',
    paddingBottom: 20
  },

  navItem: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f4fdfb',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
