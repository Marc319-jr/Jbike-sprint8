import React , { Component } from 'react';
import PropTypes  from 'prop-types';
class SmallCard extends Component{

    render()
    {
    return(
        <React.Fragment>
            <div className="col-md-5 mb-2 smallcard">
                <div className="card border-left-white shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-black text-uppercase mb-1"> Titulo</div>
                                <div className="text-xs h5 mb-0 font-weight-bold text-gray-800">Data</div>
                            </div>
                            <div className="col-auto">
                                <span>icono</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )


    SmallCard.propTypes = {
        titulo: PropTypes.string,
        dat: PropTypes.number
    }
    
    SmallCard.defaultProps = {
        titulo: "no me llega info",
        data: "?",
        icono: "X"
    }

}


}

export default SmallCard;