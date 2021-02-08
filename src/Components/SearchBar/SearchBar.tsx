import './SearchBar.css'

const SearchBar = ({handleText}:any)=> {
  return (
    <div className='center'>
      <input type='text' onChange={handleText} placeholder="Search robot"/>
    </div>
  )
}
export default SearchBar