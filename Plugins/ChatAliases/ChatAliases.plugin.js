//META{"name":"ChatAliases"}*//

class ChatAliases {
	constructor () {
		this.configs = ["case","exact","file"];
	}

	getName () {return "ChatAliases";}

	getDescription () {return "Allows the user to configure their own chat-aliases which will automatically be replaced before the message is being sent.";}

	getVersion () {return "1.7.0";}

	getAuthor () {return "DevilBro";}
	
	getSettingsPanel () {
		if (!this.started || typeof BDfunctionsDevilBro !== "object") return;
		var words = BDfunctionsDevilBro.loadAllData(this, "words");
		var settingshtml = `<div class="${this.getName()}-settings DevilBro-settings"><div class="titleDefault-1CWM9y title-3i-5G_ size18-ZM4Qv- height24-2pMcnc weightNormal-3gw0Lm marginBottom8-1mABJ4">${this.getName()}</div><div class="DevilBro-settings-inner">`;
		settingshtml += `<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginBottom8-1mABJ4" style="flex: 0 0 auto;"><h3 class="titleDefault-1CWM9y title-3i-5G_ marginReset-3hwONl weightMedium-13x9Y8 size16-3IvaX_ height24-2pMcnc flexChild-1KGW5q" style="flex: 0 0 auto;">Replace:</h3><input action="add" type="text" placeholder="Wordvalue" class="inputDefault-Y_U37D input-2YozMi size16-3IvaX_ wordInputs" id="input-wordvalue" style="flex: 1 1 auto;"><button action="add" type="button" class="flexChild-1KGW5q button-2t3of8 lookFilled-luDKDo colorBrand-3PmwCE sizeMedium-2VGNaF grow-25YQ8u btn-add btn-addword" style="flex: 0 0 auto;"><div class="contents-4L4hQM"></div></button></div><div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginBottom8-1mABJ4" style="flex: 0 0 auto;"><h3 class="titleDefault-1CWM9y title-3i-5G_ marginReset-3hwONl weightMedium-13x9Y8 size16-3IvaX_ height24-2pMcnc flexChild-1KGW5q" style="flex: 0 0 auto;">With:</h3><input action="add" type="text" placeholder="Replacevalue" class="inputDefault-Y_U37D input-2YozMi size16-3IvaX_ wordInputs" id="input-replacevalue" style="flex: 1 1 auto;"><button type="button" class="flexChild-1KGW5q button-2t3of8 lookFilled-luDKDo colorBrand-3PmwCE sizeMedium-2VGNaF grow-25YQ8u file-navigator" style="flex: 0 0 auto;"><div class="contents-4L4hQM"></div><input id="input-file" type="file" style="display:none!important;"></button></div>`; 
		settingshtml += `<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginBottom8-1mABJ4" style="flex: 0 0 auto;"><h3 class="titleDefault-1CWM9y title-3i-5G_ marginReset-3hwONl weightMedium-13x9Y8 size16-3IvaX_ height24-2pMcnc flexChild-1KGW5q" style="flex: 1 1 auto; max-width: ${558 - (this.configs.length * 33)}px;">List of Chataliases:</h3><div class="flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyCenter-29N31w alignCenter-3VxkQP noWrap-v6g9vO" style="flex: 1 1 auto; max-width: ${this.configs.length * 33}px;">`;
		for (let config of this.configs) {
			settingshtml += `<div class="marginTop8-2gOa2N headerSize-22dv1R size10-1ZEdeK primary-2giqSn weightBold-2qbcng" style="flex: 1 1 auto; width: 33px; text-align: center;">${config.toUpperCase()}</div>`;
		}
		settingshtml += `</div></div><div class="DevilBro-settings-inner-list alias-list marginBottom8-1mABJ4">`;
		for (let word in words) {
			settingshtml += `<div class="flex-lFgbSz flex-3B1Tl4 vertical-3X17r5 flex-3B1Tl4 directionColumn-2h-LPR justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginTop4-2rEBfJ marginBottom4-_yArcI ui-hover-card card-11ynQk"><div class="card-11ynQk-inner"><div class="description-3MVziF formText-1L-zZB note-UEZmbY modeDefault-389VjU primary-2giqSn ellipsis-CYOqEr" style="flex: 1 1 auto;">${BDfunctionsDevilBro.encodeToHTML(word)} (${BDfunctionsDevilBro.encodeToHTML(words[word].replace)})</div>`;
			for (let config of this.configs) {
				settingshtml += `<div class="checkboxContainer-1sZ9eo marginReset-2tTc4H" style="flex: 0 0 auto;"><label class="checkboxWrapper-2Yvr_Y"><input word="${word}" config="${config}" type="checkbox" class="inputDefault-2tiBIA input-oWyROL"${words[word][config] ? " checked" : ""}><div class="checkbox-1QwaS4 center-1MLNrE flex-3B1Tl4 justifyStart-2yIZo0 alignCenter-3VxkQP round-30vw42"><svg name="Checkmark" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><polyline stroke="transparent" stroke-width="2" points="3.5 9.5 7 13 15 5"></polyline></g></svg></div></label></div>`;
			}
			settingshtml += `</div><div word="${word}" action="remove" class="round-remove-button button-1qrA-N remove-word"></div></div>`;
		}
		settingshtml += `</div>`;
		settingshtml += `<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginBottom20-2Ifj-2" style="flex: 0 0 auto;"><h3 class="titleDefault-1CWM9y title-3i-5G_ marginReset-3hwONl weightMedium-13x9Y8 size16-3IvaX_ height24-2pMcnc flexChild-1KGW5q" style="flex: 1 1 auto;">Remove all added words.</h3><button action="removeall" type="button" class="flexChild-1KGW5q button-2t3of8 lookFilled-luDKDo colorRed-3HTNPV sizeMedium-2VGNaF grow-25YQ8u remove-all" style="flex: 0 0 auto;"><div class="contents-4L4hQM">Reset</div></button></div>`;
		var infoHidden = BDfunctionsDevilBro.loadData("hideInfo", this, "hideInfo");
		settingshtml += `<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO cursorPointer-3oKATS ${infoHidden ? "wrapperCollapsed-18mf-c" : "wrapperDefault-1Dl4SS"} toggle-info" style="flex: 1 1 auto;"><svg class="iconTransition-VhWJ85 ${infoHidden ? "closed-2Hef-I iconCollapsed-1INdMX" : "iconDefault-xzclSQ"}" width="12" height="12" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M7 10L12 15 17 10"></path></svg><div class="colorTransition-2iZaYd overflowEllipsis-2ynGQq nameCollapsed-3_ChMu" style="flex: 1 1 auto;">Information</div></div>`;
		settingshtml += `<div class="DevilBro-settings-inner-list info-container" ${infoHidden ? "style='display:none;'" : ""}><div class="description-3MVziF formText-1L-zZB note-UEZmbY modeDefault-389VjU primary-2giqSn">Case: Will replace words while comparing lowercase/uppercase. apple => apple, not APPLE or AppLe</div><div class="description-3MVziF formText-1L-zZB note-UEZmbY modeDefault-389VjU primary-2giqSn">Not Case: Will replace words while ignoring lowercase/uppercase. apple => apple, APPLE and AppLe</div><div class="description-3MVziF formText-1L-zZB note-UEZmbY modeDefault-389VjU primary-2giqSn">Exact: Will replace words that are exactly the replaceword. apple to pear => applepie stays applepie</div><div class="description-3MVziF formText-1L-zZB note-UEZmbY modeDefault-389VjU primary-2giqSn">Not Exact: Will replace words anywhere they appear. apple to pear => applepieapple to pearpiepear</div><div class="description-3MVziF formText-1L-zZB note-UEZmbY modeDefault-389VjU primary-2giqSn">File: If the replacevalue is a filepath it will try to upload the file located at the filepath.</div></div>`;
		settingshtml += `</div>`;
		
		var settingspanel = $(settingshtml)[0];

		BDfunctionsDevilBro.initElements(settingspanel);

		$(settingspanel)
			.on("keypress", ".wordInputs", (e) => {if (e.which == 13) this.updateContainer(settingspanel, e.currentTarget);})
			.on("click", ".btn-addword, .remove-word, .remove-all", (e) => {this.updateContainer(settingspanel, e.currentTarget);})
			.on("click", ".input-oWyROL", (e) => {this.updateConfig(e.currentTarget);})
			.on("click", ".toggle-info", (e) => {this.toggleInfo(settingspanel, e.currentTarget);});
		return settingspanel;
	}

