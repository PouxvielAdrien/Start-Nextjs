import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavbarDk() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
                    <Link href="/">
                        <a className="navbar-brand">
                            <Image
                                priority
                                src="/images/daskeyboard/dk-logo.png"
                                height={35}
                                width={27}
                                alt="dk logo"
                                className="img-fluid"
                            />
                            <Image
                                priority
                                src="/images/daskeyboard/dk-brand.png"
                                height={35}
                                width={226}
                                alt="dk logo"
                                className="img-fluid"
                            />
                        </a>
                    </Link>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">

                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Choose a keyboard</NavDropdown.Item>
                            <NavDropdown.Item href="#">Accessories</NavDropdown.Item>
                            <NavDropdown.Item href="#">Professional reviews</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Technology" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Q software</NavDropdown.Item>
                            <NavDropdown.Item href="#">Gamma Zulu switches</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#Shop">Shop</Nav.Link>

                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Support</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Blog</NavDropdown.Item>
                            <NavDropdown.Item href="#">Mechanical Keyboard guide</NavDropdown.Item>
                            <NavDropdown.Item href="">5 meta hacks of the week</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Typing races</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Das Keyboard values</NavDropdown.Item>
                            <NavDropdown.Item href="#">Das Keyboard story</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Destroy this site</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}