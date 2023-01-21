import { Component } from 'react';
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
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <FcSearch size="26px"></FcSearch>
            <span></span>
          </button>

          <input
            name="searchQuery"
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
