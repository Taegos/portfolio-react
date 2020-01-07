import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from "@material-ui/core/IconButton";
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const styles = {
    root: {
        height: '100vh'
    },
    grid: {
        width: '600px',
    },
    scroll: {
        marginTop: '42vh',
        textAlign: 'center',
        position: 'absolute',
    },

}

export default class Portfolio extends React.Component {
    render() {
        return (
            <div id={'portfolio'} >
                <Carousel>
                    <div >
                        <img src={process.env.PUBLIC_URL + '/profile.png'}/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/profile.png'}/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/profile.png'}/>
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        );
    }
};