import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const Cartitem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
    const classes = useStyles();
    return (
        <Card>
            ­<CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h4'>{item.name}</Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity - 1) } >-</button>
                    <Typography>{item.quantity}</Typography>
                    <button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity + 1) } >+</button>
                </div>
                <button variant='contained' type='button' color='secondary' onClick={() => onRemoveFromCart(item.id)} >Remove</button>
            </CardActions>
            
        </Card>
    )
}

export default Cartitem
