/* Copyright (C) 2016 NooBaa */

// location actions.
export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const REFRESH_LOCATION = 'REFRESH_LOCATION';
export const CHANGE_LOCATION = 'CHANGE_LOCATION';

// Session related actions
export const RESTORE_SESSION = 'RESTORE_SESSION';
export const COMPLETE_RESTORE_SESSION = 'COMPLETE_RESTORE_SESSION';
export const FAIL_RESTORE_SESSION = 'FAIL_RESTORE_SESSION';
export const SIGN_IN = 'SIGN_IN';
export const COMPLETE_SIGN_IN = 'COMPLETE_SIGN_IN';
export const FAIL_SIGN_IN = 'FAIL_SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// Drawer related actions.
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

// Forms related actions.
export const INIT_FORM = 'INIT_FORM';
export const UPDATE_FORM = 'UPDATE_FORM';
export const RESET_FORM = 'RESET_FORM';
export const TOUCH_FORM = 'TOUCH_FORM';
export const UNTOUCH_FORM = 'UNTOUCH_FORM';
export const SET_FORM_VALIDITY = 'SET_FORM_VALIDITY';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const COMPLETE_SUBMIT_FORM = 'COMPLETE_SUBMIT_FORM';
export const DROP_FROM = 'DROP_FROM';

// Modals related actions.
export const OPEN_MODAL = 'OPEN_MODAL';
export const UPDATE_MODAL = 'UPDATE_MODAL';
export const REPLACE_MODAL = 'REPLACE_MODAL';
export const LOCK_MODAL = 'LOCK_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// Notifications related actions.
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

