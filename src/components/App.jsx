import { React, Component } from 'react';
import { fetchPictures } from 'services/gallery-api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

import { Wrapper } from './Searchbar/Searchbar.styled';
import GlobalStyle from 'globalStyles';

export class App extends Component {
  state = {
    pictures: [],
    status: 'idle',
    showModal: false,
    notification: '',
    largeImageUrl: '',
    page: 1,
    query: '',
    totalImage: 0,
  };

  getLargeImgUrl = imgUrl => {
    this.setState({ largeImageUrl: imgUrl });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  searchResult = value => {
    this.setState({ query: value, page: 1, pictures: [], totalImage: 0 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ status: 'loading' });

      fetchPictures(query, page)
        .then(e => {
          if (!e.totalHits) {
            this.setState({
              status: 'rejected',
              notification: 'No images!',
            });
            return;
          }
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...e.hits],
            status: 'resolved',
            totalImage: e.totalHits,
          }));
        })
        .catch(error => {
          this.setState({
            status: 'rejected',
            notification: 'Something went wrong',
          });
        });
    }
  }

  render() {
    const {
      pictures,
      status,
      showModal,
      largeImageUrl,
      totalImage,
      notification,
    } = this.state;

    const showButton = status === 'resolved' && totalImage !== pictures.length;

    return (
      <Wrapper>
        <GlobalStyle />
        <Searchbar onSubmit={this.searchResult} />
        {showModal && (
          <Modal imgUrl={largeImageUrl} onClose={this.toggleModal} />
        )}
        <ImageGallery pictures={pictures} onClick={this.getLargeImgUrl} />
        {status === 'loading' && <Loader />}
        {status === 'rejected' && <p>{notification}</p>}
        {showButton && <Button onClick={this.handleLoadMore} />}
      </Wrapper>
    );
  }
}
