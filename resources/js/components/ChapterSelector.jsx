import React, {useState} from "react"
import Select from 'react-select';

export const ChapterSelector = (props) => {
    const [selectedItem, setSelectedItem] = useState()

    const handle = (selectedOption) => {
        setSelectedItem(selectedOption)
    }

    return (
        <Select options={props.options}
            isSearchable={true}
            className="w-full"
            onChange={props.onChange}
            value={props.selectedChapter}
        />
    )
}
