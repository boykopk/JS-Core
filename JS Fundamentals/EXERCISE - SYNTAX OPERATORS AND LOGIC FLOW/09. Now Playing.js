function nowPlaying(arr) {
    let track = arr[0];
    let artist = arr[1];
    let duration = arr[2];

    console.log(`Now Playing: ${artist} - ${track} [${duration}]`)
}

nowPlaying(['Number One', 'Nelly', '4:09']);
nowPlaying(['Shushana', 'Nasko Mentata', '3:01']);