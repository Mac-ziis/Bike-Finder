export default class BikeService {
  static getBikes(zipCode) {
    return fetch (`https://bikeindex.org/api/v3/search?page=1&per_page=25&location=${zipCode}&stolenness=proximity`)
      .then(function(response) {
        if(!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
}