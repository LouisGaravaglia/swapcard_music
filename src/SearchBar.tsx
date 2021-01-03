import React, {useState} from 'react';

interface Props {
  handleSubmit: (searchVal: string) => void
}


const SearchBar: React.FC<Props> = ({handleSubmit}) => {
  const [searchVal, setSearchVal] = useState("")


  const triggerSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleSubmit(searchVal);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setSearchVal(target.value);
  };

  return (
    <div className="Search-Field">
      <div className="Search-Field-Content">
      <h1 className="">Search for your Artist/Band!</h1>
      <form className="Search-Input-Container">
      <div >
        <input
          type="text"
          id="SearchVal"
          name="searchVal"
          className=""
          value={searchVal}
          onChange={handleChange}
        />
        <button onKeyUp={triggerSubmit} type="submit">
            <i className=""></i>
        </button>
      </div>
      </form>
      </div>
      <div className="Search-Field-Filler"></div>
    </div>
  );
};

export default SearchBar;