	//legacy
	load () {}

	start () {
		var libraryScript = null;
		if (typeof BDfunctionsDevilBro !== "object" || BDfunctionsDevilBro.isLibraryOutdated()) {
			if (typeof BDfunctionsDevilBro === "object") BDfunctionsDevilBro = "";
			libraryScript = document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDfunctionsDevilBro.js"]');
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDfunctionsDevilBro.js");
			document.head.appendChild(libraryScript);
		}
		if (typeof BDfunctionsDevilBro === "object") this.initialize();
		else libraryScript.addEventListener("load", () => {this.initialize();});
	}

	initialize () {
		if (typeof BDfunctionsDevilBro === "object") {
			BDfunctionsDevilBro.loadMessage(this);
			
			this.uploadModule = BDfunctionsDevilBro.WebModules.findByProperties(["promptToUpload"]);
			
			var observer = null;

			observer = new MutationObserver((changes, _) => {
				changes.forEach(
					(change, i) => {
						if (change.removedNodes) {
							change.removedNodes.forEach((node) => {
								if (node && node.tagName && node.getAttribute("layer-id") == "user-settings") {
									document.querySelectorAll("textarea").forEach(textarea => {this.bindEventToTextArea(textarea);});
								}
							});
						}
					}
				);
			});
			BDfunctionsDevilBro.addObserver(this, ".layers-20RVFW", {name:"settingsWindowObserver",instance:observer}, {childList:true});
			
			observer = new MutationObserver((changes, _) => {
				changes.forEach(
					(change, i) => {
						if (change.addedNodes) {
							change.addedNodes.forEach((node) => {
								if (node && node.tagName && node.querySelector(".innerEnabled-gLHeOL, .innerEnabledNoAttach-36PpAk")) {
									this.bindEventToTextArea(node.querySelector("textarea"));
								}
							});
						}
					}
				);
			});
			BDfunctionsDevilBro.addObserver(this, "#app-mount", {name:"textareaObserver",instance:observer}, {childList: true, subtree:true});
			
			document.querySelectorAll("textarea").forEach(textarea => {this.bindEventToTextArea(textarea);});
		}
		else {
			console.error(this.getName() + ": Fatal Error: Could not load BD functions!");
		}
	}

