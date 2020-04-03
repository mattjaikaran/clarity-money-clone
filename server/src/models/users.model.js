// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'users';
  const mongooseClient = app.get('mongooseClient');
  const schema = new mongooseClient.Schema({
  
    email: { type: String, unique: true, lowercase: true },
    password: { type: String },
    account: {
      name: { type: String },
      balance: {
        cash: { type: Number },
        creditCardDebt: { type: Number },
      },
      transactions: [
        {
          name: { type: String },
          amount: { type: Number }
        }
      ],
      income: {
        total: { type: Number },
        spent: { type: Number },
        balance: { type: Number }
      },
      monthlyBills: [
        {
          name: { type: String },
          amount: { type: Number },
          icon: { type: String },
        }
      ],
      creditScore: { type: Number },
      creditCards: [
        {
          name: { type: String },
          accountNo: { type: Number },
          availableCredit: { type: Number },
          balance: { type: Number },
          minDue: { type: Number },
          apr: { type: Number },
        }
      ]
    },
    googleId: { type: String },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

};
