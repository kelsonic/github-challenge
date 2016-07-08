import User from '../models/user';

/**
 * Load user and append to req.
 */
function load(req, res, next, id) {
	User.get(id).then((user) => {
		req.user = user;		// eslint-disable-line no-param-reassign
		return next();
	}).error((e) => next(e));
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
	return res.json(req.user);
}

/**
 * Create new user
 * @returns {User}
 */
function create(req, res, next) {
	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		image: req.body.image
	});

	user.saveAsync()
		.then((savedUser) => res.json(savedUser))
		.error((e) => next(e));
}

/**
 * Update existing user
 * @returns {User}
 */
function update(req, res, next) {
	const user = req.user;
	user.firstName = req.body.firstName;
	user.lastName = req.body.lastName;
	user.email = req.body.email;
	user.image = req.body.image;

	user.saveAsync()
		.then((savedUser) => res.json(savedUser))
		.error((e) => next(e));
}

/**
 * Get user list
 * @returns {User[]}
 */
function list(req, res, next) {
	const { limit = 50, skip = 0 } = req.query;
	User.list({ limit, skip }).then((users) =>	res.json(users))
		.error((e) => next(e));
}

/**
 * Delete user
 * @returns {User}
 */
function remove(req, res, next) {
	const user = req.user;
	user.removeAsync()
		.then((deletedUser) => res.json(deletedUser))
		.error((e) => next(e));
}

export default { load, get, create, update, list, remove };
