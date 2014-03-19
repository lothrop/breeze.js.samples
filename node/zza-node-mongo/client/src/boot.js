/**
 *  Use aysnc script loader, configure the application module (for AngularJS)
 *  and initialize the application ( which configures routing )
 *
 *  @author Thomas Burleson
 */

(function( head ) {
    "use strict";

    head.js(

          { jquery       : "../vendor/jquery/jquery.min.js"                   }
        , { angular      : "../vendor/angular/angular.js"                     }
        , { ngRoute      : "../vendor/angular-route/angular-route.js"         }
        , { ngSanitize   : "../vendor/angular-sanitize/angular-sanitize.js"   }
        , { uibootstrap  : "../vendor/angular-bootstrap/ui-bootstrap-tpls.js" }

        , { toastr       : "../vendor/toastr/toastr.js"                       }

//        , { breeze_ng    : "./src/breeze/breeze.angular.js"                   }
//        , { breeze_debug : "./src/breeze/breeze.debug.js"                     }
//        , { breeze_mongo : "./src/breeze/breeze.dataservice.mongo.js"         }

    )
    .ready("ALL", function() {

        var app = angular.module( "app", [ ] );

        head.js(

              "./src/app/controllers/appController.js"

            ,  "./src/app/config/environment.js"
            , "./src/app/config/configuration.js"
//            , "./src/app/controllers/appController.js"
//            , "./src/app/controllers/cartController.js"
//            , "./src/app/controllers/dashboardController.js"
//            , "./src/app/controllers/orderItemController.js"
//            , "./src/app/controllers/orderProductController.js"
//            , "./src/app/directives/appVersion.js"
//            , "./src/app/directives/productSrc.js"
//            , "./src/app/filters/filters.js"
//            , "./src/app/services/databaseReset.js"
//            , "./src/app/services/dataservice.js"
//            , "./src/app/services/entityManagerFactory.js"
            , "./src/app/services/logger.js"
//            , "./src/app/services/metadata.js"
//            , "./src/app/services/model.js"
//            , "./src/app/services/pricing.js"
//            , "./src/app/services/routes.js"
            , "./src/app/services/util.js"
//            , "./src/app/routes/routeMap.js"
//            , "./src/app/routes/routeManager.js"
//            , "./src/app/routes/routeController.js"

        ).ready('ALL', function(){

            angular.module( "app" )
                   .run( configureToastr );

            // **************************************
            // Private construction function
            // **************************************

            function configureToastr( util )
            {
                // configure toastr for this app
                toastr.options.timeOut = 2000; // 2 second toast timeout
                toastr.options.positionClass = 'toast-bottom-right';

                util.logger.log("app module is loaded and running on " + util.config.server);

            };

        });

    });


}( window.head ));
