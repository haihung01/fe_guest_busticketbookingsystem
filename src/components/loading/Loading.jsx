import { CircularProgress } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'

export default function BackDrop({ open }) {
    return (
        <Backdrop sx={{ color: '#fff', zIndex: 9999 }} open={open} id='loading-progress'>
            <CircularProgress />
        </Backdrop>
    )
}