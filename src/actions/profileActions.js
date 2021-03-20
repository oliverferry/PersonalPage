export const editProfile = profile => ({
    type: 'EDIT_PROFILE',
    payload: {
      url: profile.url,
      desc: profile.desc
    }
  });