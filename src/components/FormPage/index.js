  // Formpage\index.js
  const React = require("react");
  const { useState } = React;

  export default function Form() {
    const [formData, setFormData] = useState({ message: "" });
    const [isOpen, setIsOpen] = useState(false);  
    const handleChange = (e) => {
      e.preventDefault();
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const toggle = (e) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };
   return (
      <div>
        <div>
        <a onClick={toggle} href="#" className="navbar__link">
            <span className='pageFeedback'>&nbsp;&nbsp;Page&nbsp;Feedback</span>
        </a>
        </div>
        {isOpen ? ( 
          <form data-netlify="true" name="feedback" method="post">
            <input type="hidden" name="form-name" value="feedback" />            
            <div>
              <div>
                <label>Your feedback helps us improve our docs!</label><br />
                <textarea type="text" name="message"
                  placeholder="Enter feedback here..." value={formData.message}
                  onChange={handleChange} />
                <input type="submit" />
              </div>
            </div>
            </form>) : ( "" )
    }
    </div>
  )}