// System related actions.
export const CREATE_SYSTEM = 'CREATE_SYSTEM';
export const COMPLETE_CREATE_SYSTEM = 'COMPLETE_CREATE_SYSTEM';
export const FAIL_CREATE_SYSTEM = 'FAIL_CREATE_SYSTEM';
export const FETCH_SYSTEM_INFO = 'FETCH_SYSTEM_INFO';
export const COMPLETE_FETCH_SYSTEM_INFO = 'COMPLETE_FETCH_SYSTEM_INFO';
export const FAIL_FETCH_SYSTEM_INFO = 'FAIL_FETCH_SYSTEM_INFO';
export const FETCH_SYSTEM_STORAGE_HISTORY = 'FETCH_SYSTEM_STORAGE_HISTORY';
export const COMPLETE_FETCH_SYSTEM_STORAGE_HISTORY = 'COMPLETE_FETCH_SYSTEM_STORAGE_HISTORY';
export const FAIL_FETCH_SYSTEM_STORAGE_HISTORY = 'FAIL_FETCH_SYSTEM_STORAGE_HISTORY';
export const INVOKE_UPGRADE_SYSTEM = 'INVOKE_UPGRADE_SYSTEM';
export const COMPLETE_INVOKE_UPGRADE_SYSTEM = 'COMPLETE_INVOKE_UPGRADE_SYSTEM';
export const FAIL_INVOKE_UPGRADE_SYSTEM = 'FAIL_INVOKE_UPGRADE_SYSTEM';
export const UPGRADE_SYSTEM = 'UPGRADE_SYSTEM';
export const COMPLETE_UPGRADE_SYSTEM = 'COMPLETE_UPGRADE_SYSTEM';
export const FAIL_UPGRADE_SYSTEM = 'FAIL_UPGRADE_SYSTEM';
export const UPLOAD_UPGRADE_PACKAGE = 'UPLOAD_UPGRADE_PACKAGE';
export const UPDATE_UPGRADE_PACKAGE_UPLOAD = 'UPDATE_UPGRADE_PACKAGE_UPLOAD';
export const ABORT_UPGRADE_PACKAGE_UPLOAD = 'ABORT_UPGRADE_PACKAGE_UPLOAD';
export const RUN_UPGRADE_PACKAGE_TESTS = 'RUN_UPGRADE_PACKAGE_TESTS';
export const FETCH_VERSION_RELEASE_NOTES = 'FETCH_VERSION_RELEASE_NOTES';
export const COMPLETE_FETCH_VERSION_RELEASE_NOTES = 'COMPLETE_FETCH_VERSION_RELEASE_NOTES';
export const FAIL_FETCH_VERSION_RELEASE_NOTES = 'FAIL_FETCH_VERSION_RELEASE_NOTES';
export const UPDATE_REMOTE_SYSLOG = 'UPDATE_REMOTE_SYSLOG';
export const COMPLETE_UPDATE_REMOTE_SYSLOG = 'COMPLETE_UPDATE_REMOTE_SYSLOG';
export const FAIL_UPDATE_REMOTE_SYSLOG = 'FAIL_UPDATE_REMOTE_SYSLOG';
export const ENTER_MAINTENANCE_MODE = 'ENTER_MAINTENANCE_MODE';
export const COMPLETE_ENTER_MAINTENANCE_MODE = 'COMPLETE_ENTER_MAINTENANCE_MODE';
export const FAIL_ENTER_MAINTENANCE_MODE = 'FAIL_ENTER_MAINTENANCE_MODE';
export const LEAVE_MAINTENANCE_MODE = 'LEAVE_MAINTENANCE_MODE';
export const COMPLETE_LEAVE_MAINTENANCE_MODE = 'COMPLETE_LEAVE_MAINTENANCE_MODE';
export const FAIL_LEAVE_MAINTENANCE_MODE = 'FAIL_LEAVE_MAINTENANCE_MODE';
export const INSTALL_VM_TOOLS = 'INSTALL_VM_TOOLS';
export const COMPLETE_INSTALL_VM_TOOLS = 'COMPLETE_INSTALL_VM_TOOLS';
export const FAIL_INSTALL_VM_TOOLS = 'FAIL_INSTALL_VM_TOOLS';
export const UPDATE_P2P_SETTINGS = 'UPDATE_P2P_SETTINGS';
export const COMPLETE_UPDATE_P2P_SETTINGS = 'COMPLETE_UPDATE_P2P_SETTINGS';
export const FAIL_UPDATE_P2P_SETTINGS = 'FAIL_UPDATE_P2P_SETTINGS';
export const RESEND_ACTIVATION_CODE = 'RESEND_ACTIVATION_CODE';
export const UPDATE_PROXY_SERVER_SETTINGS = 'UPDATE_PROXY_SERVER_SETTINGS';
export const COMPLETE_UPDATE_PROXY_SERVER_SETTINGS = 'COMPLETE_UPDATE_PROXY_SERVER_SETTINGS';
export const FAIL_UPDATE_PROXY_SERVER_SETTINGS = 'FAIL_UPDATE_PROXY_SERVER_SETTINGS';
export const SET_SYSTEM_DEBUG_LEVEL = 'SET_SYSTEM_DEBUG_LEVEL';
export const COMPLETE_SET_SYSTEM_DEBUG_LEVEL = 'COMPLETE_SET_SYSTEM_DEBUG_LEVEL';
export const FAIL_SET_SYSTEM_DEBUG_LEVEL = 'FAIL_SET_SYSTEM_DEBUG_LEVEL';
export const COLLECT_SYSTEM_DIAGNOSTICS = 'COLLECT_SYSTEM_DIAGNOSTICS';
export const COMPLETE_COLLECT_SYSTEM_DIAGNOSTICS = 'COMPLETE_COLLECT_SYSTEM_DIAGNOSTICS';
export const FAIL_COLLECT_SYSTEM_DIAGNOSTICS = 'FAIL_COLLECT_SYSTEM_DIAGNOSTICS';

// Topology related actions.
export const UPDATE_SERVER_ADDRESS = 'UPDATE_SERVER_ADDRESS';
export const COMPLETE_UPDATE_SERVER_ADDRESS = 'COMPLETE_UPDATE_SERVER_ADDRESS';
export const FAIL_UPDATE_SERVER_ADDRESS = 'FAIL_UPDATE_SERVER_ADDRESS';
export const ATTACH_SERVER_TO_CLUSTER = 'ATTACH_SERVER_TO_CLUSTER';
export const COMPLETE_ATTACH_SERVER_TO_CLUSTER = 'COMPLETE_ATTACH_SERVER_TO_CLUSTER';
export const FAIL_ATTACH_SERVER_TO_CLUSTER = 'FAIL_ATTACH_SERVER_TO_CLUSTER';

// Node installation related actions.
export const FETCH_NODE_INSTALLATION_COMMANDS = 'FETCH_NODE_INSTALLATION_COMMANDS';
export const COMPLETE_FETCH_NODE_INSTALLATION_COMMANDS = 'COMPLETE_FETCH_NODE_INSTALLATION_COMMANDS';
export const FAIL_FETCH_NODE_INSTALLATION_COMMANDS = 'FAIL_FETCH_NODE_INSTALLATION_COMMANDS';

