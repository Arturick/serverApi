import React, {useState, useContext, useEffect} from 'react';
import CategoryContext from "../CategoryContext";
import FilterGroup from './FilterGroup';
import classes from './CategoryFilters.module.css';

const CategoryFilters = () => {
    const {category, updateCategory} = useContext(CategoryContext);
    const [isEditing, setIsEditing] = useState(false);
    const [filters, setFilters] = useState(category.filters || []);
    const [groupTitle, setGroupTitle] = useState('');

    function createFilterGroup(ev) {
        ev.preventDefault();
        
        if(!filters.find(filter => filter.title === groupTitle)){
            const newFilterGroup = {title: groupTitle, subfilters: []};
            setFilters([...filters, newFilterGroup]);
        }

        setGroupTitle('');
    }

    function deleteFilterGroup(groupTitle){
        setFilters(filters.filter(group => group.title !== groupTitle));
    }

    useEffect(() => {
        category.filters = filters;
        updateCategory(category);
    }, [filters])     

    return (
        <div>
            <h3>Фильтры категории <span onClick={() => setIsEditing(!isEditing)} className={classes.addGroup}>+</span></h3>
            <div className="filtersList">
                {isEditing ? 
                    <form onSubmit={(ev) => createFilterGroup(ev)} style={{margin: '20px 0'}}>
                        <input value={groupTitle} type="text" onInput={(ev) => setGroupTitle(ev.target.value.trim())}/> 
                        <button type="submit">Добавить фильтр</button>
                    </form>
                : ''}

                {filters.map(group => 
                    <FilterGroup group={group} key={group.title} deleteFilterGroup={deleteFilterGroup}/>
                )}
            </div>
        </div>
    );
};

export default CategoryFilters;
