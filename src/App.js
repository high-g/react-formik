import { Formik } from 'formik'

const App = () => {
  return (
    <div>
      <h1>formik test</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {}
          return errors
        }}
        onSubmit={(values) => console.log(values)}
        render={(props) => (
          <form onSubmit={props.handleSubmit}>
            <div>
              <label>email</label>
              <input type="email" name="email" value={props.values.email} onChange={props.handleChange} />
            </div>
            <div>
              <label>password</label>
              <input type="password" name="password" value={props.values.password} onChange={props.handleChange} />
            </div>
            <button type="submit">送信</button>
          </form>
        )}
      />
    </div>
  )
}

export default App
