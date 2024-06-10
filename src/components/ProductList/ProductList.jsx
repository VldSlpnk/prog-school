import Title from '../Title/Title'
import macbook from '../../img/macbook.svg'

import './ProductList.css'
import ReactPlayer from 'react-player'
import PlayIcon from './PlayIcon'

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="product-round"></div>
      <div className="product-container">
        <div className="product-overall">
          <Title text={'Как происходит обучение на YtYt?'} />
          <div className="product-subtitle">
            Обучение должно быть комфортным. Поэтому мы разработали собственную
            платформу для обучения программированию. На ней вы можете не только
            изучать теорию, но и запускать готовые примеры и даже писать свой
            собственный код.
          </div>
          <div className="macbook-container">
            <img src={macbook} alt="" />
            <div className="youtube-frame">
              <ReactPlayer
                light
                url={
                  'https://www.youtube.com/watch?v=76WsuxN7MtY&ab_channel=KUTE'
                }
                playIcon={<PlayIcon />}
                width="585px"
                height="375px"
                playing
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
