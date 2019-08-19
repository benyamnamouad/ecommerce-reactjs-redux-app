import React,{Component} from 'react';





export default class StatusBadge extends Component{

    render(){
            switch(this.props.status){
                case 1:
                    return(<label className="badge badge-danger">Annulée</label>);
                case 2:
                    return(<label className="badge badge-primary">En cours de traitement</label>);
                case 3:
                    return(<label className="badge badge-success">Expédiée</label>);
                case 4:
                    return(<label className="badge badge-info">Délivrée</label>);
                default:
                return(<label className="badge badge-warning">Pending</label>);
            }
    }

}


