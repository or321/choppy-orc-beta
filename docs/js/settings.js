_settings = function () {
	var state = {
        isMusicActive: true,
        updateFpsEverySecond: true,
        isCustomFps: false,
        customFps: null,
	};

	$(document).keypress(function (e) {
		// Detect press on "O" - toggle the settings modal
		if (e.which == 79 || e.which == 111) {
            $("#settings_modal").toggle();
		}

		/*
		Set 'N' as a hotkey to mute/unmute only the background music file, while keeping the sound effects active.
		"state.musicSilent" is used in the game code to decide if to play the music file or not.
		*/
		if (e.which == 78 || e.which == 110) {
			_volumeHandler.toggleMusic();
		}
	});

	return {
		state: function () {
			return state;
		}
	};
}();