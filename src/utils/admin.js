import _ from 'lodash';
import adminData from "../admin_records.json";

export function getCategoryImages(category) {
  let images = [];
   _.mapValues(adminData,imageGroup=> {
    if(imageGroup.tags.includes(category)){
      images.push(imageGroup);
    }
  });

  return images;
}
