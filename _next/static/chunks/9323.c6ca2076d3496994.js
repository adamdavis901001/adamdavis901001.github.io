"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9323],{47073:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_BASE_URL=void 0,t.DEFAULT_BASE_URL="https://safe-client.safe.global"},7637:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getEndpoint=t.deleteEndpoint=t.putEndpoint=t.postEndpoint=void 0;let a=n(93340);function i(e,t,n,i){let s=(0,a.insertParams)(t,n),r=(0,a.stringifyQuery)(i);return`${e}${s}${r}`}t.postEndpoint=function(e,t,n){let s=i(e,t,null==n?void 0:n.path,null==n?void 0:n.query);return(0,a.fetchData)(s,"POST",null==n?void 0:n.body,null==n?void 0:n.headers,null==n?void 0:n.credentials)},t.putEndpoint=function(e,t,n){let s=i(e,t,null==n?void 0:n.path,null==n?void 0:n.query);return(0,a.fetchData)(s,"PUT",null==n?void 0:n.body,null==n?void 0:n.headers,null==n?void 0:n.credentials)},t.deleteEndpoint=function(e,t,n){let s=i(e,t,null==n?void 0:n.path,null==n?void 0:n.query);return(0,a.fetchData)(s,"DELETE",null==n?void 0:n.body,null==n?void 0:n.headers,null==n?void 0:n.credentials)},t.getEndpoint=function(e,t,n,s){if(s)return(0,a.getData)(s,void 0,null==n?void 0:n.credentials);let r=i(e,t,null==n?void 0:n.path,null==n?void 0:n.query);return(0,a.getData)(r,null==n?void 0:n.headers,null==n?void 0:n.credentials)}},29323:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,i)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||a(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.getAccount=t.createAccount=t.verifyAuth=t.getAuthNonce=t.getContract=t.getSafeOverviews=t.unsubscribeAll=t.unsubscribeSingle=t.registerRecoveryModule=t.deleteRegisteredEmail=t.getRegisteredEmail=t.verifyEmail=t.resendEmailVerificationCode=t.changeEmail=t.registerEmail=t.unregisterDevice=t.unregisterSafe=t.registerDevice=t.getDelegates=t.confirmSafeMessage=t.proposeSafeMessage=t.getSafeMessage=t.getSafeMessages=t.getDecodedData=t.getMasterCopies=t.getSafeApps=t.getChainConfig=t.getChainsConfig=t.getTxPreview=t.getConfirmationView=t.proposeTransaction=t.getNonces=t.postSafeGasEstimation=t.deleteTransaction=t.getTransactionDetails=t.getTransactionQueue=t.getTransactionHistory=t.getCollectiblesPage=t.getCollectibles=t.getAllOwnedSafes=t.getOwnedSafes=t.getFiatCurrencies=t.getBalances=t.getMultisigTransactions=t.getModuleTransactions=t.getIncomingTransfers=t.getSafeInfo=t.getRelayCount=t.relayTransaction=t.setBaseUrl=void 0,t.getIndexingStatus=t.putAccountDataSettings=t.getAccountDataSettings=t.getAccountDataTypes=t.deleteAccount=void 0;let s=n(7637),r=n(47073);i(n(39468),t),i(n(55517),t),i(n(41471),t),i(n(41621),t),i(n(94969),t),i(n(5012),t),i(n(83015),t),i(n(99005),t),i(n(71091),t),i(n(81570),t);let o=r.DEFAULT_BASE_URL;t.setBaseUrl=e=>{o=e},t.relayTransaction=function(e,t){return(0,s.postEndpoint)(o,"/v1/chains/{chainId}/relay",{path:{chainId:e},body:t})},t.getRelayCount=function(e,t){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/relay/{address}",{path:{chainId:e,address:t}})},t.getSafeInfo=function(e,t){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/safes/{address}",{path:{chainId:e,address:t}})},t.getIncomingTransfers=function(e,t,n,a){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/safes/{address}/incoming-transfers/",{path:{chainId:e,address:t},query:n},a)},t.getModuleTransactions=function(e,t,n,a){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/safes/{address}/module-transactions/",{path:{chainId:e,address:t},query:n},a)},t.getMultisigTransactions=function(e,t,n,a){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/safes/{address}/multisig-transactions/",{path:{chainId:e,address:t},query:n},a)},t.getBalances=function(e,t,n="usd",a={}){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/safes/{address}/balances/{currency}",{path:{chainId:e,address:t,currency:n},query:a})},t.getFiatCurrencies=function(){return(0,s.getEndpoint)(o,"/v1/balances/supported-fiat-codes")},t.getOwnedSafes=function(e,t){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/owners/{address}/safes",{path:{chainId:e,address:t}})},t.getAllOwnedSafes=function(e){return(0,s.getEndpoint)(o,"/v1/owners/{address}/safes",{path:{address:e}})},t.getCollectibles=function(e,t,n={}){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/safes/{address}/collectibles",{path:{chainId:e,address:t},query:n})},t.getCollectiblesPage=function(e,t,n={},a){return(0,s.getEndpoint)(o,"/v2/chains/{chainId}/safes/{address}/collectibles",{path:{chainId:e,address:t},query:n},a)},t.getTransactionHistory=function(e,t,n={},a){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/transactions/history",{path:{chainId:e,safe_address:t},query:n},a)},t.getTransactionQueue=function(e,t,n={},a){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/transactions/queued",{path:{chainId:e,safe_address:t},query:n},a)},t.getTransactionDetails=function(e,t){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/transactions/{transactionId}",{path:{chainId:e,transactionId:t}})},t.deleteTransaction=function(e,t,n){return(0,s.deleteEndpoint)(o,"/v1/chains/{chainId}/transactions/{safeTxHash}",{path:{chainId:e,safeTxHash:t},body:{signature:n}})},t.postSafeGasEstimation=function(e,t,n){return(0,s.postEndpoint)(o,"/v2/chains/{chainId}/safes/{safe_address}/multisig-transactions/estimations",{path:{chainId:e,safe_address:t},body:n})},t.getNonces=function(e,t){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/nonces",{path:{chainId:e,safe_address:t}})},t.proposeTransaction=function(e,t,n){return(0,s.postEndpoint)(o,"/v1/chains/{chainId}/transactions/{safe_address}/propose",{path:{chainId:e,safe_address:t},body:n})},t.getConfirmationView=function(e,t,n,a,i){return(0,s.postEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/views/transaction-confirmation",{path:{chainId:e,safe_address:t},body:{data:n,to:a,value:i}})},t.getTxPreview=function(e,t,n,a,i){return(0,s.postEndpoint)(o,"/v1/chains/{chainId}/transactions/{safe_address}/preview",{path:{chainId:e,safe_address:t},body:{data:n,to:a,value:i}})},t.getChainsConfig=function(e){return(0,s.getEndpoint)(o,"/v1/chains",{query:e})},t.getChainConfig=function(e){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}",{path:{chainId:e}})},t.getSafeApps=function(e,t={}){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/safe-apps",{path:{chainId:e},query:t})},t.getMasterCopies=function(e){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/about/master-copies",{path:{chainId:e}})},t.getDecodedData=function(e,t,n){return(0,s.postEndpoint)(o,"/v1/chains/{chainId}/data-decoder",{path:{chainId:e},body:{data:t,to:n}})},t.getSafeMessages=function(e,t,n){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/messages",{path:{chainId:e,safe_address:t},query:{}},n)},t.getSafeMessage=function(e,t){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/messages/{message_hash}",{path:{chainId:e,message_hash:t}})},t.proposeSafeMessage=function(e,t,n){return(0,s.postEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/messages",{path:{chainId:e,safe_address:t},body:n})},t.confirmSafeMessage=function(e,t,n){return(0,s.postEndpoint)(o,"/v1/chains/{chainId}/messages/{message_hash}/signatures",{path:{chainId:e,message_hash:t},body:n})},t.getDelegates=function(e,t={}){return(0,s.getEndpoint)(o,"/v2/chains/{chainId}/delegates",{path:{chainId:e},query:t})},t.registerDevice=function(e){return(0,s.postEndpoint)(o,"/v1/register/notifications",{body:e})},t.unregisterSafe=function(e,t,n){return(0,s.deleteEndpoint)(o,"/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safe_address}",{path:{chainId:e,safe_address:t,uuid:n}})},t.unregisterDevice=function(e,t){return(0,s.deleteEndpoint)(o,"/v1/chains/{chainId}/notifications/devices/{uuid}",{path:{chainId:e,uuid:t}})},t.registerEmail=function(e,t,n,a){return(0,s.postEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/emails",{path:{chainId:e,safe_address:t},body:n,headers:a})},t.changeEmail=function(e,t,n,a,i){return(0,s.putEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",{path:{chainId:e,safe_address:t,signer:n},body:a,headers:i})},t.resendEmailVerificationCode=function(e,t,n){return(0,s.postEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify-resend",{path:{chainId:e,safe_address:t,signer:n},body:""})},t.verifyEmail=function(e,t,n,a){return(0,s.putEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify",{path:{chainId:e,safe_address:t,signer:n},body:a})},t.getRegisteredEmail=function(e,t,n,a){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",{path:{chainId:e,safe_address:t,signer:n},headers:a})},t.deleteRegisteredEmail=function(e,t,n,a){return(0,s.deleteEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",{path:{chainId:e,safe_address:t,signer:n},headers:a})},t.registerRecoveryModule=function(e,t,n){return(0,s.postEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/recovery",{path:{chainId:e,safe_address:t},body:n})},t.unsubscribeSingle=function(e){return(0,s.deleteEndpoint)(o,"/v1/subscriptions",{query:e})},t.unsubscribeAll=function(e){return(0,s.deleteEndpoint)(o,"/v1/subscriptions/all",{query:e})},t.getSafeOverviews=function(e,t){return(0,s.getEndpoint)(o,"/v1/safes",{query:Object.assign(Object.assign({},t),{safes:e.join(",")})})},t.getContract=function(e,t){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/contracts/{contractAddress}",{path:{chainId:e,contractAddress:t}})},t.getAuthNonce=function(){return(0,s.getEndpoint)(o,"/v1/auth/nonce",{credentials:"include"})},t.verifyAuth=function(e){return(0,s.postEndpoint)(o,"/v1/auth/verify",{body:e,credentials:"include"})},t.createAccount=function(e){return(0,s.postEndpoint)(o,"/v1/accounts",{body:e,credentials:"include"})},t.getAccount=function(e){return(0,s.getEndpoint)(o,"/v1/accounts/{address}",{path:{address:e},credentials:"include"})},t.deleteAccount=function(e){return(0,s.deleteEndpoint)(o,"/v1/accounts/{address}",{path:{address:e},credentials:"include"})},t.getAccountDataTypes=function(){return(0,s.getEndpoint)(o,"/v1/accounts/data-types")},t.getAccountDataSettings=function(e){return(0,s.getEndpoint)(o,"/v1/accounts/{address}/data-settings",{path:{address:e},credentials:"include"})},t.putAccountDataSettings=function(e,t){return(0,s.putEndpoint)(o,"/v1/accounts/{address}/data-settings",{path:{address:e},body:t,credentials:"include"})},t.getIndexingStatus=function(e){return(0,s.getEndpoint)(o,"/v1/chains/{chainId}/about/indexing",{path:{chainId:e}})}},41621:function(e,t){var n,a,i;Object.defineProperty(t,"__esModule",{value:!0}),t.FEATURES=t.GAS_PRICE_TYPE=t.RPC_AUTHENTICATION=void 0,(n=t.RPC_AUTHENTICATION||(t.RPC_AUTHENTICATION={})).API_KEY_PATH="API_KEY_PATH",n.NO_AUTHENTICATION="NO_AUTHENTICATION",n.UNKNOWN="UNKNOWN",(a=t.GAS_PRICE_TYPE||(t.GAS_PRICE_TYPE={})).ORACLE="ORACLE",a.FIXED="FIXED",a.FIXED_1559="FIXED1559",a.UNKNOWN="UNKNOWN",(i=t.FEATURES||(t.FEATURES={})).ERC721="ERC721",i.SAFE_APPS="SAFE_APPS",i.CONTRACT_INTERACTION="CONTRACT_INTERACTION",i.DOMAIN_LOOKUP="DOMAIN_LOOKUP",i.SPENDING_LIMIT="SPENDING_LIMIT",i.EIP1559="EIP1559",i.SAFE_TX_GAS_OPTIONAL="SAFE_TX_GAS_OPTIONAL",i.TX_SIMULATION="TX_SIMULATION",i.EIP1271="EIP1271"},94969:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.TokenType=void 0,(n=t.TokenType||(t.TokenType={})).ERC20="ERC20",n.ERC721="ERC721",n.NATIVE_TOKEN="NATIVE_TOKEN"},83015:function(e,t){var n,a;Object.defineProperty(t,"__esModule",{value:!0}),t.NativeStakingStatus=t.ConfirmationViewTypes=void 0,(n=t.ConfirmationViewTypes||(t.ConfirmationViewTypes={})).GENERIC="GENERIC",n.COW_SWAP_ORDER="COW_SWAP_ORDER",n.COW_SWAP_TWAP_ORDER="COW_SWAP_TWAP_ORDER",n.KILN_NATIVE_STAKING_DEPOSIT="KILN_NATIVE_STAKING_DEPOSIT",n.KILN_NATIVE_STAKING_VALIDATORS_EXIT="KILN_NATIVE_STAKING_VALIDATORS_EXIT",n.KILN_NATIVE_STAKING_WITHDRAW="KILN_NATIVE_STAKING_WITHDRAW",(a=t.NativeStakingStatus||(t.NativeStakingStatus={})).NOT_STAKED="NOT_STAKED",a.ACTIVATING="ACTIVATING",a.DEPOSIT_IN_PROGRESS="DEPOSIT_IN_PROGRESS",a.ACTIVE="ACTIVE",a.EXIT_REQUESTED="EXIT_REQUESTED",a.EXITING="EXITING",a.EXITED="EXITED",a.SLASHED="SLASHED"},5012:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},71091:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.DeviceType=void 0,(n=t.DeviceType||(t.DeviceType={})).ANDROID="ANDROID",n.IOS="IOS",n.WEB="WEB"},81570:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},55517:function(e,t){var n,a;Object.defineProperty(t,"__esModule",{value:!0}),t.SafeAppSocialPlatforms=t.SafeAppFeatures=t.SafeAppAccessPolicyTypes=void 0,(n=t.SafeAppAccessPolicyTypes||(t.SafeAppAccessPolicyTypes={})).NoRestrictions="NO_RESTRICTIONS",n.DomainAllowlist="DOMAIN_ALLOWLIST",(t.SafeAppFeatures||(t.SafeAppFeatures={})).BATCHED_TRANSACTIONS="BATCHED_TRANSACTIONS",(a=t.SafeAppSocialPlatforms||(t.SafeAppSocialPlatforms={})).TWITTER="TWITTER",a.GITHUB="GITHUB",a.DISCORD="DISCORD"},39468:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.ImplementationVersionState=void 0,(n=t.ImplementationVersionState||(t.ImplementationVersionState={})).UP_TO_DATE="UP_TO_DATE",n.OUTDATED="OUTDATED",n.UNKNOWN="UNKNOWN"},99005:function(e,t){var n,a;Object.defineProperty(t,"__esModule",{value:!0}),t.SafeMessageStatus=t.SafeMessageListItemType=void 0,(n=t.SafeMessageListItemType||(t.SafeMessageListItemType={})).DATE_LABEL="DATE_LABEL",n.MESSAGE="MESSAGE",(a=t.SafeMessageStatus||(t.SafeMessageStatus={})).NEEDS_CONFIRMATION="NEEDS_CONFIRMATION",a.CONFIRMED="CONFIRMED"},41471:function(e,t){var n,a,i,s,r,o,c,d,u,E,f,T;Object.defineProperty(t,"__esModule",{value:!0}),t.LabelValue=t.StartTimeValue=t.DurationType=t.DetailedExecutionInfoType=t.TransactionListItemType=t.ConflictType=t.TransactionInfoType=t.SettingsInfoType=t.TransactionTokenType=t.TransferDirection=t.TransactionStatus=t.Operation=void 0,(n=t.Operation||(t.Operation={}))[n.CALL=0]="CALL",n[n.DELEGATE=1]="DELEGATE",(a=t.TransactionStatus||(t.TransactionStatus={})).AWAITING_CONFIRMATIONS="AWAITING_CONFIRMATIONS",a.AWAITING_EXECUTION="AWAITING_EXECUTION",a.CANCELLED="CANCELLED",a.FAILED="FAILED",a.SUCCESS="SUCCESS",(i=t.TransferDirection||(t.TransferDirection={})).INCOMING="INCOMING",i.OUTGOING="OUTGOING",i.UNKNOWN="UNKNOWN",(s=t.TransactionTokenType||(t.TransactionTokenType={})).ERC20="ERC20",s.ERC721="ERC721",s.NATIVE_COIN="NATIVE_COIN",(r=t.SettingsInfoType||(t.SettingsInfoType={})).SET_FALLBACK_HANDLER="SET_FALLBACK_HANDLER",r.ADD_OWNER="ADD_OWNER",r.REMOVE_OWNER="REMOVE_OWNER",r.SWAP_OWNER="SWAP_OWNER",r.CHANGE_THRESHOLD="CHANGE_THRESHOLD",r.CHANGE_IMPLEMENTATION="CHANGE_IMPLEMENTATION",r.ENABLE_MODULE="ENABLE_MODULE",r.DISABLE_MODULE="DISABLE_MODULE",r.SET_GUARD="SET_GUARD",r.DELETE_GUARD="DELETE_GUARD",(o=t.TransactionInfoType||(t.TransactionInfoType={})).TRANSFER="Transfer",o.SETTINGS_CHANGE="SettingsChange",o.CUSTOM="Custom",o.CREATION="Creation",o.SWAP_ORDER="SwapOrder",o.TWAP_ORDER="TwapOrder",o.SWAP_TRANSFER="SwapTransfer",o.NATIVE_STAKING_DEPOSIT="NativeStakingDeposit",o.NATIVE_STAKING_VALIDATORS_EXIT="NativeStakingValidatorsExit",o.NATIVE_STAKING_WITHDRAW="NativeStakingWithdraw",(c=t.ConflictType||(t.ConflictType={})).NONE="None",c.HAS_NEXT="HasNext",c.END="End",(d=t.TransactionListItemType||(t.TransactionListItemType={})).TRANSACTION="TRANSACTION",d.LABEL="LABEL",d.CONFLICT_HEADER="CONFLICT_HEADER",d.DATE_LABEL="DATE_LABEL",(u=t.DetailedExecutionInfoType||(t.DetailedExecutionInfoType={})).MULTISIG="MULTISIG",u.MODULE="MODULE",(E=t.DurationType||(t.DurationType={})).AUTO="AUTO",E.LIMIT_DURATION="LIMIT_DURATION",(f=t.StartTimeValue||(t.StartTimeValue={})).AT_MINING_TIME="AT_MINING_TIME",f.AT_EPOCH="AT_EPOCH",(T=t.LabelValue||(t.LabelValue={})).Queued="Queued",T.Next="Next"},93340:function(e,t){var n=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))(function(i,s){function r(e){try{c(a.next(e))}catch(e){s(e)}}function o(e){try{c(a.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(r,o)}c((a=a.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.getData=t.fetchData=t.stringifyQuery=t.insertParams=void 0;let a=e=>"object"==typeof e&&null!==e&&"code"in e&&"message"in e;function i(e){return n(this,void 0,void 0,function*(){let t;try{t=yield e.json()}catch(e){t={}}if(!e.ok)throw Error(a(t)?`CGW error - ${t.code}: ${t.message}`:`CGW error - status ${e.statusText}`);return t})}t.insertParams=function(e,t){return t?Object.keys(t).reduce((e,n)=>{var a;return a=String(t[n]),e.replace(RegExp(`\\{${n}\\}`,"g"),a)},e):e},t.stringifyQuery=function(e){if(!e)return"";let t=new URLSearchParams;Object.keys(e).forEach(n=>{null!=e[n]&&t.append(n,String(e[n]))});let n=t.toString();return n?`?${n}`:""},t.fetchData=function(e,t,a,s,r){return n(this,void 0,void 0,function*(){let n={method:null!=t?t:"POST",headers:Object.assign({"Content-Type":"application/json"},s)};return r&&(n.credentials=r),null!=a&&(n.body="string"==typeof a?a:JSON.stringify(a)),i((yield fetch(e,n)))})},t.getData=function(e,t,a){return n(this,void 0,void 0,function*(){let n={method:"GET"};return t&&(n.headers=Object.assign(Object.assign({},t),{"Content-Type":"application/json"})),a&&(n.credentials=a),i((yield fetch(e,n)))})}}}]);