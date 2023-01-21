import { Component } from 'react';
import css from './SearchBar.module.css';
import { FcSearch } from 'react-icons/fc';
// import { toast } from 'react-toastify';
import { Notify } from 'notiflix';
// console.log(css);

class SearchBar extends Component {
  state = {
    searchquery: '',
  };

  handleNameChange = event => {
    this.setState({ searchquery: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchquery.trim() === '') {
      // return toast.error('empty');

      return Notify.failure('empty');
    }
    this.props.onSubmit(this.state.searchquery);
    this.setState({ searchquery: '' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <FcSearch size="26px"></FcSearch>
            <span className={css.SearchFormButtonLabel}></span>
          </button>

          <input
            name="searchQuery"
            className={css.SearchFormInput}
            type="text"
            value={this.state.searchquery}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
