import React from 'react';
import { InfoWindow, Marker, GoogleApiWrapper, Map} from 'google-maps-react';

const GoogleMap = () => {
    return (
        <Map google={this.props.google} zoom={14}>

            <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
            </InfoWindow>
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: ("GOOGLE_API_KEY_GOES_HERE") //Here I will put my api key here
  })(GoogleMap)