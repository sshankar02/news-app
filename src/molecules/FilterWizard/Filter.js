import './Filter.css';

const Filter = props =>{
    const {action=()=>{}, inputValue=""} = props;

    const debounce = (fn, timeout) =>{
        let timer;

        return (event)=>{
            clearTimeout(timer);
            timer = setTimeout(() => fn(event), timeout);
        }
    }

    const filterChangeHandler = (event) =>{
        action(event.target.value);
    }

    const filterElement = <div className="news-filter">
            <input type="text" onChange={debounce(filterChangeHandler, 1000)} defaultValue={inputValue} />
        </div>

    return filterElement;
}

export default Filter;