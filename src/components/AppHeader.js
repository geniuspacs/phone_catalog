import { Navbar } from "react-bootstrap";

export function AppHeader() {
    return (
        <Navbar bg="dark" className="m-0">
            <Navbar.Brand href="#" className="px-5">
                <span className="text-light">Phone Directory</span>
            </Navbar.Brand>
        </Navbar>
    )
}