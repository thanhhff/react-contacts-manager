import React from "react";
import { Segment, Header } from "semantic-ui-react";
import ContactForm from "./contact-form";
import ContactTable from "./contact-table";
import {getKey} from "../lib/util";

/* カスタムフック */
import useStorage from '../hooks/storage';

export default function Contacts() {
  //   const [items, putItems] = React.useState([
  //     /* テストコード 開始 */
  //   { key: getKey(), name: '日本語の宿題', email: 'thanh@gmail.com', select: false },
  //   { key: getKey(), name: 'reactを勉強する', email: 'thanh@gmail.com', select: false },
  //   { key: getKey(), name: '明日の準備をする', email: 'thanh@gmail.com', select: false },
  //   /* テストコード 終了 */
  // ]);
  
  const [items, putItems, clearItems] = useStorage();
  
  return (
      <Segment basic>
        <Header as="h3">連絡先</Header>
        <ContactForm 
        items={items}
        putItems={putItems}
        />
        <ContactTable 
        items={items}
        putItems={putItems}
        clearItems={clearItems}
        />
      </Segment>
  );
}