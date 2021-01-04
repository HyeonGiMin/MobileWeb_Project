<template>
    <div>
        <gmap-map
                :center="center"
                :zoom="16"
                style="width:100%;  height: 400px;"
        >

            <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    @click="openWindow(m,index)"

            ></gmap-marker>
            <gmap-info-window
                    @closeclick="window_open=false"
                    :opened="window_open"
                    :position="infowindow"
                    :options="{
          pixelOffset: {
            width: 0,
            height: -35
          }
        }"
            ><div v-bind="info">{{info}}</div> </gmap-info-window>
        </gmap-map>
    </div>
</template>

<script>
    export default {
        name: "GoogleMap",
        data() {
            return {
                // default to Montreal to keep it simple
                // change this to whatever makes sense
                center: { lat: 45.508, lng: -73.587 },
                markers: [],
                places: [],
                test:null,
                infoContent:'',
                infowindow: {lat: 10, lng: 10.0},
                window_open: false,
                currentPlace: null,
                info:"",
            };
        },
        mounted() {
            this.geolocate();
            this.addMarker();
        },

        methods: {
            openWindow (marker,idx) {
                this.center=marker.position;
                this.test=marker;
                this.infowindow.lat=marker.position.lat
                this.infowindow.lng=marker.position.lng
               this.test=this.places[idx];
                this.info=(this.test.name)
                this.window_open = true
            },
            // receives a place object via the autocomplete component

            addMarker() {
                navigator.geolocation.getCurrentPosition(position => {
                    let nowlocation={
                        geomerty:{
                            location:{
                                lat:position.coords.latitude,
                                lng:position.coords.longitude
                            }
                        },
                        name:'현재위치'
                    }
                    this.test=nowlocation
                    this.markers.push({ position: nowlocation.geomerty.location});
                    this.places.push(nowlocation);

                })



            },
            geolocate:  function() {
                navigator.geolocation.getCurrentPosition(position => {
                    this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }




                    this.axios.post('/api/maps',{lat:position.coords.latitude,lng: position.coords.longitude,name:'민현기'})
                        .then((place)=>{
                            this.currentPlace = place.data;
                            if (this.currentPlace) {
                                for(let i=0;i<3;i++){
                                    const marker = {
                                        lat: this.currentPlace[i].geometry.location.lat,
                                        lng: this.currentPlace[i].geometry.location.lng
                                    };
                                    this.markers.push({ position: marker });
                                    this.places.push(this.currentPlace[i]);
                                }
                              //  this.center = marker;
                                this.currentPlace = null;

                            }
                        })

                });
            }
        }
    };
</script>