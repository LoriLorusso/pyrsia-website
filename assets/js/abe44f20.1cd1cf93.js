"use strict";(self.webpackChunkpyrsia_website=self.webpackChunkpyrsia_website||[]).push([[2545],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,y=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return n?o.createElement(y,i(i({ref:t},d),{},{components:n})):o.createElement(y,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8687:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return c},default:function(){return h}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/setup_on_macosx.md"},s="How to run 2 pyrsia nodes natively on 1 MacOS machine",p={unversionedId:"developer/setup_on_macosx",id:"developer/setup_on_macosx",title:"How to run 2 pyrsia nodes natively on 1 MacOS machine",description:"\u200b\u200bDownload a fresh copy of the codebase by cloning the repo or updating to the HEAD of main",source:"@site/docs/developer/setup_on_macosx.md",sourceDirName:"developer",slug:"/developer/setup_on_macosx",permalink:"/pyrsia-website/docs/developer/setup_on_macosx",editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/setup_on_macosx.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/setup_on_macosx.md"},sidebar:"tutorialSidebar",previous:{title:"Security Policy",permalink:"/pyrsia-website/docs/developer/security"},next:{title:"Things You Should Know",permalink:"/pyrsia-website/docs/developer/things-to-know"}},d={},c=[{value:"Create 2 separate nodes &#39;installations&#39;",id:"create-2-separate-nodes-installations",level:2},{value:"Start Node A",id:"start-node-a",level:3},{value:"Start Node B",id:"start-node-b",level:3},{value:"Good news",id:"good-news",level:3},{value:"Using the Pyrsia CLI",id:"using-the-pyrsia-cli",level:2},{value:"Get Node status",id:"get-node-status",level:3},{value:"List all known peers",id:"list-all-known-peers",level:3},{value:"Configure docker desktop to use node A as registry mirror",id:"configure-docker-desktop-to-use-node-a-as-registry-mirror",level:2},{value:"pull alpine",id:"pull-alpine",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-run-2-pyrsia-nodes-natively-on-1-macos-machine"},"How to run 2 pyrsia nodes natively on 1 MacOS machine"),(0,a.kt)("p",null,"\u200b\u200bDownload a fresh copy of the codebase by cloning the repo or updating to the HEAD of ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"\nLet's call this folder PYRSIA_HOME. We will refer to this name in the following steps."),(0,a.kt)("p",null,"Build binaries for pyrsia_node\n",(0,a.kt)("inlineCode",{parentName:"p"},"cargo build --workspace")),(0,a.kt)("h2",{id:"create-2-separate-nodes-installations"},"Create 2 separate nodes 'installations'"),(0,a.kt)("p",null,"This will create two copies of the same binary so that you can configure them as independent nodes."),(0,a.kt)("p",null,"Create Node A"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir nodeA\n\ncp target/debug/pyrsia_node nodeA\n")),(0,a.kt)("p",null,"Create Node B"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir nodeB\n\ncp target/debug/pyrsia_node nodeB\n")),(0,a.kt)("h3",{id:"start-node-a"},"Start Node A"),(0,a.kt)("p",null,"In a new terminal start node A, http listen on 7888 and p2p listen on 44001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cd nodeA\nDEV_MODE=on RUST_LOG="pyrsia=debug,info"  ./pyrsia_node -H 0.0.0.0 -p 7888 -L /ip4/0.0.0.0/tcp/44001\n')),(0,a.kt)("p",null,"If everything goes well, you will see a line similar to the following in the logs on the terminal(The IP address could be different than in the sample below)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# INFO  pyrsia::network::p2p > Local node is listening on "/ip4/192.168.0.110/tcp/44001/p2p/12D3KooWLKMbBzp4k1mcM2rYXs8VQgoCSNLxGUwnB1itouxYcnx3"\n')),(0,a.kt)("p",null,"If you do not find this line right away try running ",(0,a.kt)("inlineCode",{parentName:"p"},"grep 44001")),(0,a.kt)("h3",{id:"start-node-b"},"Start Node B"),(0,a.kt)("p",null,"In a new terminal start node B, http listen on 7889, p2p listen on 44002 and connect to peer node A on port 44001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cd nodeB\nDEV_MODE=on RUST_LOG="pyrsia=debug,info"  ./pyrsia_node -H 0.0.0.0 -p 7889 -L /ip4/0.0.0.0/tcp/44002 --peer /ip4/127.0.0.1/tcp/44001\n')),(0,a.kt)("p",null,"If everything goes well, you will see a line similar to the following in the logs on the terminal. (The IP address could be different than in the sample below)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# DEBUG libp2p_swarm          > Connection established: PeerId("12D3KooWKzta9MMwnhA87ZKRy9PhN44X8N7twmgRhsgx1c1ZG3ex") Dialer { address: "/ip4/127.0.0.1/tcp/44001", role_override: Dialer }; Total (peer): 1. Total non-banned (peer): 1\n# and in nodeA output something like:\n# DEBUG libp2p_swarm            > Connection established: PeerId("12D3KooWGPwQfKN3Qvt8LosFAUxEtUUPM2BLRUqQHhFefBbJRXzY") Listener { local_addr: "/ip4/127.0.0.1/tcp/44001", send_back_addr: "/ip4/127.0.0.1/tcp/62373" }; Total (peer): 1. Total non-banned (peer): 1\n')),(0,a.kt)("p",null,"Notice that node A and node B have now connected as peers and are able to communicate with each other. Verify that the PeerId you see here is the same as that for node A."),(0,a.kt)("h3",{id:"good-news"},"Good news"),(0,a.kt)("p",null,"If you saw the above lines in your logs and did not see any failure/error messages your Pyrsia node network has now been setup.\nAlso that means we did not break anything ;P."),(0,a.kt)("p",null,"You should now be able to interact with the Pyrsia node."),(0,a.kt)("h2",{id:"using-the-pyrsia-cli"},"Using the Pyrsia CLI"),(0,a.kt)("p",null,"On a fresh terminal, navigate to PYRSIA_HOME. We will now configure the pyrsia_cli to connect with Node B."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd target/debug\n./pyrsia config --add\nEnter host:\nlocalhost\nEnter port:\n7889\nEnter disk space to be allocated to pyrsia(Please enter with units ex: 10 GB):\n")),(0,a.kt)("p",null,"If everything worked well, you will see the following success message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Node configuration Saved !!\n")),(0,a.kt)("p",null,"Now you are ready to use the Pyrsia CLI."),(0,a.kt)("p",null,"Let us run through a few examples of how you can use the Pyrsia CLI"),(0,a.kt)("h3",{id:"get-node-status"},"Get Node status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./pyrsia node -s\nConnected Peers Count:       1\nArtifacts Count:             0\nTotal Disk Space Allocated:  10.84 GB\nDisk Space Used:             0.0000%\n")),(0,a.kt)("h3",{id:"list-all-known-peers"},"List all known peers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'./pyrsia node -l\nConnected Peers:\n["12D3KooWH1tJB9NMuzHcEd6TU9yG4mv2Lo4J2gaXaBLpyNCrqRR9"]\n')),(0,a.kt)("p",null,"Now that you have setup both the Pyrsia Node and Pyrsia CLI you are ready to start using Pyrsia."),(0,a.kt)("h1",{id:"using-pyrsia-with-docker"},"Using Pyrsia with Docker"),(0,a.kt)("p",null,"Once you have setup the pyrsia nodes and the CLI you are ready to start using Pyrsia with docker."),(0,a.kt)("h2",{id:"configure-docker-desktop-to-use-node-a-as-registry-mirror"},"Configure docker desktop to use node A as registry mirror"),(0,a.kt)("p",null,"In your Docker desktop installation -> Settings -> Docker Engine where docker allows you to set registry-mirrors.\nSetup node A as a registry mirror by adding/editing the following in the configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' "registry-mirrors": [\n   "http://192.168.0.110:7888" (IP address of host machine: port number for node A)\n ]\n')),(0,a.kt)("p",null,"On MacOSX using localhost does not work(because the request is made from the Docker Desktop VM), so you will need to specify the IP address of host machine"),(0,a.kt)("p",null,"You will need to restart Docker Desktop.\nOnce restarted you should be able to pull docker images through Pyrsia"),(0,a.kt)("h2",{id:"pull-alpine"},"pull alpine"),(0,a.kt)("p",null,"first make sure alpine is not in local docker cache, then pull alpine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker rmi alpine # remove alpine from local docker cache\ndocker pull alpine\n")),(0,a.kt)("p",null,"When you pull an image of alpine from dockerhub Pyrsia node A should act as a pull-through cache and show a line similar to the following in its log"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# DEBUG pyrsia::docker::v2::handlers::blobs> Step 3: "sha256:3d243047344378e9b7136d552d48feb7ea8b6fe14ce0990e0cc011d5e369626a" successfully stored locally from docker.io\n')),(0,a.kt)("p",null,"You can try the same with node B acting as the registry mirror."),(0,a.kt)("p",null,"Change the docker registry mirror to node B"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' "registry-mirrors": [\n   "http://192.168.0.110:7889" (IP address of host machine: port number of node B)\n ]\n')),(0,a.kt)("p",null,"Remove alpine and perform a docker pull again"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker rmi alpine # remove alpine from local docker cache\ndocker pull alpine\n")),(0,a.kt)("p",null,"Now node B is acting as the pull-through cache and should show a line similar to the following in its log, indicating ",(0,a.kt)("inlineCode",{parentName:"p"},"alpine")," was retrieved from the Pyrsia network (in this case node A)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# DEBUG pyrsia::docker::v2::handlers::blobs> Step 2: "sha256:3d243047344378e9b7136d552d48feb7ea8b6fe14ce0990e0cc011d5e369626a" successfully stored locally from Pyrsia network.\n')))}h.isMDXComponent=!0}}]);