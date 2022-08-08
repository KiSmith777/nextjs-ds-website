const generateCSP = ({ nonce }) => {
  const policy = {}


  // adder function for our policy object
  const add = (directive, value, options = {}) => {
    if (options.devOnly && process.env.NODE_ENV !== 'development') return;
    const curr = policy[directive];
    policy[directive] = curr ? [...curr, value] : [value];
  };

  //default-src
  add('default-src', `'none'`);

  //img-src
  add('img-src', `'self'`);
  add('img-src', 'data:');

  //script-src-elem
  add('script-src-elem', `'self'`);
  add('script-src-elem', `'unsafe-inline'`, `'nonce-${nonce}'`);
  add('script-src-elem', 'https://kit.fontawesome.com');

  //script-src
  add('script-src', `'unsafe-eval'`, { devOnly: true });
  add('script-src', `'unsafe-inline'`, `'nonce-${nonce}'`);
  add('script-src', `'self'`, 'ajax.cloudflare.com');
  add('script-src', 'static.cloudflareinsights.com');
  add('script-src', `'self'`, `'nonce-${nonce}'`);


  //connect-src
  add('connect-src', `'self'`, { devOnly: true });
  add('connect-src', `'self'`, 'data:');
  add('connect-src', 'cloudflareinsights.com');
  add('connect-src', `'strict-dynamic'`, `'nonce-${nonce}'`);
  add('connect-src', 'https://ka-f.fontawesome.com');
  //style-src

  add('style-src', `'self'`);
  add('style-src', `'unsafe-inline'`, `'nonce-${nonce}'`);
  add('style-src', 'https://fonts.googleapis.com');

  //font-src
  add('font-src', 'https://fonts.gstatic.com');
  add('font-src', `'self'`);
  add('font-src', 'https://ka-f.fontawesome.com');

  //frame-ancestors
  add('frame-ancestors', `'none'`);

  //base-uri
  add('base-uri', `'none'`);

  //form-action
  add('form-action', `'none'`);

  //add require trusted types
  /*add('require-trusted-types-for', `'script'`);*/


  // return the object in a formatted value (this won't work on IE11 without a polyfill!)

  return Object.entries(policy)
    .map(([key, value]) => `${key} ${value.join(' ')}`)
    .join('; ');
};

export default generateCSP;