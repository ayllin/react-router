import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";

const Contact = () => {
  const [contact, setContact] = useState(null);

  const { contactId } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/contacts/" + contactId)
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, []);

  if (!contact) return null;
  return (
    <div>
      <h1>{contact.name}</h1>
      <Form method="post" action="destroy">
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
};

export default Contact;
