import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    fontFamily: 'Montserrat',
    backgroundColor: '#e4e9e9',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    alignItems: 'center',
    paddingTop: 68,
  },

  nav: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#3d9c9c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    zIndex: 100,
    elevation: 5,
  },

  logo: {
    fontWeight: '800',
    fontSize: 24,
    color: '#1c6262',
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoImage: {
    height: 90,
    width: 85,
    resizeMode: 'contain',
  },

  navLinks: {
    flexDirection: 'row',
    fontWeight: '400',
    fontSize: 16,
    color: '#ffffff',
  },

  mainContainer: {
    width: '100%',
    paddingHorizontal: 32,
    paddingTop: 64,
    alignItems: 'center',
  },

  headerSection: {
    maxWidth: 640,
    alignItems: 'center',
    marginBottom: 64,
  },

  headerTitle: {
    fontWeight: '800',
    fontSize: 48,
    marginBottom: 16,
    color: '#445d5d',
    lineHeight: 52,
    textAlign: 'center',
  },

  headerSubtitle: {
    color: '#88a7a7',
    fontSize: 18,
    textAlign: 'center',
  },

  formCard: {
    backgroundColor: '#3d9c9c',
    padding: 32,
    borderRadius: 12,
    width: '100%',
    maxWidth: 1000,
  },

  formGroup: {
    marginBottom: 16,
  },

  label: {
    fontWeight: '300',
    marginBottom: 8,
    color: '#1e252a',
    fontSize: 16,
  },

  input: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: '#d1d5db',
    borderRadius: 12,
    color: '#445d5d',
    backgroundColor: 'white',
  },

  textarea: {
    minHeight: 140,
    textAlignVertical: 'top',
  },

  jobTypeGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 4,
  },

  jobTypeOption: {
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: '#d1d5db',
    color: '#3d9c9c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontWeight: '300',
    minWidth: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },

  jobTypeOptionSelected: {
    backgroundColor: '#1c6262',
    borderColor: '#1c6262',
    color: 'white',
  },

  skillsInputWrapper: {
    borderWidth: 1.5,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  skillsTag: {
    backgroundColor: '#1c6262',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 999,
    fontSize: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  salaryRange: {
    flexDirection: 'row',
    gap: 12,
  },

  submitButton: {
    marginTop: 16,
    backgroundColor: '#1c6262',
    color: 'white',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    fontWeight: '400',
    fontSize: 20,
    alignSelf: 'flex-start',
  },

  submitButtonDisabled: {
    backgroundColor: '#a1a1aa',
  },
});
