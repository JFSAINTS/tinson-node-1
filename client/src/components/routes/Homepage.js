import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Typography variant="h3" gutterBottom>
                    Welcome to Tinson <span role="img" aria-label="Tinson icon!">🤖</span>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <b>Tinson</b> is a little JSON generator for the famous NSP installer of Nintendo Switch, <a style={{ color: "inherit" }} href="https://tinfoil.io/Download" target="_blank" rel="noopener noreferrer">Tinfoil</a>.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <b>Tinson</b> allows you to create a list of homebrew or backup'ed games (from your collection) and download them directly on your switch. Without having to use cable or something else.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    The only one requirements is to have Tinfoil installed on your Nintendo Switch and add to <i>File browser</i> section the URL generated by Tinson.
                </Typography>
                <Typography style={{ marginTop: 20 }} variant="h5" gutterBottom>
                    Why do I need to register myself?
                </Typography>
                <Typography variant="body1" gutterBottom>
                    I've called it a registration but it's nothing more than a "choose your file name". After you have set a username and a password I'll create a JSON file with Node.
                    Now everytime you'll login with your previous credentials I'll grab the saved file.
                </Typography>
            </div>
        )
    }
}
