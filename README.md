This project illustrates the simplest possible usage of the Verdocs Web SDK: embedding
a signing component in a simple app.

Setup:
1. Create an account at [Verdocs.com](https://verdocs.com), if you have not already done so.
2. Create a new template and upload any PDF file. It does not matter what you upload.
3. Add two Unknown Recipients, named Buyer and Seller. For simplicity's sake, set both to act in parallel.
4. Add at least one signature field for each recipient. (They should be color-coded differently.)
5. Create a new envelope from the template.
6. Set yourself as both the buyer and seller. For convenience, if you have Gmail, you can use
   different e-mail addresses by suffixing them with `+suffix` e.g. `myemail+buyer@gmail.com` and
   `myemail+seller@gmail.com`.
7. When you receive the Action Required email invites, copy and paste the URL provided into the
   code here.

Running this project:
1. Clone this repository, or download it as a Zip file and extract it to a convenient folder.
   Open a terminal window into this folder.
2. You will need a recent (LTS is recommended) version of Node installed. Yarn is not
   required, but is recommended.
3. Run `yarn` (or `npm install` if you do not have Yarn).

Then edit `src/App.tsx`. Paste the three ID components from your invite email's "Let's Go" link into
the three fields here. For example, if your invite link was:

`https://verdocs.com/view/sign/ABCD-UUID/roleName/Seller/invitation/jklm1234`

the file should look like this:

```typescript
export const invite = {
  envelopeId: 'ABCD-UUID',
  roleId: 'Seller',
  inviteCode: 'jklm1234',
}
```

Now run run `yarn dev`. This will start a dev server for this app on [http://127.0.0.1:5173/](http://127.0.0.1:5173/).
If you navigate to this URL, you should see the signing experience.
