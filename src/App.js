import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {NavBar} from './components/NavBar/NavBar';
import {Menu} from './components/Menu/Menu';
import {GlobalStyle} from './components/Style/GlobalStyle';
import {ModalItem} from './components/Modal/ModalItem';
import {Order} from './components/Order/Order';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';
import { useAuth } from './components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyAqTAvqDQKHCWwKzM2PneYl7KVb6bETnNM",
  authDomain: "mrdonalds-6ab7a.firebaseapp.com",
  databaseURL: "https://mrdonalds-6ab7a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-6ab7a",
  storageBucket: "mrdonalds-6ab7a.appspot.com",
  messagingSenderId: "977907237338",
  appId: "1:977907237338:web:c103edc0515a86f86780e3"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);

  const openItem = useOpenItem();
  const orders = useOrders();

 
  return (
 <>
    <GlobalStyle/>
    <NavBar {...auth}/>
    <Order {...orders} {...openItem} {...auth}/>
    <Menu {...openItem}/>
   { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
