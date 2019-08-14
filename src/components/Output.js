import React from 'react'
import PropTypes from 'prop-types'

export class Output extends React.Component {
    render(){
        const { nameDot } = this.props

        return(
            <div>
                <div>{nameDot}</div>
            </div>
        )
    }
}

Output.propTypes = {
    nameDot: PropTypes.string.isRequired,
}