// Alerts related actions.
export const FETCH_ALERTS = 'FETCH_ALERTS';
export const COMPLETE_FETCH_ALERTS = 'COMPLETE_FETCH_ALERTS';
export const FAIL_FETCH_ALERTS = 'FAIL_FETCH_ALERTS';
export const UPDATE_ALERTS = 'UPDATE_ALERTS';
export const COMPLETE_UPDATE_ALERTS = 'COMPLETE_UPDATE_ALERTS';
export const FAIL_UPDATE_ALERTS = 'FAIL_UPDATE_ALERTS';
export const FETCH_UNREAD_ALERTS_COUNT = 'FETCH_UNREAD_ALERTS_COUNT';
export const COMPLETE_FETCH_UNREAD_ALERTS_COUNT = 'COMPLETE_FETCH_UNREAD_ALERTS_COUNT';
export const FAIL_FETCH_UREAD_ALERTS_COUNT = 'COMPLETE_FETCH_UNREAD_ALERTS_COUNT';
export const DROP_ALERTS = 'DROP_ALERTS';

// Account related actions.
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const COMPLETE_CREATE_ACCOUNT = 'COMPLETE_CREATE_ACCOUNT';
export const FAIL_CREATE_ACCOUNT = 'FAIL_CREATE_ACCOUNT';
export const UPDATE_ACCOUNT_S3_ACCESS = 'UPDATE_ACCOUNT_S3_ACCESS';
export const COMPLETE_UPDATE_ACCOUNT_S3_ACCESS = 'COMPLETE_UPDATE_ACCOUNT_S3_ACCESS';
export const FAIL_UPDATE_ACCOUNT_S3_ACCESS = 'FAIL_UPDATE_ACCOUNT_S3_ACCESS';
export const SET_ACCOUNT_IP_RESTRICTIONS = 'SET_ACCOUNT_IP_RESTRICTIONS';
export const COMPLETE_SET_ACCOUNT_IP_RESTRICTIONS = 'COMPLETE_SET_ACCOUNT_IP_RESTRICTIONS';
export const FAIL_SET_ACCOUNT_IP_RESTRICTIONS = 'FAIL_SET_ACCOUNT_IP_RESTRICTIONS';
export const CHANGE_ACCOUNT_PASSWORD = 'CHANGE_ACCOUNT_PASSWORD';
export const COMPLETE_CHANGE_ACCOUNT_PASSWORD = 'COMPLETE_CHANGE_ACCOUNT_PASSWORD';
export const FAIL_CHANGE_ACCOUNT_PASSWORD = 'FAIL_CHANGE_ACCOUNT_PASSWORD';
export const RESET_ACCOUNT_PASSWORD = 'RESET_ACCOUNT_PASSWORD';
export const COMPLETE_RESET_ACCOUNT_PASSWORD = 'COMPLETE_RESET_ACCOUNT_PASSWORD';
export const FAIL_RESET_ACCOUNT_PASSWORD = 'FAIL_RESET_ACCOUNT_PASSWORD';
export const ADD_EXTERNAL_CONNECTION = 'ADD_EXTERNAL_CONNECTION';
export const COMPLETE_ADD_EXTERNAL_CONNECTION = 'COMPLETE_ADD_EXTERNAL_CONNECTION';
export const FAIL_ADD_EXTERNAL_CONNECTION = 'FAIL_ADD_EXTERNAL_CONNECTION';
export const TRY_DELETE_ACCOUNT = 'TRY_DELETE_ACCOUNT';
export const COMPLETE_DELETE_ACCOUNT = 'COMPLETE_DELETE_ACCOUNT';
export const FAIL_DELETE_ACCOUNT = 'FAIL_DELETE_ACCOUNT';
export const DELETE_EXTERNAL_CONNECTION = 'DELETE_EXTERNAL_CONNECTION';
export const COMPLETE_DELETE_EXTERNAL_CONNECTION = 'COMPLETE_DELETE_EXTERNAL_CONNECTION';
export const FAIL_DELETE_EXTERNAL_CONNECTION = 'FAIL_DELETE_EXTERNAL_CONNECTION';
export const REGENERATE_ACCOUNT_CREDENTIALS = 'REGENERATE_ACCOUNT_CREDENTIALS';
export const COMPLETE_REGENERATE_ACCOUNT_CREDENTIALS = 'COMPLETE_REGENERATE_ACCOUNT_CREDENTIALS';
export const FAIL_REGENERATE_ACCOUNT_CREDENTIALS = 'FAIL_REGENERATE_ACCOUNT_CREDENTIALS';

