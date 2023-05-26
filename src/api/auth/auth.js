import { doc, getDoc, collection, where, query, getDocs} from "firebase/firestore";
import { db } from "../../utils";
import { map } from "lodash"

export class Auth{
    collectionPacientes = 'pacientes';
    collectionVideos = 'video';

    async obtainAll(){
        try {
            const docRef = collection(db, this.collectionPacientes);
            const snapshot = await getDocs(docRef);
            return map(snapshot.docs, (doc) => doc.data());
         
        } catch (error) {
            throw error
        }
    }

    async logIn(id){
        try {  
            const docRef = doc(db, this.collectionPacientes, id);
            const snapshot = await getDoc(docRef);
            return snapshot.data();
        } catch (error) {
            throw error;
        }
    }

    async obtainVideoByPx(idPaciente){
        try {
            const whereRef = where("paciente", "==", idPaciente);
            const collectionRef = collection(db, this.collectionVideos);
            const queryRef = query(collectionRef, whereRef);

            const snapshot = await getDocs(queryRef);

            return map(snapshot.docs, (doc) => doc.data());
        } catch (error) {
            throw error;
        }
    }
}