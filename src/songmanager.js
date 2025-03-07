import {signUp, login, logout, onAuthStateChanged, fetchUserData} from "./auth";
import {db} from './config';
import {doc, setDoc, collection, deleteDoc, onSnapshot} from 'firebase/firestore';

const saveSong = async function(){
    const songName = document.getElementById("title").value.trim()
    const artistName = document.getElementById("artist").value.trim()
    const songYear = document.getElementById("year").value.trim()
    const songRating = document.getElementById("rating").value.trim()

    try{
        const songRef = doc(db, "songs", songName.toLowerCase()+"-"+artistName.toLowerCase())

        await setDoc(songRef, {
            name: songName,
            artist: artistName,
            year: songYear,
            rating: songRating,
            time: new Date()
        })
        console.log("Song successfully created")
        document.getElementById("title").value = ""
        document.getElementById("artist").value = ""
        document.getElementById("year").value = ""
        document.getElementById("rating").value = ""
    }catch(error){
        console.error("Error saving song ", error)
    }
}

const removeSong = async function(collection, docID){
    try{
        await deleteDoc(doc(db, collection, docID))
        console.log(`Document with ID ${docID} deleted successfully`)
    }catch(error){
        console.error("Error deleting song", error)
    }
}

const songCollection = collection(db, "songs")
onSnapshot(songCollection, (snapshot)=>{
    const tableBody = document.getElementById("song-table-body")
    tableBody.innerHTML = ""

    snapshot.forEach((doc)=>{
        const data = doc.data()
        const row = document.createElement("tr")

        row.innerHTML = `
        <td> ${doc.id} </td>
        <td> ${data.name} </td>
        <td> ${data.artist} </td>
        <td> ${data.year} </td>
        <td> ${data.rating} </td>
        `
        tableBody.appendChild(row)
    })
})

const deleteSongForm = document.querySelector("#deleteSong")
deleteSongForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const song = document.getElementById("titleDelete").value
    removeSong("songs", song)
})

const addSongForm = document.querySelector("#addSong")
addSongForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    saveSong()
})
