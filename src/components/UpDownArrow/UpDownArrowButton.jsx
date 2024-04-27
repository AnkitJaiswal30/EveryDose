import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './UpDownArrowButton.css'

export const UpDownArrowButton = ({id, quantity, list, setList}) => {
    const onUpArrowClick = () => {
        const index = list.findIndex(ele => ele.itemId === id)
        list[index].quantity = list[index].quantity + 1
        setList([...list])
    }
    const onDownArrowClick = () =>{
        const index = list.findIndex(ele => ele.itemId === id)
        if(list[index].quantity>1){
            list[index].quantity = list[index].quantity - 1
            setList([...list])
        }
    }
    return (
        <div className='container'>
            <div>
                {`Quantity : ${quantity}`}
            </div>
            <div className='arrowContainer'>
                <KeyboardArrowUpIcon  onClick = {onUpArrowClick} />
                <KeyboardArrowDownIcon onClick = {onDownArrowClick} />
            </div>
        </div>
    )
}