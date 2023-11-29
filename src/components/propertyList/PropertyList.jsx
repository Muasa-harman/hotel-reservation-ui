import React from 'react'
import './PropertyList.scss'

function PropertyList() {
  return (
    <div className='pList'>
      <div className="pListItem">
        <img src="https://blog.sunsafaris.com/wp-content/uploads/2019/03/TribeHotel.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>433 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/19/50/a9/79/diani-sea-lodge.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>433 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src="https://www.nekretnine1.pro/sites/4198/upload/listings/thumb_1664473226_viz_7.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>433 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/408391601.jpg?k=68c233054ca2d18f7a35bf3ce4d85bde0b57e4114bbfe16749ed50ca139bd85d&o=&hp=1" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Appartments</h1>
          <h2>433 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src="https://eastafricanretreats.com/wp-content/uploads/2020/04/Ndongoro-Cabin-Ragati-Conservancy-1-2.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>1433 hotels</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList