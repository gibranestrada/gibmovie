import React, { useState } from "react";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';



const schema = yup.object({
  movieTitle: yup
    .string().trim()
    .required("Please enter a movie title")
    .min(1, "Too short - please enter at least 1 character."),
});


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const { register, handleSubmit, watch, errors, getValues } = useForm({
    validationSchema: schema
  });
  const getValue = getValues();

  console.log(
    watch("movieTitle")
  );

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = () => {
    // e.preventDefault();
    const search = searchValue.trim();

    if (search.length) {
      props.search(searchValue);
      resetInputField();
    }
  }

  return (
    <Form className="search" onSubmit={handleSubmit(callSearchFunction)}>
      <Row className="justify-content-center">
        <Col md={4}>
          <Form.Group controlId="formSearchValue">
            <InputGroup>
              <Form.Control
                onChange={handleSearchInputChanges}
                type="text"
                aria-describedby="movieTitleError"
                placeholder="Search movie title"
                name="movieTitle"
                ref={register}
                isValid={!errors.movieTitle?.message && getValue.movieTitle?.length > 0}
                isInvalid={
                  errors.movieTitle?.message
                }
              />
              <InputGroup.Append>
                <Button type="submit">Submit</Button>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid" className="errorMessage">
                {errors.movieTitle?.message}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default Search;