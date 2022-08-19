<div className="center">
<div>
  <h1> Username's Mementos</h1>
</div>

<Link to="/CreateNew">
  {" "}
  <button className="new-button">Create New</button>{" "}
</Link>

<div className="blog-list">
  <Link to="/Event">
    {" "}
    <div className="memento_card">
      <div className="memento_details">
        <h2 className="event_name">Event Name </h2>
        {/* <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with
              over 6,000 species, ranging across all continents except
              Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card> */}

        <MediaCard  />
      </div>



      
      {/* Event name is a variable */}
    </div>{" "}
  </Link>
</div>
</div>