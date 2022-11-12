import { Router } from "express";
import { methods as contacController} from "./../controllers/contacts.controller"
const router=Router();

router.get("/:id",contacController.getContacts);
router.post("/:id",contacController.addContact);
router.put("/:id",contacController.updateContact);
router.delete("/:id",contacController.deleteContact);

export default router;