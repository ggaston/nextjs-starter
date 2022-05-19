import style from 'styles/Contacts.module.css'
import { Icon } from '@iconify/react';
import mail from '@iconify/icons-ri/mail-line';
import phone from '@iconify/icons-ri/phone-line';

export default function Contacts() {

    return (
        <ul className={style.contacts}>
            <li className={style.email}>daniela.gabrielova@centrum.cz <Icon icon={mail} className={style.icon} /></li>
            <li className={style.tel}>603 776 009 <Icon icon={phone} className={style.icon} /> </li>
        </ul>
    )
}