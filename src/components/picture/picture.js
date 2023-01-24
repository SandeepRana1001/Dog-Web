import React from 'react'
import './picture.css'

class Picture extends React.Component {

    render() {
        const { breed, image } = this.props
        return <section>
            <div class='container mt-4 mb-5'>
                <div className='row justify-content-center'>
                    <div className="col-lg-6">
                        <div className='img-container'>
                            <h4 className='text-center'>{breed}</h4>
                            <img src={image} alt={breed} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default Picture