import { ReactNode, useState } from "react";

interface Props {
    items: string[];
    children: ReactNode;
    onSelectItem?: (index: number) => void;
}
function ListGroup({
    items,
    children,
    onSelectItem = (index: number) => {},
}: Props) {
    const [selectedIndex, updateSelectedIndex] = useState(-1);
    return (
        <>
            <h1>{children}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item list-group-item-action active"
                                : "list-group-item list-group-item-action"
                        }
                        key={index}
                        onClick={() => {
                            updateSelectedIndex(index);
                            onSelectItem(index);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