// Object related actions.
export const UPLOAD_OBJECTS = 'UPLOAD_OBJECTS';
export const UPDATE_OBJECT_UPLOAD = 'UPDATE_OBJECT_UPLOAD';
export const COMPLETE_OBJECT_UPLOAD = 'COMPLETE_OBJECT_UPLOAD';
export const FAIL_OBJECT_UPLOAD = 'FAIL_OBJECT_UPLOAD';
export const CLEAR_COMPLETED_OBJECT_UPLOADES = 'CLEAR_COMPLETED_OBJECT_UPLOADES';
export const FETCH_OBJECTS = 'FETCH_OBJECTS';
export const COMPLETE_FETCH_OBJECTS = 'COMPLETE_FETCH_OBJECTS';
export const FAIL_FETCH_OBJECTS = 'FAIL_FETCH_OBJECTS';
export const FETCH_OBJECT = 'FETCH_OBJECT';
export const COMPLETE_FETCH_OBJECT = 'COMPLETE_FETCH_OBJECT';
export const FAIL_FETCH_OBJECT = 'FAIL_FETCH_OBJECT';
export const DELETE_OBJECT = 'DELETE_OBJECT';
export const COMPLETE_DELETE_OBJECT = 'COMPLETE_DELETE_OBJECT';
export const DROP_OBJECTS_VIEW = 'DROP_OBJECTS_VIEW';
export const FAIL_DELETE_OBJECT = 'FAIL_DELETE_OBJECT';
export const FETCH_OBJECT_PARTS = 'FETCH_OBJECT_PARTS';
export const COMPLETE_FETCH_OBJECT_PARTS = 'COMPLETE_FETCH_OBJECT_PARTS';
export const FAIL_FETCH_OBJECT_PARTS = 'FAIL_FETCH_OBJECT_PARTS';

