import HistoryIcon from '@components/Icons/HistoryIcon'
import './style.css'

const SearchBarResults = ({ results }) => {
  return /* html */ `
  <ul id="search-on-youtube-results" class="search-on-youtube-results">
   ${results
     .map((result) => {
       return /* html */ `
       <li>
       <a>
       <div>
           ${HistoryIcon()}
           <span>${result}</span>
       </div>
       <button>Eliminar</button>
       </a>
       </li>
       `
     })
     .join('')}

     
  
</ul>
  `
}

export default SearchBarResults
