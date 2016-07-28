/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
      // days navigation

      $(document).on('click', '.js_day-nav', function(){
        $(this).addClass('active').siblings().removeClass('active');
        return false;
      });

      // custom scrollbar init
      $('.js_customscroll').mCustomScrollbar({
        axis: "x",
        theme: "dark",
        scrollInertia: 300
      });

      // calculate programm block width according to it's duration
      calcProgrammWidth();

      function calcProgrammWidth(){
        $('.js_programm-width').each( function(){
          var el = $(this);
          var duration = el.data('duration');
          var elWidth = duration / 30 * 150;
          var elTitleWidth = elWidth - 20;

          el.css({'min-width': elWidth, 'width': elWidth});
          el.find('.listings-programm__title').css({'width': elTitleWidth});

          if(elWidth < 100){
            el.find('.listings-programm__title').css({'font-size': 9});
          }
        });
      }

      // tooltip

      toggleTooltip();

      function toggleTooltip(){
        $('.js_programm-tooltip').each( function(){

          var el = $(this);

          $(el).on('mouseenter', function(e){
            $('.listings__wrapper .listings-programm__tooltip').remove();
            var title = el.find('.listings-programm__title').text();
            var time = el.find('.listings-programm__time').text();

            $('.listings__wrapper').append('<div class="listings-programm__tooltip">' +
            '<div class="listings-programm__tooltip-title">'+title+'</div>' +
            '<div class="listings-programm__tooltip-time">'+time+'</div>'+
            '<div class="listings-programm__tooltip-info">Подробная информация о передаче</div>'+
            '</div>');


            var leftPos = e.clientX + 10;
            var topPos = e.clientY + 10;
            $('.listings-programm__tooltip').css({'left': leftPos, 'top': topPos});

          });


        });

      }
      // hide tooltip when clicked outside of div and when mouse leaves programm block

      $(document).on('mouseleave', '.listings-programm__block', function(){
        $('.listings-programm__tooltip').remove();
      });

      $(document).on('click', '.listings-programm__tooltip', function(e){
        e.stopPropagation();
      });

      $(document).on('click', function(){
        $('.listings-programm__tooltip').remove();
      });


      // show video iframe

      $(document).on('click', '.js_online-btn', function(){
        $('.listings-programm__online').show();
        return false;
      });

      $(document).on('click', '.js_online-close', function(){
        $('.listings-programm__online').hide();
      });

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};