// Bucket related actions.
export const CREATE_BUCKET = 'CREATE_BUCKET';
export const COMPLETE_CREATE_BUCKET = 'COMPLETE_CREATE_BUCKET';
export const FAIL_CREATE_BUCKET = 'FAIL_CREATE_BUCKET';
export const UPDATE_BUCKET_QUOTA_POLICY = 'UPDATE_BUCKET_QUOTA_POLICY';
export const COMPLETE_UPDATE_BUCKET_QUOTA_POLICY = 'COMPLETE_UPDATE_BUCKET_QUOTA_POLICY';
export const FAIL_UPDATE_BUCKET_QUOTA_POLICY = 'FAIL_UPDATE_BUCKET_QUOTA_POLICY';
export const UPDATE_BUCKET_RESILIENCY_POLICY = 'UPDATE_BUCKET_RESILIENCY_POLICY';
export const COMPLETE_UPDATE_BUCKET_RESILIENCY_POLICY = 'COMPLETE_UPDATE_BUCKET_RESILIENCY_POLICY';
export const FAIL_UPDATE_BUCKET_RESILIENCY_POLICY = 'FAIL_UPDATE_BUCKET_RESILIENCY_POLICY';
export const UPDATE_BUCKET_VERSIONING_POLICY = 'UPDATE_BUCKET_VERSIONING_POLICY';
export const COMPLETE_UPDATE_BUCKET_VERSIONING_POLICY = 'COMPLETE_UPDATE_BUCKET_VERSIONING_POLICY';
export const FAIL_UPDATE_BUCKET_VERSIONING_POLICY = 'FAIL_UPDATE_BUCKET_VERSIONING_POLICY';
export const DELETE_BUCKET = 'DELETE_BUCKET';
export const COMPLETE_DELETE_BUCKET = 'COMPLETE_DELETE_BUCKET';
export const FAIL_DELETE_BUCKET = 'FAIL_DELETE_BUCKET';
export const CREATE_NAMESPACE_BUCKET = 'CREATE_NAMESPACE_BUCKET';
export const COMPLETE_CREATE_NAMESPACE_BUCKET = 'COMPLETE_CREATE_NAMESPACE_BUCKET';
export const FAIL_CREATE_NAMESPACE_BUCKET = 'FAIL_CREATE_NAMESPACE_BUCKET';
export const UPDATE_NAMESPACE_BUCKET_PLACEMENT = 'UPDATE_NAMESPACE_BUCKET_PLACEMENT';
export const COMPLETE_UPDATE_NAMESPACE_BUCKET_PLACEMENT = 'COMPLETE_UPDATE_NAMESPACE_BUCKET_PLACEMENT';
export const FAIL_UPDATE_NAMESPACE_BUCKET_PLACEMENT = 'FAIL_UPDATE_NAMESPACE_BUCKET_PLACEMENT';
export const DELETE_NAMESPACE_BUCKET = 'DELETE_NAMESPACE_BUCKET';
export const COMPLETE_DELETE_NAMESPACE_BUCKET = 'COMPLETE_DELETE_NAMESPACE_BUCKET';
export const FAIL_DELETE_NAMESPACE_BUCKET = 'FAIL_DELETE_NAMESPACE_BUCKET';
export const UPDATE_BUCKET_S3_ACCESS = 'UPDATE_BUCKET_S3_ACCESS';
export const COMPLETE_UPDATE_BUCKET_S3_ACCESS = 'COMPLETE_UPDATE_BUCKET_S3_ACCESS';
export const FAIL_UPDATE_BUCKET_S3_ACCESS = 'FAIL_UPDATE_BUCKET_S3_ACCESS';
export const ADD_BUCKET_TRIGGER = 'ADD_BUCKET_TRIGGER';
export const COMPLETE_ADD_BUCKET_TRIGGER = 'COMPLETE_ADD_BUCKET_TRIGGER';
export const FAIL_ADD_BUCKET_TRIGGER = 'FAIL_ADD_BUCKET_TRIGGER';
export const UPDATE_BUCKET_TRIGGER = 'UPDATE_BUCET_TRIGGER';
export const COMPLETE_UPDATE_BUCKET_TRIGGER = 'COMPLETE_UPDATE_BUCKET_TRIGGER';
export const FAIL_UPDATE_BUCKET_TRIGGER = 'FAIL_UPDATE_BUCET_TRIGGER';
export const REMOVE_BUCKET_TRIGGER = 'REMOVE_BUCKET_TRIGGER';
export const COMPLETE_REMOVE_BUCKET_TRIGGER = 'COMPLETE_REMOVE_BUCKET_TRIGGER';
export const FAIL_REMOVE_BUCKET_TRIGGER = 'FAIL_REMOVE_BUCKET_TRIGGER';
export const UPDATE_TIER_PLACEMENT_POLICY = 'UPDATE_TIER_PLACEMENT_POLICY';
export const COMPLETE_UPDATE_TIER_PLACEMENT_POLICY = 'COMPLETE_UPDATE_TIER_PLACEMENT_POLICY';
export const FAIL_UPDATE_TIER_PLACEMENT_POLICY = 'FAIL_UPDATE_TIER_PLACEMENT_POLICY';
export const ADD_BUCKET_TIER = 'ADD_BUCKET_TIER';
export const COMPLETE_ADD_BUCKET_TIER = 'COMPLETE_ADD_BUCKET_TIER';
export const FAIL_ADD_BUCKET_TIER = 'FAIL_ADD_BUCKET_TIER';

// Resource related actions.
export const CREATE_HOSTS_POOL = 'CREATE_HOSTS_POOL';
export const COMPLETE_CREATE_HOSTS_POOL = 'COMPLETE_CREATE_HOSTS_POOL';
export const FAIL_CREATE_HOSTS_POOL = 'FAIL_CREATE_HOSTS_POOL';
export const DELETE_RESOURCE = 'DELETE_RESOURCE';
export const COMPLETE_DELETE_RESOURCE = 'COMPLETE_DELETE_RESOURCE';
export const FAIL_DELETE_RESOURCE = 'FAIL_DELETE_RESOURCE';
export const ASSIGN_HOSTS_TO_POOL = 'ASSIGN_HOSTS_TO_POOL';
export const COMPLETE_ASSIGN_HOSTS_TO_POOL = 'COMPLETE_ASSIGN_HOSTS_TO_POOL';
export const FAIL_ASSIGN_HOSTS_TO_POOL = 'FAIL_ASSIGN_HOSTS_TO_POOL';
export const ASSIGN_REGION_TO_RESOURCE ='ASSIGN_REGION_TO_RESOURCE';
export const COMPLETE_ASSIGN_REGION_TO_RESOURCE = 'COMPLETE_ASSIGN_REGION_TO_RESOURCE';
export const FAIL_ASSIGN_REGION_TO_RESOURCE = 'FAIL_ASSIGN_REGION_TO_RESOURCE';
export const FETCH_CLOUD_RESOURCE_OBJECTS = 'FETCH_CLOUD_RESOURCE_OBJECTS';
export const COMPLETE_FETCH_CLOUD_RESOURCE_OBJECTS = 'COMPLETE_FETCH_CLOUD_RESOURCE_OBJECTS';
export const FAIL_FETCH_CLOUD_RESOURCE_OBJECTS = 'FAIL_FETCH_CLOUD_RESOURCE_OBJECTS';

