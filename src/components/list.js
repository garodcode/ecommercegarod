import * as React from 'react';
import Searcher from './searcher';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function ListView(params) {
  let {list} = params;
  return (
    <div style={{padding: '2.65rem'}}>
      <Searcher options={list}/>
      <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={4}>
          {list && list.length > 0 && list.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={3} >
                <Paper sx={{padding: '0.65rem'}} >
                  <img
                    src={`${item.imgUrl}?w=160&h=212`}
                    srcSet={`${item.imgUrl}?w=160&h=212`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <Typography gutterBottom variant="body2" component="div">
                    {item.brand}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {item.model}
                  </Typography>
                  <Typography variant="body2" color="primary">
                    {item.price}€
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
      </Grid>
    </div>
    
  );
}
