import Dropdown from 'react-bootstrap/Dropdown';
import styles from './DropDown.css';
function DropDown() {
  return (
    <div className="container sixth">
    <p>Drop Down <span className='text-danger'>*</span></p>
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" drop = "down">
        Choose
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default DropDown;