// Namespace related actions
export const CREATE_NAMESPACE_RESOURCE = 'CREATE_NAMESPACE_RESOURCE';
export const COMPLETE_CREATE_NAMESPACE_RESOURCE = 'COMPLETE_CREATE_NAMESPACE_RESOURCE' ;
export const FAIL_CREATE_NAMESPACE_RESOURCE = 'FAIL_CREATE_NAMESPACE_RESOURCE';
export const DELETE_NAMESPACE_RESOURCE = 'DELETE_NAMESPACE_RESOURCE';
export const COMPLETE_DELETE_NAMESPACE_RESOURCE = 'COMPLETE_DELETE_NAMESPACE_RESOURCE';
export const FAIL_DELETE_NAMESPACE_RESOURCE = 'FAIL_DELETE_NAMESPACE_RESOURCE';

// Hosts related actions.
export const FETCH_HOSTS = 'FETCH_HOSTS';
export const COMPLETE_FETCH_HOSTS = 'COMPLETE_FETCH_HOSTS';
export const FAIL_FETCH_HOSTS = 'FAIL_FETCH_HOSTS';
export const COLLECT_HOST_DIAGNOSTICS = 'COLLECT_HOST_DIAGNOSTICS';
export const COMPLETE_COLLECT_HOST_DIAGNOSTICS = 'COMPLETE_COLLECT_HOST_DIAGNOSTICS';
export const FAIL_COLLECT_HOST_DIAGNOSTICS = 'FAIL_COLLECT_HOST_DIAGNOSTICS';
export const SET_HOST_DEBUG_MODE = 'SET_HOST_DEBUG_MODE';
export const COMPLETE_SET_HOST_DEBUG_MODE = 'COMPLETE_SET_HOST_DEBUG_MODE';
export const FAIL_SET_HOST_DEBUG_MODE = 'FAIL_SET_HOST_DEBUG_MODE';
export const DROP_HOSTS_VIEW = 'DROP_HOSTS_VIEW';
export const TOGGLE_HOST_SERVICES = 'TOGGLE_HOST_SERVICES';
export const COMPLETE_TOGGLE_HOST_SERVICES = 'COMPLETE_TOGGLE_HOST_SERVICES';
export const FAIL_TOGGLE_HOST_SERVICES = 'FAIL_TOGGLE_HOST_SERVICES';
export const TOGGLE_HOST_NODES = 'TOGGLE_HOST_NODES';
export const COMPLETE_TOGGLE_HOST_NODES = 'COMPLETE_TOGGLE_HOST_NODES';
export const FAIL_TOGGLE_HOST_NODES = 'FAIL_TOGGLE_HOST_NODES';
export const FETCH_HOST_OBJECTS = 'FETCH_HOST_OBJECTS';
export const COMPLETE_FETCH_HOST_OBJECTS = 'COMPLETE_FETCH_HOST_OBJECTS';
export const FAIL_FETCH_HOST_OBJECTS = 'FAIL_FETCH_HOST_OBJECTS';
export const RETRUST_HOST = 'RETRUST_HOST';
export const COMPLETE_RETRUST_HOST = 'COMPLETE_RETRUST_HOST';
export const FAIL_RETRUST_HOST = 'FAIL_RETRUST_HOST';
export const DELETE_HOST = 'DELETE_HOST';
export const COMPLETE_DELETE_HOST = 'COMPLETE_DELETE_HOST';
export const FAIL_DELETE_HOST = 'FAIL_DELETE_HOST';
export const REMOVE_HOST = 'REMOVE_HOST';

