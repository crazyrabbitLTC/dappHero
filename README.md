# dappHero
A framework for easily building no-code web3 applications using WebFlow

Readme coming soon, the code is reasonably self explanatory. Watch the video: 

https://youtu.be/NwPBB5cgNWU


Want to try it out? Get the first version webflow template: 

https://webflow.com/website/dapphero

In Home, feel free to play around, designing however you wish. 

The currently supported IDs are: 

`web3-enableButton` to change a button into an 'enable Metamask' button.
`web3-address`
`web3-balance`
`web3-networkId`
`web3-networkName`
`web3-providerName`

For 3Box the currently supported ID's are: 
`web3-box-name`
`web3-box-profileImageChild` (Nest as a child of `web3-box-profileImageParent`)
`web3-box-website`

Clearly there is a lot of work to do!!!!

To create a new page, at the moment just duplicate an old one. (Easy)

Or on each page, in the page settings (eventually this should be site wide) add in the `Inside <head> tag`
this code: 
```
<script src="https://unpkg.com/react@16.4.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16.4.1/umd/react-dom.production.min.js"></script>
```

and in the `Before </body>` section add: 
<script src="https://webflow-react-test.s3.amazonaws.com/bundle.js"></script>

Or if you can figure out how this was made- (I'll put up instructions soon!) You can add your own bundle.
This bundle will probably break frequently as it's my bundle and I'll be hacking on it. 