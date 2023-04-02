import { useState } from "react";
import PropTypes from 'prop-types';
import {toast } from 'react-hot-toast';
import { Header, SearchForm, SearchFormButton, SearchFormInput } from "./Searchbar.styled";


export const Searchbar = ({onSubmit}) => {

  const [picture, setPicture] = useState('');

  const handlePicture = (event) => {
    event.preventDefault();
    setPicture(event.currentTarget.value.toLowerCase())
    }

  const  handleSubmit = (event) => {
        event.preventDefault();
        if (picture.trim() === '') {
            toast.error('Please enter the name of the picture for the request');
            return;
        }
        onSubmit(picture)
    setPicture('');
    }


 
        return(
        <Header className="searchbar">
            <SearchForm onSubmit={handleSubmit} className="form">
            <SearchFormButton type="submit" className="button">
              <span className="button-label">Search</span>
            </SearchFormButton>

            <SearchFormInput
            className="input"
            type="text"
            value={picture}
            onChange={handlePicture}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
      </Header>
        )
    
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};