import axios from 'axios'
import React from 'react'

class Contacts extends React.Component {
    state = {
        contacts: []
    }



    render() {
        if (this.state.contacts.length === 0) {
            return <p>Loading...</p>
        }

        return (
            <ul></ul>
        )

    }
}

export default Contacts

