let channels = document.body.getElementsByClassName('channels')[0];

for( i=0; i<data_channels.length; i++ ){
    channels.innerHTML += `
        <div class="channel">
            <div class="icon" style="background-image: url('svg/login.svg')"></div>
            <div class="name">Name channel</div>
            <div class="user">
                <div>191687</div>
                <div>участников</div>
            </div>
            <div class="send">
                <div>1.6m</div>
                <div>сообщений</div>
            </div>
            <div class="mau">
                <div>44.5k</div>
                <div>MAU</div>
            </div>
            <div>#${i+1}</div>
        </div>
`
}