import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4d9d3',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    alignSelf: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#e4f0ec',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 8,
  },
  skillTag: {
    backgroundColor: '#9dc8b8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    marginRight: 6,
    marginBottom: 4,
  },
  skillText: {
    fontSize: 12,
    color: '#333',
  },
  infoText: {
    fontSize: 12,
    color: '#444',
    marginBottom: 12,
  },
  removeButton: {
    backgroundColor: '#f25656',
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  backButton: {
  alignSelf: 'flex-start',
  backgroundColor: '#c5e5dc',
  paddingVertical: 6,
  paddingHorizontal: 12,
  borderRadius: 10,
  marginBottom: 10,
  marginTop: 50,
  marginRight: 10,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 1, height: 2 },
  shadowRadius: 4,
  elevation: 3,
},
backText: {
  fontWeight: 'bold',
  color: '#333',
},

});

export default styles;
