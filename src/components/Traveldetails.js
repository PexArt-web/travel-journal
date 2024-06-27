
const Travelcard = ({title, description,image,time,travellink,country}) => {
    return ( 
        <div className="card mb-4  mx-auto travelcard--detail p-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img src ={image} className="img-fluid rounded travelcard--image" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
                <div className="travel--geo d-flex gap-2">
                    <span className="mb-3"><i className="bi bi-geo-alt-fill "></i></span>
                 <div className="d-flex mt-1 gap-3">
                 <p className="travel--country">{country}</p>
                 <a href={travellink} className="travel--links">View on Google Maps</a>
                 </div>
                </div>
              <h5 className="card-title travel--title">{title}</h5>
              <p className="travel--date">{time}</p>
              <p className="card-text travel--description">{description}</p>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Travelcard;