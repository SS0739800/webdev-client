"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>
      <label htmlFor="wd-your-first-name">First name: </label>
      <input id="wd-your-first-name" type="text" defaultValue="Sudaiv" />
      <br />
      <label htmlFor="wd-your-last-name">Last name: </label>
      <input id="wd-your-last-name" type="text" defaultValue="Shetty" />
      <br />
      <label htmlFor="wd-your-student-id">Student ID: </label>
      <input id="wd-your-student-id" type="password" defaultValue="003164376" />
      <br />
      <label htmlFor="wd-your-email">School email: </label>
      <input
        id="wd-your-email"
        type="email"
        defaultValue="shetty.suda@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={4}
        defaultValue="I want to learn how to build and deploy a web app on my own."
      />
      <br />

      <label>Class standing:</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-undergraduate" />
      <label htmlFor="wd-your-undergraduate">Undergraduate</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-graduate" defaultChecked />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />

      <label>Enrollment:</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-full-time" defaultChecked />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      <label>Interests:</label>
      <br />
      <input type="checkbox" id="wd-your-frontend" defaultChecked />
      <label htmlFor="wd-your-frontend">Front-end development</label>
      <br />
      <input type="checkbox" id="wd-your-backend" defaultChecked />
      <label htmlFor="wd-your-backend">Back-end development</label>
      <br />
      <input type="checkbox" id="wd-your-databases" />
      <label htmlFor="wd-your-databases">Databases</label>
      <br />

      <label htmlFor="wd-your-major">Major: </label>
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="CY">Cybersecurity</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics I want to learn more about:</label>
      <br />
      <select id="wd-your-topics" multiple defaultValue={["REACT", "NODE"]}>
        <option value="HTML">HTML and CSS</option>
        <option value="REACT">React</option>
        <option value="NODE">Node.js</option>
        <option value="MONGO">MongoDB</option>
      </select>
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        id="wd-your-grad-year"
        type="number"
        min={2026}
        max={2030}
        defaultValue={2028}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input id="wd-your-start-date" type="date" defaultValue="2026-01-07" />
      <br />
      <label htmlFor="wd-your-excitement">Excitement for this course (0-10): </label>
      <input
        id="wd-your-excitement"
        type="range"
        min={0}
        max={10}
        defaultValue={8}
      />
      <br />

      <button id="wd-your-save" type="submit">
        Save
      </button>{" "}
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
