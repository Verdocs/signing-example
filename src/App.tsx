import {VerdocsSign} from '@verdocs/web-sdk-react';

const invite = {
  envelopeId: 'ENVELOPE_UUID',
  roleId: 'ROLE_ID',
  inviteCode: 'INVITE_CODE',
};

function App() {
  return (
    <VerdocsSign
      envelopeId={invite.envelopeId}
      roleId={invite.roleId}
      inviteCode={invite.inviteCode}
      onEnvelopeLoaded={(e: any) => console.log('Envelope loaded', e.detail.envelope)}
      onEnvelopeUpdated={(e: any) => console.log('Envelope updated', e.detail.event, e.detail.envelope)}
      onSdkError={(e: any) => console.log('SDK error', e.detail)}
    />
  );
}

export default App;
