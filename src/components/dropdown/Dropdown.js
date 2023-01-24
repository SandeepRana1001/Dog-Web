import React from "react";

class Dropdown extends React.Component {

    constructor(props) {
        super(props)
        this.dropdownValue = ''
    }

    render() {
        const { getDropdownValue = () => { } } = this.props
        return <section  >
            <div class='container mt-4 mb-5'>
                <div className='row justify-content-center'>
                    <div className="col-lg-6">
                        <select onChange={getDropdownValue} class='form-control'>
                            <option value=''>Random</option>
                            <option value='beagle'>Beagle</option>
                            <option value='husky'>Husky</option>
                            <option value='boxer'>Boxer</option>
                            <option value='labrador'>Labrador</option>
                        </select>

                    </div>
                </div>
            </div>
        </section>
    }
}

export default Dropdown