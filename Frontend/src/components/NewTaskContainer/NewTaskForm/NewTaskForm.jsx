import { Formik, Form } from 'formik';
import { createTask } from '../../../api/tasks.api.js';

const NewTaskForm = () => {
    return (
        <Formik
            initialValues={{
                title: '',
                description: ''
            }}
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
                try{
                    const response = await createTask(values);
                    console.log(response);
                    actions.resetForm();
                }catch(error){
                    console.log(error);
                }
            }}
        >
            { ({
                handleChange, 
                handleSubmit,
                values,
                isSubmitting,
                errors,
                handleBlur,
                touched
            }) => (
                <Form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input 
                        type="text"
                        name="title"
                        onChange={handleChange}
                        placeholder="Write a title"
                        onBlur={handleBlur}
                        value={values.title}
                    />
                    {errors.title && touched.title && errors.title}
                    
                    <label>Description</label>
                    <input 
                        type="text"
                        name="description"
                        onChange={handleChange}
                        placeholder="Write a description"
                        onBlur={handleBlur}
                        value={values.description}
                    />
                    {errors.description && touched.description && errors.description}

                    <button type='submit' disabled={isSubmitting}>
                        {isSubmitting ? 'Adding...' : 'Add'}
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default NewTaskForm