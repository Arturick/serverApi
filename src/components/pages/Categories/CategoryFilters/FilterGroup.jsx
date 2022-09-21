import React, {useState, useContext, useEffect} from 'react';
import CategoryContext from "../CategoryContext";
import classes from './CategoryFilters.module.css'

const FilterGroup = ({group, deleteFilterGroup}) => {
    const {category, updateCategory} = useContext(CategoryContext);
    const [subfilterTitle, setSubfilterTitle] = useState('');
    const [subfilters, setSubfilters] = useState(group.subfilters);

    useEffect(() => { 
        group.subfilters = subfilters;
        updateCategory(category);
    }, [subfilters])

    function createSubfilter(ev){
        ev.preventDefault();

        if(!subfilters.find(subfilter => subfilter === subfilterTitle))
            setSubfilters([...subfilters, subfilterTitle]);
            
        setSubfilterTitle('');
    }

    function deleteSubfilter(title){
        setSubfilters(subfilters.filter(subfilter => subfilter !== title));
    }

    return (
        <div className={classes.filterItem}>
            <div className={classes.filterItemHeader}>
                <h4>{group.title}</h4><span onClick={() => deleteFilterGroup(group.title)}>Удалить</span>
            </div>
            <ul>
                {subfilters ? subfilters.map(subfilter => 
                    <li key={subfilter}>{subfilter} <div className={classes.subfilterDelete} onClick={() => deleteSubfilter(subfilter)}>&#10006;</div></li>
                ) : 'no subs'}
            </ul>
            <form onSubmit={(ev) => createSubfilter(ev)}>
                <input value={subfilterTitle} type="text" onInput={(ev) => setSubfilterTitle(ev.target.value.trim())} placeholder="Добавить фильтр"/>
                <button type="submit">+</button>
            </form>
        </div>
    );
};

export default FilterGroup;
