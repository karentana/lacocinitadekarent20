import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from "@material-ui/core";


class Content extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App-content">
                <Container maxWidth="sm">
                <Link to="/clientes">
                    <Button variant="contained" color="default">
                        Clientes
                    </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/Platillos">
                    <Button variant="contained" color="default">
                        Platillos
                    </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/Bebidas">
                    <Button variant="contained" color="default">
                        Bebidas
                    </Button>
                </Link>
                </Container>
            </div>
         );
    }
}
 
export default Content;