	stop () {
		if (typeof BDfunctionsDevilBro === "object") {
			$("textarea").off("keydown." + this.getName()).off("input." + this.getName());
			
			BDfunctionsDevilBro.unloadMessage(this);
		}
	}
	
	
	// begin of own functions
	
	updateContainer (settingspanel, ele) {
		var update = false, wordvalue = null, replacevalue = null;
		var action = ele.getAttribute("action");
		var words = BDfunctionsDevilBro.loadAllData(this, "words");
		
		if (action == "add") {
			var wordinput = settingspanel.querySelector("#input-wordvalue");
			var replaceinput = settingspanel.querySelector("#input-replacevalue");
			var fileselection = settingspanel.querySelector("#input-file");
			wordvalue = wordinput.value;
			replacevalue = replaceinput.value;
			if (wordvalue && wordvalue.trim().length > 0 && replacevalue && replacevalue.trim().length > 0) {
				wordvalue = wordvalue.trim();
				replacevalue = replacevalue.trim();
				var filedata = null;
				var fs = require("fs");
				if (fileselection.files && fileselection.files[0] && fs.existsSync(replacevalue)) {
					filedata = JSON.stringify({data:`data:image/png;base64,${fs.readFileSync(replacevalue).toString("base64")}`,name:fileselection.files[0].name,type:fileselection.files[0].type});
				}
				words[wordvalue] = {
					replace: replacevalue,
					filedata: filedata,
					case: false,
					exact: true,
					file: filedata != null
				};
				wordinput.value = null;
				replaceinput.value = null;
				update = true;
			}
		}
		else if (action == "remove") {
			wordvalue = ele.getAttribute("word");
			if (wordvalue) {
				delete words[wordvalue];
				update = true;
			}
		}
		else if (action == "removeall") {
			if (confirm("Are you sure you want to remove all added Words from your list?")) {
				words = {};
				update = true;
			}
		}
		if (update) {
			BDfunctionsDevilBro.saveAllData(words, this, "words");
			words = BDfunctionsDevilBro.loadAllData(this, "words");
			
			var containerhtml = ``;
			for (let word in words) {
				containerhtml += `<div class="flex-lFgbSz flex-3B1Tl4 vertical-3X17r5 flex-3B1Tl4 directionColumn-2h-LPR justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginTop4-2rEBfJ marginBottom4-_yArcI ui-hover-card card-11ynQk"><div class="card-11ynQk-inner"><div class="description-3MVziF formText-1L-zZB note-UEZmbY  modeDefault-389VjU primary-2giqSn ellipsis-CYOqEr" style="flex: 1 1 auto;">${BDfunctionsDevilBro.encodeToHTML(word)} (${BDfunctionsDevilBro.encodeToHTML(words[word].replace)})</div>`
				for (let config of this.configs) {
					containerhtml += `<div class="checkboxContainer-1sZ9eo marginReset-2tTc4H" style="flex: 0 0 auto;"><label class="checkboxWrapper-2Yvr_Y"><input word="${word}" config="${config}" type="checkbox" class="inputDefault-2tiBIA input-oWyROL"${words[word][config] ? " checked" : ""}><div class="checkbox-1QwaS4 center-1MLNrE flex-3B1Tl4 justifyStart-2yIZo0 alignCenter-3VxkQP round-30vw42"><svg name="Checkmark" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><polyline stroke="transparent" stroke-width="2" points="3.5 9.5 7 13 15 5"></polyline></g></svg></div></label></div>`;
				}
				containerhtml += `</div><div word="${word}" action="remove" class="round-remove-button button-1qrA-N remove-word"></div></div>`;
			}
			$(settingspanel).find(".alias-list").html(containerhtml);
			BDfunctionsDevilBro.initElements(settingspanel);
		}
	}
	
