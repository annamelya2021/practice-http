import css from './ImageGallery.module.css';
import { Component } from 'react';

// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
console.log(css);

class ImageGallery extends Component {
  state = {
    pokemon: null,
    // loading: false,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, _) {
    const prevSearch = prevProps.searchquery;
    const nextSearch = this.props.searchquery;
    if (prevSearch !== nextSearch) {
      console.log('змінилось поле пошуку');
      // console.log(
      //   'this.props.searchquery  теперішнє значення:>> ',
      //   this.props.searchquery
      // );
      // console.log(
      //   'prevProps.searchquery  попередне значення :>> ',
      //   prevProps.searchquery
      // );
      this.setState({
        status: 'pending',
        //  pokemon: null
      });
      fetch(
        // `https://pokeapi.co/api/v2/pokemon/${nextSearch}`
        ` https://pixabay.com/api/?q=${nextSearch}&page=1&key=12397794-3c79aefa4a299d9b97accc173&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Покемона ${nextSearch} не найдено`));
        })
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
      // .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const {
      // pokemon,
      //  loading,
      error,
      status,
    } = this.state;
    // const { searchquery } = this.props;
    if (status === 'idle') {
      return <div>введите свой запрос в поисковую строку</div>;
    }
    if (status === 'pending') {
      return <div>Loading...</div>;
    }
    if (status === 'rejected') {
      return <h1>{error.message} </h1>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <h1>заголовок{}</h1>

          {/* <ul className={css.ImageGallery}>
            {this.pokemon.map(({ id, tags, webformatURL, largeImageURL }) => (
              <li className={css.ImageGalleryItem}>
                <img
                  className={css.ImageGalleryItem_image}
                  src={webformatURL}
                  alt={tags}
                />
              </li>
            ))}
          </ul> */}
          {/* <p>N{pokemon.name}</p>
          <p>{pokemon.order}</p>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            width="240"
          ></img> */}
        </div>
      );
    }
    // return (
    //   <ul className={css.ImageGallery}>
    //     {/* <h1>заголовок</h1> */}
    //     {/* {search && <div>{search.hits[0]}</div>} */}
    //     {error && <h1>{error.message} </h1>}
    //     {loading && <div>Loading...</div>}
    //     {!searchquery && <div>введите свой запрос в поисковую строку</div>}
    //     {/* <p>{searchquery}</p> */}
    //     {pokemon && <p>N{pokemon.name}</p>}
    //     {pokemon && <p>{pokemon.order}</p>}

    //     {/* <img src={pokemon.url} /> */}
    //     {/* {search && <p>{search.experience}</p>} */}

    //     {/* <img
    //       src={pokemon.sprites.other['official-artwork'].front_default}
    //       alt={pokemon.name}
    //       width='240'
    //     ></img> */}

    //     {/* <ImageGalleryItem></ImageGalleryItem> */}
    //   </ul>
    // );
  }
}

export default ImageGallery;
