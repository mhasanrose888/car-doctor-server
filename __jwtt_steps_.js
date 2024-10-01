/****
 * install jsonwebtoken
 * jwt.sign(payload, secret, {expiresIn: })
 * tocken client
 * 
 * 
 */

/***
 * how to store token in the client side
 * 1. Memory
 * 2. Local storage --> ok type(XSS)
 * 3. Cookies: http only
 * 
 */

/**
 * Store on cookies http only
 * 1. set cookies with http only. for development secure: false
 * 
 * 2. cors
 * app.use(cors({
 * orgin: ['http://localhost:5173'],
 * cresdencials: true
 * }))
 * 
 * 3.client side axios sattings
 * in axios set withCredntials: true
 * 
 * 4. use cookie-parser as a middleware
 */

/**
 * 1. jwt--> json web token
 * 2. generate a token by usung jwn.sign. 
 * 3. create api set ot cookie. http only, secure, sameSite
 * 4. from clinet side: axios withCredencials: true
 * 5. cors st up [orgin, credentials: true]
 */
/**
 * 1. for secure api calls
 * 2. server side: install cookie paser as a middleware
 * 3. req.cookies
 * 4. on the client side: make api call with axios withCredicials: true or 
 * using fetch then use credencials: includes
 */