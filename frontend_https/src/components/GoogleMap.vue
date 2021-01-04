<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div>
                        <gmap-map
                                :center="center"
                                :zoom="14"
                                style="width:100%;  height: 500px;"
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
                            ><div v-bind:model="info">{{info}}</div> </gmap-info-window>
                        </gmap-map>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "GoogleMap",
        data() {
            return {
                // default to Montreal to keep it simple
                // change this to whatever makes sense
                center: { lat: 37.4923615, lng: 127.0292880999999 },
                markers: [],
                places: [],
                test:null,
                infoContent:'',
                infowindow: {lat: 10, lng: 10.0},
                window_open: false,
                currentPlace: null,
                info:"",
                nowlocation:null
            };
        },
        mounted() {
            this.geolocate();

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

            geolocate: async function() {
                if (navigator.geolocation) {
                    console.log("GELOCATION!!")

                    navigator.geolocation.getCurrentPosition((position => {
                        console.log("Navigateor");
                        console.log(position)

                        this.nowlocation = {
                            geomerty: {
                                location: {
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude
                                }
                            },
                            name: '현재위치'
                        }
                        this.center = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }

                        this.markers.push({position: this.nowlocation.geomerty.location});

                        this.places.push(this.nowlocation);

                        this.getPlace()
                    }))

/*
                    await this.axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDrtQ9p6YXUJOmNgh1NfOQb7FJ_3gIVn7E')
                        .then((position) => {

                            console.log("구글 Geolocation");
                            console.log(position)
                            if (position.data.location.lat!= '37.4923615' && position.data.location.lng == '127.0292880999999') {

                                this.center = {
                                    lat: position.data.location.lat,
                                    lng: position.data.location.lng
                                }
                                this.nowlocation = {
                                    geomerty: {
                                        location: {
                                            lat: position.data.location.lat,
                                            lng: position.data.location.lng
                                        }
                                    },
                                    name: '현재위치'
                                }

                                this.markers.push({position: this.nowlocation.geomerty.location});

                                this.places.push(this.nowlocation);

                                this.getPlace()


                            } else {


                            }


                        })
                        */

                }
            },
            getPlace:function(){

                this.axios.post('/api/maps',{lat:this.nowlocation.geomerty.location.lat,lng: this.nowlocation.geomerty.location.lng,name:'민현기'})
                    .then((place)=>{
                        this.test=place;

                        if(place.data.status==404){
                            alert("근처에 볼링장이 없습니다.")
                            this.info="근처에 볼링장이 없습니다."

                        }else{
                            this.currentPlace = place.data;
                            if (this.currentPlace) {
                                for(let i=0;i<5;i++){
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
                        }

                    })
            }
        }
    };
</script>