import React, { useEffect, useState } from 'react'
import './picture.css'

const Picture = (props) => {

    let breed = props.breed.trim()

    const [imageData, setImageData] = useState({ url: '', name: 'Random' })

    useEffect(() => {
        const fetchData = async () => {
            let url = 'https://dog.ceo/api/breeds/image/random'

            if (breed.length > 0) {
                url = `https://dog.ceo/api/breed/${breed}/images/random`
            }

            const response = await fetch(url)
            const responseData = await response.json()
            setImageData({ url: responseData.message, name: breed })
        }

        fetchData()

    }, [breed])


    return (
        <section>
            <div>
                <div className='img-container'>
                    <img src={imageData.url} alt={imageData.name} />
                </div>
            </div>
        </section>
    )
}

export default Picture