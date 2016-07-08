import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('## User APIs', () => {
	let user = {
		firstName: 'Kelson',
		lastName: 'Adams',
		email: 'me@example.com',
		image: 'https://www.buira.net/assets/images/shared/default-profile.png',
	};

	describe('# POST /api/users', () => {
		it('should create a new user', (done) => {
			request(app)
				.post('/api/users')
				.send(user)
				.expect(httpStatus.OK)
				.then(res => {
					expect(res.body.firstName).to.equal(user.firstName);
					expect(res.body.lastName).to.equal(user.lastName);
					expect(res.body.email).to.equal(user.email);
					expect(res.body.image).to.equal(user.image);
					user = res.body;
					done();
				});
		});
	});

	describe('# GET /api/users/:userId', () => {
		it('should get user details', (done) => {
			request(app)
				.get(`/api/users/${user._id}`)
				.expect(httpStatus.OK)
				.then(res => {
					expect(res.body.firstName).to.equal(user.firstName);
					expect(res.body.lastName).to.equal(user.lastName);
					expect(res.body.email).to.equal(user.email);
					expect(res.body.image).to.equal(user.image);
					done();
				});
		});

		it('should report error with message - Not found, when user does not exists', (done) => {
			request(app)
				.get('/api/users/56c787ccc67fc16ccc1a5e92')
				.expect(httpStatus.NOT_FOUND)
				.then(res => {
					expect(res.body.message).to.equal('Not Found');
					done();
				});
		});
	});

	describe('# PUT /api/users/:userId', () => {
		it('should update user details', (done) => {
			user.firstName = 'KK';
			request(app)
				.put(`/api/users/${user._id}`)
				.send(user)
				.expect(httpStatus.OK)
				.then(res => {
					expect(res.body.firstName).to.equal('KK');
					expect(res.body.lastName).to.equal(user.lastName);
					expect(res.body.email).to.equal(user.email);
					expect(res.body.image).to.equal(user.image);
					done();
				});
		});
	});

	describe('# GET /api/users/', () => {
		it('should get all users', (done) => {
			request(app)
				.get('/api/users')
				.expect(httpStatus.OK)
				.then(res => {
					expect(res.body).to.be.an('array');
					done();
				});
		});
	});

	describe('# DELETE /api/users/', () => {
		it('should delete user', (done) => {
			request(app)
				.delete(`/api/users/${user._id}`)
				.expect(httpStatus.OK)
				.then(res => {
					expect(res.body.firstName).to.equal('KK');
					expect(res.body.lastName).to.equal(user.lastName);
					expect(res.body.email).to.equal(user.email);
					expect(res.body.image).to.equal(user.image);
					done();
				});
		});
	});
});
