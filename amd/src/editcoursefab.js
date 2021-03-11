// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Theme Boost Campus - JS code for edit course fab
 *
 * @package    theme_hsh_boost_campus
 * @copyright  2020 Julian Wendling, Hochschule Hannover <julian.wendling@stud.hs-hannover.de>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define(['jquery'], function ($) {
    "use strict";
    function editCourseFab() {
        if (!$('.edit-course-fab').length) {
            return;
        }
        var form, action, data, $button;
        form = document.querySelector(".edit-course-fab form");
        action = form.action.value;
        data = {
            sesskey: form.sesskey.value,
            id: form.id.value,
            edit: form.edit.value
        };
        $button = $('.edit-course-fab .btn');
        if (data.edit === "on") {
            $button.html('<i class="fa fa-pencil"></i>');
        } else {
            $button.html('<i class="fa fa-pencil text-warning"></i>');
        }

        $button.click(function (event) {
            event.preventDefault();

            $.post(action, data).done(function () {
                document.location.reload();
            });
        });
    }

    return {
        init: function () {
            editCourseFab();
        }
    };
});
