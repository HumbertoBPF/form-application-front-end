import { Container } from 'react-bootstrap';

function NotFound() {
    return (
        <Container>
            <h1>404 - Not Found</h1>
            <p>
                The page that you requested could not be found. Check the URL or{' '}
                <a href="/">click here</a> to go to the initial page.
            </p>
        </Container>
    );
}

export default NotFound;
