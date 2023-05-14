import PropTypes from 'prop-types'

export function Button ({title, name}){

    // if (!title) {
    //     console.error('title is required')
    // }

    return <button onClick={ function () {
        console.log('line fuction');
    } }>
            {title} - {name}
    </button>
}

Button.prototype = {
    title: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'some user'
}