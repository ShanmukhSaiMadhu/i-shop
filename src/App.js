import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Products from './components/Products'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <h2  id="mac-card" style = {{color: 'white', margin: '0.7rem'}}>Macbook</h2>
      <div className="components-container">
        <Products img="https://cdn.mos.cms.futurecdn.net/Zaan37XJE8vRHbA8wPjhs5.jpg" title="Macbook Air M1" />
        <Products img="https://techcrunch.com/wp-content/uploads/2020/11/2020-11-16-074520097.jpg" title="Macbook Pro" />
        <Products img="https://cdn.mos.cms.futurecdn.net/Zaan37XJE8vRHbA8wPjhs5.jpg" title="Macbook Air M1" />
        <Products img="https://cdn.mos.cms.futurecdn.net/Zaan37XJE8vRHbA8wPjhs5.jpg" title="Macbook Air M1" />
      </div>

      <h2  id="iphone-card" style = {{color: 'white', margin: '0.7rem'}}>iPhone</h2>
      <div className="components-container">
        <Products img="https://www.digitaltrends.com/wp-content/uploads/2021/09/iphone-13-pro-review-dan-baker-35.jpg?p=1" title="iPhone 13 Pro" />
        <Products img="https://www.digitaltrends.com/wp-content/uploads/2021/09/iphone-13-pro-review-dan-baker-35.jpg?p=1" title="iPhone 13 Pro" />
        <Products img="https://www.digitaltrends.com/wp-content/uploads/2021/09/iphone-13-pro-review-dan-baker-35.jpg?p=1" title="iPhone 13 Pro" />
        <Products img="https://www.digitaltrends.com/wp-content/uploads/2021/09/iphone-13-pro-review-dan-baker-35.jpg?p=1" title="iPhone 13 Pro" />
      </div>

      <h2  id="ipad-card" style = {{color: 'white', margin: '0.7rem'}}>iPad</h2>
      <div className="components-container">
        <Products img="https://cdn.mos.cms.futurecdn.net/SaZrQMNs9PB9wCaD5iybKV.jpg" title="iPad Pro" />
        <Products img="https://cdn.mos.cms.futurecdn.net/SaZrQMNs9PB9wCaD5iybKV.jpg" title="iPad Pro" />
        <Products img="https://cdn.mos.cms.futurecdn.net/SaZrQMNs9PB9wCaD5iybKV.jpg" title="iPad Pro" />
        <Products img="https://cdn.mos.cms.futurecdn.net/SaZrQMNs9PB9wCaD5iybKV.jpg" title="iPad Pro" />
      </div>

      <h2  id="airpods-card" style = {{color: 'white', margin: '0.7rem'}}>Airpods</h2>
      <div className="components-container">
        <Products img="https://images.unsplash.com/photo-1628210889224-53b2e3082fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80" title="Airpods Pro" />
        <Products img="https://images.unsplash.com/photo-1628210889224-53b2e3082fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80" title="Airpods Pro" />
        <Products img="https://images.unsplash.com/photo-1628210889224-53b2e3082fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80" title="Airpods Pro" />
        <Products img="https://images.unsplash.com/photo-1628210889224-53b2e3082fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80" title="Airpods Pro" />
      </div>

      <h2  id="watch-card" style = {{color: 'white', margin: '0.7rem'}}>WATCH</h2>
      <div className="components-container">
        <Products img="https://cly.1cdn.vn/2022/07/12/screenshot-2022-07-1.jpeg" title="Apple Watch Series 7" />
        <Products img="https://cly.1cdn.vn/2022/07/12/screenshot-2022-07-1.jpeg" title="Apple Watch Series 7" />
        <Products img="https://cly.1cdn.vn/2022/07/12/screenshot-2022-07-1.jpeg" title="Apple Watch Series 7" />
        <Products img="https://cly.1cdn.vn/2022/07/12/screenshot-2022-07-1.jpeg" title="Apple Watch Series 7" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
