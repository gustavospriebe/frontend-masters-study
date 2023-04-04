import { Modal, Box } from "@mui/material";

function ModalComp({ open, setOpen, petName }) {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        outline: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={open}
            onClose={() => setOpen(!open)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h2 id="modal-modal-title">
                    Would you like to adopt {petName}?
                </h2>
                <div className="buttons">
                    <button>Yes</button>
                    <button onClick={() => setOpen(false)}>No</button>
                </div>
            </Box>
        </Modal>
    );
}

export default ModalComp;
