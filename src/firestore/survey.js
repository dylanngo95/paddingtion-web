import db from './firebase.config';

const getSurveys = async () => {
    const snapshot = await db.collection('surveys').get();
    snapshot.docs.map(doc => console.log(doc.data()));
}

export default getSurveys;