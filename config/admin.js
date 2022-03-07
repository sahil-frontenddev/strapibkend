module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5c94927bea42f7cf8db43ce987acdcdd'),
  },
});
