let channels = document.body.getElementsByClassName('channels')[0];

for( i=0; i<data_channels.length; i++ ){
    channels.innerHTML += `
    <div>${data_channels[i]}</div>
`
}