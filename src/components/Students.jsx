
import { Link } from "react-router-dom";

function Students() {
  return (
    <div>
      <h1>Students Page</h1>

      <ul>
        <li>
          <Link to="/details/1">Student 1</Link>
        </li>

        <li>
          <Link to="/details/2">Student 2</Link>
        </li>

        <li>
          <Link to="/details/3">Student 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Students;
