import Ember from 'ember';

export default Ember.Component.extend({
  slideTitle: "",
  slideDescription: "",
  slideLink: "",

  actions: {
    handleChange(props) {

      switch (props.attributes[2].value) {
        case "0":
          this.set("slideTitle", "Shake It Up!");
          this.set("slideDescription", "An Android app that lets users plan fun random nights out. It makes extensive use of animations, gesture detection, fragments, and the Google Maps API. Available on the Google Play store.");
          this.set("slideLink", "https://play.google.com/store/apps/details?id=com.epicodus.shake_it_up");
          break;

        case "1":
          this.set("slideTitle", "Movie Lookup");
          this.set("slideDescription", "An Android app that consumes JSON data from the Movie Database API. Users can browse movie info and save poster images as device wallpaper. Uses endless scrolling and paginated data requests. Available on the Google Play store.");
          this.set("slideLink", "https://play.google.com/store/apps/details?id=com.jtrmb.movietime");
          break;

        case "2":
          this.set("slideTitle", "Ecommerce Front-End");
          this.set("slideDescription", "An online store built with Ember and using an Ember service for shopping cart functionality. Features include toggles for product attribute selection and a running total price. Uses Ember Paper add-on for material design features.");
          this.set("slideLink", "http://michael-scott-paper.herokuapp.com/");
          break;

        case "3":
          this.set("slideTitle", "Q&A");
          this.set("slideDescription", "A Quora clone built with Ember and demonstrating use of Ember Data and Firebase, use of dynamic routing, and use of Ember add-ons.");
          this.set("slideLink", "http://quora-clone-app.herokuapp.com/");
          break;

        case "4":
          this.set("slideTitle", "Salem Sunshine");
          this.set("slideDescription", "A web app that consumes JSON data from the Open States API to search information about the Oregon State Legislature. Other Oregon bill tracker websites do not allow searches by both date and keywords, only one or the other.");
          this.set("slideLink", "http://salem-sunshine.herokuapp.com/");
          break;

        default:
          break;
      }
    }
  }
});
