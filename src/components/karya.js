import React from 'react'
class Karya extends React.Component{
    constructor(){
        super()
        this.state = {
            berat:11,
            tinggi:32,
        }
    }
    hitung = () => {
        let a = this.state.berat;
        let b = this.state.tinggi;
        let x = a / (b^2);
        this.setState({
            x
        })
    }
    render(){     
        return(
            <div>
                <h2 className="karya">NOMOR 1</h2>
                <div className="container">
                    <div className="card col-sm-4">
                        <div className="card-header">
                            <h4 >BMI</h4>
                        </div>
                        <div className="card-body">Berat<input type="number" value={this.setState()} className="form-control"/></div>
                        <div className="card-body">Tinggi<input type="number" value={this.setState()} className="form-control"/></div>
                        <button className="btn btn-dark btn-block" onClick={this.hitung}>Count</button>
                        <div className="card-body">Hasil<input type="number" value={this.setState()} className="form-control"/></div>
                        
                    
                    </div>
                </div>
                </div>
        )
    }
}
export default Karya;