// Cloud related actions.
export const FETCH_CLOUD_TARGETS = 'FETCH_CLOUD_TARGETS';
export const COMPLETE_FETCH_CLOUD_TARGETS = 'COMPLETE_FETCH_CLOUD_TARGETS';
export const FAIL_FETCH_CLOUD_TARGETS = 'FAIL_FETCH_CLOUD_TARGETS';
export const DROP_CLOUD_TARGETS = 'DROP_CLOUD_TARGETS';
export const CREATE_CLOUD_RESOURCE = 'CREATE_CLOUD_RESOURCE';
export const COMPLETE_CREATE_CLOUD_RESOURCE = 'COMPLETE_CREATE_CLOUD_RESOURCE';
export const FAIL_CREATE_CLOUD_RESOURCE = 'FAIL_CREATE_CLOUD_RESOURCE';

// Lambda related actions
export const CREATE_LAMBDA_FUNC = 'CREATE_LAMBDA_FUNC';
export const COMPLETE_CREATE_LAMBDA_FUNC = 'COMPLETE_CREATE_LAMBDA_FUNC';
export const FAIL_CREATE_LAMBDA_FUNC = 'FAIL_CREATE_LAMBDA_FUNC';
export const DELETE_LAMBDA_FUNC = 'DELETE_LAMBDA_FUNC';
export const COMPLETE_DELETE_LAMBDA_FUNC = 'COMPLETE_DELETE_LAMBDA_FUNC';
export const FAIL_DELETE_LAMBDA_FUNC = 'FAIL_DELETE_LAMBDA_FUNC';
export const UPDATE_LAMBDA_FUNC_CONFIG = 'UPDATE_LAMBDA_FUNC_CONFIG';
export const COMPLETE_UPDATE_LAMBDA_FUNC_CONFIG = 'COMPLETE_UPDATE_LAMBDA_FUNC_CONFIG';
export const FAIL_UPDATE_LAMBDA_FUNC_CONFIG = 'FAIL_UPDATE_LAMBDA_FUNC_CONFIG';

// Environment actions.
export const TOGGLE_PREVIEW_CONTENT = 'TOGGLE_PREVIEW_CONTENT';
export const SETUP_ENV = 'SETUP_ENV';
export const DISSMISS_BROWSER_STICKY = 'DISSMISS_BROWSER_STICKY';

// Analytics related actions.
export const FETCH_BUCKET_USAGE_HISTORY = 'FETCH_BUCKET_USAGE_HISTORY';
export const COMPLETE_FETCH_BUCKET_USAGE_HISTORY = 'COMPLETE_FETCH_BUCKET_USAGE_HISTORY';
export const FAIL_FETCH_BUCKET_USAGE_HISTORY = 'FAIL_FETCH_BUCKET_USAGE_HISTORY';
export const DROP_BUCKET_USAGE_HISTORY = 'DROP_BUCKET_USAGE_HISTORY';
export const FETCH_ACCOUNT_USAGE_HISTORY = 'FETCH_ACCOUNT_USAGE_HISTORY';
export const COMPLETE_FETCH_ACCOUNT_USAGE_HISTORY = 'COMPLETE_FETCH_ACCOUNT_USAGE_HISTORY';
export const FAIL_FETCH_ACCOUNT_USAGE_HISTORY = 'FAIL_FETCH_ACCOUNT_USAGE_HISTORY';
export const DROP_ACCOUNT_USAGE_HISTORY = 'DROP_ACCOUNT_USAGE_HISTORY';
export const FETCH_OBJECTS_DISTRIBUTION = 'FETCH_OBJECTS_DISTRIBUTION';
export const COMPLETE_FETCH_OBJECTS_DISTRIBUTION = 'COMPLETE_FETCH_OBJECTS_DISTRIBUTION';
export const FAIL_FETCH_OBJECTS_DISTRIBUTION = 'FAIL_FETCH_OBJECTS_DISTRIBUTION';
export const DROP_FETCH_OBJECTS_DISTRIBUTION = 'DROP_FETCH_OBJECTS_DISTRIBUTION';
export const FETCH_CLOUD_USAGE_STATS = 'FETCH_CLOUD_USAGE_STATS';
export const COMPLETE_FETCH_CLOUD_USAGE_STATS = 'COMPLETE_FETCH_CLOUD_USAGE_STATS';
export const FAIL_FETCH_CLOUD_USAGE_STATS = 'FAIL_FETCH_CLOUD_USAGE_STATS';
export const DROP_CLOUD_USAGE_STATS = 'DROP_CLOUD_USAGE_STATS';

// Support actions.
export const DUMP_APP_LOG = 'DUMP_APP_LOG';
