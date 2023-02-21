import { Formik } from 'formik';
import { Container, Button, Form } from "react-bootstrap";
import { updateTask, createTask } from '../../../api/tasks.api.js';

const NewTaskForm = ( { idTask, title, setTitle, description, setDescription } ) => {

    let iniValues = { }
    if(idTask){
        iniValues = {
            title: title,
            description: description
        }
    }else{
        iniValues = {
            title: '',
            description: ''
        }
    }

    return (
        <Container className='mt-3'>
            <Formik
                initialValues={iniValues}
                validate={values => {
                    const errors = {};
                    if(!values.title){
                        errors.title = 'Title required';
                    }
                    if(!values.description){
                        errors.description = 'Description required';
                    }
                    return errors;
                }}
                onSubmit={ async (values, actions) => {

                    if(!idTask){
                        try{
                            const response = await createTask( values );
                            console.log(response);
                            actions.resetForm();
                        }catch(error){
                            console.log(error);
                        }
                    }else{
                        try{
                            const response = await updateTask( idTask , values );
                            setTitle(values.title);
                            setDescription(values.description);
                            console.log(response);
                        }catch(error){
                            console.log(error);
                        }
                    }
                    
                }}
                enableReinitialize
            >
                { ({
                    handleChange, 
                    handleSubmit,
                    handleReset,
                    values,
                    isSubmitting,
                    errors,
                    handleBlur,
                    touched
                }) => (
                    <Form onReset={handleReset} onSubmit={handleSubmit} className=''>

                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text"
                                name="title"
                                onChange={handleChange}
                                placeholder="Write a title"
                                onBlur={handleBlur}
                                value={values.title}
                            />
                            <Form.Text className="text-muted">
                                {errors.title && touched.title && errors.title}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                type="text"
                                name="description"
                                onChange={handleChange}
                                placeholder="Write a description"
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            <Form.Text className="text-muted">
                            {errors.description && touched.description && errors.description}
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type='submit' disabled={isSubmitting}>
                            {isSubmitting ?
                                    !idTask ? 'Adding...' : 'Updating...'
                                :
                                    !idTask ? 'Add' : 'Update'
                            }
                        </Button>
                        
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default NewTaskForm