
import config from './config.mjs';

// This file is exporting an Object with a single key/value pair.
// However, because this is not a part of the logic of the application
// it makes sense to abstract it to another file. Plus, it is now easily 
// extensible if the application needs to send different email templates
// (eg. unsubscribe) in the future.
export default {

  confirm: id => ({
    subject: 'Confirmation email',
    html: `
    <h2>Click on this link to confirm your email address</h2>
      <a href="${config.CLIENT_URL}/confirmemail/${id}">
        ${config.CLIENT_URL}/confirmemail/${id}
      </a>
    `,      
    text: `Copy and paste this link: ${config.CLIENT_URL}/confirmemail/${id}`
  })
}