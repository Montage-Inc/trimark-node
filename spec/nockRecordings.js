export const loginUser = () =>
  nock('https://www.alsoenergy.com:443', {"encodedQueryParams":true})
  .post('/WebAPI/WebAPI.svc', "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"  xmlns:wsu=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd\" xmlns:msc=\"http://schemas.microsoft.com/ws/2005/12/wsdl/contract\" xmlns:tns=\"alsoenergy_ns\"><soap:Body><Login xmlns=\"alsoenergy_ns\"><username>pvpsolarapi</username><password>changeme</password></Login></soap:Body></soap:Envelope>")
  .reply(
    200,
    "<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\"><s:Body><LoginResponse xmlns=\"alsoenergy_ns\"><LoginResult xmlns:a=\"http://schemas.datacontract.org/2004/07/AlsoEnergyAPI.Data\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><a:Code>200</a:Code><a:Description i:nil=\"true\"/><a:StringCode>OK</a:StringCode><a:AE_Admin>false</a:AE_Admin><a:CustomerID>8852</a:CustomerID><a:SessionID>92111060-2a82-46dd-adba-544328f98f45</a:SessionID><a:UserID>14138</a:UserID></LoginResult></LoginResponse></s:Body></s:Envelope>",
    [
      'Content-Length',
      '527',
      'Content-Type',
      'text/xml; charset=utf-8',
      'Server',
      'Microsoft-IIS/7.5',
      'X-Powered-By',
      'ASP.NET',
      'Date',
      'Wed, 08 Feb 2017 14:46:14 GMT',
      'Connection',
      'close'
    ]
  );
