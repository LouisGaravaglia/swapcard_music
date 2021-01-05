import React, {useState, useRef} from 'react';

interface Props {
  handleSubmit: (searchVal: string) => void
  typedVal: string
}


const SearchBar: React.FC<Props> = ({handleSubmit, typedVal}) => {
  const [searchVal, setSearchVal] = useState(typedVal);
  const inputRef = React.useRef("")
  const timeoutId = useRef<number | null>();


  React.useEffect(() => {
    // if the user keeps typing, stop the API call!
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    // don't make an API call with no data
    if (!searchVal.trim()) return
    // capture the timeoutId so we can
    // stop the call if the user keeps typing
    timeoutId.current = window.setTimeout(() => {
    // make graphql call
      handleSubmit(searchVal)
    }, 800)
  }, [searchVal])


  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLTextAreaElement;
    setSearchVal(target.value);
    // mimic the value so we can access
    // the latest value in our API call
    inputRef.current = target.value
  }


  // const triggerSubmit = (e: React.MouseEvent<HTMLElement>) => {
  //   e.preventDefault();
  //   handleSubmit(searchVal);
  // };

  // const triggerSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   handleSubmit(searchVal);
  // };

  // const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   const target = e.target as HTMLTextAreaElement;
  //   setSearchVal(target.value);
  //   handleSubmit(searchVal);
  // };

  return (
    <div className="Search-Field">
      <div className="Search-Field-Content">
      <h1 className="">Search for your Artist/Band!</h1>
      <form className="Search-Input-Container" >
      <div >
        <input
          type="text"
          id="SearchVal"
          name="searchVal"
          className=""
          value={searchVal}
          onChange={handleChange}
          // onKeyUp={triggerSubmit}
        />
        <button  type="submit">
            Submit
        </button>
        {/* <button onClick={triggerSubmit} type="submit">
            Submit
        </button> */}
      </div>
      </form>
      </div>
      <div className="Search-Field-Filler"></div>
    </div>
  );
};

export default SearchBar;