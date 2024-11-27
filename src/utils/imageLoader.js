// Import all images
import awareness from '../assets/images/awareness2.jpg';
import awareness2 from '../assets/images/awareness2.jpg';
import communityoutreach from '../assets/images/communityoutreach.jpg';
import communitysupport from '../assets/images/communitysupport.jpg';
import meeting from '../assets/images/meeting.jpg';
import slide2 from '../assets/images/slide2.jpg';
import supportCenter from '../assets/images/support center.jpg';
import woman5 from '../assets/images/woman5.jpg';
import xalimo from '../assets/images/xalimo.jpg';

// Create an images object
const images = {
  awareness,
  awareness2,
  communityoutreach,
  communitysupport,
  meeting,
  slide2,
  supportCenter,
  woman5,
  xalimo,
};

// Export a function to get images
export const getImage = (name) => images[name] || '';

// Export all images
export default images; 