import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prices: [0, 9, 49],
            tiers: ['Free', 'Plus', 'Pro'],
            features: [['Single User', '5GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'], ['5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Report'], ['Unlimited Users', '150GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Unlimited Free Subdomains', 'Monthly Status Reports']],
            avail_features: [4, 7, 9]
        }
    }

    render() {
        return (

            <section className="pricing py-5">
                <div className="container">
                    <div className="row">

                        {this.state.prices.map((price, index) => (

                            <div className="col-lg-4">
                                <div className="card mb-5 mb-lg-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-muted text-uppercase text-center">{this.state.tiers[index]}</h5>
                                        <h6 className="card-price text-center">${price}<span className="period">/month</span></h6>
                                        <hr></hr>
                                        <ul className="fa-ul">
                                            {this.state.features[index].slice(0, this.state.avail_features[index]).map(feature => (<li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{(feature !== '5 Users' && feature !== 'Unlimited Users' && feature !== 'Unlimited Free Subdomains')?feature:(feature !== 'Unlimited Free Subdomains')?<b>{feature}</b>:[<b>{feature.slice(0,9)}</b>, ' Free Subdomains']}</li>))}
                                            {(this.state.avail_features[index] !== 9) ? this.state.features[index].slice(this.state.avail_features[index], 9).map(feature => (<li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>{feature}</li>)) : <></>}
                                        </ul>
                                        <div className="d-grid">
                                            <a href="#" className="btn btn-primary text-uppercase">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

        )
    }
}

export default MainPage;