	updateConfig (ele) {
		var words = BDfunctionsDevilBro.loadAllData(this, "words");
		var wordvalue = ele.getAttribute("word");
		var config = ele.getAttribute("config");
		if (wordvalue && words[wordvalue] && config) {
			words[wordvalue][config] = ele.checked;
			BDfunctionsDevilBro.saveAllData(words, this, "words");
		}
	}
	
	toggleInfo (settingspanel, ele) {
		ele.classList.toggle("wrapperCollapsed-18mf-c");
		ele.classList.toggle("wrapperDefault-1Dl4SS");
		var svg = ele.querySelector(".iconTransition-VhWJ85");
		svg.classList.toggle("closed-2Hef-I");
		svg.classList.toggle("iconCollapsed-1INdMX");
		svg.classList.toggle("iconDefault-xzclSQ");
		
		var visible = $(settingspanel).find(".info-container").is(":visible");
		$(settingspanel).find(".info-container").toggle(!visible);
		BDfunctionsDevilBro.saveData("hideInfo", visible, this, "hideInfo");
	}
	
	bindEventToTextArea (textarea) {
		if (!textarea) return;
		$(textarea)
			.off("input." + this.getName())
			.on("input." + this.getName(), () => {
				if (this.format) {
					this.format = false;
					textarea.focus();
					textarea.selectionStart = 0;
					textarea.selectionEnd = textarea.value.length;
					if (document.activeElement == textarea) {
						var messageInput = this.formatText(textarea.value);
						if (messageInput.text) document.execCommand("insertText", false, messageInput.text + " ");
						if (messageInput.files.length > 0) this.uploadModule.promptToUpload(messageInput.files, "416305528415715329");
					}
				}
			})
			.off("keydown." + this.getName())
			.on("keydown." + this.getName(), e => {
				if (textarea.value && !e.shiftKey && e.which == 13 && !textarea.parentElement.querySelector(".autocomplete-1TnWNR")) {
					this.format = true;
					$(textarea).trigger("input");
				}
			});
	}
	
	formatText (text) {
		var words = text.trim().split(" ");
		var aliases = BDfunctionsDevilBro.loadAllData(this, "words");
		var newText = [], files = [];
		for (var i = 0; i < words.length; i++) {
			var word = words[i];
			var swapped = false;
			for (let alias in aliases) {
				if (!swapped) {
					let casemod = aliases[alias].case ? "" : "i";
					let exactmod = aliases[alias].exact ? "" : "g";
					let escpAlias = BDfunctionsDevilBro.regEscape(alias);
					let reg = new RegExp(aliases[alias].exact ? "^" + escpAlias + "$" : escpAlias, casemod + exactmod);
					if (reg.test(word)) {
						swapped = true;
						word = word.replace(reg, aliases[alias].file ? "" : aliases[alias].replace.replace(new RegExp(BDfunctionsDevilBro.regEscape("\\n"),"g"),"\n"));
						if (aliases[alias].file && typeof aliases[alias].filedata == "string") {
							var filedata = JSON.parse(aliases[alias].filedata);
							files.push(new File([filedata.data], filedata.name, {type:filedata.type}));
						}
					}
				}
			}
			newText.push(word);
		}
		return {text:newText.length == 1 ? newText[0] : newText.join(" "),files};
	}
}
