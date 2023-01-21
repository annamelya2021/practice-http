import css from './App.module.css';
// import { ToastContainer } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
// import Searchbar from './Searchbar';
import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchquery: '',
  };
  handleSearchFormSubmit = searchquery => {
    // console.log(searchquery);
    this.setState({ searchquery });
  };
  //   pokemon: null,
  //   loading: false,
  // };
  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(response => response.json())
  //     .then(pokemon => this.setState({ pokemon }))
  //     .finally(() => this.setState({ loading: false }));

  //   // https://pixabay.com/api/?q=cat&page=1&key=12397794-3c79aefa4a299d9b97accc173&image_type=photo&orientation=horizontal&per_page=12
  // }
  render() {
    return (
      <div className={css.App} style={{}}>
        {/* {this.state.loading && <h1>Загружаем</h1>}
        {this.state.pokemon && <div>{this.state.pokemon.name}</div>} */}

        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        {/* <ImageGallery searchquery={this.state.searchquery} /> */}
        <ImageGallery searchquery={this.state.searchquery}></ImageGallery>
        {/* <ToastContainer /> */}
        {/* React homework template */}
      </div>
    );
  }
}
