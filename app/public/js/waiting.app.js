var waitingApp = new Vue({
el: '#patientWaitingApp',
data: {
  patients: []
},
methods :{
  fetchPatients(){
    fetch('dummy.php')
    .then( response => response.json())
    .then( json => {waitingApp.patients = json})
    //.catch(/*function goes here*/)
    ;
    //promise object is created. fetch works asynchronously
  }
},
created() {
  this.fetchPatients();
}
});
