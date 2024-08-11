
import Stack from 'react-bootstrap/Stack';

export const Player = () => {
    return (

        <Stack className="icon" direction="horizontal" gap={3}>
            <div className="p-2">
                <i className="icon bi bi-skip-start-circle"></i>
            </div>
            <div className="p-2">
                <i class="bi bi-play-circle"></i>
            </div>
            <div className="p-2">
                <i class="bi bi-skip-end-circle"></i>
            </div>
        </Stack>
    )
}
