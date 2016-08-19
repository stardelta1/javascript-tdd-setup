// NotesApplication class

module.exports =
	function NotesApplication() {
		this.notesList = [];

		this.addNote = function(note) {
			this.notesList.push(note);
			return this.notesList.length;
		}
		this.get = function(note_id) {
			if (typeof(note_id) == "number") {
				if (this.notesList.length > note_id) {
					return this.notesList[note_id]['content'];
				}
				else {
					return "Invalid note id";
				}
			}else {
				return "Enter a valid number";
			}
		}
		this.delete = function(note_id) {
			if (typeof(note_id) == "number") {
				if (this.notesList.length > note_id) {
					this.notesList.pop(note_id);
					return true;
				}
			}
			else {
				return "Enter a valid number";
			}
		}
		this.search = function(search_text) {
			var found = [];
			for (var i = 0; i < this.notesList.length; i++) {
				if(this.notesList[i].content.indexOf(search_text) > -1) {
					found.push(this.notesList[i].content);
				}
			}
			if (found.length > 0) {
				return found[0];
			}
			else {
				return "word not found";
			}
		}
		this.edit = function(note_id, content) {
			if (typeof(note_id) == "number") {
				if (this.notesList.length >= note_id) {
					this.notesList[note_id].content = content;
					return this.notesList[note_id].content;
				}
			}
			else {
				return "Enter a valid number";
			}
		}
		this.notesCount = function() {
			if (this.notesList.length > 0) {
				return this.notesList.length;
			}
			return 0;
		}
		this.listNotes = function() {
			var result = "";
			if(this.notesList.length > 0) {
				for (var i = 0; i < this.notesList.length; i++) {
					result += "\nNote ID: "+ i +"\n"+this.notesList[i].content+"\nBy Author "+this.notesList[i].author+"\n";
				}
				return result;
			}
			else { 
				return "No notes was found";
			}
		}
	}