module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '117660cec369ee20681927e35ae7ac40'),
  },
});
