{
    "actions": [
      {
        "id": "65d01ded-b656-428d-97f0-d26f97d024d9",
        "name": "Action test",
        "supported_triggers": [
          {
            "id": "post-login",
            "version": "v3"
          }
        ],
        "created_at": "2022-07-22T14:09:17.979281847Z",
        "updated_at": "2022-07-25T23:05:40.262976152Z",
        "code": "/**\n* Handler that will be called during the execution of a PostLogin flow.\n*\n* @param {Event} event - Details about the user and the context in which they are logging in.\n* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.\n*/\nexports.onExecutePostLogin = async (event, api) => {\n  if(event.client.name === \"Prueba 2\"){\n  const {IncomingWebhook} = require(\"@slack/webhook\");\n  const webhook = new IncomingWebhook(event.secrets.SLACK_WEBHOOK_URL);\n  const eventPrueba = event.client.client_id\n  console.log(eventPrueba)\n  const text = `User Login ${event.user.email}`;\n  webhook.send({text});\n  }\n};\n\n\n/**\n* Handler that will be invoked when this action is resuming after an external redirect. If your\n* onExecutePostLogin function does not perform a redirect, this function can be safely ignored.\n*\n* @param {Event} event - Details about the user and the context in which they are logging in.\n* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.\n*/\n// exports.onContinuePostLogin = async (event, api) => {\n// };\n",
        "dependencies": [
          {
            "name": "@slack/webhook",
            "version": "6.1.0"
          }
        ],
        "runtime": "node16",
        "status": "built",
        "secrets": [
          {
            "name": "SLACK_WEBHOOK_URL",
            "updated_at": "2022-07-22T14:33:11.790097462Z"
          }
        ],
        "current_version": {
          "id": "d064929e-06fd-484b-87a4-b23924f20a83",
          "code": "/**\n* Handler that will be called during the execution of a PostLogin flow.\n*\n* @param {Event} event - Details about the user and the context in which they are logging in.\n* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.\n*/\nexports.onExecutePostLogin = async (event, api) => {\n  if(event.client.name === \"Prueba 2\"){\n  const {IncomingWebhook} = require(\"@slack/webhook\");\n  const webhook = new IncomingWebhook(event.secrets.SLACK_WEBHOOK_URL);\n  const eventPrueba = event.client.client_id\n  console.log(eventPrueba)\n  const text = `User Login ${event.user.email}`;\n  webhook.send({text});\n  }\n};\n\n\n/**\n* Handler that will be invoked when this action is resuming after an external redirect. If your\n* onExecutePostLogin function does not perform a redirect, this function can be safely ignored.\n*\n* @param {Event} event - Details about the user and the context in which they are logging in.\n* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.\n*/\n// exports.onContinuePostLogin = async (event, api) => {\n// };\n",
          "runtime": "node16",
          "status": "BUILT",
          "number": 5,
          "build_time": "2022-07-25T23:05:43.147539982Z",
          "created_at": "2022-07-25T23:05:43.023074469Z",
          "updated_at": "2022-07-25T23:05:43.147865235Z"
        },
        "deployed_version": {
          "code": "/**\n* Handler that will be called during the execution of a PostLogin flow.\n*\n* @param {Event} event - Details about the user and the context in which they are logging in.\n* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.\n*/\nexports.onExecutePostLogin = async (event, api) => {\n  if(event.client.name === \"Prueba 2\"){\n  const {IncomingWebhook} = require(\"@slack/webhook\");\n  const webhook = new IncomingWebhook(event.secrets.SLACK_WEBHOOK_URL);\n  const eventPrueba = event.client.client_id\n  console.log(eventPrueba)\n  const text = `User Login ${event.user.email}`;\n  webhook.send({text});\n  }\n};\n\n\n/**\n* Handler that will be invoked when this action is resuming after an external redirect. If your\n* onExecutePostLogin function does not perform a redirect, this function can be safely ignored.\n*\n* @param {Event} event - Details about the user and the context in which they are logging in.\n* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.\n*/\n// exports.onContinuePostLogin = async (event, api) => {\n// };\n",
          "dependencies": [
            {
              "name": "@slack/webhook",
              "version": "6.1.0"
            }
          ],
          "id": "d064929e-06fd-484b-87a4-b23924f20a83",
          "deployed": true,
          "number": 5,
          "built_at": "2022-07-25T23:05:43.147539982Z",
          "secrets": [
            {
              "name": "SLACK_WEBHOOK_URL",
              "updated_at": "2022-07-22T14:33:11.790097462Z"
            }
          ],
          "status": "built",
          "created_at": "2022-07-25T23:05:43.023074469Z",
          "updated_at": "2022-07-25T23:05:43.147865235Z",
          "runtime": "node16",
          "supported_triggers": [
            {
              "id": "post-login",
              "version": "v3"
            }
          ]
        },
        "all_changes_deployed": true
      },
      {
        "id": "07674be7-2a51-4705-8cce-1429f09c1771",
        "name": "my-action",
        "supported_triggers": [
          {
            "id": "post-login",
            "version": "v2"
          }
        ],
        "created_at": "2022-07-22T21:58:48.524751084Z",
        "updated_at": "2022-07-22T21:58:48.578458032Z",
        "code": "module.exports = () => {}",
        "dependencies": [
          {
            "name": "lodash",
            "version": "1.0.0"
          }
        ],
        "runtime": "node12",
        "status": "built",
        "secrets": [
          {
            "name": "mySecret",
            "updated_at": "2022-07-22T21:58:48.578458032Z"
          }
        ],
        "current_version": {
          "id": "dee5dcd2-03de-4f3e-a2e0-b5fe7855cf0f",
          "code": "module.exports = () => {}",
          "runtime": "node12",
          "status": "BUILT",
          "number": 1,
          "build_time": "2022-07-25T13:36:23.263398822Z",
          "created_at": "2022-07-25T13:36:23.189333043Z",
          "updated_at": "2022-07-25T13:36:23.267066247Z"
        },
        "deployed_version": {
          "code": "module.exports = () => {}",
          "dependencies": [
            {
              "name": "lodash",
              "version": "1.0.0"
            }
          ],
          "id": "dee5dcd2-03de-4f3e-a2e0-b5fe7855cf0f",
          "deployed": true,
          "number": 1,
          "built_at": "2022-07-25T13:36:23.263398822Z",
          "secrets": [
            {
              "name": "mySecret",
              "updated_at": "2022-07-22T21:58:48.578458032Z"
            }
          ],
          "status": "built",
          "created_at": "2022-07-25T13:36:23.189333043Z",
          "updated_at": "2022-07-25T13:36:23.267066247Z",
          "runtime": "node12",
          "supported_triggers": [
            {
              "id": "post-login",
              "version": "v2"
            }
          ]
        },
        "all_changes_deployed": true
      },
      {
        "id": "ec13dd55-2068-4e14-9e89-e851342d43bc",
        "name": "my-action2",
        "supported_triggers": [
          {
            "id": "send-phone-message",
            "version": "v2"
          }
        ],
        "created_at": "2022-07-22T22:20:57.891766102Z",
        "updated_at": "2022-07-22T22:20:57.904768797Z",
        "code": "module.exports = () => {}",
        "dependencies": [
          {
            "name": "lodash",
            "version": "1.0.0"
          }
        ],
        "runtime": "node12",
        "status": "built",
        "secrets": [
          {
            "name": "mySecret",
            "updated_at": "2022-07-22T22:20:57.904768797Z"
          }
        ],
        "current_version": {
          "id": "5fa9f95d-f1fd-4ed3-a0c2-5795dc5ebcdf",
          "code": "module.exports = () => {}",
          "runtime": "node12",
          "status": "BUILT",
          "number": 1,
          "build_time": "2022-07-25T13:36:48.311203912Z",
          "created_at": "2022-07-25T13:36:48.242276896Z",
          "updated_at": "2022-07-25T13:36:48.311597904Z"
        },
        "deployed_version": {
          "code": "module.exports = () => {}",
          "dependencies": [
            {
              "name": "lodash",
              "version": "1.0.0"
            }
          ],
          "id": "5fa9f95d-f1fd-4ed3-a0c2-5795dc5ebcdf",
          "deployed": true,
          "number": 1,
          "built_at": "2022-07-25T13:36:48.311203912Z",
          "secrets": [
            {
              "name": "mySecret",
              "updated_at": "2022-07-22T22:20:57.904768797Z"
            }
          ],
          "status": "built",
          "created_at": "2022-07-25T13:36:48.242276896Z",
          "updated_at": "2022-07-25T13:36:48.311597904Z",
          "runtime": "node12",
          "supported_triggers": [
            {
              "id": "send-phone-message",
              "version": "v2"
            }
          ]
        },
        "all_changes_deployed": true
      },
      {
        "id": "2f88a7d0-f8cc-4da4-9113-47e6c8ec9a31",
        "name": "Action4",
        "supported_triggers": [
          {
            "id": "post-change-password",
            "version": "v2"
          }
        ],
        "created_at": "2022-07-25T22:35:45.780506742Z",
        "updated_at": "2022-07-25T22:35:45.798465555Z",
        "code": "/**\n* Handler that will be called during the execution of a PostChangePassword flow.\n*\n* @param {Event} event - Details about the user and the context in which the change password is happening.\n*/\nexports.onExecutePostChangePassword = async (event) => {\n};\n",
        "dependencies": [],
        "runtime": "node16",
        "status": "built",
        "secrets": [],
        "current_version": {
          "id": "a073c4d8-7003-46c4-9023-33590efc5457",
          "code": "/**\n* Handler that will be called during the execution of a PostChangePassword flow.\n*\n* @param {Event} event - Details about the user and the context in which the change password is happening.\n*/\nexports.onExecutePostChangePassword = async (event) => {\n};\n",
          "runtime": "node16",
          "status": "BUILT",
          "number": 1,
          "build_time": "2022-07-25T22:35:53.459624257Z",
          "created_at": "2022-07-25T22:35:53.383062028Z",
          "updated_at": "2022-07-25T22:35:53.460435800Z"
        },
        "deployed_version": {
          "code": "/**\n* Handler that will be called during the execution of a PostChangePassword flow.\n*\n* @param {Event} event - Details about the user and the context in which the change password is happening.\n*/\nexports.onExecutePostChangePassword = async (event) => {\n};\n",
          "dependencies": [],
          "id": "a073c4d8-7003-46c4-9023-33590efc5457",
          "deployed": true,
          "number": 1,
          "built_at": "2022-07-25T22:35:53.459624257Z",
          "secrets": [],
          "status": "built",
          "created_at": "2022-07-25T22:35:53.383062028Z",
          "updated_at": "2022-07-25T22:35:53.460435800Z",
          "runtime": "node16",
          "supported_triggers": [
            {
              "id": "post-change-password",
              "version": "v2"
            }
          ]
        },
        "all_changes_deployed": true
      }
    ],
    "total": 4
  }