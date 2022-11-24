// prettier-ignore
const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

exports.addAdminRole = functions.https.onCall(async (data, context) => {
  // get user and add custom claim
  try {
    const user = await admin
      .auth()
      .getUserByEmail(data.email)
    await admin.auth().setCustomUserClaims(user.uid, {
      admin: true,
    })
    return {
      message: `Succces! ${data.email} has been made an admin`,
    }
  } catch (err) {
    return err
  }
})

exports.addUser = functions.https.onCall(async (data, context) => {
  try {
    const user = await admin.auth().createUser({
      email: data.email,
      emailVerified: true,
      password: data.password,
      displayName: data.firstName,
      disabled: false,
    })

    await admin
      .firestore()
      .collection('users')
      .doc(user.email)
      .set({
        ...data,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      })
    return {
      response: user,
    }
  } catch (error) {
    throw new functions.https.HttpsError('failed to create an user')
  }
})
