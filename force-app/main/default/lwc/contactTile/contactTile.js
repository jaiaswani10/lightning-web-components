import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
//import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';

export default class ContactTile extends NavigationMixin(LightningElement) {
    @api contact;
   // @wire(getSingleContact) contact;   
     navigateToView() {       
       this[NavigationMixin.Navigate]({
        type: "standard__recordPage",
            attributes: {
                objectApiName: "Contact",
                actionName: "view",
                recordId: this.contact.Id,
            },
        });
   }    
}

