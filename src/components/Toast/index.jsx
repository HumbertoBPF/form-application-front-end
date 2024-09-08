import { Toast as BootstrapToast, ToastContainer } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Toast({ title, message, onClose, show, variant }) {
    return (
        <ToastContainer
            position="bottom-end"
            className="m-3"
            style={{ zIndex: 1 }}
        >
            <BootstrapToast
                autohide
                bg={variant}
                onClose={onClose}
                show={show}
                data-testid="toast"
            >
                <BootstrapToast.Header>
                    <strong className="me-auto">{title}</strong>
                </BootstrapToast.Header>
                <BootstrapToast.Body>{message}</BootstrapToast.Body>
            </BootstrapToast>
        </ToastContainer>
    );
}

Toast.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    show: PropTypes.bool,
    variant: PropTypes.oneOf(['success', 'danger']),
};

export default Toast;
