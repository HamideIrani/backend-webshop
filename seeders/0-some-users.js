"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Gonzalo Dutto",
          email: "gonzalo@dutto.com",
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hamideh Irani",
          email: "hami@irani.com",
          password: "9876",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
