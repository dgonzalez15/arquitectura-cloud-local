import React from 'react';
import styles from '../../shared/styles/SearchBar.module.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => (
  <input
    className={styles.searchBar}
    type="search"
    placeholder="Buscar productos"
    value={value}
    onChange={e => onChange(e.target.value)}
    aria-label="Buscar productos"
    autoComplete="off"
  />
);

export default SearchBar;
