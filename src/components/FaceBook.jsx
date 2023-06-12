import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sortBy, setSortBy] = useState('firstName');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle country button click
  const handleCountryClick = (country) => {
    setSelectedCountry(country === selectedCountry ? null : country);
  };

  // Handle sort button click
  const handleSortClick = (value) => {
    setSortBy(value);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter profiles based on selected country and search query
  const filteredProfiles = profiles
    .filter((profile) => {
      if (selectedCountry) {
        return profile.country === selectedCountry;
      }
      return true;
    })
    .filter((profile) => {
      const fullName = `${profile.firstName} ${profile.lastName}`;
      return fullName.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => {
      if (sortBy === 'firstName') {
        return a.firstName.localeCompare(b.firstName);
      }
      if (sortBy === 'lastName') {
        return a.lastName.localeCompare(b.lastName);
      }
      return 0;
    });

  return (
    <div className="facebook-container">
      <div className="filter-container">
        <div className="country-buttons">
          {profiles.map((profile) => (
            <button
              key={profile.country}
              className={`country-button ${
                profile.country === selectedCountry ? 'selected' : ''
              }`}
              onClick={() => handleCountryClick(profile.country)}
            >
              {profile.country}
            </button>
          ))}
        </div>
        <div className="sort-buttons">
          <button
            className={`sort-button ${
              sortBy === 'firstName' ? 'selected' : ''
            }`}
            onClick={() => handleSortClick('firstName')}
          >
            Sort by First Name
          </button>
          <button
            className={`sort-button ${sortBy === 'lastName' ? 'selected' : ''}`}
            onClick={() => handleSortClick('lastName')}
          >
            Sort by Last Name
          </button>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="profile-cards">
        {filteredProfiles.map((profile) => (
          <div
            key={profile.firstName}
            className={`profile-card ${
              profile.country === selectedCountry ? 'selected' : ''
            }`}
          >
            <img
              src={profile.img}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="profile-image"
            />
            <div className="profile-details">
              <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
              <p>Country: {profile.country}</p>
              <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
              <p>Email: {profile.email}</p>
              <p>Phone: {profile.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceBook;
