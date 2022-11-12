import user from "./Users"
import contacts from "./Contacts"

user.hasMany(contacts); 
contacts.belongsTo(user);
