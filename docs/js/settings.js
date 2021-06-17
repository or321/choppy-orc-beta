_settings = function () {
	var state = {
        isMusicActive: true,
        updateFpsEverySecond: true,
        isCustomFps: false,
        customFps: null,
	};

	$music_active_flag = $("#music_active_flag");
	$fps_update_rate_flag = $("input[name=fps_update_rate]");

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
			state.isMusicActive = !state.isMusicActive;
			$music_active_flag.prop("checked", state.isMusicActive).blur();

			_volumeHandler.toggleMusic();
		}
	});

	$music_active_flag.on("change", function(){
		state.isMusicActive = $(this).prop("checked");
		_volumeHandler.toggleMusic();
	});

	$fps_update_rate_flag.on("change", function(){
		state.updateFpsEverySecond = $(this).val() === "second";
	});

	return {
		getState: function () {
			return state;
		}
	};
}();