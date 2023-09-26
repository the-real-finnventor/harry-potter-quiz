import { ReactNode } from "react";

interface Props {
    item_names: string[];
    item_values: string[];
    dropdown_id: string;
    dropdown_name: string;
}

function Select({
    item_names,
    item_values,
    dropdown_id,
    dropdown_name,
}: Props) {
    return (
        <>
            <select name={dropdown_name} id={dropdown_id}>
                {item_names.map((item_name, index) => (
                    <option value={item_values[index]}>{item_name}</option>
                ))}
            </select>
        </>
    );
}

export default Select;
