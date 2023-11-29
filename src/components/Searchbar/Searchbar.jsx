import css from './Searchbar.module.css';
import searchIcon from './Search.png';
import { Formik, Form, Field } from 'formik';

const Searchbar = ({ submit }) => {
  return (
    <Formik initialValues={{ query: '' }} onSubmit={submit}>
      <Form className={css.searchbar}>
        <header>
          <button type="submit" className={css.button}>
            <span className="button-label">
              <img src={searchIcon} className={css.icon} alt="Search" width="30" height="30" />
            </span>
          </button>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </header>
      </Form>
    </Formik>
  );
};

export default Searchbar;
