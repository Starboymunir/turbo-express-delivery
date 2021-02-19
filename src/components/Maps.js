import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";

export class MapContainer extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 47.599328,
          lng: -122.163655
        }}
        onClick={this.onMapClicked}
        zoom={14}
      >
        <Marker
          onClick={this.onMarkerClick}
          name="Turbo Express Delivery"
          catchPhrase="The world is at your door step"
          position={{
            lat: 47.599328,
            lng: -122.163655
          }}
        />

        <InfoWindow marker={this.state.activeMarker} onClose={this.onInfoWindowClose} visible={this.state.showingInfoWindow}>
          <div>
            <h2 style={{ color: "#375497" }}>{this.state.selectedPlace.name}</h2>
            <h3 style={{ color: "#fb6542" }}>{this.state.selectedPlace.catchPhrase}</h3>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_MAPS_URI
})(MapContainer);
