import React from 'react'
import {Container} from 'react-bootstrap';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=f26cc19f97564574ac420be4f8ddf721&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
       <Container
        className="d-flex flex-column  justify-content-center align-items-center"
        style={{minHeight:'100vh'}}
       >
           <img className="m-5" src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" width="200" height="200" />
           <a className="btn btn-success btn-lg" href={AUTH_URL} >LogIn With Spotify</a>
       </Container>
    )
}
