import express, { Request, Response } from "express";
import bodyParser from "body-parser";

interface Account {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
}

const app = express();
app.use(bodyParser.json());

let accounts: Account[] = [];

// Create a new account: 
// curl -X POST -H "Content-Type: application/json" -d '{"id": "1", "name": "John Doe", "address": "123 High Street", "phone": "012345", "email": "john.doe@gmail.com"}' http://localhost:3000/accounts
app.post("/accounts", (req: Request, res: Response) => {
    const { id, name, address, phone, email }: Account = req.body;

    const newAccount: Account = {
        id,
        name,
        address,
        phone,
        email
    };

  accounts.push(newAccount);

  res.status(201).json(newAccount);
});

// Get account information: curl -X GET -H "Content-Type: application/json" http://localhost:3000/accounts/1
app.get("/accounts/:id", (req: Request, res: Response) => {
    const accountId: string = req.params.id;

    const account: Account | undefined = accounts.find(
        (acc) => acc.id === accountId
    );

    if (!account) {
        res.status(404).json({ message: "Account not found" });
    } else {
        res.json(account);
    }
});

// Update an existing account
// curl -X PUT -H "Content-Type: application/json" -d '{"id": "1", "name": "John Doe", "address": "123 Low Street", "phone": "543210", "email": "doe.john@gmail.com"}' http://localhost:3000/accounts/1
app.put("/accounts/:id", (req: Request, res: Response) => {
    const accountId: string = req.params.id;
    const { name, address, phone, email }: Account = req.body;

    const account: Account | undefined = accounts.find(
        (acc) => acc.id === accountId
    );

    if (!account) {
        res.status(404).json({ message: "Account not found" });
    } else {
        account.name = name;
        account.address = address;
        account.phone = phone;
        account.email = email;

        res.json(account);
    }
});

// Delete an account: curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/accounts/1
app.delete("/accounts/:id", (req: Request, res: Response) => {
    const accountId: string = req.params.id;

    const accountIndex: number = accounts.findIndex(
        (acc) => acc.id === accountId
    );

    if (accountIndex === -1) {
        res.status(404).json({ message: "Account not found" });
    } else {
        const deletedAccount = accounts.splice(accountIndex, 1);
        res.json(deletedAccount);
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});