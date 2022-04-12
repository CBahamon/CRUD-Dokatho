import React from 'react'

export const LoginScreen = () => {
  return (
    <div className='container'>
      <div className='forms-container'>
        <div className='signin-signup'>
          <form className='sign-in-form'>
            <h2 className='title'>Sign In</h2>
            <div className='input-field'>
              <i className='fas fa-user'></i>
              <input type="text" placeholder='Documento' />
            </div>
            <div className='input-field'>
              <i className='fas fa-lock'></i>
              <input type="password" placeholder='Password' />
            </div>
            <input type="submit" value="Login" className='btn solid' />

            <p className='social-text'>Or Sign in with social platforms</p>
            <div className='social-media'>
              <div
                className="google-btn"
              >
                <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className="btn-text">
                  <b>Sign in with google</b>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='panels-container'>

      </div>
    </div>
  )
}
