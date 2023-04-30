!function(e, t){
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).TIM = t();
}(this, () => {
  function e(e, t){
    const n = Object.keys(e); if(Object.getOwnPropertySymbols){
      let o = Object.getOwnPropertySymbols(e); t && (o = o.filter(t => Object.getOwnPropertyDescriptor(e, t).enumerable)), n.push.apply(n, o);
    } return n;
  } function t(t){
    for(let n = 1; n < arguments.length; n++){
      var o = null != arguments[n] ? arguments[n] : {}; n % 2 ? e(Object(o), !0).forEach(e => {
        r(t, e, o[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach(e => {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
      });
    } return t;
  } function n(e){
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e){
      return typeof e;
    } : function(e){
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
  } function o(e, t){
    if(!(e instanceof t)){
      throw new TypeError("Cannot call a class as a function");
    }
  } function a(e, t){
    for(let n = 0; n < t.length; n++){
      const o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  } function s(e, t, n){
    return t && a(e.prototype, t), n && a(e, n), e;
  } function r(e, t, n){
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  } function i(e, t){
    if("function" != typeof t && null !== t){
      throw new TypeError("Super expression must either be null or a function");
    } e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && c(e, t);
  } function u(e){
    return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e){
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  } function c(e, t){
    return (c = Object.setPrototypeOf || function(e, t){
      return e.__proto__ = t, e;
    })(e, t);
  } function l(){
    if("undefined" == typeof Reflect || !Reflect.construct){
      return !1;
    }if(Reflect.construct.sham){
      return !1;
    }if("function" == typeof Proxy){
      return !0;
    } try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
    }
    catch(e){
      return !1;
    }
  } function d(e, t, n){
    return (d = l() ? Reflect.construct : function(e, t, n){
      const o = [null]; o.push.apply(o, t); const a = new (Function.bind.apply(e, o))(); return n && c(a, n.prototype), a;
    }).apply(null, arguments);
  } function p(e){
    const t = "function" == typeof Map ? new Map() : void 0; return (p = function(e){
      if(null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))){
        return e;
      } let n; if("function" != typeof e){
        throw new TypeError("Super expression must either be null or a function");
      }if(void 0 !== t){
        if(t.has(e)){
          return t.get(e);
        } t.set(e, o);
      } function o(){
        return d(e, arguments, u(this).constructor);
      } return o.prototype = Object.create(e.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), c(o, e);
    })(e);
  } function g(e, t){
    if(null == e){
      return {};
    } let n, o, a = function(e, t){
      if(null == e){
        return {};
      } let n, o, a = {}, s = Object.keys(e); for(o = 0; o < s.length; o++){
        n = s[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
      } return a;
    }(e, t); if(Object.getOwnPropertySymbols){
      const s = Object.getOwnPropertySymbols(e); for(o = 0; o < s.length; o++){
        n = s[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      }
    } return a;
  } function h(e){
    if(void 0 === e){
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    } return e;
  } function _(e, t){
    return !t || "object" != typeof t && "function" != typeof t ? h(e) : t;
  } function f(e){
    const t = l(); return function(){
      let n, o = u(e); if(t){
        const a = u(this).constructor; n = Reflect.construct(o, arguments, a);
      }
      else {
        n = o.apply(this, arguments);
      } return _(this, n);
    };
  } function m(e, t){
    return v(e) || function(e, t){
      let n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if(null == n){
        return;
      } let o, a, s = [], r = !0, i = !1; try {
        for(n = n.call(e); !(r = (o = n.next()).done) && (s.push(o.value), !t || s.length !== t); r = !0){}
      }
      catch(u){
        i = !0, a = u;
      }
      finally {
        try {
          r || null == n.return || n.return();
        }
        finally {
          if(i){
            throw a;
          }
        }
      } return s;
    }(e, t) || I(e, t) || D();
  } function M(e){
    return function(e){
      if(Array.isArray(e)){
        return T(e);
      }
    }(e) || y(e) || I(e) || function(){
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  } function v(e){
    if(Array.isArray(e)){
      return e;
    }
  } function y(e){
    if("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]){
      return Array.from(e);
    }
  } function I(e, t){
    if(e){
      if("string" == typeof e){
        return T(e, t);
      } let n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0;
    }
  } function T(e, t){
    (null == t || t > e.length) && (t = e.length); for(var n = 0, o = new Array(t); n < t; n++){
      o[n] = e[n];
    } return o;
  } function D(){
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  } function C(e, t){
    let n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if(!n){
      if(Array.isArray(e) || (n = I(e)) || t && e && "number" == typeof e.length){
        n && (e = n); let o = 0, a = function(){}; return { s: a, n(){
          return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
        }, e(e){
          throw e;
        }, f: a };
      } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } let s, r = !0, i = !1; return { s(){
      n = n.call(e);
    }, n(){
      const e = n.next(); return r = e.done, e;
    }, e(e){
      i = !0, s = e;
    }, f(){
      try {
        r || null == n.return || n.return();
      }
      finally {
        if(i){
          throw s;
        }
      }
    } };
  } const k = { SDK_READY: "sdkStateReady", SDK_NOT_READY: "sdkStateNotReady", SDK_DESTROY: "sdkDestroy", MESSAGE_RECEIVED: "onMessageReceived", MESSAGE_MODIFIED: "onMessageModified", MESSAGE_REVOKED: "onMessageRevoked", MESSAGE_READ_BY_PEER: "onMessageReadByPeer", CONVERSATION_LIST_UPDATED: "onConversationListUpdated", GROUP_LIST_UPDATED: "onGroupListUpdated", GROUP_SYSTEM_NOTICE_RECEIVED: "receiveGroupSystemNotice", GROUP_ATTRIBUTES_UPDATED: "groupAttributesUpdated", PROFILE_UPDATED: "onProfileUpdated", BLACKLIST_UPDATED: "blacklistUpdated", FRIEND_LIST_UPDATED: "onFriendListUpdated", FRIEND_GROUP_LIST_UPDATED: "onFriendGroupListUpdated", FRIEND_APPLICATION_LIST_UPDATED: "onFriendApplicationListUpdated", KICKED_OUT: "kickedOut", ERROR: "error", NET_STATE_CHANGE: "netStateChange", SDK_RELOAD: "sdkReload" }, S = { MSG_TEXT: "TIMTextElem", MSG_IMAGE: "TIMImageElem", MSG_SOUND: "TIMSoundElem", MSG_AUDIO: "TIMSoundElem", MSG_FILE: "TIMFileElem", MSG_FACE: "TIMFaceElem", MSG_VIDEO: "TIMVideoFileElem", MSG_GEO: "TIMLocationElem", MSG_LOCATION: "TIMLocationElem", MSG_GRP_TIP: "TIMGroupTipElem", MSG_GRP_SYS_NOTICE: "TIMGroupSystemNoticeElem", MSG_CUSTOM: "TIMCustomElem", MSG_MERGER: "TIMRelayElem", MSG_PRIORITY_HIGH: "High", MSG_PRIORITY_NORMAL: "Normal", MSG_PRIORITY_LOW: "Low", MSG_PRIORITY_LOWEST: "Lowest", CONV_C2C: "C2C", CONV_GROUP: "GROUP", CONV_SYSTEM: "@TIM#SYSTEM", CONV_AT_ME: 1, CONV_AT_ALL: 2, CONV_AT_ALL_AT_ME: 3, GRP_PRIVATE: "Private", GRP_WORK: "Private", GRP_PUBLIC: "Public", GRP_CHATROOM: "ChatRoom", GRP_MEETING: "ChatRoom", GRP_AVCHATROOM: "AVChatRoom", GRP_MBR_ROLE_OWNER: "Owner", GRP_MBR_ROLE_ADMIN: "Admin", GRP_MBR_ROLE_MEMBER: "Member", GRP_TIP_MBR_JOIN: 1, GRP_TIP_MBR_QUIT: 2, GRP_TIP_MBR_KICKED_OUT: 3, GRP_TIP_MBR_SET_ADMIN: 4, GRP_TIP_MBR_CANCELED_ADMIN: 5, GRP_TIP_GRP_PROFILE_UPDATED: 6, GRP_TIP_MBR_PROFILE_UPDATED: 7, MSG_REMIND_ACPT_AND_NOTE: "AcceptAndNotify", MSG_REMIND_ACPT_NOT_NOTE: "AcceptNotNotify", MSG_REMIND_DISCARD: "Discard", GENDER_UNKNOWN: "Gender_Type_Unknown", GENDER_FEMALE: "Gender_Type_Female", GENDER_MALE: "Gender_Type_Male", KICKED_OUT_MULT_ACCOUNT: "multipleAccount", KICKED_OUT_MULT_DEVICE: "multipleDevice", KICKED_OUT_USERSIG_EXPIRED: "userSigExpired", ALLOW_TYPE_ALLOW_ANY: "AllowType_Type_AllowAny", ALLOW_TYPE_NEED_CONFIRM: "AllowType_Type_NeedConfirm", ALLOW_TYPE_DENY_ANY: "AllowType_Type_DenyAny", FORBID_TYPE_NONE: "AdminForbid_Type_None", FORBID_TYPE_SEND_OUT: "AdminForbid_Type_SendOut", JOIN_OPTIONS_FREE_ACCESS: "FreeAccess", JOIN_OPTIONS_NEED_PERMISSION: "NeedPermission", JOIN_OPTIONS_DISABLE_APPLY: "DisableApply", JOIN_STATUS_SUCCESS: "JoinedSuccess", JOIN_STATUS_ALREADY_IN_GROUP: "AlreadyInGroup", JOIN_STATUS_WAIT_APPROVAL: "WaitAdminApproval", GRP_PROFILE_OWNER_ID: "ownerID", GRP_PROFILE_CREATE_TIME: "createTime", GRP_PROFILE_LAST_INFO_TIME: "lastInfoTime", GRP_PROFILE_MEMBER_NUM: "memberNum", GRP_PROFILE_MAX_MEMBER_NUM: "maxMemberNum", GRP_PROFILE_JOIN_OPTION: "joinOption", GRP_PROFILE_INTRODUCTION: "introduction", GRP_PROFILE_NOTIFICATION: "notification", GRP_PROFILE_MUTE_ALL_MBRS: "muteAllMembers", SNS_ADD_TYPE_SINGLE: "Add_Type_Single", SNS_ADD_TYPE_BOTH: "Add_Type_Both", SNS_DELETE_TYPE_SINGLE: "Delete_Type_Single", SNS_DELETE_TYPE_BOTH: "Delete_Type_Both", SNS_APPLICATION_TYPE_BOTH: "Pendency_Type_Both", SNS_APPLICATION_SENT_TO_ME: "Pendency_Type_ComeIn", SNS_APPLICATION_SENT_BY_ME: "Pendency_Type_SendOut", SNS_APPLICATION_AGREE: "Response_Action_Agree", SNS_APPLICATION_AGREE_AND_ADD: "Response_Action_AgreeAndAdd", SNS_CHECK_TYPE_BOTH: "CheckResult_Type_Both", SNS_CHECK_TYPE_SINGLE: "CheckResult_Type_Single", SNS_TYPE_NO_RELATION: "CheckResult_Type_NoRelation", SNS_TYPE_A_WITH_B: "CheckResult_Type_AWithB", SNS_TYPE_B_WITH_A: "CheckResult_Type_BWithA", SNS_TYPE_BOTH_WAY: "CheckResult_Type_BothWay", NET_STATE_CONNECTED: "connected", NET_STATE_CONNECTING: "connecting", NET_STATE_DISCONNECTED: "disconnected", MSG_AT_ALL: "__kImSDK_MesssageAtALL__" }, E = function(){
      function e(){
        o(this, e), this.cache = [], this.options = null;
      } return s(e, [{ key: "use", value(e){
        if("function" != typeof e){
          throw "middleware must be a function";
        } return this.cache.push(e), this;
      } }, { key: "next", value(e){
        if(this.middlewares && this.middlewares.length > 0){
          return this.middlewares.shift().call(this, this.options, this.next.bind(this));
        }
      } }, { key: "run", value(e){
        return this.middlewares = this.cache.map(e => e), this.options = e, this.next();
      } }]), e;
    }(), A = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}; function N(e, t){
    return e(t = { exports: {} }, t.exports), t.exports;
  } const L = N((e, t) => {
      let n, o, a, s, r, i, u, c, l, d, p, g, h, _, f, m, M, v; e.exports = (n = "function" == typeof Promise, o = "object" == typeof self ? self : A, a = "undefined" != typeof Symbol, s = "undefined" != typeof Map, r = "undefined" != typeof Set, i = "undefined" != typeof WeakMap, u = "undefined" != typeof WeakSet, c = "undefined" != typeof DataView, l = a && void 0 !== Symbol.iterator, d = a && void 0 !== Symbol.toStringTag, p = r && "function" == typeof Set.prototype.entries, g = s && "function" == typeof Map.prototype.entries, h = p && Object.getPrototypeOf(new Set().entries()), _ = g && Object.getPrototypeOf(new Map().entries()), f = l && "function" == typeof Array.prototype[Symbol.iterator], m = f && Object.getPrototypeOf([][Symbol.iterator]()), M = l && "function" == typeof String.prototype[Symbol.iterator], v = M && Object.getPrototypeOf(""[Symbol.iterator]()), function(e){
        const t = typeof e; if("object" !== t){
          return t;
        }if(null === e){
          return "null";
        }if(e === o){
          return "global";
        }if(Array.isArray(e) && (!1 === d || !(Symbol.toStringTag in e))){
          return "Array";
        }if("object" == typeof window && null !== window){
          if("object" == typeof window.location && e === window.location){
            return "Location";
          }if("object" == typeof window.document && e === window.document){
            return "Document";
          }if("object" == typeof window.navigator){
            if("object" == typeof window.navigator.mimeTypes && e === window.navigator.mimeTypes){
              return "MimeTypeArray";
            }if("object" == typeof window.navigator.plugins && e === window.navigator.plugins){
              return "PluginArray";
            }
          }if(("function" == typeof window.HTMLElement || "object" == typeof window.HTMLElement) && e instanceof window.HTMLElement){
            if("BLOCKQUOTE" === e.tagName){
              return "HTMLQuoteElement";
            }if("TD" === e.tagName){
              return "HTMLTableDataCellElement";
            }if("TH" === e.tagName){
              return "HTMLTableHeaderCellElement";
            }
          }
        } const a = d && e[Symbol.toStringTag]; if("string" == typeof a){
          return a;
        } const l = Object.getPrototypeOf(e); return l === RegExp.prototype ? "RegExp" : l === Date.prototype ? "Date" : n && l === Promise.prototype ? "Promise" : r && l === Set.prototype ? "Set" : s && l === Map.prototype ? "Map" : u && l === WeakSet.prototype ? "WeakSet" : i && l === WeakMap.prototype ? "WeakMap" : c && l === DataView.prototype ? "DataView" : s && l === _ ? "Map Iterator" : r && l === h ? "Set Iterator" : f && l === m ? "Array Iterator" : M && l === v ? "String Iterator" : null === l ? "Object" : Object.prototype.toString.call(e).slice(8, -1);
      });
    }), O = { TEST: { CHINA: { DEFAULT: "wss://wss-dev.tim.qq.com" }, OVERSEA: { DEFAULT: "wss://wss-dev.tim.qq.com" }, SINGAPORE: { DEFAULT: "wss://wsssgp-dev.im.qcloud.com" }, KOREA: { DEFAULT: "wss://wsskr-dev.im.qcloud.com" }, GERMANY: { DEFAULT: "wss://wssger-dev.im.qcloud.com" } }, PRODUCTION: { CHINA: { DEFAULT: "wss://wss.im.qcloud.com", BACKUP: "wss://wss.tim.qq.com" }, OVERSEA: { DEFAULT: "wss://wss.im.qcloud.com" }, SINGAPORE: { DEFAULT: "wss://wsssgp.im.qcloud.com" }, KOREA: { DEFAULT: "wss://wsskr.im.qcloud.com" }, GERMANY: { DEFAULT: "wss://wssger.im.qcloud.com" } } }, R = { WEB: 7, WX_MP: 8, QQ_MP: 9, TT_MP: 10, BAIDU_MP: 11, ALI_MP: 12, UNI_NATIVE_APP: 15 }, G = "1.7.3", b = 537048168, P = "CHINA", w = "OVERSEA", U = "SINGAPORE", F = "KOREA", q = "GERMANY", V = { HOST: { CURRENT: { DEFAULT: "wss://wss.im.qcloud.com" }, setCurrent(){
      const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P; this.CURRENT = O.PRODUCTION[e];
    } }, NAME: { OPEN_IM: "openim", GROUP: "group_open_http_svc", GROUP_ATTR: "group_open_attr_http_svc", FRIEND: "sns", PROFILE: "profile", RECENT_CONTACT: "recentcontact", PIC: "openpic", BIG_GROUP_NO_AUTH: "group_open_http_noauth_svc", BIG_GROUP_LONG_POLLING: "group_open_long_polling_http_svc", BIG_GROUP_LONG_POLLING_NO_AUTH: "group_open_long_polling_http_noauth_svc", IM_OPEN_STAT: "imopenstat", WEB_IM: "webim", IM_COS_SIGN: "im_cos_sign_svr", CUSTOM_UPLOAD: "im_cos_msg", HEARTBEAT: "heartbeat", IM_OPEN_PUSH: "im_open_push", IM_OPEN_STATUS: "im_open_status", IM_LONG_MESSAGE: "im_long_msg", CLOUD_CONTROL: "im_sdk_config_mgr" }, CMD: { ACCESS_LAYER: "accesslayer", LOGIN: "wslogin", LOGOUT_LONG_POLL: "longpollinglogout", LOGOUT: "wslogout", HELLO: "wshello", PORTRAIT_GET: "portrait_get_all", PORTRAIT_SET: "portrait_set", GET_LONG_POLL_ID: "getlongpollingid", LONG_POLL: "longpolling", AVCHATROOM_LONG_POLL: "get_msg", ADD_FRIEND: "friend_add", UPDATE_FRIEND: "friend_update", GET_FRIEND_LIST: "friend_get", GET_FRIEND_PROFILE: "friend_get_list", DELETE_FRIEND: "friend_delete", CHECK_FRIEND: "friend_check", GET_FRIEND_GROUP_LIST: "group_get", RESPOND_FRIEND_APPLICATION: "friend_response", GET_FRIEND_APPLICATION_LIST: "pendency_get", DELETE_FRIEND_APPLICATION: "pendency_delete", REPORT_FRIEND_APPLICATION: "pendency_report", GET_GROUP_APPLICATION: "get_pendency", CREATE_FRIEND_GROUP: "group_add", DELETE_FRIEND_GROUP: "group_delete", UPDATE_FRIEND_GROUP: "group_update", GET_BLACKLIST: "black_list_get", ADD_BLACKLIST: "black_list_add", DELETE_BLACKLIST: "black_list_delete", CREATE_GROUP: "create_group", GET_JOINED_GROUPS: "get_joined_group_list", SET_GROUP_ATTRIBUTES: "set_group_attr", MODIFY_GROUP_ATTRIBUTES: "modify_group_attr", DELETE_GROUP_ATTRIBUTES: "delete_group_attr", CLEAR_GROUP_ATTRIBUTES: "clear_group_attr", GET_GROUP_ATTRIBUTES: "get_group_attr", SEND_MESSAGE: "sendmsg", REVOKE_C2C_MESSAGE: "msgwithdraw", DELETE_C2C_MESSAGE: "delete_c2c_msg_ramble", SEND_GROUP_MESSAGE: "send_group_msg", REVOKE_GROUP_MESSAGE: "group_msg_recall", DELETE_GROUP_MESSAGE: "delete_group_ramble_msg_by_seq", GET_GROUP_INFO: "get_group_info", GET_GROUP_MEMBER_INFO: "get_specified_group_member_info", GET_GROUP_MEMBER_LIST: "get_group_member_info", QUIT_GROUP: "quit_group", CHANGE_GROUP_OWNER: "change_group_owner", DESTROY_GROUP: "destroy_group", ADD_GROUP_MEMBER: "add_group_member", DELETE_GROUP_MEMBER: "delete_group_member", SEARCH_GROUP_BY_ID: "get_group_public_info", APPLY_JOIN_GROUP: "apply_join_group", HANDLE_APPLY_JOIN_GROUP: "handle_apply_join_group", HANDLE_GROUP_INVITATION: "handle_invite_join_group", MODIFY_GROUP_INFO: "modify_group_base_info", MODIFY_GROUP_MEMBER_INFO: "modify_group_member_info", DELETE_GROUP_SYSTEM_MESSAGE: "deletemsg", DELETE_GROUP_AT_TIPS: "deletemsg", GET_CONVERSATION_LIST: "get", PAGING_GET_CONVERSATION_LIST: "page_get", DELETE_CONVERSATION: "delete", PIN_CONVERSATION: "top", GET_MESSAGES: "getmsg", GET_C2C_ROAM_MESSAGES: "getroammsg", GET_GROUP_ROAM_MESSAGES: "group_msg_get", SET_C2C_MESSAGE_READ: "msgreaded", GET_PEER_READ_TIME: "get_peer_read_time", SET_GROUP_MESSAGE_READ: "msg_read_report", FILE_READ_AND_WRITE_AUTHKEY: "authkey", FILE_UPLOAD: "pic_up", COS_SIGN: "cos", COS_PRE_SIG: "pre_sig", TIM_WEB_REPORT_V2: "tim_web_report_v2", BIG_DATA_HALLWAY_AUTH_KEY: "authkey", GET_ONLINE_MEMBER_NUM: "get_online_member_num", ALIVE: "alive", MESSAGE_PUSH: "msg_push", MESSAGE_PUSH_ACK: "ws_msg_push_ack", STATUS_FORCEOFFLINE: "stat_forceoffline", DOWNLOAD_MERGER_MESSAGE: "get_relay_json_msg", UPLOAD_MERGER_MESSAGE: "save_relay_json_msg", FETCH_CLOUD_CONTROL_CONFIG: "fetch_config", PUSHED_CLOUD_CONTROL_CONFIG: "push_configv2" }, CHANNEL: { SOCKET: 1, XHR: 2, AUTO: 0 }, NAME_VERSION: { openim: "v4", group_open_http_svc: "v4", sns: "v4", profile: "v4", recentcontact: "v4", openpic: "v4", group_open_http_noauth_svc: "v4", group_open_long_polling_http_svc: "v4", group_open_long_polling_http_noauth_svc: "v4", imopenstat: "v4", im_cos_sign_svr: "v4", im_cos_msg: "v4", webim: "v4", im_open_push: "v4", im_open_status: "v4" } }; V.HOST.setCurrent(P); var K, x, B, H, j = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync && Boolean(wx.getSystemInfoSync().fontSizeSetting), Y = "undefined" != typeof qq && "function" == typeof qq.getSystemInfoSync && Boolean(qq.getSystemInfoSync().fontSizeSetting), $ = "undefined" != typeof tt && "function" == typeof tt.getSystemInfoSync && Boolean(tt.getSystemInfoSync().fontSizeSetting), W = "undefined" != typeof swan && "function" == typeof swan.getSystemInfoSync && Boolean(swan.getSystemInfoSync().fontSizeSetting), z = "undefined" != typeof my && "function" == typeof my.getSystemInfoSync && Boolean(my.getSystemInfoSync().fontSizeSetting), J = "undefined" != typeof uni && "undefined" == typeof window, X = j || Y || $ || W || z || J, Q = ("undefined" != typeof uni || "undefined" != typeof window) && !X, Z = Y ? qq : $ ? tt : W ? swan : z ? my : j ? wx : J ? uni : {}, ee = (K = "WEB", he ? K = "WEB" : Y ? K = "QQ_MP" : $ ? K = "TT_MP" : W ? K = "BAIDU_MP" : z ? K = "ALI_MP" : j ? K = "WX_MP" : J && (K = "UNI_NATIVE_APP"), R[K]), te = Q && window && window.navigator && window.navigator.userAgent || "", ne = /AppleWebKit\/([\d.]+)/i.exec(te), oe = (ne && parseFloat(ne.pop()), /iPad/i.test(te)), ae = /iPhone/i.test(te) && !oe, se = /iPod/i.test(te), re = ae || oe || se, ie = ((x = te.match(/OS (\d+)_/i)) && x[1] && x[1], /Android/i.test(te)), ue = function(){
      const e = te.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i); if(!e){
        return null;
      } const t = e[1] && parseFloat(e[1]), n = e[2] && parseFloat(e[2]); return t && n ? parseFloat(`${e[1]}.${e[2]}`) : t || null;
    }(), ce = (ie && /webkit/i.test(te), /Firefox/i.test(te), /Edge/i.test(te)), le = !ce && /Chrome/i.test(te), de = (function(){
      const e = te.match(/Chrome\/(\d+)/); e && e[1] && parseFloat(e[1]);
    }(), /MSIE/.test(te)), pe = (/MSIE\s8\.0/.test(te), function(){
      let e = /MSIE\s(\d+)\.\d/.exec(te), t = e && parseFloat(e[1]); return !t && /Trident\/7.0/i.test(te) && /rv:11.0/.test(te) && (t = 11), t;
    }()), ge = (/Safari/i.test(te), /TBS\/\d+/i.test(te)), he = (function(){
      const e = te.match(/TBS\/(\d+)/i); if(e && e[1]){
        e[1];
      }
    }(), !ge && /MQQBrowser\/\d+/i.test(te), !ge && / QQBrowser\/\d+/i.test(te), /(micromessenger|webbrowser)/i.test(te)), _e = /Windows/i.test(te), fe = /MAC OS X/i.test(te), me = (/MicroMessenger/i.test(te), Q && "undefined" != typeof Worker), Me = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}; B = "undefined" != typeof console ? console : void 0 !== Me && Me.console ? Me.console : "undefined" != typeof window && window.console ? window.console : {}; for(var ve = function(){}, ye = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], Ie = ye.length; Ie--;){
    H = ye[Ie], console[H] || (B[H] = ve);
  }B.methods = ye; let Te = B, De = 0, Ce = function(){
      return new Date().getTime() + De;
    }, ke = function(){
      De = 0;
    }, Se = 0, Ee = new Map(); function Ae(){
    let e, t = ((e = new Date()).setTime(Ce()), e); return `TIM ${t.toLocaleTimeString("en-US", { hour12: !1 })}.${function(e){
      let t; switch(e.toString().length){
        case 1: t = `00${e}`; break; case 2: t = `0${e}`; break; default: t = e;
      } return t;
    }(t.getMilliseconds())}:`;
  } var Ne = { arguments2String(e){
      let t; if(1 === e.length){
        t = Ae() + e[0];
      }
      else {
        t = Ae(); for(let n = 0, o = e.length; n < o; n++){
          Fe(e[n]) ? Ve(e[n]) ? t += Ye(e[n]) : t += JSON.stringify(e[n]) : t += e[n], t += " ";
        }
      } return t;
    }, debug(){
      if(Se <= -1){
        const e = this.arguments2String(arguments); Te.debug(e);
      }
    }, log(){
      if(Se <= 0){
        const e = this.arguments2String(arguments); Te.log(e);
      }
    }, info(){
      if(Se <= 1){
        const e = this.arguments2String(arguments); Te.info(e);
      }
    }, warn(){
      if(Se <= 2){
        const e = this.arguments2String(arguments); Te.warn(e);
      }
    }, error(){
      if(Se <= 3){
        const e = this.arguments2String(arguments); Te.error(e);
      }
    }, time(e){
      Ee.set(e, He.now());
    }, timeEnd(e){
      if(Ee.has(e)){
        const t = He.now() - Ee.get(e); return Ee.delete(e), t;
      } return Te.warn("未找到对应label: ".concat(e, ", 请在调用 logger.timeEnd 前，调用 logger.time")), 0;
    }, setLevel(e){
      e < 4 && Te.log(`${Ae()}set level from ${Se} to ${e}`), Se = e;
    }, getLevel(){
      return Se;
    } }, Le = ["url"], Oe = function(e){
      return "file" === Ke(e);
    }, Re = function(e){
      return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" === n(e) && e.constructor === Number);
    }, Ge = function(e){
      return "string" == typeof e;
    }, be = function(e){
      return null !== e && "object" === n(e);
    }, Pe = function(e){
      if("object" !== n(e) || null === e){
        return !1;
      } const t = Object.getPrototypeOf(e); if(null === t){
        return !0;
      }for(var o = t; null !== Object.getPrototypeOf(o);){
        o = Object.getPrototypeOf(o);
      } return t === o;
    }, we = function(e){
      return "function" == typeof Array.isArray ? Array.isArray(e) : "array" === Ke(e);
    }, Ue = function(e){
      return void 0 === e;
    }, Fe = function(e){
      return we(e) || be(e);
    }, qe = function(e){
      return "function" == typeof e;
    }, Ve = function(e){
      return e instanceof Error;
    }, Ke = function(e){
      return Object.prototype.toString.call(e).match(/^\[object (.*)\]$/)[1].toLowerCase();
    }, xe = function(e){
      if("string" != typeof e){
        return !1;
      } const t = e[0]; return !/[^a-zA-Z0-9]/.test(t);
    }, Be = 0; Date.now || (Date.now = function(){
    return new Date().getTime();
  }); var He = { now(){
      0 === Be && (Be = Date.now() - 1); const e = Date.now() - Be; return e > 4294967295 ? (Be += 4294967295, Date.now() - Be) : e;
    }, utc(){
      return Math.round(Date.now() / 1e3);
    } }, je = function e(t, n, o, a){
      if(!Fe(t) || !Fe(n)){
        return 0;
      }for(var s, r = 0, i = Object.keys(n), u = 0, c = i.length; u < c; u++){
        if(s = i[u], !(Ue(n[s]) || o && o.includes(s))){
          if(Fe(t[s]) && Fe(n[s])){
            r += e(t[s], n[s], o, a);
          }
          else {
            if(a && a.includes(n[s])){
              continue;
            } t[s] !== n[s] && (t[s] = n[s], r += 1);
          }
        }
      } return r;
    }, Ye = function(e){
      return JSON.stringify(e, ["message", "code"]);
    }, $e = function(e){
      if(0 === e.length){
        return 0;
      }for(var t = 0, n = 0, o = "undefined" != typeof document && void 0 !== document.characterSet ? document.characterSet : "UTF-8"; void 0 !== e[t];){
        n += e[t++].charCodeAt[t] <= 255 ? 1 : !1 === o ? 3 : 2;
      } return n;
    }, We = function(e){
      const t = e || 99999999; return Math.round(Math.random() * t);
    }, ze = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", Je = ze.length, Xe = function(e, t){
      for(const n in e){
        if(e[n] === t){
          return !0;
        }
      } return !1;
    }, Qe = {}, Ze = function(){
      if(X){
        return "https:";
      }if(Q && "undefined" == typeof window){
        return "https:";
      } let e = window.location.protocol; return ["http:", "https:"].indexOf(e) < 0 && (e = "http:"), e;
    }, et = function(e){
      return -1 === e.indexOf("http://") || -1 === e.indexOf("https://") ? `https://${e}` : e.replace(/https|http/, "https");
    }, nt = function e(t){
      if(0 === Object.getOwnPropertyNames(t).length){
        return Object.create(null);
      } let o = Array.isArray(t) ? [] : Object.create(null), a = ""; for(const s in t){
        null !== t[s] ? void 0 !== t[s] ? (a = n(t[s]), ["string", "number", "function", "boolean"].indexOf(a) >= 0 ? o[s] = t[s] : o[s] = e(t[s])) : o[s] = void 0 : o[s] = null;
      } return o;
    }; function ot(e, t){
    we(e) && we(t) ? t.forEach(t => {
      const n = t.key, o = t.value, a = e.find(e => e.key === n); a ? a.value = o : e.push({ key: n, value: o });
    }) : Ne.warn("updateCustomField target 或 source 不是数组，忽略此次更新。");
  } const at = function(e){
      return e === S.GRP_PUBLIC;
    }, st = function(e){
      return e === S.GRP_AVCHATROOM;
    }, rt = function(e){
      return Ge(e) && e.slice(0, 3) === S.CONV_C2C;
    }, it = function(e){
      return Ge(e) && e.slice(0, 5) === S.CONV_GROUP;
    }, ut = function(e){
      return Ge(e) && e === S.CONV_SYSTEM;
    }; function ct(e, t){
    const n = {}; return Object.keys(e).forEach(o => {
      n[o] = t(e[o], o);
    }), n;
  } function lt(){
    function e(){
      return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
    } return "".concat(e() + e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e());
  } function dt(){
    let e = "unknown"; if(fe && (e = "mac"), _e && (e = "windows"), re && (e = "ios"), ie && (e = "android"), X){
      try {
        const t = Z.getSystemInfoSync().platform; void 0 !== t && (e = t);
      }
      catch(n){}
    } return e;
  } function pt(e){
    const t = e.originUrl, n = void 0 === t ? void 0 : t, o = e.originWidth, a = e.originHeight, s = e.min, r = void 0 === s ? 198 : s, i = parseInt(o), u = parseInt(a), c = { url: void 0, width: 0, height: 0 }; return (i <= u ? i : u) <= r ? (c.url = n, c.width = i, c.height = u) : (u <= i ? (c.width = Math.ceil(i * r / u), c.height = r) : (c.width = r, c.height = Math.ceil(u * r / i)), c.url = "".concat(n, 198 === r ? "?imageView2/3/w/198/h/198" : "?imageView2/3/w/720/h/720")), Ue(n) ? g(c, Le) : c;
  } function gt(e){
    const t = e[2]; e[2] = e[1], e[1] = t; for(let n = 0; n < e.length; n++){
      e[n].setType(n);
    }
  } function ht(e){
    const t = e.servcmd; return t.slice(t.indexOf(".") + 1);
  } function _t(e, t){
    return Math.round(Number(e) * Math.pow(10, t)) / Math.pow(10, t);
  } function ft(e, t){
    return e.includes(t);
  } function mt(e, t){
    return e.includes(t);
  } const Mt = Object.prototype.hasOwnProperty; function vt(e){
    if(null == e){
      return !0;
    }if("boolean" == typeof e){
      return !1;
    }if("number" == typeof e){
      return 0 === e;
    }if("string" == typeof e){
      return 0 === e.length;
    }if("function" == typeof e){
      return 0 === e.length;
    }if(Array.isArray(e)){
      return 0 === e.length;
    }if(e instanceof Error){
      return "" === e.message;
    }if(Pe(e)){
      for(const t in e){
        if(Mt.call(e, t)){
          return !1;
        }
      } return !0;
    } return !("map" !== Ke(e) && !function(e){
      return "set" === Ke(e);
    }(e) && !Oe(e)) && 0 === e.size;
  } function yt(e, t, n){
    if(void 0 === t){
      return !0;
    } let o = !0; if("object" === L(t).toLowerCase()){
      Object.keys(t).forEach(a => {
        const s = 1 === e.length ? e[0][a] : void 0; o = !!It(s, t[a], n, a) && o;
      });
    }
    else if("array" === L(t).toLowerCase()){
      for(let a = 0; a < t.length; a++){
        o = !!It(e[a], t[a], n, t[a].name) && o;
      }
    }if(o){
      return o;
    } throw new Error("Params validate failed.");
  } function It(e, t, n, o){
    if(void 0 === t){
      return !0;
    } let a = !0; return t.required && vt(e) && (Te.error("TIM [".concat(n, "] Missing required params: \"").concat(o, "\".")), a = !1), vt(e) || L(e).toLowerCase() === t.type.toLowerCase() || (Te.error("TIM [".concat(n, "] Invalid params: type check failed for \"").concat(o, "\".Expected ").concat(t.type, ".")), a = !1), t.validator && !t.validator(e) && (Te.error("TIM [".concat(n, "] Invalid params: custom validator check failed for params.")), a = !1), a;
  } var Tt, Dt = { UNSEND: "unSend", SUCCESS: "success", FAIL: "fail" }, Ct = { NOT_START: "notStart", PENDING: "pengding", RESOLVED: "resolved", REJECTED: "rejected" }, kt = function(e){
      return !!e && (!!(rt(e) || it(e) || ut(e)) || (console.warn("非法的会话 ID:".concat(e, "。会话 ID 组成方式：C2C + userID（单聊）GROUP + groupID（群聊）@TIM#SYSTEM（系统通知会话）")), !1));
    }, St = "请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#", Et = function(e){
      return e.param ? "".concat(e.api, " ").concat(e.param, " ").concat(e.desc, "。").concat(St).concat(e.api) : "".concat(e.api, " ").concat(e.desc, "。").concat(St).concat(e.api);
    }, At = { type: "String", required: !0 }, Nt = { type: "Array", required: !0 }, Lt = { type: "Object", required: !0 }, Ot = { login: { userID: At, userSig: At }, addToBlacklist: { userIDList: Nt }, on: [{ name: "eventName", type: "String", validator(e){
      return "string" == typeof e && 0 !== e.length || (console.warn(Et({ api: "on", param: "eventName", desc: "类型必须为 String，且不能为空" })), !1);
    } }, { name: "handler", type: "Function", validator(e){
      return "function" != typeof e ? (console.warn(Et({ api: "on", param: "handler", desc: "参数必须为 Function" })), !1) : ("" === e.name && console.warn("on 接口的 handler 参数推荐使用具名函数。具名函数可以使用 off 接口取消订阅，匿名函数无法取消订阅。"), !0);
    } }], once: [{ name: "eventName", type: "String", validator(e){
      return "string" == typeof e && 0 !== e.length || (console.warn(Et({ api: "once", param: "eventName", desc: "类型必须为 String，且不能为空" })), !1);
    } }, { name: "handler", type: "Function", validator(e){
      return "function" != typeof e ? (console.warn(Et({ api: "once", param: "handler", desc: "参数必须为 Function" })), !1) : ("" === e.name && console.warn("once 接口的 handler 参数推荐使用具名函数。"), !0);
    } }], off: [{ name: "eventName", type: "String", validator(e){
      return "string" == typeof e && 0 !== e.length || (console.warn(Et({ api: "off", param: "eventName", desc: "类型必须为 String，且不能为空" })), !1);
    } }, { name: "handler", type: "Function", validator(e){
      return "function" != typeof e ? (console.warn(Et({ api: "off", param: "handler", desc: "参数必须为 Function" })), !1) : ("" === e.name && console.warn("off 接口无法为匿名函数取消监听事件。"), !0);
    } }], sendMessage: [t({ name: "message" }, Lt)], getMessageList: { conversationID: t(t({}, At), {}, { validator(e){
      return kt(e);
    } }), nextReqMessageID: { type: "String" }, count: { type: "Number", validator(e){
      return !(!Ue(e) && !/^[1-9][0-9]*$/.test(e)) || (console.warn(Et({ api: "getMessageList", param: "count", desc: "必须为正整数" })), !1);
    } } }, setMessageRead: { conversationID: t(t({}, At), {}, { validator(e){
      return kt(e);
    } }) }, getConversationProfile: [t(t({ name: "conversationID" }, At), {}, { validator(e){
      return kt(e);
    } })], deleteConversation: [t(t({ name: "conversationID" }, At), {}, { validator(e){
      return kt(e);
    } })], pinConversation: { conversationID: t(t({}, At), {}, { validator(e){
      return kt(e);
    } }), isPinned: t({}, { type: "Boolean", required: !0 }) }, getConversationList: [{ name: "options", type: "Array", validator(e){
      return !!Ue(e) || (0 !== e.length || (console.warn(Et({ api: "getConversationList", desc: "获取指定会话时不能传入空数组" })), !1));
    } }], getGroupList: { groupProfileFilter: { type: "Array" } }, getGroupProfile: { groupID: At, groupCustomFieldFilter: { type: "Array" }, memberCustomFieldFilter: { type: "Array" } }, getGroupProfileAdvance: { groupIDList: Nt }, createGroup: { name: At }, joinGroup: { groupID: At, type: { type: "String" }, applyMessage: { type: "String" } }, quitGroup: [t({ name: "groupID" }, At)], handleApplication: { message: Lt, handleAction: At, handleMessage: { type: "String" } }, changeGroupOwner: { groupID: At, newOwnerID: At }, updateGroupProfile: { groupID: At, muteAllMembers: { type: "Boolean" } }, dismissGroup: [t({ name: "groupID" }, At)], searchGroupByID: [t({ name: "groupID" }, At)], initGroupAttributes: { groupID: At, groupAttributes: t(t({}, Lt), {}, { validator(e){
      let t = !0; return Object.keys(e).forEach(n => {
        if(!Ge(e[n])){
          return console.warn(Et({ api: "initGroupAttributes", desc: "群属性 value 必须是字符串" })), t = !1;
        }
      }), t;
    } }) }, setGroupAttributes: { groupID: At, groupAttributes: t(t({}, Lt), {}, { validator(e){
      let t = !0; return Object.keys(e).forEach(n => {
        if(!Ge(e[n])){
          return console.warn(Et({ api: "setGroupAttributes", desc: "群属性 value 必须是字符串" })), t = !1;
        }
      }), t;
    } }) }, deleteGroupAttributes: { groupID: At, keyList: { type: "Array", validator(e){
      if(Ue(e)){
        return console.warn(Et({ api: "deleteGroupAttributes", desc: "缺少必填参数：keyList" })), !1;
      }if(!we(e)){
        return !1;
      }if(!vt(e)){
        let t = !0; return e.forEach(e => {
          if(!Ge(e)){
            return console.warn(Et({ api: "deleteGroupAttributes", desc: "群属性 key 必须是字符串" })), t = !1;
          }
        }), t;
      } return !0;
    } } }, getGroupAttributes: { groupID: At, keyList: { type: "Array", validator(e){
      if(Ue(e)){
        return console.warn(Et({ api: "getGroupAttributes", desc: "缺少必填参数：keyList" })), !1;
      }if(!we(e)){
        return !1;
      }if(!vt(e)){
        let t = !0; return e.forEach(e => {
          if(!Ge(e)){
            return console.warn(Et({ api: "getGroupAttributes", desc: "群属性 key 必须是字符串" })), t = !1;
          }
        }), t;
      } return !0;
    } } }, getGroupMemberList: { groupID: At, offset: { type: "Number" }, count: { type: "Number" } }, getGroupMemberProfile: { groupID: At, userIDList: Nt, memberCustomFieldFilter: { type: "Array" } }, addGroupMember: { groupID: At, userIDList: Nt }, setGroupMemberRole: { groupID: At, userID: At, role: At }, setGroupMemberMuteTime: { groupID: At, userID: At, muteTime: { type: "Number", validator(e){
      return e >= 0;
    } } }, setGroupMemberNameCard: { groupID: At, userID: { type: "String" }, nameCard: { type: "String", validator(e){
      return Ge(e) ? (e.length, !0) : (console.warn(Et({ api: "setGroupMemberNameCard", param: "nameCard", desc: "类型必须为 String" })), !1);
    } } }, setMessageRemindType: { groupID: At, messageRemindType: At }, setGroupMemberCustomField: { groupID: At, userID: { type: "String" }, memberCustomField: Nt }, deleteGroupMember: { groupID: At }, createTextMessage: { to: At, conversationType: At, payload: t(t({}, Lt), {}, { validator(e){
      return Pe(e) ? Ge(e.text) ? 0 !== e.text.length || (console.warn(Et({ api: "createTextMessage", desc: "消息内容不能为空" })), !1) : (console.warn(Et({ api: "createTextMessage", param: "payload.text", desc: "类型必须为 String" })), !1) : (console.warn(Et({ api: "createTextMessage", param: "payload", desc: "类型必须为 plain object" })), !1);
    } }) }, createTextAtMessage: { to: At, conversationType: At, payload: t(t({}, Lt), {}, { validator(e){
      return Pe(e) ? Ge(e.text) ? 0 === e.text.length ? (console.warn(Et({ api: "createTextAtMessage", desc: "消息内容不能为空" })), !1) : !(e.atUserList && !we(e.atUserList)) || (console.warn(Et({ api: "createTextAtMessage", desc: "payload.atUserList 类型必须为数组" })), !1) : (console.warn(Et({ api: "createTextAtMessage", param: "payload.text", desc: "类型必须为 String" })), !1) : (console.warn(Et({ api: "createTextAtMessage", param: "payload", desc: "类型必须为 plain object" })), !1);
    } }) }, createCustomMessage: { to: At, conversationType: At, payload: t(t({}, Lt), {}, { validator(e){
      return Pe(e) ? e.data && !Ge(e.data) ? (console.warn(Et({ api: "createCustomMessage", param: "payload.data", desc: "类型必须为 String" })), !1) : e.description && !Ge(e.description) ? (console.warn(Et({ api: "createCustomMessage", param: "payload.description", desc: "类型必须为 String" })), !1) : !(e.extension && !Ge(e.extension)) || (console.warn(Et({ api: "createCustomMessage", param: "payload.extension", desc: "类型必须为 String" })), !1) : (console.warn(Et({ api: "createCustomMessage", param: "payload", desc: "类型必须为 plain object" })), !1);
    } }) }, createImageMessage: { to: At, conversationType: At, payload: t(t({}, Lt), {}, { validator(e){
      if(!Pe(e)){
        return console.warn(Et({ api: "createImageMessage", param: "payload", desc: "类型必须为 plain object" })), !1;
      }if(Ue(e.file)){
        return console.warn(Et({ api: "createImageMessage", param: "payload.file", desc: "不能为 undefined" })), !1;
      }if(Q){
        if(!(e.file instanceof HTMLInputElement || Oe(e.file))){
          return Pe(e.file) && "undefined" != typeof uni ? 0 !== e.file.tempFilePaths.length && 0 !== e.file.tempFiles.length || (console.warn(Et({ api: "createImageMessage", param: "payload.file", desc: "您没有选择文件，无法发送" })), !1) : (console.warn(Et({ api: "createImageMessage", param: "payload.file", desc: "类型必须是 HTMLInputElement 或 File" })), !1);
        }if(e.file instanceof HTMLInputElement && 0 === e.file.files.length){
          return console.warn(Et({ api: "createImageMessage", param: "payload.file", desc: "您没有选择文件，无法发送" })), !1;
        }
      } return !0;
    }, onProgress: { type: "Function", required: !1, validator(e){
      return Ue(e) && console.warn(Et({ api: "createImageMessage", desc: "没有 onProgress 回调，您将无法获取上传进度" })), !0;
    } } }) }, createAudioMessage: { to: At, conversationType: At, payload: t(t({}, Lt), {}, { validator(e){
      return !!Pe(e) || (console.warn(Et({ api: "createAudioMessage", param: "payload", desc: "类型必须为 plain object" })), !1);
    } }), onProgress: { type: "Function", required: !1, validator(e){
      return Ue(e) && console.warn(Et({ api: "createAudioMessage", desc: "没有 onProgress 回调，您将无法获取上传进度" })), !0;
    } } }, createVideoMessage: { to: At, conversationType: At, payload: t(t({}, Lt), {}, { validator(e){
      if(!Pe(e)){
        return console.warn(Et({ api: "createVideoMessage", param: "payload", desc: "类型必须为 plain object" })), !1;
      }if(Ue(e.file)){
        return console.warn(Et({ api: "createVideoMessage", param: "payload.file", desc: "不能为 undefined" })), !1;
      }if(Q){
        if(!(e.file instanceof HTMLInputElement || Oe(e.file))){
          return Pe(e.file) && "undefined" != typeof uni ? !!Oe(e.file.tempFile) || (console.warn(Et({ api: "createVideoMessage", param: "payload.file", desc: "您没有选择文件，无法发送" })), !1) : (console.warn(Et({ api: "createVideoMessage", param: "payload.file", desc: "类型必须是 HTMLInputElement 或 File" })), !1);
        }if(e.file instanceof HTMLInputElement && 0 === e.file.files.length){
          return console.warn(Et({ api: "createVideoMessage", param: "payload.file", desc: "您没有选择文件，无法发送" })), !1;
        }
      } return !0;
    } }), onProgress: { type: "Function", required: !1, validator(e){
      return Ue(e) && console.warn(Et({ api: "createVideoMessage", desc: "没有 onProgress 回调，您将无法获取上传进度" })), !0;
    } } }, createFaceMessage: { to: At, conversationType: At, payload: t(t({}, Lt), {}, { validator(e){
      return Pe(e) ? Re(e.index) ? !!Ge(e.data) || (console.warn(Et({ api: "createFaceMessage", param: "payload.data", desc: "类型必须为 String" })), !1) : (console.warn(Et({ api: "createFaceMessage", param: "payload.index", desc: "类型必须为 Number" })), !1) : (console.warn(Et({ api: "createFaceMessage", param: "payload", desc: "类型必须为 plain object" })), !1);
    } }) }, createFileMessage: { to: At, conversationType: At, payload: t(t({}, Lt), {}, { validator(e){
      if(!Pe(e)){
        return console.warn(Et({ api: "createFileMessage", param: "payload", desc: "类型必须为 plain object" })), !1;
      }if(Ue(e.file)){
        return console.warn(Et({ api: "createFileMessage", param: "payload.file", desc: "不能为 undefined" })), !1;
      }if(Q){
        if(!(e.file instanceof HTMLInputElement || Oe(e.file))){
          return Pe(e.file) && "undefined" != typeof uni ? 0 !== e.file.tempFilePaths.length && 0 !== e.file.tempFiles.length || (console.warn(Et({ api: "createFileMessage", param: "payload.file", desc: "您没有选择文件，无法发送" })), !1) : (console.warn(Et({ api: "createFileMessage", param: "payload.file", desc: "类型必须是 HTMLInputElement 或 File" })), !1);
        }if(e.file instanceof HTMLInputElement && 0 === e.file.files.length){
          return console.warn(Et({ api: "createFileMessage", desc: "您没有选择文件，无法发送" })), !1;
        }
      } return !0;
    } }), onProgress: { type: "Function", required: !1, validator(e){
      return Ue(e) && console.warn(Et({ api: "createFileMessage", desc: "没有 onProgress 回调，您将无法获取上传进度" })), !0;
    } } }, createLocationMessage: { to: At, conversationType: At, payload: t(t({}, Lt), {}, { validator(e){
      return Pe(e) ? Ge(e.description) ? Re(e.longitude) ? !!Re(e.latitude) || (console.warn(Et({ api: "createLocationMessage", param: "payload.latitude", desc: "类型必须为 Number" })), !1) : (console.warn(Et({ api: "createLocationMessage", param: "payload.longitude", desc: "类型必须为 Number" })), !1) : (console.warn(Et({ api: "createLocationMessage", param: "payload.description", desc: "类型必须为 String" })), !1) : (console.warn(Et({ api: "createLocationMessage", param: "payload", desc: "类型必须为 plain object" })), !1);
    } }) }, createMergerMessage: { to: At, conversationType: At, payload: t(t({}, Lt), {}, { validator(e){
      if(vt(e.messageList)){
        return console.warn(Et({ api: "createMergerMessage", desc: "不能为空数组" })), !1;
      }if(vt(e.compatibleText)){
        return console.warn(Et({ api: "createMergerMessage", desc: "类型必须为 String，且不能为空" })), !1;
      } let t = !1; return e.messageList.forEach(e => {
        e.status === Dt.FAIL && (t = !0);
      }), !t || (console.warn(Et({ api: "createMergerMessage", desc: "不支持合并已发送失败的消息" })), !1);
    } }) }, revokeMessage: [t(t({ name: "message" }, Lt), {}, { validator(e){
      return vt(e) ? (console.warn("revokeMessage 请传入消息（Message）实例"), !1) : e.conversationType === S.CONV_SYSTEM ? (console.warn("revokeMessage 不能撤回系统会话消息，只能撤回单聊消息或群消息"), !1) : !0 !== e.isRevoked || (console.warn("revokeMessage 消息已经被撤回，请勿重复操作"), !1);
    } })], deleteMessage: [t(t({ name: "messageList" }, Nt), {}, { validator(e){
      return !vt(e) || (console.warn(Et({ api: "deleteMessage", param: "messageList", desc: "不能为空数组" })), !1);
    } })], getUserProfile: { userIDList: { type: "Array", validator(e){
      return we(e) ? (0 === e.length && console.warn(Et({ api: "getUserProfile", param: "userIDList", desc: "不能为空数组" })), !0) : (console.warn(Et({ api: "getUserProfile", param: "userIDList", desc: "必须为数组" })), !1);
    } } }, updateMyProfile: { profileCustomField: { type: "Array", validator(e){
      return !!Ue(e) || (!!we(e) || (console.warn(Et({ api: "updateMyProfile", param: "profileCustomField", desc: "必须为数组" })), !1));
    } } }, addFriend: { to: At, source: { type: "String", required: !0, validator(e){
      return !!e && (e.startsWith("AddSource_Type_") ? !(e.replace("AddSource_Type_", "").length > 8) || (console.warn(Et({ api: "addFriend", desc: "加好友来源字段的关键字长度不得超过8字节" })), !1) : (console.warn(Et({ api: "addFriend", desc: "加好友来源字段的前缀必须是：AddSource_Type_" })), !1));
    } }, remark: { type: "String", required: !1, validator(e){
      return !(Ge(e) && e.length > 96) || (console.warn(Et({ api: "updateFriend", desc: " 备注长度最长不得超过 96 个字节" })), !1);
    } } }, deleteFriend: { userIDList: Nt }, checkFriend: { userIDList: Nt }, getFriendProfile: { userIDList: Nt }, updateFriend: { userID: At, remark: { type: "String", required: !1, validator(e){
      return !(Ge(e) && e.length > 96) || (console.warn(Et({ api: "updateFriend", desc: " 备注长度最长不得超过 96 个字节" })), !1);
    } }, friendCustomField: { type: "Array", required: !1, validator(e){
      if(e){
        if(!we(e)){
          return console.warn(Et({ api: "updateFriend", param: "friendCustomField", desc: "必须为数组" })), !1;
        } let t = !0; return e.forEach(e => Ge(e.key) && -1 !== e.key.indexOf("Tag_SNS_Custom") ? Ge(e.value) ? e.value.length > 8 ? (console.warn(Et({ api: "updateFriend", desc: "好友自定义字段的关键字长度不得超过8字节" })), t = !1) : void 0 : (console.warn(Et({ api: "updateFriend", desc: "类型必须为 String" })), t = !1) : (console.warn(Et({ api: "updateFriend", desc: "好友自定义字段的前缀必须是 Tag_SNS_Custom" })), t = !1)), t;
      } return !0;
    } } }, acceptFriendApplication: { userID: At }, refuseFriendApplication: { userID: At }, deleteFriendApplication: { userID: At }, createFriendGroup: { name: At }, deleteFriendGroup: { name: At }, addToFriendGroup: { name: At, userIDList: Nt }, removeFromFriendGroup: { name: At, userIDList: Nt }, renameFriendGroup: { oldName: At, newName: At } }, Rt = { login: "login", logout: "logout", on: "on", once: "once", off: "off", setLogLevel: "setLogLevel", registerPlugin: "registerPlugin", destroy: "destroy", createTextMessage: "createTextMessage", createTextAtMessage: "createTextAtMessage", createImageMessage: "createImageMessage", createAudioMessage: "createAudioMessage", createVideoMessage: "createVideoMessage", createCustomMessage: "createCustomMessage", createFaceMessage: "createFaceMessage", createFileMessage: "createFileMessage", createLocationMessage: "createLocationMessage", createMergerMessage: "createMergerMessage", downloadMergerMessage: "downloadMergerMessage", createForwardMessage: "createForwardMessage", sendMessage: "sendMessage", resendMessage: "resendMessage", revokeMessage: "revokeMessage", deleteMessage: "deleteMessage", getMessageList: "getMessageList", setMessageRead: "setMessageRead", getConversationList: "getConversationList", getConversationProfile: "getConversationProfile", deleteConversation: "deleteConversation", pinConversation: "pinConversation", getGroupList: "getGroupList", getGroupProfile: "getGroupProfile", createGroup: "createGroup", joinGroup: "joinGroup", updateGroupProfile: "updateGroupProfile", quitGroup: "quitGroup", dismissGroup: "dismissGroup", changeGroupOwner: "changeGroupOwner", searchGroupByID: "searchGroupByID", setMessageRemindType: "setMessageRemindType", handleGroupApplication: "handleGroupApplication", initGroupAttributes: "initGroupAttributes", setGroupAttributes: "setGroupAttributes", deleteGroupAttributes: "deleteGroupAttributes", getGroupAttributes: "getGroupAttributes", getGroupMemberProfile: "getGroupMemberProfile", getGroupMemberList: "getGroupMemberList", addGroupMember: "addGroupMember", deleteGroupMember: "deleteGroupMember", setGroupMemberNameCard: "setGroupMemberNameCard", setGroupMemberMuteTime: "setGroupMemberMuteTime", setGroupMemberRole: "setGroupMemberRole", setGroupMemberCustomField: "setGroupMemberCustomField", getGroupOnlineMemberCount: "getGroupOnlineMemberCount", getMyProfile: "getMyProfile", getUserProfile: "getUserProfile", updateMyProfile: "updateMyProfile", getBlacklist: "getBlacklist", addToBlacklist: "addToBlacklist", removeFromBlacklist: "removeFromBlacklist", getFriendList: "getFriendList", addFriend: "addFriend", deleteFriend: "deleteFriend", checkFriend: "checkFriend", updateFriend: "updateFriend", getFriendProfile: "getFriendProfile", getFriendApplicationList: "getFriendApplicationList", refuseFriendApplication: "refuseFriendApplication", deleteFriendApplication: "deleteFriendApplication", acceptFriendApplication: "acceptFriendApplication", setFriendApplicationRead: "setFriendApplicationRead", getFriendGroupList: "getFriendGroupList", createFriendGroup: "createFriendGroup", renameFriendGroup: "renameFriendGroup", deleteFriendGroup: "deleteFriendGroup", addToFriendGroup: "addToFriendGroup", removeFromFriendGroup: "removeFromFriendGroup", callExperimentalAPI: "callExperimentalAPI" }, Gt = "sign", bt = "message", Pt = "user", wt = "c2c", Ut = "group", Ft = "sns", qt = "groupMember", Vt = "conversation", Kt = "context", xt = "storage", Bt = "eventStat", Ht = "netMonitor", jt = "bigDataChannel", Yt = "upload", $t = "plugin", Wt = "syncUnreadMessage", zt = "session", Jt = "channel", Xt = "message_loss_detection", Qt = "cloudControl", Zt = "worker", en = "pullGroupMessage", tn = "qualityStat", nn = function(){
      function e(t){
        o(this, e), this._moduleManager = t, this._className = "";
      } return s(e, [{ key: "isLoggedIn", value(){
        return this._moduleManager.getModule(Kt).isLoggedIn();
      } }, { key: "isOversea", value(){
        return this._moduleManager.getModule(Kt).isOversea();
      } }, { key: "getMyUserID", value(){
        return this._moduleManager.getModule(Kt).getUserID();
      } }, { key: "getModule", value(e){
        return this._moduleManager.getModule(e);
      } }, { key: "getPlatform", value(){
        return ee;
      } }, { key: "getNetworkType", value(){
        return this._moduleManager.getModule(Ht).getNetworkType();
      } }, { key: "probeNetwork", value(){
        return this._moduleManager.getModule(Ht).probe();
      } }, { key: "getCloudConfig", value(e){
        return this._moduleManager.getModule(Qt).getCloudConfig(e);
      } }, { key: "emitOuterEvent", value(e, t){
        this._moduleManager.getOuterEmitterInstance().emit(e, t);
      } }, { key: "emitInnerEvent", value(e, t){
        this._moduleManager.getInnerEmitterInstance().emit(e, t);
      } }, { key: "getInnerEmitterInstance", value(){
        return this._moduleManager.getInnerEmitterInstance();
      } }, { key: "generateTjgID", value(e){
        return `${this._moduleManager.getModule(Kt).getTinyID()}-${e.random}`;
      } }, { key: "filterModifiedMessage", value(e){
        if(!vt(e)){
          const t = e.filter(e => !0 === e.isModified); t.length > 0 && this.emitOuterEvent(k.MESSAGE_MODIFIED, t);
        }
      } }, { key: "filterUnmodifiedMessage", value(e){
        return vt(e) ? [] : e.filter(e => !1 === e.isModified);
      } }, { key: "request", value(e){
        return this._moduleManager.getModule(zt).request(e);
      } }]), e;
    }(), on = "wslogin", an = "wslogout", sn = "wshello", rn = "getmsg", un = "authkey", cn = "sendmsg", ln = "send_group_msg", dn = "portrait_get_all", pn = "portrait_set", gn = "black_list_get", hn = "black_list_add", _n = "black_list_delete", fn = "msgwithdraw", mn = "msgreaded", Mn = "getroammsg", vn = "get_peer_read_time", yn = "delete_c2c_msg_ramble", In = "page_get", Tn = "get", Dn = "delete", Cn = "top", kn = "deletemsg", Sn = "get_joined_group_list", En = "get_group_info", An = "create_group", Nn = "destroy_group", Ln = "modify_group_base_info", On = "apply_join_group", Rn = "apply_join_group_noauth", Gn = "quit_group", bn = "get_group_public_info", Pn = "change_group_owner", wn = "handle_apply_join_group", Un = "handle_invite_join_group", Fn = "group_msg_recall", qn = "msg_read_report", Vn = "group_msg_get", Kn = "get_pendency", xn = "deletemsg", Bn = "get_msg", Hn = "get_msg_noauth", jn = "get_online_member_num", Yn = "delete_group_ramble_msg_by_seq", $n = "set_group_attr", Wn = "modify_group_attr", zn = "delete_group_attr", Jn = "clear_group_attr", Xn = "get_group_attr", Qn = "get_group_member_info", Zn = "get_specified_group_member_info", eo = "add_group_member", to = "delete_group_member", no = "modify_group_member_info", oo = "cos", ao = "pre_sig", so = "tim_web_report_v2", ro = "alive", io = "msg_push", uo = "ws_msg_push_ack", co = "stat_forceoffline", lo = "save_relay_json_msg", po = "get_relay_json_msg", go = "fetch_config", ho = "push_configv2", _o = { NO_SDKAPPID: 2e3, NO_ACCOUNT_TYPE: 2001, NO_IDENTIFIER: 2002, NO_USERSIG: 2003, NO_TINYID: 2022, NO_A2KEY: 2023, USER_NOT_LOGGED_IN: 2024, REPEAT_LOGIN: 2025, COS_UNDETECTED: 2040, COS_GET_SIG_FAIL: 2041, MESSAGE_SEND_FAIL: 2100, MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS: 2103, MESSAGE_SEND_NEED_MESSAGE_INSTANCE: 2105, MESSAGE_SEND_INVALID_CONVERSATION_TYPE: 2106, MESSAGE_FILE_IS_EMPTY: 2108, MESSAGE_ONPROGRESS_FUNCTION_ERROR: 2109, MESSAGE_REVOKE_FAIL: 2110, MESSAGE_DELETE_FAIL: 2111, MESSAGE_IMAGE_SELECT_FILE_FIRST: 2251, MESSAGE_IMAGE_TYPES_LIMIT: 2252, MESSAGE_IMAGE_SIZE_LIMIT: 2253, MESSAGE_AUDIO_UPLOAD_FAIL: 2300, MESSAGE_AUDIO_SIZE_LIMIT: 2301, MESSAGE_VIDEO_UPLOAD_FAIL: 2350, MESSAGE_VIDEO_SIZE_LIMIT: 2351, MESSAGE_VIDEO_TYPES_LIMIT: 2352, MESSAGE_FILE_UPLOAD_FAIL: 2400, MESSAGE_FILE_SELECT_FILE_FIRST: 2401, MESSAGE_FILE_SIZE_LIMIT: 2402, MESSAGE_FILE_URL_IS_EMPTY: 2403, MESSAGE_MERGER_TYPE_INVALID: 2450, MESSAGE_MERGER_KEY_INVALID: 2451, MESSAGE_MERGER_DOWNLOAD_FAIL: 2452, MESSAGE_FORWARD_TYPE_INVALID: 2453, CONVERSATION_NOT_FOUND: 2500, USER_OR_GROUP_NOT_FOUND: 2501, CONVERSATION_UN_RECORDED_TYPE: 2502, ILLEGAL_GROUP_TYPE: 2600, CANNOT_JOIN_WORK: 2601, CANNOT_CHANGE_OWNER_IN_AVCHATROOM: 2620, CANNOT_CHANGE_OWNER_TO_SELF: 2621, CANNOT_DISMISS_Work: 2622, MEMBER_NOT_IN_GROUP: 2623, CANNOT_USE_GRP_ATTR_NOT_AVCHATROOM: 2641, CANNOT_USE_GRP_ATTR_AVCHATROOM_UNJOIN: 2642, JOIN_GROUP_FAIL: 2660, CANNOT_ADD_MEMBER_IN_AVCHATROOM: 2661, CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN: 2662, CANNOT_KICK_MEMBER_IN_AVCHATROOM: 2680, NOT_OWNER: 2681, CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM: 2682, INVALID_MEMBER_ROLE: 2683, CANNOT_SET_SELF_MEMBER_ROLE: 2684, CANNOT_MUTE_SELF: 2685, NOT_MY_FRIEND: 2700, ALREADY_MY_FRIEND: 2701, FRIEND_GROUP_EXISTED: 2710, FRIEND_GROUP_NOT_EXIST: 2711, FRIEND_APPLICATION_NOT_EXIST: 2716, UPDATE_PROFILE_INVALID_PARAM: 2721, UPDATE_PROFILE_NO_KEY: 2722, ADD_BLACKLIST_INVALID_PARAM: 2740, DEL_BLACKLIST_INVALID_PARAM: 2741, CANNOT_ADD_SELF_TO_BLACKLIST: 2742, ADD_FRIEND_INVALID_PARAM: 2760, NETWORK_ERROR: 2800, NETWORK_TIMEOUT: 2801, NETWORK_BASE_OPTIONS_NO_URL: 2802, NETWORK_UNDEFINED_SERVER_NAME: 2803, NETWORK_PACKAGE_UNDEFINED: 2804, NO_NETWORK: 2805, CONVERTOR_IRREGULAR_PARAMS: 2900, NOTICE_RUNLOOP_UNEXPECTED_CONDITION: 2901, NOTICE_RUNLOOP_OFFSET_LOST: 2902, UNCAUGHT_ERROR: 2903, GET_LONGPOLL_ID_FAILED: 2904, INVALID_OPERATION: 2905, CANNOT_FIND_PROTOCOL: 2997, CANNOT_FIND_MODULE: 2998, SDK_IS_NOT_READY: 2999, LONG_POLL_KICK_OUT: 91101, MESSAGE_A2KEY_EXPIRED: 20002, ACCOUNT_A2KEY_EXPIRED: 70001, LONG_POLL_API_PARAM_ERROR: 90001, HELLO_ANSWER_KICKED_OUT: 1002 }, fo = "无 SDKAppID", mo = "无 userID", Mo = "无 userSig", vo = "无 tinyID", yo = "无 a2key", Io = "用户未登录", To = "重复登录", Do = "未检测到 COS 上传插件", Co = "获取 COS 预签名 URL 失败", ko = "消息发送失败", So = "需要 Message 的实例", Eo = "Message.conversationType 只能为 \"C2C\" 或 \"GROUP\"", Ao = "无法发送空文件", No = "回调函数运行时遇到错误，请检查接入侧代码", Lo = "消息撤回失败", Oo = "消息删除失败", Ro = "请先选择一个图片", Go = "只允许上传 jpg png jpeg gif bmp格式的图片", bo = "图片大小超过20M，无法发送", Po = "语音上传失败", wo = "语音大小大于20M，无法发送", Uo = "视频上传失败", Fo = "视频大小超过100M，无法发送", qo = "只允许上传 mp4 格式的视频", Vo = "文件上传失败", Ko = "请先选择一个文件", xo = "文件大小超过100M，无法发送 ", Bo = "缺少必要的参数文件 URL", Ho = "非合并消息", jo = "合并消息的 messageKey 无效", Yo = "下载合并消息失败", $o = "选择的消息类型（如群提示消息）不可以转发", Wo = "没有找到相应的会话，请检查传入参数", zo = "没有找到相应的用户或群组，请检查传入参数", Jo = "未记录的会话类型", Xo = "非法的群类型，请检查传入参数", Qo = "不能加入 Work 类型的群组", Zo = "AVChatRoom 类型的群组不能转让群主", ea = "不能把群主转让给自己", ta = "不能解散 Work 类型的群组", na = "用户不在该群组内", oa = "加群失败，请检查传入参数或重试", aa = "AVChatRoom 类型的群不支持邀请群成员", sa = "非 AVChatRoom 类型的群组不允许匿名加群，请先登录后再加群", ra = "不能在 AVChatRoom 类型的群组踢人", ia = "你不是群主，只有群主才有权限操作", ua = "不能在 Work / AVChatRoom 类型的群中设置群成员身份", ca = "不合法的群成员身份，请检查传入参数", la = "不能设置自己的群成员身份，请检查传入参数", da = "不能将自己禁言，请检查传入参数", pa = "传入 updateMyProfile 接口的参数无效", ga = "updateMyProfile 无标配资料字段或自定义资料字段", ha = "传入 addToBlacklist 接口的参数无效", _a = "传入 removeFromBlacklist 接口的参数无效", fa = "不能拉黑自己", ma = "网络错误", Ma = "请求超时", va = "未连接到网络", ya = "无效操作，如调用了未定义或者未实现的方法等", Ia = "无法找到协议", Ta = "无法找到模块", Da = "接口需要 SDK 处于 ready 状态后才能调用", Ca = "upload", ka = "networkRTT", Sa = "messageE2EDelay", Ea = "sendMessageC2C", Aa = "sendMessageGroup", Na = "sendMessageGroupAV", La = "sendMessageRichMedia", Oa = "cosUpload", Ra = "messageReceivedGroup", Ga = "messageReceivedGroupAVPush", ba = "messageReceivedGroupAVPull", Pa = (r(Tt = {}, ka, 2), r(Tt, Sa, 3), r(Tt, Ea, 4), r(Tt, Aa, 5), r(Tt, Na, 6), r(Tt, La, 7), r(Tt, Ra, 8), r(Tt, Ga, 9), r(Tt, ba, 10), r(Tt, Oa, 11), Tt), wa = { info: 4, warning: 5, error: 6 }, Ua = { "wifi": 1, "2g": 2, "3g": 3, "4g": 4, "5g": 5, "unknown": 6, "none": 7, "online": 8 }, Fa = { login: 4 }, qa = function(){
      function e(t){
        o(this, e), this.eventType = Fa[t] || 0, this.timestamp = 0, this.networkType = 8, this.code = 0, this.message = "", this.moreMessage = "", this.extension = t, this.costTime = 0, this.duplicate = !1, this.level = 4, this._sentFlag = !1, this._startts = Ce();
      } return s(e, [{ key: "updateTimeStamp", value(){
        this.timestamp = Ce();
      } }, { key: "start", value(e){
        return this._startts = e, this;
      } }, { key: "end", value(){
        const e = this, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; if(!this._sentFlag){
          const n = Ce(); this.costTime = n - this._startts, this.setMoreMessage("host:".concat(dt(), " startts:").concat(this._startts, " endts:").concat(n)), t ? (this._sentFlag = !0, this._eventStatModule && this._eventStatModule.pushIn(this)) : setTimeout(() => {
            e._sentFlag = !0, e._eventStatModule && e._eventStatModule.pushIn(e);
          }, 0);
        }
      } }, { key: "setError", value(e, t, n){
        return e instanceof Error ? (this._sentFlag || (this.setNetworkType(n), t ? (e.code && this.setCode(e.code), e.message && this.setMoreMessage(e.message)) : (this.setCode(_o.NO_NETWORK), this.setMoreMessage(va)), this.setLevel("error")), this) : (Ne.warn("SSOLogData.setError value not instanceof Error, please check!"), this);
      } }, { key: "setCode", value(e){
        return Ue(e) || this._sentFlag || ("ECONNABORTED" === e && (this.code = 103), Re(e) ? this.code = e : Ne.warn("SSOLogData.setCode value not a number, please check!", e, n(e))), this;
      } }, { key: "setMessage", value(e){
        return Ue(e) || this._sentFlag || (Re(e) && (this.message = e.toString()), Ge(e) && (this.message = e)), this;
      } }, { key: "setLevel", value(e){
        return Ue(e) || this._sentFlag || (this.level = wa[e]), this;
      } }, { key: "setMoreMessage", value(e){
        return vt(this.moreMessage) ? this.moreMessage = "".concat(e) : this.moreMessage += " ".concat(e), this;
      } }, { key: "setNetworkType", value(e){
        return Ue(e) || Ue(Ua[e]) ? Ne.warn("SSOLogData.setNetworkType value is undefined, please check!") : this.networkType = Ua[e], this;
      } }, { key: "getStartTs", value(){
        return this._startts;
      } }], [{ key: "bindEventStatModule", value(t){
        e.prototype._eventStatModule = t;
      } }]), e;
    }(), Va = "sdkConstruct", Ka = "sdkReady", xa = "login", Ba = "logout", Ha = "kickedOut", ja = "registerPlugin", Ya = "wsConnect", $a = "wsOnOpen", Wa = "wsOnClose", za = "wsOnError", Ja = "getCosAuthKey", Xa = "getCosPreSigUrl", Qa = "upload", Za = "sendMessage", es = "getC2CRoamingMessages", ts = "getGroupRoamingMessages", ns = "revokeMessage", os = "deleteMessage", as = "setC2CMessageRead", ss = "setGroupMessageRead", rs = "emptyMessageBody", is = "getPeerReadTime", us = "uploadMergerMessage", cs = "downloadMergerMessage", ls = "jsonParseError", ds = "messageE2EDelayException", ps = "getConversationList", gs = "getConversationProfile", hs = "deleteConversation", _s = "pinConversation", fs = "getConversationListInStorage", ms = "syncConversationList", Ms = "createGroup", vs = "applyJoinGroup", ys = "quitGroup", Is = "searchGroupByID", Ts = "changeGroupOwner", Ds = "handleGroupApplication", Cs = "handleGroupInvitation", ks = "setMessageRemindType", Ss = "dismissGroup", Es = "updateGroupProfile", As = "getGroupList", Ns = "getGroupProfile", Ls = "getGroupListInStorage", Os = "getGroupLastSequence", Rs = "getGroupMissingMessage", Gs = "pagingGetGroupList", bs = "getGroupSimplifiedInfo", Ps = "joinWithoutAuth", ws = "initGroupAttributes", Us = "setGroupAttributes", Fs = "deleteGroupAttributes", qs = "getGroupAttributes", Vs = "getGroupMemberList", Ks = "getGroupMemberProfile", xs = "addGroupMember", Bs = "deleteGroupMember", Hs = "setGroupMemberMuteTime", js = "setGroupMemberNameCard", Ys = "setGroupMemberRole", $s = "setGroupMemberCustomField", Ws = "getGroupOnlineMemberCount", zs = "longPollingAVError", Js = "messageLoss", Xs = "messageStacked", Qs = "getUserProfile", Zs = "updateMyProfile", er = "getBlacklist", tr = "addToBlacklist", nr = "removeFromBlacklist", or = "callbackFunctionError", ar = "fetchCloudControlConfig", sr = "pushedCloudControlConfig", rr = "error", ir = function(){
      function e(t){
        o(this, e), this.type = S.MSG_TEXT, this.content = { text: t.text || "" };
      } return s(e, [{ key: "setText", value(e){
        this.content.text = e;
      } }, { key: "sendable", value(){
        return 0 !== this.content.text.length;
      } }]), e;
    }(), ur = { JSON: { TYPE: { C2C: { NOTICE: 1, COMMON: 9, EVENT: 10 }, GROUP: { COMMON: 3, TIP: 4, SYSTEM: 5, TIP2: 6 }, FRIEND: { NOTICE: 7 }, PROFILE: { NOTICE: 8 } }, SUBTYPE: { C2C: { COMMON: 0, READED: 92, KICKEDOUT: 96 }, GROUP: { COMMON: 0, LOVEMESSAGE: 1, TIP: 2, REDPACKET: 3 } }, OPTIONS: { GROUP: { JOIN: 1, QUIT: 2, KICK: 3, SET_ADMIN: 4, CANCEL_ADMIN: 5, MODIFY_GROUP_INFO: 6, MODIFY_MEMBER_INFO: 7 } } }, PROTOBUF: {}, IMAGE_TYPES: { ORIGIN: 1, LARGE: 2, SMALL: 3 }, IMAGE_FORMAT: { JPG: 1, JPEG: 1, GIF: 2, PNG: 3, BMP: 4, UNKNOWN: 255 } }, cr = { NICK: "Tag_Profile_IM_Nick", GENDER: "Tag_Profile_IM_Gender", BIRTHDAY: "Tag_Profile_IM_BirthDay", LOCATION: "Tag_Profile_IM_Location", SELFSIGNATURE: "Tag_Profile_IM_SelfSignature", ALLOWTYPE: "Tag_Profile_IM_AllowType", LANGUAGE: "Tag_Profile_IM_Language", AVATAR: "Tag_Profile_IM_Image", MESSAGESETTINGS: "Tag_Profile_IM_MsgSettings", ADMINFORBIDTYPE: "Tag_Profile_IM_AdminForbidType", LEVEL: "Tag_Profile_IM_Level", ROLE: "Tag_Profile_IM_Role" }, lr = { UNKNOWN: "Gender_Type_Unknown", FEMALE: "Gender_Type_Female", MALE: "Gender_Type_Male" }, dr = { NONE: "AdminForbid_Type_None", SEND_OUT: "AdminForbid_Type_SendOut" }, pr = { NEED_CONFIRM: "AllowType_Type_NeedConfirm", ALLOW_ANY: "AllowType_Type_AllowAny", DENY_ANY: "AllowType_Type_DenyAny" }, gr = "JoinedSuccess", hr = "WaitAdminApproval", _r = function(){
      function e(t){
        o(this, e), this._imageMemoryURL = "", X ? this.createImageDataASURLInWXMiniApp(t.file) : this.createImageDataASURLInWeb(t.file), this._initImageInfoModel(), this.type = S.MSG_IMAGE, this._percent = 0, this.content = { imageFormat: t.imageFormat || ur.IMAGE_FORMAT.UNKNOWN, uuid: t.uuid, imageInfoArray: [] }, this.initImageInfoArray(t.imageInfoArray), this._defaultImage = "http://imgcache.qq.com/open/qcloud/video/act/webim-images/default.jpg", this._autoFixUrl();
      } return s(e, [{ key: "_initImageInfoModel", value(){
        const e = this; this._ImageInfoModel = function(t){
          this.instanceID = We(9999999), this.sizeType = t.type || 0, this.type = 0, this.size = t.size || 0, this.width = t.width || 0, this.height = t.height || 0, this.imageUrl = t.url || "", this.url = t.url || e._imageMemoryURL || e._defaultImage;
        }, this._ImageInfoModel.prototype = { setSizeType(e){
          this.sizeType = e;
        }, setType(e){
          this.type = e;
        }, setImageUrl(e){
          e && (this.imageUrl = e);
        }, getImageUrl(){
          return this.imageUrl;
        } };
      } }, { key: "initImageInfoArray", value(e){
        for(let t = 0, n = null, o = null; t <= 2;){
          o = Ue(e) || Ue(e[t]) ? { type: 0, size: 0, width: 0, height: 0, url: "" } : e[t], (n = new this._ImageInfoModel(o)).setSizeType(t + 1), n.setType(t), this.addImageInfo(n), t++;
        } this.updateAccessSideImageInfoArray();
      } }, { key: "updateImageInfoArray", value(e){
        for(var t, n = this.content.imageInfoArray.length, o = 0; o < n; o++){
          t = this.content.imageInfoArray[o], e[o].size && (t.size = e[o].size), e[o].url && t.setImageUrl(e[o].url), e[o].width && (t.width = e[o].width), e[o].height && (t.height = e[o].height);
        }
      } }, { key: "_autoFixUrl", value(){
        for(let e = this.content.imageInfoArray.length, t = "", n = "", o = ["http", "https"], a = null, s = 0; s < e; s++){
          this.content.imageInfoArray[s].url && "" !== (a = this.content.imageInfoArray[s]).imageUrl && (n = a.imageUrl.slice(0, a.imageUrl.indexOf("://") + 1), t = a.imageUrl.slice(a.imageUrl.indexOf("://") + 1), o.indexOf(n) < 0 && (n = "https:"), this.content.imageInfoArray[s].setImageUrl([n, t].join("")));
        }
      } }, { key: "updatePercent", value(e){
        this._percent = e, this._percent > 1 && (this._percent = 1);
      } }, { key: "updateImageFormat", value(e){
        this.content.imageFormat = ur.IMAGE_FORMAT[e.toUpperCase()] || ur.IMAGE_FORMAT.UNKNOWN;
      } }, { key: "createImageDataASURLInWeb", value(e){
        void 0 !== e && e.files.length > 0 && (this._imageMemoryURL = window.URL.createObjectURL(e.files[0]));
      } }, { key: "createImageDataASURLInWXMiniApp", value(e){
        e && e.url && (this._imageMemoryURL = e.url);
      } }, { key: "replaceImageInfo", value(e, t){
        this.content.imageInfoArray[t] instanceof this._ImageInfoModel || (this.content.imageInfoArray[t] = e);
      } }, { key: "addImageInfo", value(e){
        this.content.imageInfoArray.length >= 3 || this.content.imageInfoArray.push(e);
      } }, { key: "updateAccessSideImageInfoArray", value(){
        const e = this.content.imageInfoArray, t = e[0], n = t.width, o = void 0 === n ? 0 : n, a = t.height, s = void 0 === a ? 0 : a; 0 !== o && 0 !== s && (gt(e), Object.assign(e[2], pt({ originWidth: o, originHeight: s, min: 720 })));
      } }, { key: "sendable", value(){
        return 0 !== this.content.imageInfoArray.length && ("" !== this.content.imageInfoArray[0].imageUrl && 0 !== this.content.imageInfoArray[0].size);
      } }]), e;
    }(), fr = function(){
      function e(t){
        o(this, e), this.type = S.MSG_FACE, this.content = t || null;
      } return s(e, [{ key: "sendable", value(){
        return null !== this.content;
      } }]), e;
    }(), mr = function(){
      function e(t){
        o(this, e), this.type = S.MSG_AUDIO, this._percent = 0, this.content = { downloadFlag: 2, second: t.second, size: t.size, url: t.url, remoteAudioUrl: t.url || "", uuid: t.uuid };
      } return s(e, [{ key: "updatePercent", value(e){
        this._percent = e, this._percent > 1 && (this._percent = 1);
      } }, { key: "updateAudioUrl", value(e){
        this.content.remoteAudioUrl = e;
      } }, { key: "sendable", value(){
        return "" !== this.content.remoteAudioUrl;
      } }]), e;
    }(), Mr = { from: !0, groupID: !0, groupName: !0, to: !0 }, vr = function(){
      function e(t){
        o(this, e), this.type = S.MSG_GRP_TIP, this.content = {}, this._initContent(t);
      } return s(e, [{ key: "_initContent", value(e){
        const t = this; Object.keys(e).forEach(n => {
          switch(n){
            case "remarkInfo": break; case "groupProfile": t.content.groupProfile = {}, t._initGroupProfile(e[n]); break; case "operatorInfo": case "memberInfoList": break; case "msgMemberInfo": t.content.memberList = e[n], Object.defineProperty(t.content, "msgMemberInfo", { get(){
              return Ne.warn("!!! 禁言的群提示消息中的 payload.msgMemberInfo 属性即将废弃，请使用 payload.memberList 属性替代。 \n", "msgMemberInfo 中的 shutupTime 属性对应更改为 memberList 中的 muteTime 属性，表示禁言时长。 \n", "参考：群提示消息 https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.GroupTipPayload"), t.content.memberList.map(e => ({ userID: e.userID, shutupTime: e.muteTime }));
            } }); break; case "onlineMemberInfo": break; case "memberNum": t.content[n] = e[n], t.content.memberCount = e[n]; break; default: t.content[n] = e[n];
          }
        }), this.content.userIDList || (this.content.userIDList = [this.content.operatorID]);
      } }, { key: "_initGroupProfile", value(e){
        for(let t = Object.keys(e), n = 0; n < t.length; n++){
          const o = t[n]; Mr[o] && (this.content.groupProfile[o] = e[o]);
        }
      } }]), e;
    }(), yr = { from: !0, groupID: !0, groupName: !0, to: !0 }, Ir = function(){
      function e(t){
        o(this, e), this.type = S.MSG_GRP_SYS_NOTICE, this.content = {}, this._initContent(t);
      } return s(e, [{ key: "_initContent", value(e){
        const t = this; Object.keys(e).forEach(n => {
          switch(n){
            case "memberInfoList": break; case "remarkInfo": t.content.handleMessage = e[n]; break; case "groupProfile": t.content.groupProfile = {}, t._initGroupProfile(e[n]); break; default: t.content[n] = e[n];
          }
        });
      } }, { key: "_initGroupProfile", value(e){
        for(let t = Object.keys(e), n = 0; n < t.length; n++){
          const o = t[n]; yr[o] && ("groupName" === o ? this.content.groupProfile.name = e[o] : this.content.groupProfile[o] = e[o]);
        }
      } }]), e;
    }(), Tr = function(){
      function e(t){
        o(this, e), this.type = S.MSG_FILE, this._percent = 0; const n = this._getFileInfo(t); this.content = { downloadFlag: 2, fileUrl: t.url || "", uuid: t.uuid, fileName: n.name || "", fileSize: n.size || 0 };
      } return s(e, [{ key: "_getFileInfo", value(e){
        if(e.fileName && e.fileSize){
          return { size: e.fileSize, name: e.fileName };
        }if(X){
          return {};
        } const t = e.file.files[0]; return { size: t.size, name: t.name, type: t.type.slice(t.type.lastIndexOf("/") + 1).toLowerCase() };
      } }, { key: "updatePercent", value(e){
        this._percent = e, this._percent > 1 && (this._percent = 1);
      } }, { key: "updateFileUrl", value(e){
        this.content.fileUrl = e;
      } }, { key: "sendable", value(){
        return "" !== this.content.fileUrl && ("" !== this.content.fileName && 0 !== this.content.fileSize);
      } }]), e;
    }(), Dr = function(){
      function e(t){
        o(this, e), this.type = S.MSG_CUSTOM, this.content = { data: t.data || "", description: t.description || "", extension: t.extension || "" };
      } return s(e, [{ key: "setData", value(e){
        return this.content.data = e, this;
      } }, { key: "setDescription", value(e){
        return this.content.description = e, this;
      } }, { key: "setExtension", value(e){
        return this.content.extension = e, this;
      } }, { key: "sendable", value(){
        return 0 !== this.content.data.length || 0 !== this.content.description.length || 0 !== this.content.extension.length;
      } }]), e;
    }(), Cr = function(){
      function e(t){
        o(this, e), this.type = S.MSG_VIDEO, this._percent = 0, this.content = { remoteVideoUrl: t.remoteVideoUrl || t.videoUrl || "", videoFormat: t.videoFormat, videoSecond: parseInt(t.videoSecond, 10), videoSize: t.videoSize, videoUrl: t.videoUrl, videoDownloadFlag: 2, videoUUID: t.videoUUID, thumbUUID: t.thumbUUID, thumbFormat: t.thumbFormat, thumbWidth: t.thumbWidth, thumbHeight: t.thumbHeight, thumbSize: t.thumbSize, thumbDownloadFlag: 2, thumbUrl: t.thumbUrl };
      } return s(e, [{ key: "updatePercent", value(e){
        this._percent = e, this._percent > 1 && (this._percent = 1);
      } }, { key: "updateVideoUrl", value(e){
        e && (this.content.remoteVideoUrl = e);
      } }, { key: "sendable", value(){
        return "" !== this.content.remoteVideoUrl;
      } }]), e;
    }(), kr = function(){
      function e(t){
        o(this, e), this.type = S.MSG_LOCATION; const n = t.description, a = t.longitude, s = t.latitude; this.content = { description: n, longitude: a, latitude: s };
      } return s(e, [{ key: "sendable", value(){
        return !0;
      } }]), e;
    }(), Sr = function(){
      function e(t){
        if(o(this, e), this.from = t.from, this.messageSender = t.from, this.time = t.time, this.messageSequence = t.sequence, this.clientSequence = t.clientSequence || t.sequence, this.messageRandom = t.random, this.cloudCustomData = t.cloudCustomData || "", t.ID){
          this.nick = t.nick || "", this.avatar = t.avatar || "", this.messageBody = [{ type: t.type, payload: t.payload }], t.conversationType.startsWith(S.CONV_C2C) ? this.receiverUserID = t.to : t.conversationType.startsWith(S.CONV_GROUP) && (this.receiverGroupID = t.to), this.messageReceiver = t.to;
        }
        else {
          this.nick = t.nick || "", this.avatar = t.avatar || "", this.messageBody = []; const n = t.elements[0].type, a = t.elements[0].content; this._patchRichMediaPayload(n, a), n === S.MSG_MERGER ? this.messageBody.push({ type: n, payload: new Er(a).content }) : this.messageBody.push({ type: n, payload: a }), t.groupID && (this.receiverGroupID = t.groupID, this.messageReceiver = t.groupID), t.to && (this.receiverUserID = t.to, this.messageReceiver = t.to);
        }
      } return s(e, [{ key: "_patchRichMediaPayload", value(e, t){
        e === S.MSG_IMAGE ? t.imageInfoArray.forEach(e => {
          !e.imageUrl && e.url && (e.imageUrl = e.url, e.sizeType = e.type, 1 === e.type ? e.type = 0 : 3 === e.type && (e.type = 1));
        }) : e === S.MSG_VIDEO ? !t.remoteVideoUrl && t.videoUrl && (t.remoteVideoUrl = t.videoUrl) : e === S.MSG_AUDIO ? !t.remoteAudioUrl && t.url && (t.remoteAudioUrl = t.url) : e === S.MSG_FILE && !t.fileUrl && t.url && (t.fileUrl = t.url, t.url = void 0);
      } }]), e;
    }(), Er = function(){
      function e(t){
        if(o(this, e), this.type = S.MSG_MERGER, this.content = { downloadKey: "", pbDownloadKey: "", messageList: [], title: "", abstractList: [], compatibleText: "", version: 0, layersOverLimit: !1 }, t.downloadKey){
          const n = t.downloadKey, a = t.pbDownloadKey, s = t.title, r = t.abstractList, i = t.compatibleText, u = t.version; this.content.downloadKey = n, this.content.pbDownloadKey = a, this.content.title = s, this.content.abstractList = r, this.content.compatibleText = i, this.content.version = u || 0;
        }
        else if(vt(t.messageList)){
          1 === t.layersOverLimit && (this.content.layersOverLimit = !0);
        }
        else {
          const c = t.messageList, l = t.title, d = t.abstractList, p = t.compatibleText, g = t.version, h = []; c.forEach(e => {
            if(!vt(e)){
              const t = new Sr(e); h.push(t);
            }
          }), this.content.messageList = h, this.content.title = l, this.content.abstractList = d, this.content.compatibleText = p, this.content.version = g || 0;
        }Ne.debug("MergerElement.content:", this.content);
      } return s(e, [{ key: "sendable", value(){
        return !vt(this.content.messageList) || !vt(this.content.downloadKey);
      } }]), e;
    }(), Ar = { 1: S.MSG_PRIORITY_HIGH, 2: S.MSG_PRIORITY_NORMAL, 3: S.MSG_PRIORITY_LOW, 4: S.MSG_PRIORITY_LOWEST }, Nr = function(){
      function e(t){
        o(this, e), this.ID = "", this.conversationID = t.conversationID || null, this.conversationType = t.conversationType || S.CONV_C2C, this.conversationSubType = t.conversationSubType, this.time = t.time || Math.ceil(Date.now() / 1e3), this.sequence = t.sequence || 0, this.clientSequence = t.clientSequence || t.sequence || 0, this.random = t.random || 0 === t.random ? t.random : We(), this.priority = this._computePriority(t.priority), this.nick = t.nick || "", this.avatar = t.avatar || "", this.isPeerRead = !1, this.nameCard = "", this._elements = [], this.isPlaceMessage = t.isPlaceMessage || 0, this.isRevoked = 2 === t.isPlaceMessage || 8 === t.msgFlagBits, this.from = t.from || null, this.to = t.to || null, this.flow = "", this.isSystemMessage = t.isSystemMessage || !1, this.protocol = t.protocol || "JSON", this.isResend = !1, this.isRead = !1, this.status = t.status || Dt.SUCCESS, this._onlineOnlyFlag = !1, this._groupAtInfoList = [], this._relayFlag = !1, this.atUserList = [], this.cloudCustomData = t.cloudCustomData || "", this.isDeleted = !1, this.isModified = !1, this.reInitialize(t.currentUser), this.extractGroupInfo(t.groupProfile || null), this.handleGroupAtInfo(t);
      } return s(e, [{ key: "elements", get(){
        return Ne.warn("！！！Message 实例的 elements 属性即将废弃，请尽快修改。使用 type 和 payload 属性处理单条消息，兼容组合消息使用 _elements 属性！！！"), this._elements;
      } }, { key: "getElements", value(){
        return this._elements;
      } }, { key: "extractGroupInfo", value(e){
        if(null !== e){
          Ge(e.nick) && (this.nick = e.nick), Ge(e.avatar) && (this.avatar = e.avatar); const t = e.messageFromAccountExtraInformation; Pe(t) && Ge(t.nameCard) && (this.nameCard = t.nameCard);
        }
      } }, { key: "handleGroupAtInfo", value(e){
        const t = this; e.payload && e.payload.atUserList && e.payload.atUserList.forEach(e => {
          e !== S.MSG_AT_ALL ? (t._groupAtInfoList.push({ groupAtAllFlag: 0, groupAtUserID: e }), t.atUserList.push(e)) : (t._groupAtInfoList.push({ groupAtAllFlag: 1 }), t.atUserList.push(S.MSG_AT_ALL));
        }), we(e.groupAtInfo) && e.groupAtInfo.forEach(e => {
          1 === e.groupAtAllFlag ? t.atUserList.push(e.groupAtUserID) : 2 === e.groupAtAllFlag && t.atUserList.push(S.MSG_AT_ALL);
        });
      } }, { key: "getGroupAtInfoList", value(){
        return this._groupAtInfoList;
      } }, { key: "_initProxy", value(){
        this._elements[0] && (this.payload = this._elements[0].content, this.type = this._elements[0].type);
      } }, { key: "reInitialize", value(e){
        e && (this.status = this.from ? Dt.SUCCESS : Dt.UNSEND, !this.from && (this.from = e)), this._initFlow(e), this._initSequence(e), this._concatConversationID(e), this.generateMessageID(e);
      } }, { key: "isSendable", value(){
        return 0 !== this._elements.length && ("function" != typeof this._elements[0].sendable ? (Ne.warn("".concat(this._elements[0].type, " need \"boolean : sendable()\" method")), !1) : this._elements[0].sendable());
      } }, { key: "_initTo", value(e){
        this.conversationType === S.CONV_GROUP && (this.to = e.groupID);
      } }, { key: "_initSequence", value(e){
        0 === this.clientSequence && e && (this.clientSequence = function(e){
          if(!e){
            return Ne.error("autoIncrementIndex(string: key) need key parameter"), !1;
          }if(void 0 === Qe[e]){
            let t = new Date(), n = "3".concat(t.getHours()).slice(-2), o = "0".concat(t.getMinutes()).slice(-2), a = "0".concat(t.getSeconds()).slice(-2); Qe[e] = parseInt([n, o, a, "0001"].join("")), n = null, o = null, a = null, Ne.log("autoIncrementIndex start index:".concat(Qe[e]));
          } return Qe[e]++;
        }(e)), 0 === this.sequence && this.conversationType === S.CONV_C2C && (this.sequence = this.clientSequence);
      } }, { key: "generateMessageID", value(e){
        const t = e === this.from ? 1 : 0, n = this.sequence > 0 ? this.sequence : this.clientSequence; this.ID = "".concat(this.conversationID, "-").concat(n, "-").concat(this.random, "-").concat(t);
      } }, { key: "_initFlow", value(e){
        "" !== e && (e === this.from ? (this.flow = "out", this.isRead = !0) : this.flow = "in");
      } }, { key: "_concatConversationID", value(e){
        let t = this.to, n = "", o = this.conversationType; o !== S.CONV_SYSTEM ? (n = o === S.CONV_C2C ? e === this.from ? t : this.from : this.to, this.conversationID = "".concat(o).concat(n)) : this.conversationID = S.CONV_SYSTEM;
      } }, { key: "isElement", value(e){
        return e instanceof ir || e instanceof _r || e instanceof fr || e instanceof mr || e instanceof Tr || e instanceof Cr || e instanceof vr || e instanceof Ir || e instanceof Dr || e instanceof kr || e instanceof Er;
      } }, { key: "setElement", value(e){
        const t = this; if(this.isElement(e)){
          return this._elements = [e], void this._initProxy();
        } const n = function(e){
          if(e.type && e.content){
            switch(e.type){
              case S.MSG_TEXT: t.setTextElement(e.content); break; case S.MSG_IMAGE: t.setImageElement(e.content); break; case S.MSG_AUDIO: t.setAudioElement(e.content); break; case S.MSG_FILE: t.setFileElement(e.content); break; case S.MSG_VIDEO: t.setVideoElement(e.content); break; case S.MSG_CUSTOM: t.setCustomElement(e.content); break; case S.MSG_LOCATION: t.setLocationElement(e.content); break; case S.MSG_GRP_TIP: t.setGroupTipElement(e.content); break; case S.MSG_GRP_SYS_NOTICE: t.setGroupSystemNoticeElement(e.content); break; case S.MSG_FACE: t.setFaceElement(e.content); break; case S.MSG_MERGER: t.setMergerElement(e.content); break; default: Ne.warn(e.type, e.content, "no operation......");
            }
          }
        }; if(we(e)){
          for(let o = 0; o < e.length; o++){
            n(e[o]);
          }
        }
        else {
          n(e);
        } this._initProxy();
      } }, { key: "clearElement", value(){
        this._elements.length = 0;
      } }, { key: "setTextElement", value(e){
        const t = "string" == typeof e ? e : e.text, n = new ir({ text: t }); this._elements.push(n);
      } }, { key: "setImageElement", value(e){
        const t = new _r(e); this._elements.push(t);
      } }, { key: "setAudioElement", value(e){
        const t = new mr(e); this._elements.push(t);
      } }, { key: "setFileElement", value(e){
        const t = new Tr(e); this._elements.push(t);
      } }, { key: "setVideoElement", value(e){
        const t = new Cr(e); this._elements.push(t);
      } }, { key: "setLocationElement", value(e){
        const t = new kr(e); this._elements.push(t);
      } }, { key: "setCustomElement", value(e){
        const t = new Dr(e); this._elements.push(t);
      } }, { key: "setGroupTipElement", value(e){
        let t = {}, n = e.operationType; vt(e.memberInfoList) ? e.operatorInfo && (t = e.operatorInfo) : n !== S.GRP_TIP_MBR_JOIN && n !== S.GRP_TIP_MBR_KICKED_OUT && n !== S.GRP_TIP_MBR_SET_ADMIN && n !== S.GRP_TIP_MBR_CANCELED_ADMIN || (t = e.memberInfoList[0]); const o = t, a = o.nick, s = o.avatar; Ge(a) && (this.nick = a), Ge(s) && (this.avatar = s); const r = new vr(e); this._elements.push(r);
      } }, { key: "setGroupSystemNoticeElement", value(e){
        const t = new Ir(e); this._elements.push(t);
      } }, { key: "setFaceElement", value(e){
        const t = new fr(e); this._elements.push(t);
      } }, { key: "setMergerElement", value(e){
        const t = new Er(e); this._elements.push(t);
      } }, { key: "setIsRead", value(e){
        this.isRead = e;
      } }, { key: "setRelayFlag", value(e){
        this._relayFlag = e;
      } }, { key: "getRelayFlag", value(){
        return this._relayFlag;
      } }, { key: "setOnlineOnlyFlag", value(e){
        this._onlineOnlyFlag = e;
      } }, { key: "getOnlineOnlyFlag", value(){
        return this._onlineOnlyFlag;
      } }, { key: "_computePriority", value(e){
        if(Ue(e)){
          return S.MSG_PRIORITY_NORMAL;
        }if(Ge(e) && -1 !== Object.values(Ar).indexOf(e)){
          return e;
        }if(Re(e)){
          const t = `${e}`; if(-1 !== Object.keys(Ar).indexOf(t)){
            return Ar[t];
          }
        } return S.MSG_PRIORITY_NORMAL;
      } }, { key: "setNickAndAvatar", value(e){
        const t = e.nick, n = e.avatar; Ge(t) && (this.nick = t), Ge(n) && (this.avatar = n);
      } }, { key: "setNameCard", value(e){
        Ge(e) && (this.nameCard = e);
      } }]), e;
    }(), Lr = function(e){
      return { code: 0, data: e || {} };
    }, Or = "https://cloud.tencent.com/document/product/", Rr = "您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。", Gr = "UserSig 非法，请使用官网提供的 API 重新生成 UserSig(".concat(Or, "269/32688)。"), br = "#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement", Pr = { 70001: "UserSig 已过期，请重新生成。建议 UserSig 有效期设置不小于24小时。", 70002: "UserSig 长度为0，请检查传入的 UserSig 是否正确。", 70003: Gr, 70005: Gr, 70009: "UserSig 验证失败，可能因为生成 UserSig 时混用了其他 SDKAppID 的私钥或密钥导致，请使用对应 SDKAppID 下的私钥或密钥重新生成 UserSig(".concat(Or, "269/32688)。"), 70013: "请求中的 UserID 与生成 UserSig 时使用的 UserID 不匹配。".concat(Rr), 70014: "请求中的 SDKAppID 与生成 UserSig 时使用的 SDKAppID 不匹配。".concat(Rr), 70016: "密钥不存在，UserSig 验证失败，请在即时通信 IM 控制台获取密钥(".concat(Or, "269/32578#.E8.8E.B7.E5.8F.96.E5.AF.86.E9.92.A5)。"), 70020: "SDKAppID 未找到，请在即时通信 IM 控制台确认应用信息。", 70050: "UserSig 验证次数过于频繁。请检查 UserSig 是否正确，并于1分钟后重新验证。".concat(Rr), 70051: "帐号被拉入黑名单。", 70052: "UserSig 已经失效，请重新生成，再次尝试。", 70107: "因安全原因被限制登录，请不要频繁登录。", 70169: "请求的用户帐号不存在。", 70114: "".concat("服务端内部超时，请稍后重试。"), 70202: "".concat("服务端内部超时，请稍后重试。"), 70206: "请求中批量数量不合法。", 70402: "参数非法，请检查必填字段是否填充，或者字段的填充是否满足协议要求。", 70403: "请求失败，需要 App 管理员权限。", 70398: "帐号数超限。如需创建多于100个帐号，请将应用升级为专业版，具体操作指引请参见购买指引(".concat(Or, "269/32458)。"), 70500: "".concat("服务端内部错误，请重试。"), 71e3: "删除帐号失败。仅支持删除体验版帐号，您当前应用为专业版，暂不支持帐号删除。", 20001: "请求包非法。", 20002: "UserSig 或 A2 失效。", 20003: "消息发送方或接收方 UserID 无效或不存在，请检查 UserID 是否已导入即时通信 IM。", 20004: "网络异常，请重试。", 20005: "".concat("服务端内部错误，请重试。"), 20006: "触发发送".concat("单聊消息", "之前回调，App 后台返回禁止下发该消息。"), 20007: "发送".concat("单聊消息", "，被对方拉黑，禁止发送。消息发送状态默认展示为失败，您可以登录控制台修改该场景下的消息发送状态展示结果，具体操作请参见消息保留设置(").concat(Or, "269/38656)。"), 20009: "消息发送双方互相不是好友，禁止发送（配置".concat("单聊消息", "校验好友关系才会出现）。"), 20010: "发送".concat("单聊消息", "，自己不是对方的好友（单向关系），禁止发送。"), 20011: "发送".concat("单聊消息", "，对方不是自己的好友（单向关系），禁止发送。"), 20012: "发送方被禁言，该条消息被禁止发送。", 20016: "消息撤回超过了时间限制（默认2分钟）。", 20018: "删除漫游内部错误。", 90001: "JSON 格式解析失败，请检查请求包是否符合 JSON 规范。", 90002: "".concat("JSON 格式请求包体", "中 MsgBody 不符合消息格式描述，或者 MsgBody 不是 Array 类型，请参考 TIMMsgElement 对象的定义(").concat(Or, "269/2720").concat(br, ")。"), 90003: "".concat("JSON 格式请求包体", "中缺少 To_Account 字段或者 To_Account 帐号不存在。"), 90005: "".concat("JSON 格式请求包体", "中缺少 MsgRandom 字段或者 MsgRandom 字段不是 Integer 类型。"), 90006: "".concat("JSON 格式请求包体", "中缺少 MsgTimeStamp 字段或者 MsgTimeStamp 字段不是 Integer 类型。"), 90007: "".concat("JSON 格式请求包体", "中 MsgBody 类型不是 Array 类型，请将其修改为 Array 类型。"), 90008: "".concat("JSON 格式请求包体", "中缺少 From_Account 字段或者 From_Account 帐号不存在。"), 90009: "请求需要 App 管理员权限。", 90010: "".concat("JSON 格式请求包体", "不符合消息格式描述，请参考 TIMMsgElement 对象的定义(").concat(Or, "269/2720").concat(br, ")。"), 90011: "批量发消息目标帐号超过500，请减少 To_Account 中目标帐号数量。", 90012: "To_Account 没有注册或不存在，请确认 To_Account 是否导入即时通信 IM 或者是否拼写错误。", 90026: "消息离线存储时间错误（最多不能超过7天）。", 90031: "".concat("JSON 格式请求包体", "中 SyncOtherMachine 字段不是 Integer 类型。"), 90044: "".concat("JSON 格式请求包体", "中 MsgLifeTime 字段不是 Integer 类型。"), 90048: "请求的用户帐号不存在。", 90054: "撤回请求中的 MsgKey 不合法。", 90994: "".concat("服务端内部错误，请重试。"), 90995: "".concat("服务端内部错误，请重试。"), 91e3: "".concat("服务端内部错误，请重试。"), 90992: "".concat("服务端内部错误，请重试。", "如果所有请求都返回该错误码，且 App 配置了第三方回调，请检查 App 服务端是否正常向即时通信 IM 后台服务端返回回调结果。"), 93e3: "JSON 数据包超长，消息包体请不要超过8k。", 91101: "Web 端长轮询被踢（Web 端同时在线实例个数超出限制）。", 10002: "".concat("服务端内部错误，请重试。"), 10003: "请求中的接口名称错误，请核对接口名称并重试。", 10004: "参数非法，请根据错误描述检查请求是否正确。", 10005: "请求包体中携带的帐号数量过多。", 10006: "操作频率限制，请尝试降低调用的频率。", 10007: "操作权限不足，例如 Work ".concat("群组", "中普通成员尝试执行踢人操作，但只有 App 管理员才有权限。"), 10008: "请求非法，可能是请求中携带的签名信息验证不正确，请再次尝试。", 10009: "该群不允许群主主动退出。", 10010: "".concat("群组", "不存在，或者曾经存在过，但是目前已经被解散。"), 10011: "解析 JSON 包体失败，请检查包体的格式是否符合 JSON 格式。", 10012: "发起操作的 UserID 非法，请检查发起操作的用户 UserID 是否填写正确。", 10013: "被邀请加入的用户已经是群成员。", 10014: "群已满员，无法将请求中的用户加入".concat("群组", "，如果是批量加人，可以尝试减少加入用户的数量。"), 10015: "找不到指定 ID 的".concat("群组", "。"), 10016: "App 后台通过第三方回调拒绝本次操作。", 10017: "因被禁言而不能发送消息，请检查发送者是否被设置禁言。", 10018: "应答包长度超过最大包长（1MB），请求的内容过多，请尝试减少单次请求的数据量。", 10019: "请求的用户帐号不存在。", 10021: "".concat("群组", " ID 已被使用，请选择其他的").concat("群组", " ID。"), 10023: "发消息的频率超限，请延长两次发消息时间的间隔。", 10024: "此邀请或者申请请求已经被处理。", 10025: "".concat("群组", " ID 已被使用，并且操作者为群主，可以直接使用。"), 10026: "该 SDKAppID 请求的命令字已被禁用。", 10030: "请求撤回的消息不存在。", 10031: "消息撤回超过了时间限制（默认2分钟）。", 10032: "请求撤回的消息不支持撤回操作。", 10033: "".concat("群组", "类型不支持消息撤回操作。"), 10034: "该消息类型不支持删除操作。", 10035: "直播群和在线成员广播大群不支持删除消息。", 10036: "直播群创建数量超过了限制，请参考价格说明(".concat(Or, "269/11673)购买预付费套餐“IM直播群”。"), 10037: "单个用户可创建和加入的".concat("群组", "数量超过了限制，请参考价格说明(").concat(Or, "269/11673)购买或升级预付费套餐“单人可创建与加入").concat("群组", "数”。"), 10038: "群成员数量超过限制，请参考价格说明(".concat(Or, "269/11673)购买或升级预付费套餐“扩展群人数上限”。"), 10041: "该应用（SDKAppID）已配置不支持群消息撤回。", 10050: "群属性 key 不存在", 10056: "请在写入群属性前先使用 getGroupAttributes 接口更新本地群属性，避免冲突。", 30001: "请求参数错误，请根据错误描述检查请求参数", 30002: "SDKAppID 不匹配", 30003: "请求的用户帐号不存在", 30004: "请求需要 App 管理员权限", 30005: "关系链字段中包含敏感词", 30006: "".concat("服务端内部错误，请重试。"), 30007: "".concat("网络超时，请稍后重试. "), 30008: "并发写导致写冲突，建议使用批量方式", 30009: "后台禁止该用户发起加好友请求", 30010: "自己的好友数已达系统上限", 30011: "分组已达系统上限", 30012: "未决数已达系统上限", 30014: "对方的好友数已达系统上限", 30515: "请求添加好友时，对方在自己的黑名单中，不允许加好友", 30516: "请求添加好友时，对方的加好友验证方式是不允许任何人添加自己为好友", 30525: "请求添加好友时，自己在对方的黑名单中，不允许加好友", 30539: "等待对方同意", 30540: "添加好友请求被安全策略打击，请勿频繁发起添加好友请求", 31704: "与请求删除的帐号之间不存在好友关系", 31707: "删除好友请求被安全策略打击，请勿频繁发起删除好友请求" }, wr = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this)).code = e.code, a.message = Pr[e.code] || e.message, a.data = e.data || {}, a;
      } return n;
    }(p(Error)), Ur = null, Fr = function(e){
      Ur = e;
    }, qr = function(e){
      return Promise.resolve(Lr(e));
    }, Vr = function(e){
      const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; if(e instanceof wr){
        return t && null !== Ur && Ur.emit(k.ERROR, e), Promise.reject(e);
      }if(e instanceof Error){
        const n = new wr({ code: _o.UNCAUGHT_ERROR, message: e.message }); return t && null !== Ur && Ur.emit(k.ERROR, n), Promise.reject(n);
      }if(Ue(e) || Ue(e.code) || Ue(e.message)){
        Ne.error("IMPromise.reject 必须指定code(错误码)和message(错误信息)!!!");
      }
      else {
        if(Re(e.code) && Ge(e.message)){
          const o = new wr(e); return t && null !== Ur && Ur.emit(k.ERROR, o), Promise.reject(o);
        }Ne.error("IMPromise.reject code(错误码)必须为数字，message(错误信息)必须为字符串!!!");
      }
    }, Kr = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this, e))._className = "C2CModule", a;
      } return s(n, [{ key: "onNewC2CMessage", value(e){
        const t = e.dataList, n = e.isInstantMessage, o = e.C2CRemainingUnreadList; Ne.debug("".concat(this._className, ".onNewC2CMessage count:").concat(t.length, " isInstantMessage:").concat(n)); const a = this._newC2CMessageStoredAndSummary({ dataList: t, C2CRemainingUnreadList: o, isInstantMessage: n }), s = a.conversationOptionsList, r = a.messageList; (this.filterModifiedMessage(r), s.length > 0) && this.getModule(Vt).onNewMessage({ conversationOptionsList: s, isInstantMessage: n }); const i = this.filterUnmodifiedMessage(r); n && i.length > 0 && this.emitOuterEvent(k.MESSAGE_RECEIVED, i), r.length = 0;
      } }, { key: "_newC2CMessageStoredAndSummary", value(e){
        for(var t = e.dataList, n = e.C2CRemainingUnreadList, o = e.isInstantMessage, a = null, s = [], r = [], i = {}, u = this.getModule(jt), c = 0, l = t.length; c < l; c++){
          const d = t[c]; d.currentUser = this.getMyUserID(), d.conversationType = S.CONV_C2C, d.isSystemMessage = !!d.isSystemMessage, a = new Nr(d), d.elements = u.parseElements(d.elements, d.from), a.setElement(d.elements), a.setNickAndAvatar({ nick: d.nick, avatar: d.avatar }); const p = a.conversationID; if(o){
            let g = !1, h = this.getModule(Vt); if(a.from !== this.getMyUserID()){
              const _ = h.getLatestMessageSentByPeer(p); if(_){
                const f = _.nick, m = _.avatar; f === a.nick && m === a.avatar || (g = !0);
              }
            }
            else {
              const M = h.getLatestMessageSentByMe(p); if(M){
                const v = M.nick, y = M.avatar; v === a.nick && y === a.avatar || h.modifyMessageSentByMe({ conversationID: p, latestNick: a.nick, latestAvatar: a.avatar });
              }
            } let I = 1 === t[c].isModified; if(h.isMessageSentByCurrentInstance(a) ? a.isModified = I : I = !1, 0 === d.msgLifeTime){
              a.setOnlineOnlyFlag(!0), r.push(a);
            }
            else {
              if(!h.pushIntoMessageList(r, a, I)){
                continue;
              } g && (h.modifyMessageSentByPeer(p), h.updateUserProfileSpecifiedKey({ conversationID: p, nick: a.nick, avatar: a.avatar }));
            } this.getModule(tn).addMessageDelay({ currentTime: Date.now(), time: a.time });
          }if(0 !== d.msgLifeTime){
            if(!1 === a.getOnlineOnlyFlag()){
              if(Ue(i[p])){
                i[p] = s.push({ conversationID: p, unreadCount: "out" === a.flow ? 0 : 1, type: a.conversationType, subType: a.conversationSubType, lastMessage: a }) - 1;
              }
              else {
                const T = i[p]; s[T].type = a.conversationType, s[T].subType = a.conversationSubType, s[T].lastMessage = a, "in" === a.flow && s[T].unreadCount++;
              }
            }
          }
          else {
            a.setOnlineOnlyFlag(!0);
          }
        }if(we(n)){
          for(let D = function(e, t){
              const o = s.find(t => t.conversationID === "C2C".concat(n[e].from)); o ? o.unreadCount += n[e].count : s.push({ conversationID: "C2C".concat(n[e].from), unreadCount: n[e].count, type: S.CONV_C2C, lastMsgTime: n[e].lastMsgTime });
            }, C = 0, k = n.length; C < k; C++){
            D(C);
          }
        } return { conversationOptionsList: s, messageList: r };
      } }, { key: "onC2CMessageRevoked", value(e){
        const t = this; Ne.debug("".concat(this._className, ".onC2CMessageRevoked count:").concat(e.dataList.length)); let n = this.getModule(Vt), o = [], a = null; e.dataList.forEach(e => {
          if(e.c2cMessageRevokedNotify){
            const s = e.c2cMessageRevokedNotify.revokedInfos; Ue(s) || s.forEach(e => {
              const s = t.getMyUserID() === e.from ? "".concat(S.CONV_C2C).concat(e.to) : "".concat(S.CONV_C2C).concat(e.from); (a = n.revoke(s, e.sequence, e.random)) && o.push(a);
            });
          }
        }), 0 !== o.length && (n.onMessageRevoked(o), this.emitOuterEvent(k.MESSAGE_REVOKED, o));
      } }, { key: "onC2CMessageReadReceipt", value(e){
        const t = this; e.dataList.forEach(e => {
          if(!vt(e.c2cMessageReadReceipt)){
            const n = e.c2cMessageReadReceipt.to; e.c2cMessageReadReceipt.uinPairReadArray.forEach(e => {
              const o = e.peerReadTime; Ne.debug("".concat(t._className, "._onC2CMessageReadReceipt to:").concat(n, " peerReadTime:").concat(o)); const a = "".concat(S.CONV_C2C).concat(n), s = t.getModule(Vt); s.recordPeerReadTime(a, o), s.updateMessageIsPeerReadProperty(a, o);
            });
          }
        });
      } }, { key: "onC2CMessageReadNotice", value(e){
        const t = this; e.dataList.forEach(e => {
          if(!vt(e.c2cMessageReadNotice)){
            const n = t.getModule(Vt); e.c2cMessageReadNotice.uinPairReadArray.forEach(e => {
              const o = e.from, a = e.peerReadTime; Ne.debug("".concat(t._className, ".onC2CMessageReadNotice from:").concat(o, " lastReadTime:").concat(a)); const s = "".concat(S.CONV_C2C).concat(o); n.updateIsReadAfterReadReport({ conversationID: s, lastMessageTime: a }), n.updateUnreadCount(s);
            });
          }
        });
      } }, { key: "sendMessage", value(e, t){
        const n = this._createC2CMessagePack(e, t); return this.request(n);
      } }, { key: "_createC2CMessagePack", value(e, t){
        let n = null; t && (t.offlinePushInfo && (n = t.offlinePushInfo), !0 === t.onlineUserOnly && (n ? n.disablePush = !0 : n = { disablePush: !0 })); let o = ""; return Ge(e.cloudCustomData) && e.cloudCustomData.length > 0 && (o = e.cloudCustomData), { protocolName: cn, tjgID: this.generateTjgID(e), requestData: { fromAccount: this.getMyUserID(), toAccount: e.to, msgTimeStamp: Math.ceil(Date.now() / 1e3), msgBody: e.getElements(), cloudCustomData: o, msgSeq: e.sequence, msgRandom: e.random, msgLifeTime: this.isOnlineMessage(e, t) ? 0 : void 0, nick: e.nick, avatar: e.avatar, offlinePushInfo: n ? { pushFlag: !0 === n.disablePush ? 1 : 0, title: n.title || "", desc: n.description || "", ext: n.extension || "", apnsInfo: { badgeMode: !0 === n.ignoreIOSBadge ? 1 : 0 }, androidInfo: { OPPOChannelID: n.androidOPPOChannelID || "" } } : void 0 } };
      } }, { key: "isOnlineMessage", value(e, t){
        return !(!t || !0 !== t.onlineUserOnly);
      } }, { key: "revokeMessage", value(e){
        return this.request({ protocolName: fn, requestData: { msgInfo: { fromAccount: e.from, toAccount: e.to, msgSeq: e.sequence, msgRandom: e.random, msgTimeStamp: e.time } } });
      } }, { key: "deleteMessage", value(e){
        const t = e.to, n = e.keyList; return Ne.log("".concat(this._className, ".deleteMessage toAccount:").concat(t, " count:").concat(n.length)), this.request({ protocolName: yn, requestData: { fromAccount: this.getMyUserID(), to: t, keyList: n } });
      } }, { key: "setMessageRead", value(e){
        const t = this, n = e.conversationID, o = e.lastMessageTime, a = "".concat(this._className, ".setMessageRead"); Ne.log("".concat(a, " conversationID:").concat(n, " lastMessageTime:").concat(o)), Re(o) || Ne.warn("".concat(a, " 请勿修改 Conversation.lastMessage.lastTime，否则可能会导致已读上报结果不准确")); const s = new qa(as); return s.setMessage("conversationID:".concat(n, " lastMessageTime:").concat(o)), this.request({ protocolName: mn, requestData: { C2CMsgReaded: { cookie: "", C2CMsgReadedItem: [{ toAccount: n.replace("C2C", ""), lastMessageTime: o, receipt: 1 }] } } }).then(() => {
          s.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(a, " ok")); const e = t.getModule(Vt); return e.updateIsReadAfterReadReport({ conversationID: n, lastMessageTime: o }), e.updateUnreadCount(n), Lr();
        }).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; s.setError(e, o, a).end();
        }), Ne.log("".concat(a, " failed. error:"), e), Vr(e)));
      } }, { key: "getRoamingMessage", value(e){
        const t = this, n = "".concat(this._className, ".getRoamingMessage"), o = e.peerAccount, a = e.conversationID, s = e.count, r = e.lastMessageTime, i = e.messageKey, u = "peerAccount:".concat(o, " count:").concat(s || 15, " lastMessageTime:").concat(r || 0, " messageKey:").concat(i); Ne.log("".concat(n, " ").concat(u)); const c = new qa(es); return this.request({ protocolName: Mn, requestData: { peerAccount: o, count: s || 15, lastMessageTime: r || 0, messageKey: i } }).then(e => {
          const o = e.data, s = o.complete, r = o.messageList, i = o.messageKey, l = o.lastMessageTime; Ue(r) ? Ne.log("".concat(n, " ok. complete:").concat(s, " but messageList is undefined!")) : Ne.log("".concat(n, " ok. complete:").concat(s, " count:").concat(r.length)), c.setNetworkType(t.getNetworkType()).setMessage("".concat(u, " complete:").concat(s, " length:").concat(r.length)).end(); const d = t.getModule(Vt); 1 === s && d.setCompleted(a); const p = d.storeRoamingMessage(r, a); d.modifyMessageList(a), d.updateIsRead(a), d.updateRoamingMessageKeyAndTime(a, i, l); const g = d.getPeerReadTime(a); if(Ne.log("".concat(n, " update isPeerRead property. conversationID:").concat(a, " peerReadTime:").concat(g)), g){
            d.updateMessageIsPeerReadProperty(a, g);
          }
          else {
            const h = a.replace(S.CONV_C2C, ""); t.getRemotePeerReadTime([h]).then(() => {
              d.updateMessageIsPeerReadProperty(a, d.getPeerReadTime(a));
            });
          } return p;
        }).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; c.setMessage(u).setError(e, o, a).end();
        }), Ne.warn("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "getRemotePeerReadTime", value(e){
        const t = this, n = "".concat(this._className, ".getRemotePeerReadTime"); if(vt(e)){
          return Ne.warn("".concat(n, " userIDList is empty!")), Promise.resolve();
        } const o = new qa(is); return Ne.log("".concat(n, " userIDList:").concat(e)), this.request({ protocolName: vn, requestData: { userIDList: e } }).then(a => {
          const s = a.data.peerReadTimeList; Ne.log("".concat(n, " ok. peerReadTimeList:").concat(s)); for(var r = "", i = t.getModule(Vt), u = 0; u < e.length; u++){
            r += "".concat(e[u], "-").concat(s[u], " "), s[u] > 0 && i.recordPeerReadTime("C2C".concat(e[u]), s[u]);
          }o.setNetworkType(t.getNetworkType()).setMessage(r).end();
        }).catch(e => {
          t.probeNetwork().then(t => {
            const n = m(t, 2), a = n[0], s = n[1]; o.setError(e, a, s).end();
          }), Ne.warn("".concat(n, " failed. error:"), e);
        });
      } }]), n;
    }(nn), xr = function(){
      function e(t){
        o(this, e), this.list = new Map(), this._className = "MessageListHandler", this._latestMessageSentByPeerMap = new Map(), this._latestMessageSentByMeMap = new Map(), this._groupLocalLastMessageSequenceMap = new Map();
      } return s(e, [{ key: "getLocalOldestMessageByConversationID", value(e){
        if(!e){
          return null;
        }if(!this.list.has(e)){
          return null;
        } const t = this.list.get(e).values(); return t ? t.next().value : null;
      } }, { key: "pushIn", value(e){
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = e.conversationID, o = e.ID, a = !0; this.list.has(n) || this.list.set(n, new Map()); const s = this.list.get(n).has(o); if(s){
          const r = this.list.get(n).get(o); if(!t || !0 === r.isModified){
            return a = !1;
          }
        } return this.list.get(n).set(o, e), this._setLatestMessageSentByPeer(n, e), this._setLatestMessageSentByMe(n, e), this._setGroupLocalLastMessageSequence(n, e), a;
      } }, { key: "unshift", value(e){
        let t; if(we(e)){
          if(e.length > 0){
            t = e[0].conversationID; const n = e.length; this._unshiftMultipleMessages(e), this._setGroupLocalLastMessageSequence(t, e[n - 1]);
          }
        }
        else {
          t = e.conversationID, this._unshiftSingleMessage(e), this._setGroupLocalLastMessageSequence(t, e);
        }if(t && t.startsWith(S.CONV_C2C)){
          const o = Array.from(this.list.get(t).values()), a = o.length; if(0 === a){
            return;
          }for(let s = a - 1; s >= 0; s--){
            if("out" === o[s].flow){
              this._setLatestMessageSentByMe(t, o[s]); break;
            }
          }for(let r = a - 1; r >= 0; r--){
            if("in" === o[r].flow){
              this._setLatestMessageSentByPeer(t, o[r]); break;
            }
          }
        }
      } }, { key: "_unshiftSingleMessage", value(e){
        const t = e.conversationID, n = e.ID; if(!this.list.has(t)){
          return this.list.set(t, new Map()), void this.list.get(t).set(n, e);
        } const o = Array.from(this.list.get(t)); o.unshift([n, e]), this.list.set(t, new Map(o));
      } }, { key: "_unshiftMultipleMessages", value(e){
        for(var t = e.length, n = [], o = e[0].conversationID, a = this.list.has(o) ? Array.from(this.list.get(o)) : [], s = 0; s < t; s++){
          n.push([e[s].ID, e[s]]);
        } this.list.set(o, new Map(n.concat(a)));
      } }, { key: "remove", value(e){
        const t = e.conversationID, n = e.ID; this.list.has(t) && this.list.get(t).delete(n);
      } }, { key: "revoke", value(e, t, n){
        if(Ne.debug("revoke message", e, t, n), this.list.has(e)){
          let o, a = C(this.list.get(e)); try {
            for(a.s(); !(o = a.n()).done;){
              const s = m(o.value, 2)[1]; if(s.sequence === t && !s.isRevoked && (Ue(n) || s.random === n)){
                return s.isRevoked = !0, s;
              }
            }
          }
          catch(r){
            a.e(r);
          }
          finally {
            a.f();
          }
        } return null;
      } }, { key: "removeByConversationID", value(e){
        this.list.has(e) && (this.list.delete(e), this._latestMessageSentByPeerMap.delete(e), this._latestMessageSentByMeMap.delete(e));
      } }, { key: "updateMessageIsPeerReadProperty", value(e, t){
        const n = []; if(this.list.has(e)){
          let o, a = C(this.list.get(e)); try {
            for(a.s(); !(o = a.n()).done;){
              const s = m(o.value, 2)[1]; s.time <= t && !s.isPeerRead && "out" === s.flow && (s.isPeerRead = !0, n.push(s));
            }
          }
          catch(r){
            a.e(r);
          }
          finally {
            a.f();
          }Ne.log("".concat(this._className, ".updateMessageIsPeerReadProperty conversationID:").concat(e, " peerReadTime:").concat(t, " count:").concat(n.length));
        } return n;
      } }, { key: "updateMessageIsModifiedProperty", value(e){
        const t = e.conversationID, n = e.ID; if(this.list.has(t)){
          const o = this.list.get(t).get(n); o && (o.isModified = !0);
        }
      } }, { key: "hasLocalMessageList", value(e){
        return this.list.has(e);
      } }, { key: "getLocalMessageList", value(e){
        return this.hasLocalMessageList(e) ? M(this.list.get(e).values()) : [];
      } }, { key: "hasLocalMessage", value(e, t){
        return !!this.hasLocalMessageList(e) && this.list.get(e).has(t);
      } }, { key: "getLocalMessage", value(e, t){
        return this.hasLocalMessage(e, t) ? this.list.get(e).get(t) : null;
      } }, { key: "_setLatestMessageSentByPeer", value(e, t){
        e.startsWith(S.CONV_C2C) && "in" === t.flow && this._latestMessageSentByPeerMap.set(e, t);
      } }, { key: "_setLatestMessageSentByMe", value(e, t){
        e.startsWith(S.CONV_C2C) && "out" === t.flow && this._latestMessageSentByMeMap.set(e, t);
      } }, { key: "_setGroupLocalLastMessageSequence", value(e, t){
        e.startsWith(S.CONV_GROUP) && this._groupLocalLastMessageSequenceMap.set(e, t.sequence);
      } }, { key: "getLatestMessageSentByPeer", value(e){
        return this._latestMessageSentByPeerMap.get(e);
      } }, { key: "getLatestMessageSentByMe", value(e){
        return this._latestMessageSentByMeMap.get(e);
      } }, { key: "getGroupLocalLastMessageSequence", value(e){
        return this._groupLocalLastMessageSequenceMap.get(e) || 0;
      } }, { key: "modifyMessageSentByPeer", value(e, t){
        const n = this.list.get(e); if(!vt(n)){
          const o = Array.from(n.values()), a = o.length; if(0 !== a){
            let s = null, r = null; t && (r = t); for(var i = 0, u = !1, c = a - 1; c >= 0; c--){
              "in" === o[c].flow && (null === r ? r = o[c] : ((s = o[c]).nick !== r.nick && (s.setNickAndAvatar({ nick: r.nick }), u = !0), s.avatar !== r.avatar && (s.setNickAndAvatar({ avatar: r.avatar }), u = !0), u && (i += 1)));
            }Ne.log("".concat(this._className, ".modifyMessageSentByPeer conversationID:").concat(e, " count:").concat(i));
          }
        }
      } }, { key: "modifyMessageSentByMe", value(e){
        const t = e.conversationID, n = e.latestNick, o = e.latestAvatar, a = this.list.get(t); if(!vt(a)){
          const s = Array.from(a.values()), r = s.length; if(0 !== r){
            for(var i = null, u = 0, c = !1, l = r - 1; l >= 0; l--){
              "out" === s[l].flow && ((i = s[l]).nick !== n && (i.setNickAndAvatar({ nick: n }), c = !0), i.avatar !== o && (i.setNickAndAvatar({ avatar: o }), c = !0), c && (u += 1));
            }Ne.log("".concat(this._className, ".modifyMessageSentByMe conversationID:").concat(t, " count:").concat(u));
          }
        }
      } }, { key: "traversal", value(){
        if(0 !== this.list.size && -1 === Ne.getLevel()){
          console.group("conversationID-messageCount"); let e, t = C(this.list); try {
            for(t.s(); !(e = t.n()).done;){
              const n = m(e.value, 2), o = n[0], a = n[1]; console.log("".concat(o, "-").concat(a.size));
            }
          }
          catch(s){
            t.e(s);
          }
          finally {
            t.f();
          }console.groupEnd();
        }
      } }, { key: "reset", value(){
        this.list.clear(), this._latestMessageSentByPeerMap.clear(), this._latestMessageSentByMeMap.clear(), this._groupLocalLastMessageSequenceMap.clear();
      } }]), e;
    }(), Br = { CONTEXT_A2KEY_AND_TINYID_UPDATED: "_a2KeyAndTinyIDUpdated", CLOUD_CONFIG_UPDATED: "_cloudConfigUpdated" }; function Hr(e){
    this.mixin(e);
  }Hr.mixin = function(e){
    const t = e.prototype || e; t._isReady = !1, t.ready = function(e){
      const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; if(e){
        return this._isReady ? void(t ? e.call(this) : setTimeout(e, 1)) : (this._readyQueue = this._readyQueue || [], void this._readyQueue.push(e));
      }
    }, t.triggerReady = function(){
      const e = this; this._isReady = !0, setTimeout(() => {
        const t = e._readyQueue; e._readyQueue = [], t && t.length > 0 && t.forEach(function(e){
          e.call(this);
        }, e);
      }, 1);
    }, t.resetReady = function(){
      this._isReady = !1, this._readyQueue = [];
    }, t.isReady = function(){
      return this._isReady;
    };
  }; const jr = ["jpg", "jpeg", "gif", "png", "bmp"], Yr = ["mp4"], $r = 1, Wr = 2, zr = 3, Jr = 255, Xr = function(){
      function e(t){
        const n = this; o(this, e), vt(t) || (this.userID = t.userID || "", this.nick = t.nick || "", this.gender = t.gender || "", this.birthday = t.birthday || 0, this.location = t.location || "", this.selfSignature = t.selfSignature || "", this.allowType = t.allowType || S.ALLOW_TYPE_ALLOW_ANY, this.language = t.language || 0, this.avatar = t.avatar || "", this.messageSettings = t.messageSettings || 0, this.adminForbidType = t.adminForbidType || S.FORBID_TYPE_NONE, this.level = t.level || 0, this.role = t.role || 0, this.lastUpdatedTime = 0, this.profileCustomField = [], vt(t.profileCustomField) || t.profileCustomField.forEach(e => {
          n.profileCustomField.push({ key: e.key, value: e.value });
        }));
      } return s(e, [{ key: "validate", value(e){
        let t = !0, n = ""; if(vt(e)){
          return { valid: !1, tips: "empty options" };
        }if(e.profileCustomField){
          for(let o = e.profileCustomField.length, a = null, s = 0; s < o; s++){
            if(a = e.profileCustomField[s], !Ge(a.key) || -1 === a.key.indexOf("Tag_Profile_Custom")){
              return { valid: !1, tips: "自定义资料字段的前缀必须是 Tag_Profile_Custom" };
            }if(!Ge(a.value)){
              return { valid: !1, tips: "自定义资料字段的 value 必须是字符串" };
            }
          }
        }for(const r in e){
          if(Object.prototype.hasOwnProperty.call(e, r)){
            if("profileCustomField" === r){
              continue;
            }if(vt(e[r]) && !Ge(e[r]) && !Re(e[r])){
              n = `key:${r}, invalid value:${e[r]}`, t = !1; continue;
            }switch(r){
              case "nick": Ge(e[r]) || (n = "nick should be a string", t = !1), $e(e[r]) > 500 && (n = "nick name limited: must less than or equal to ".concat(500, " bytes, current size: ").concat($e(e[r]), " bytes"), t = !1); break; case "gender": Xe(lr, e.gender) || (n = `key:gender, invalid value:${e.gender}`, t = !1); break; case "birthday": Re(e.birthday) || (n = "birthday should be a number", t = !1); break; case "location": Ge(e.location) || (n = "location should be a string", t = !1); break; case "selfSignature": Ge(e.selfSignature) || (n = "selfSignature should be a string", t = !1); break; case "allowType": Xe(pr, e.allowType) || (n = `key:allowType, invalid value:${e.allowType}`, t = !1); break; case "language": Re(e.language) || (n = "language should be a number", t = !1); break; case "avatar": Ge(e.avatar) || (n = "avatar should be a string", t = !1); break; case "messageSettings": 0 !== e.messageSettings && 1 !== e.messageSettings && (n = "messageSettings should be 0 or 1", t = !1); break; case "adminForbidType": Xe(dr, e.adminForbidType) || (n = `key:adminForbidType, invalid value:${e.adminForbidType}`, t = !1); break; case "level": Re(e.level) || (n = "level should be a number", t = !1); break; case "role": Re(e.role) || (n = "role should be a number", t = !1); break; default: n = `unknown key:${r}  ${e[r]}`, t = !1;
            }
          }
        } return { valid: t, tips: n };
      } }]), e;
    }(), Qr = function e(t){
      o(this, e), this.value = t, this.next = null;
    }, Zr = function(){
      function e(t){
        o(this, e), this.MAX_LENGTH = t, this.pTail = null, this.pNodeToDel = null, this.map = new Map(), Ne.debug("SinglyLinkedList init MAX_LENGTH:".concat(this.MAX_LENGTH));
      } return s(e, [{ key: "set", value(e){
        const t = new Qr(e); if(this.map.size < this.MAX_LENGTH){
          null === this.pTail ? (this.pTail = t, this.pNodeToDel = t) : (this.pTail.next = t, this.pTail = t), this.map.set(e, 1);
        }
        else {
          let n = this.pNodeToDel; this.pNodeToDel = this.pNodeToDel.next, this.map.delete(n.value), n.next = null, n = null, this.pTail.next = t, this.pTail = t, this.map.set(e, 1);
        }
      } }, { key: "has", value(e){
        return this.map.has(e);
      } }, { key: "delete", value(e){
        this.has(e) && this.map.delete(e);
      } }, { key: "tail", value(){
        return this.pTail;
      } }, { key: "size", value(){
        return this.map.size;
      } }, { key: "data", value(){
        return Array.from(this.map.keys());
      } }, { key: "reset", value(){
        for(var e; null !== this.pNodeToDel;){
          e = this.pNodeToDel, this.pNodeToDel = this.pNodeToDel.next, e.next = null, e = null;
        } this.pTail = null, this.map.clear();
      } }]), e;
    }(), ei = ["groupID", "name", "avatar", "type", "introduction", "notification", "ownerID", "selfInfo", "createTime", "infoSequence", "lastInfoTime", "lastMessage", "nextMessageSeq", "memberNum", "maxMemberNum", "memberList", "joinOption", "groupCustomField", "muteAllMembers"], ti = function(){
      function e(t){
        o(this, e), this.groupID = "", this.name = "", this.avatar = "", this.type = "", this.introduction = "", this.notification = "", this.ownerID = "", this.createTime = "", this.infoSequence = "", this.lastInfoTime = "", this.selfInfo = { messageRemindType: "", joinTime: "", nameCard: "", role: "" }, this.lastMessage = { lastTime: "", lastSequence: "", fromAccount: "", messageForShow: "" }, this.nextMessageSeq = "", this.memberNum = "", this.memberCount = "", this.maxMemberNum = "", this.maxMemberCount = "", this.joinOption = "", this.groupCustomField = [], this.muteAllMembers = void 0, this._initGroup(t);
      } return s(e, [{ key: "memberNum", get(){
        return Ne.warn("！！！v2.8.0起弃用memberNum，请使用 memberCount"), this.memberCount;
      }, set(e){} }, { key: "maxMemberNum", get(){
        return Ne.warn("！！！v2.8.0起弃用maxMemberNum，请使用 maxMemberCount"), this.maxMemberCount;
      }, set(e){} }, { key: "_initGroup", value(e){
        for(const t in e){
          ei.indexOf(t) < 0 || ("selfInfo" !== t ? ("memberNum" === t && (this.memberCount = e[t]), "maxMemberNum" === t && (this.maxMemberCount = e[t]), this[t] = e[t]) : this.updateSelfInfo(e[t]));
        }
      } }, { key: "updateGroup", value(e){
        const t = JSON.parse(JSON.stringify(e)); t.lastMsgTime && (this.lastMessage.lastTime = t.lastMsgTime), Ue(t.muteAllMembers) || ("On" === t.muteAllMembers ? t.muteAllMembers = !0 : t.muteAllMembers = !1), t.groupCustomField && ot(this.groupCustomField, t.groupCustomField), Ue(t.memberNum) || (this.memberCount = t.memberNum), Ue(t.maxMemberNum) || (this.maxMemberCount = t.maxMemberNum), je(this, t, ["members", "errorCode", "lastMsgTime", "groupCustomField", "memberNum", "maxMemberNum"]);
      } }, { key: "updateSelfInfo", value(e){
        const t = e.nameCard, n = e.joinTime, o = e.role, a = e.messageRemindType; je(this.selfInfo, { nameCard: t, joinTime: n, role: o, messageRemindType: a }, [], ["", null, void 0, 0, NaN]);
      } }, { key: "setSelfNameCard", value(e){
        this.selfInfo.nameCard = e;
      } }]), e;
    }(), ni = function(e, t){
      if(Ue(t)){
        return "";
      }switch(e){
        case S.MSG_TEXT: return t.text; case S.MSG_IMAGE: return "[图片]"; case S.MSG_LOCATION: return "[位置]"; case S.MSG_AUDIO: return "[语音]"; case S.MSG_VIDEO: return "[视频]"; case S.MSG_FILE: return "[文件]"; case S.MSG_CUSTOM: return "[自定义消息]"; case S.MSG_GRP_TIP: return "[群提示消息]"; case S.MSG_GRP_SYS_NOTICE: return "[群系统通知]"; case S.MSG_FACE: return "[动画表情]"; case S.MSG_MERGER: return "[聊天记录]"; default: return "";
      }
    }, oi = function(e){
      return Ue(e) ? { lastTime: 0, lastSequence: 0, fromAccount: 0, messageForShow: "", payload: null, type: "", isRevoked: !1, cloudCustomData: "", onlineOnlyFlag: !1, nick: "", nameCard: "" } : e instanceof Nr ? { lastTime: e.time || 0, lastSequence: e.sequence || 0, fromAccount: e.from || "", messageForShow: ni(e.type, e.payload), payload: e.payload || null, type: e.type || null, isRevoked: e.isRevoked || !1, cloudCustomData: e.cloudCustomData || "", onlineOnlyFlag: !!qe(e.getOnlineOnlyFlag) && e.getOnlineOnlyFlag(), nick: e.nick || "", nameCard: e.nameCard || "" } : t(t({}, e), {}, { messageForShow: ni(e.type, e.payload) });
    }, ai = function(){
      function e(t){
        o(this, e), this.conversationID = t.conversationID || "", this.unreadCount = t.unreadCount || 0, this.type = t.type || "", this.lastMessage = oi(t.lastMessage), t.lastMsgTime && (this.lastMessage.lastTime = t.lastMsgTime), this._isInfoCompleted = !1, this.peerReadTime = t.peerReadTime || 0, this.groupAtInfoList = [], this.remark = "", this.isPinned = t.isPinned || !1, this._initProfile(t);
      } return s(e, [{ key: "toAccount", get(){
        return this.conversationID.startsWith(S.CONV_C2C) ? this.conversationID.replace(S.CONV_C2C, "") : this.conversationID.startsWith(S.CONV_GROUP) ? this.conversationID.replace(S.CONV_GROUP, "") : "";
      } }, { key: "subType", get(){
        return this.groupProfile ? this.groupProfile.type : "";
      } }, { key: "_initProfile", value(e){
        const t = this; Object.keys(e).forEach(n => {
          switch(n){
            case "userProfile": t.userProfile = e.userProfile; break; case "groupProfile": t.groupProfile = e.groupProfile;
          }
        }), Ue(this.userProfile) && this.type === S.CONV_C2C ? this.userProfile = new Xr({ userID: e.conversationID.replace("C2C", "") }) : Ue(this.groupProfile) && this.type === S.CONV_GROUP && (this.groupProfile = new ti({ groupID: e.conversationID.replace("GROUP", "") }));
      } }, { key: "updateUnreadCount", value(e, t){
        Ue(e) || (st(this.subType) ? this.unreadCount = 0 : t && this.type === S.CONV_GROUP ? this.unreadCount = e : this.unreadCount = this.unreadCount + e);
      } }, { key: "updateLastMessage", value(e){
        this.lastMessage = oi(e);
      } }, { key: "updateGroupAtInfoList", value(e){
        let t, n = (v(t = e.groupAtType) || y(t) || I(t) || D()).slice(0); -1 !== n.indexOf(S.CONV_AT_ME) && -1 !== n.indexOf(S.CONV_AT_ALL) && (n = [S.CONV_AT_ALL_AT_ME]); const o = { from: e.from, groupID: e.groupID, messageSequence: e.sequence, atTypeArray: n, __random: e.__random, __sequence: e.__sequence }; this.groupAtInfoList.push(o), Ne.debug("Conversation.updateGroupAtInfoList conversationID:".concat(this.conversationID), this.groupAtInfoList);
      } }, { key: "clearGroupAtInfoList", value(){
        this.groupAtInfoList.length = 0;
      } }, { key: "reduceUnreadCount", value(){
        this.unreadCount >= 1 && (this.unreadCount -= 1);
      } }, { key: "isLastMessageRevoked", value(e){
        const t = e.sequence, n = e.time; return this.type === S.CONV_C2C && t === this.lastMessage.lastSequence && n === this.lastMessage.lastTime || this.type === S.CONV_GROUP && t === this.lastMessage.lastSequence;
      } }, { key: "setLastMessageRevoked", value(e){
        this.lastMessage.isRevoked = e;
      } }]), e;
    }(), si = function(e){
      i(a, e); const n = f(a); function a(e){
        let t; return o(this, a), (t = n.call(this, e))._className = "ConversationModule", Hr.mixin(h(t)), t._messageListHandler = new xr(), t.singlyLinkedList = new Zr(100), t._pagingStatus = Ct.NOT_START, t._pagingTimeStamp = 0, t._pagingStartIndex = 0, t._pagingPinnedTimeStamp = 0, t._pagingPinnedStartIndex = 0, t._conversationMap = new Map(), t._tmpGroupList = [], t._tmpGroupAtTipsList = [], t._peerReadTimeMap = new Map(), t._completedMap = new Map(), t._roamingMessageKeyAndTimeMap = new Map(), t._initListeners(), t;
      } return s(a, [{ key: "_initListeners", value(){
        this.getInnerEmitterInstance().on(Br.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initLocalConversationList, this);
      } }, { key: "onCheckTimer", value(e){
        0 == e % 60 && this._messageListHandler.traversal();
      } }, { key: "_initLocalConversationList", value(){
        const e = this, t = new qa(fs); Ne.log("".concat(this._className, "._initLocalConversationList.")); let n = "", o = this._getStorageConversationList(); if(o){
          for(var a = o.length, s = 0; s < a; s++){
            const r = o[s]; if(r && r.groupProfile){
              const i = r.groupProfile.type; if(st(i)){
                continue;
              }
            } this._conversationMap.set(o[s].conversationID, new ai(o[s]));
          } this._emitConversationUpdate(!0, !1), n = "count:".concat(a);
        }
        else {
          n = "count:0";
        }t.setNetworkType(this.getNetworkType()).setMessage(n).end(), this.getModule(wt) || this.triggerReady(), this.ready(() => {
          e._tmpGroupList.length > 0 && (e.updateConversationGroupProfile(e._tmpGroupList), e._tmpGroupList.length = 0);
        }), this._syncConversationList();
      } }, { key: "onMessageSent", value(e){
        this._onSendOrReceiveMessage(e.conversationOptionsList, !0);
      } }, { key: "onNewMessage", value(e){
        this._onSendOrReceiveMessage(e.conversationOptionsList, e.isInstantMessage);
      } }, { key: "_onSendOrReceiveMessage", value(e){
        const t = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; this._isReady ? 0 !== e.length && (this._getC2CPeerReadTime(e), this._updateLocalConversationList(e, !1, n), this._setStorageConversationList(), this._emitConversationUpdate()) : this.ready(() => {
          t._onSendOrReceiveMessage(e, n);
        });
      } }, { key: "updateConversationGroupProfile", value(e){
        const t = this; we(e) && 0 === e.length || (0 !== this._conversationMap.size ? (e.forEach(e => {
          const n = "GROUP".concat(e.groupID); if(t._conversationMap.has(n)){
            const o = t._conversationMap.get(n); o.groupProfile = e, o.lastMessage.lastSequence < e.nextMessageSeq && (o.lastMessage.lastSequence = e.nextMessageSeq - 1), o.subType || (o.subType = e.type);
          }
        }), this._emitConversationUpdate(!0, !1)) : this._tmpGroupList = e);
      } }, { key: "_updateConversationUserProfile", value(e){
        const t = this; e.data.forEach(e => {
          const n = "C2C".concat(e.userID); t._conversationMap.has(n) && (t._conversationMap.get(n).userProfile = e);
        }), this._emitConversationUpdate(!0, !1);
      } }, { key: "onMessageRevoked", value(e){
        const t = this; if(0 !== e.length){
          let n = null, o = !1; e.forEach(e => {
            (n = t._conversationMap.get(e.conversationID)) && n.isLastMessageRevoked(e) && (o = !0, n.setLastMessageRevoked(!0));
          }), o && this._emitConversationUpdate(!0, !1);
        }
      } }, { key: "onMessageDeleted", value(e){
        if(0 !== e.length){
          e.forEach(e => {
            e.isDeleted = !0;
          }); for(var t = e[0].conversationID, n = this._messageListHandler.getLocalMessageList(t), o = {}, a = n.length - 1; a > 0; a--){
            if(!n[a].isDeleted){
              o = n[a]; break;
            }
          } const s = this._conversationMap.get(t); if(s){
            let r = !1; s.lastMessage.lastSequence !== o.sequence && s.lastMessage.lastTime !== o.time && (s.updateLastMessage(o), r = !0, Ne.log("".concat(this._className, ".onMessageDeleted. update conversationID:").concat(t, " with lastMessage:"), s.lastMessage)), t.startsWith(S.CONV_C2C) && this.updateUnreadCount(t), r && this._emitConversationUpdate(!0, !1);
          }
        }
      } }, { key: "onNewGroupAtTips", value(e){
        let t = this, n = e.dataList, o = null; n.forEach(e => {
          e.groupAtTips ? o = e.groupAtTips : e.elements && (o = e.elements), o.__random = e.random, o.__sequence = e.clientSequence, t._tmpGroupAtTipsList.push(o);
        }), Ne.debug("".concat(this._className, ".onNewGroupAtTips isReady:").concat(this._isReady), this._tmpGroupAtTipsList), this._isReady && this._handleGroupAtTipsList();
      } }, { key: "_handleGroupAtTipsList", value(){
        const e = this; if(0 !== this._tmpGroupAtTipsList.length){
          let t = !1; this._tmpGroupAtTipsList.forEach(n => {
            const o = n.groupID; if(n.from !== e.getMyUserID()){
              const a = e._conversationMap.get("".concat(S.CONV_GROUP).concat(o)); a && (a.updateGroupAtInfoList(n), t = !0);
            }
          }), t && this._emitConversationUpdate(!0, !1), this._tmpGroupAtTipsList.length = 0;
        }
      } }, { key: "_getC2CPeerReadTime", value(e){
        const t = this, n = []; if(e.forEach(e => {
          t._conversationMap.has(e.conversationID) || e.type !== S.CONV_C2C || n.push(e.conversationID.replace(S.CONV_C2C, ""));
        }), n.length > 0){
          Ne.debug("".concat(this._className, "._getC2CPeerReadTime userIDList:").concat(n)); const o = this.getModule(wt); o && o.getRemotePeerReadTime(n);
        }
      } }, { key: "_getStorageConversationList", value(){
        return this.getModule(xt).getItem("conversationMap");
      } }, { key: "_setStorageConversationList", value(){
        const e = this.getLocalConversationList().slice(0, 20).map(e => ({ conversationID: e.conversationID, type: e.type, subType: e.subType, lastMessage: e.lastMessage, groupProfile: e.groupProfile, userProfile: e.userProfile })); this.getModule(xt).setItem("conversationMap", e);
      } }, { key: "_emitConversationUpdate", value(){
        const e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = M(this._conversationMap.values()); if(t){
          const o = this.getModule(Ut); o && o.updateGroupLastMessage(n);
        }e && this.emitOuterEvent(k.CONVERSATION_LIST_UPDATED, n);
      } }, { key: "getLocalConversationList", value(){
        return M(this._conversationMap.values());
      } }, { key: "getLocalConversation", value(e){
        return this._conversationMap.get(e);
      } }, { key: "_syncConversationList", value(){
        const e = this, t = new qa(ms); return this._pagingStatus === Ct.NOT_START && this._conversationMap.clear(), this._pagingGetConversationList().then(n => (e._pagingStatus = Ct.RESOLVED, e._setStorageConversationList(), e._handleC2CPeerReadTime(), e.checkAndPatchRemark(), t.setMessage(e._conversationMap.size).setNetworkType(e.getNetworkType()).end(), n)).catch(n => (e._pagingStatus = Ct.REJECTED, t.setMessage(e._pagingTimeStamp), e.probeNetwork().then(e => {
          const o = m(e, 2), a = o[0], s = o[1]; t.setError(n, a, s).end();
        }), Vr(n)));
      } }, { key: "_pagingGetConversationList", value(){
        const e = this, t = "".concat(this._className, "._pagingGetConversationList"); return Ne.log("".concat(t, " timeStamp:").concat(this._pagingTimeStamp, " startIndex:").concat(this._pagingStartIndex) + " pinnedTimeStamp:".concat(this._pagingPinnedTimeStamp, " pinnedStartIndex:").concat(this._pagingPinnedStartIndex)), this._pagingStatus = Ct.PENDING, this.request({ protocolName: In, requestData: { fromAccount: this.getMyUserID(), timeStamp: this._pagingTimeStamp, startIndex: this._pagingStartIndex, pinnedTimeStamp: this._pagingPinnedTimeStamp, pinnedStartIndex: this._pagingStartIndex, orderType: 1 } }).then(n => {
          const o = n.data, a = o.completeFlag, s = o.conversations, r = void 0 === s ? [] : s, i = o.timeStamp, u = o.startIndex, c = o.pinnedTimeStamp, l = o.pinnedStartIndex; if(Ne.log("".concat(t, " ok. completeFlag:").concat(a, " count:").concat(r.length, " isReady:").concat(e._isReady)), r.length > 0){
            const d = e._getConversationOptions(r); e._updateLocalConversationList(d, !0), e.isLoggedIn() && e._emitConversationUpdate();
          }if(!e._isReady){
            if(!e.isLoggedIn()){
              return qr();
            } e.triggerReady();
          } return e._pagingTimeStamp = i, e._pagingStartIndex = u, e._pagingPinnedTimeStamp = c, e._pagingPinnedStartIndex = l, 1 !== a ? e._pagingGetConversationList() : (e._handleGroupAtTipsList(), qr());
        }).catch(n => {
          throw e.isLoggedIn() && (e._isReady || (Ne.warn("".concat(t, " failed. error:"), n), e.triggerReady())), n;
        });
      } }, { key: "_updateLocalConversationList", value(e, t, n){
        let o, a = Date.now(); o = this._getTmpConversationListMapping(e, t, n), this._conversationMap = new Map(this._sortConversationList([].concat(M(o.toBeUpdatedConversationList), M(this._conversationMap)))), t || this._updateUserOrGroupProfile(o.newConversationList), Ne.debug("".concat(this._className, "._updateLocalConversationList cost ").concat(Date.now() - a, " ms"));
      } }, { key: "_getTmpConversationListMapping", value(e, t, n){
        for(var o = [], a = [], s = this.getModule(Ut), r = this.getModule(Ft), i = 0, u = e.length; i < u; i++){
          const c = new ai(e[i]), l = c.conversationID; if(this._conversationMap.has(l)){
            const d = this._conversationMap.get(l), p = ["unreadCount", "allowType", "adminForbidType", "payload", "isPinned"]; n || p.push("lastMessage"), je(d, c, p, [null, void 0, "", 0, NaN]), d.updateUnreadCount(c.unreadCount, t), n && (d.lastMessage.payload = e[i].lastMessage.payload, d.type === S.CONV_GROUP && (d.lastMessage.nameCard = e[i].lastMessage.nameCard, d.lastMessage.nick = e[i].lastMessage.nick)), e[i].lastMessage && d.lastMessage.cloudCustomData !== e[i].lastMessage.cloudCustomData && (d.lastMessage.cloudCustomData = e[i].lastMessage.cloudCustomData || ""), this._conversationMap.delete(l), o.push([l, d]);
          }
          else {
            if(c.type === S.CONV_GROUP && s){
              const g = c.groupProfile.groupID, h = s.getLocalGroupProfile(g); h && (c.groupProfile = h, c.updateUnreadCount(0));
            }
            else if(c.type === S.CONV_C2C){
              const _ = l.replace(S.CONV_C2C, ""); r && r.isMyFriend(_) && (c.remark = r.getFriendRemark(_));
            }a.push(c), o.push([l, c]);
          }
        } return { toBeUpdatedConversationList: o, newConversationList: a };
      } }, { key: "_sortConversationList", value(e){
        const t = [], n = []; return e.forEach(e => {
          !0 === e[1].isPinned ? t.push(e) : n.push(e);
        }), t.sort((e, t) => t[1].lastMessage.lastTime - e[1].lastMessage.lastTime).concat(n.sort((e, t) => t[1].lastMessage.lastTime - e[1].lastMessage.lastTime));
      } }, { key: "_sortConversationListAndEmitEvent", value(){
        this._conversationMap = new Map(this._sortConversationList(M(this._conversationMap))), this._emitConversationUpdate(!0, !1);
      } }, { key: "_updateUserOrGroupProfile", value(e){
        const t = this; if(0 !== e.length){
          const n = [], o = [], a = this.getModule(Pt), s = this.getModule(Ut); e.forEach(e => {
            if(e.type === S.CONV_C2C){
              n.push(e.toAccount);
            }
            else if(e.type === S.CONV_GROUP){
              const t = e.toAccount; s.hasLocalGroup(t) ? e.groupProfile = s.getLocalGroupProfile(t) : o.push(t);
            }
          }), Ne.log("".concat(this._className, "._updateUserOrGroupProfile c2cUserIDList:").concat(n, " groupIDList:").concat(o)), n.length > 0 && a.getUserProfile({ userIDList: n }).then(e => {
            const n = e.data; we(n) ? n.forEach(e => {
              t._conversationMap.get("C2C".concat(e.userID)).userProfile = e;
            }) : t._conversationMap.get("C2C".concat(n.userID)).userProfile = n;
          }), o.length > 0 && s.getGroupProfileAdvance({ groupIDList: o, responseFilter: { groupBaseInfoFilter: ["Type", "Name", "FaceUrl"] } }).then(e => {
            e.data.successGroupList.forEach(e => {
              const n = "GROUP".concat(e.groupID); if(t._conversationMap.has(n)){
                const o = t._conversationMap.get(n); je(o.groupProfile, e, [], [null, void 0, "", 0, NaN]), !o.subType && e.type && (o.subType = e.type);
              }
            });
          });
        }
      } }, { key: "_getConversationOptions", value(e){
        const t = [], n = e.filter(e => {
          const t = e.lastMsg; return Pe(t);
        }).map(e => {
          if(1 === e.type){
            const n = { userID: e.userID, nick: e.peerNick, avatar: e.peerAvatar }; return t.push(n), { conversationID: "C2C".concat(e.userID), type: "C2C", lastMessage: { lastTime: e.time, lastSequence: e.sequence, fromAccount: e.lastC2CMsgFromAccount, messageForShow: e.messageShow, type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null, payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null, cloudCustomData: e.cloudCustomData || "", isRevoked: 8 === e.lastMessageFlag, onlineOnlyFlag: !1, nick: "", nameCard: "" }, userProfile: new Xr(n), peerReadTime: e.c2cPeerReadTime, isPinned: 1 === e.isPinned };
          } return { conversationID: "GROUP".concat(e.groupID), type: "GROUP", lastMessage: { lastTime: e.time, lastSequence: e.messageReadSeq + e.unreadCount, fromAccount: e.msgGroupFromAccount, messageForShow: e.messageShow, type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null, payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null, cloudCustomData: e.cloudCustomData || "", isRevoked: 2 === e.lastMessageFlag, onlineOnlyFlag: !1, nick: e.senderNick || "", nameCard: e.senderNameCard || "" }, groupProfile: new ti({ groupID: e.groupID, name: e.groupNick, avatar: e.groupImage }), unreadCount: e.unreadCount, peerReadTime: 0, isPinned: 1 === e.isPinned };
        }); t.length > 0 && this.getModule(Pt).onConversationsProfileUpdated(t); return n;
      } }, { key: "getLocalMessageList", value(e){
        return this._messageListHandler.getLocalMessageList(e);
      } }, { key: "deleteLocalMessage", value(e){
        e instanceof Nr && this._messageListHandler.remove(e);
      } }, { key: "onConversationDeleted", value(e){
        const t = this; Ne.log("".concat(this._className, ".onConversationDeleted")), we(e) && e.forEach(e => {
          let n = e.type, o = e.userID, a = e.groupID, s = ""; 1 === n ? s = "".concat(S.CONV_C2C).concat(o) : 2 === n && (s = "".concat(S.CONV_GROUP).concat(a)), t.deleteLocalConversation(s);
        });
      } }, { key: "onConversationPinned", value(e){
        const t = this; if(we(e)){
          let n = !1; e.forEach(e => {
            let o, a = e.type, s = e.userID, r = e.groupID; 1 === a ? o = t.getLocalConversation("".concat(S.CONV_C2C).concat(s)) : 2 === a && (o = t.getLocalConversation("".concat(S.CONV_GROUP).concat(r))), o && (Ne.log("".concat(t._className, ".onConversationPinned conversationID:").concat(o.conversationID, " isPinned:").concat(o.isPinned)), o.isPinned || (o.isPinned = !0, n = !0));
          }), n && this._sortConversationListAndEmitEvent();
        }
      } }, { key: "onConversationUnpinned", value(e){
        const t = this; if(we(e)){
          let n = !1; e.forEach(e => {
            let o, a = e.type, s = e.userID, r = e.groupID; 1 === a ? o = t.getLocalConversation("".concat(S.CONV_C2C).concat(s)) : 2 === a && (o = t.getLocalConversation("".concat(S.CONV_GROUP).concat(r))), o && (Ne.log("".concat(t._className, ".onConversationUnpinned conversationID:").concat(o.conversationID, " isPinned:").concat(o.isPinned)), o.isPinned && (o.isPinned = !1, n = !0));
          }), n && this._sortConversationListAndEmitEvent();
        }
      } }, { key: "getMessageList", value(e){
        let t = this, n = e.conversationID, o = e.nextReqMessageID, a = e.count, s = "".concat(this._className, ".getMessageList"), r = this.getLocalConversation(n), i = ""; if(r && r.groupProfile && (i = r.groupProfile.type), st(i)){
          return Ne.log("".concat(s, " not available in avchatroom. conversationID:").concat(n)), qr({ messageList: [], nextReqMessageID: "", isCompleted: !0 });
        } (Ue(a) || a > 15) && (a = 15); let u = this._computeLeftCount({ conversationID: n, nextReqMessageID: o }); return Ne.log("".concat(s, " conversationID:").concat(n, " leftCount:").concat(u, " count:").concat(a, " nextReqMessageID:").concat(o)), this._needGetHistory({ conversationID: n, leftCount: u, count: a }) ? this.getHistoryMessages({ conversationID: n, nextReqMessageID: o, count: 20 }).then(() => (u = t._computeLeftCount({ conversationID: n, nextReqMessageID: o }), Lr(t._computeResult({ conversationID: n, nextReqMessageID: o, count: a, leftCount: u })))) : (Ne.log("".concat(s, ".getMessageList get message list from memory")), this.modifyMessageList(n), qr(this._computeResult({ conversationID: n, nextReqMessageID: o, count: a, leftCount: u })));
      } }, { key: "_computeLeftCount", value(e){
        const t = e.conversationID, n = e.nextReqMessageID; return n ? this._messageListHandler.getLocalMessageList(t).findIndex(e => e.ID === n) : this._getMessageListSize(t);
      } }, { key: "_getMessageListSize", value(e){
        return this._messageListHandler.getLocalMessageList(e).length;
      } }, { key: "_needGetHistory", value(e){
        let t = e.conversationID, n = e.leftCount, o = e.count, a = this.getLocalConversation(t), s = ""; return a && a.groupProfile && (s = a.groupProfile.type), !ut(t) && !st(s) && (n < o && !this._completedMap.has(t));
      } }, { key: "_computeResult", value(e){
        const t = e.conversationID, n = e.nextReqMessageID, o = e.count, a = e.leftCount, s = this._computeMessageList({ conversationID: t, nextReqMessageID: n, count: o }), r = this._computeIsCompleted({ conversationID: t, leftCount: a, count: o }), i = this._computeNextReqMessageID({ messageList: s, isCompleted: r, conversationID: t }), u = "".concat(this._className, "._computeResult. conversationID:").concat(t); return Ne.log("".concat(u, " leftCount:").concat(a, " count:").concat(o, " nextReqMessageID:").concat(i, " isCompleted:").concat(r)), { messageList: s, nextReqMessageID: i, isCompleted: r };
      } }, { key: "_computeMessageList", value(e){
        const t = e.conversationID, n = e.nextReqMessageID, o = e.count, a = this._messageListHandler.getLocalMessageList(t), s = this._computeIndexEnd({ nextReqMessageID: n, messageList: a }), r = this._computeIndexStart({ indexEnd: s, count: o }); return a.slice(r, s);
      } }, { key: "_computeNextReqMessageID", value(e){
        const t = e.messageList, n = e.isCompleted, o = e.conversationID; if(!n){
          return 0 === t.length ? "" : t[0].ID;
        } const a = this._messageListHandler.getLocalMessageList(o); return 0 === a.length ? "" : a[0].ID;
      } }, { key: "_computeIndexEnd", value(e){
        const t = e.messageList, n = void 0 === t ? [] : t, o = e.nextReqMessageID; return o ? n.findIndex(e => e.ID === o) : n.length;
      } }, { key: "_computeIndexStart", value(e){
        const t = e.indexEnd, n = e.count; return t > n ? t - n : 0;
      } }, { key: "_computeIsCompleted", value(e){
        const t = e.conversationID; return !!(e.leftCount <= e.count && this._completedMap.has(t));
      } }, { key: "getHistoryMessages", value(e){
        const t = e.conversationID, n = e.nextReqMessageID; if(t === S.CONV_SYSTEM){
          return qr();
        } e.count ? e.count > 20 && (e.count = 20) : e.count = 15; let o = this._messageListHandler.getLocalOldestMessageByConversationID(t); o || ((o = {}).time = 0, o.sequence = 0, 0 === t.indexOf(S.CONV_C2C) ? (o.to = t.replace(S.CONV_C2C, ""), o.conversationType = S.CONV_C2C) : 0 === t.indexOf(S.CONV_GROUP) && (o.to = t.replace(S.CONV_GROUP, ""), o.conversationType = S.CONV_GROUP)); let a = "", s = null; switch(o.conversationType){
          case S.CONV_C2C: if(a = t.replace(S.CONV_C2C, ""), !(s = this.getModule(wt))){
            return Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
          } var r = this._roamingMessageKeyAndTimeMap.has(t); return s.getRoamingMessage({ conversationID: e.conversationID, peerAccount: a, count: e.count, lastMessageTime: r ? this._roamingMessageKeyAndTimeMap.get(t).lastMessageTime : 0, messageKey: r ? this._roamingMessageKeyAndTimeMap.get(t).messageKey : "" }); case S.CONV_GROUP: return (s = this.getModule(Ut)) ? s.getRoamingMessage({ conversationID: e.conversationID, groupID: o.to, count: e.count, sequence: n && !1 === o.getOnlineOnlyFlag() ? o.sequence - 1 : o.sequence }) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta }); default: return qr();
        }
      } }, { key: "patchConversationLastMessage", value(e){
        const t = this.getLocalConversation(e); if(t){
          const n = t.lastMessage, o = n.messageForShow, a = n.payload; if(vt(o) || vt(a)){
            const s = this._messageListHandler.getLocalMessageList(e); if(0 === s.length){
              return;
            } const r = s[s.length - 1]; Ne.log("".concat(this._className, ".patchConversationLastMessage conversationID:").concat(e, " payload:"), r.payload), t.updateLastMessage(r);
          }
        }
      } }, { key: "storeRoamingMessage", value(){
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments.length > 1 ? arguments[1] : void 0, o = n.startsWith(S.CONV_C2C) ? S.CONV_C2C : S.CONV_GROUP, a = null, s = [], r = 0, i = e.length, u = null, c = o === S.CONV_GROUP, l = this.getModule(jt), d = function(){
            r = c ? e.length - 1 : 0, i = c ? 0 : e.length;
          }, p = function(){
            c ? --r : ++r;
          }, g = function(){
            return c ? r >= i : r < i;
          }; for(d(); g(); p()){
          if(c && 1 === e[r].sequence && this.setCompleted(n), 1 !== e[r].isPlaceMessage){
            if((a = new Nr(e[r])).to = e[r].to, a.isSystemMessage = !!e[r].isSystemMessage, a.conversationType = o, 4 === e[r].event ? u = { type: S.MSG_GRP_TIP, content: t(t({}, e[r].elements), {}, { groupProfile: e[r].groupProfile }) } : (e[r].elements = l.parseElements(e[r].elements, e[r].from), u = e[r].elements), c || a.setNickAndAvatar({ nick: e[r].nick, avatar: e[r].avatar }), vt(u)){
              const h = new qa(rs); h.setMessage("from:".concat(a.from, " to:").concat(a.to, " sequence:").concat(a.sequence, " event:").concat(e[r].event)), h.setNetworkType(this.getNetworkType()).setLevel("warning").end();
            }
            else {
              a.setElement(u), a.reInitialize(this.getMyUserID()), s.push(a);
            }
          }
        } return this._messageListHandler.unshift(s), d = p = g = null, s;
      } }, { key: "setMessageRead", value(e){
        const t = e.conversationID, n = e.messageID, o = this.getLocalConversation(t); if(Ne.log("".concat(this._className, ".setMessageRead conversationID:").concat(t, " unreadCount:").concat(o ? o.unreadCount : 0)), !o){
          return qr();
        }if(o.type !== S.CONV_GROUP || vt(o.groupAtInfoList) || this.deleteGroupAtTips(t), 0 === o.unreadCount){
          return qr();
        } let a = this._messageListHandler.getLocalMessage(t, n), s = null; switch(o.type){
          case S.CONV_C2C: return (s = this.getModule(wt)) ? s.setMessageRead({ conversationID: t, lastMessageTime: a ? a.time : o.lastMessage.lastTime }) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta }); case S.CONV_GROUP: return (s = this._moduleManager.getModule(Ut)) ? s.setMessageRead({ conversationID: t, lastMessageSeq: a ? a.sequence : o.lastMessage.lastSequence }) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta }); case S.CONV_SYSTEM: return o.unreadCount = 0, this._emitConversationUpdate(!0, !1), qr(); default: return qr();
        }
      } }, { key: "updateIsReadAfterReadReport", value(e){
        const t = e.conversationID, n = e.lastMessageSeq, o = e.lastMessageTime, a = this._messageListHandler.getLocalMessageList(t); if(0 !== a.length){
          for(var s, r = a.length - 1; r >= 0; r--){
            if(s = a[r], !(o && s.time > o || n && s.sequence > n)){
              if("in" === s.flow && s.isRead){
                break;
              } s.setIsRead(!0);
            }
          }
        }
      } }, { key: "updateUnreadCount", value(e){
        const t = this.getLocalConversation(e), n = this._messageListHandler.getLocalMessageList(e); if(t){
          const o = t.unreadCount, a = n.filter(e => !e.isRead && !e.getOnlineOnlyFlag() && !e.isDeleted).length; o !== a && (t.unreadCount = a, Ne.log("".concat(this._className, ".updateUnreadCount from ").concat(o, " to ").concat(a, ", conversationID:").concat(e)), this._emitConversationUpdate(!0, !1));
        }
      } }, { key: "updateIsRead", value(e){
        const t = this.getLocalConversation(e), n = this.getLocalMessageList(e); if(t && 0 !== n.length && !ut(t.type)){
          for(var o = [], a = 0, s = n.length; a < s; a++){
            "in" !== n[a].flow ? "out" !== n[a].flow || n[a].isRead || n[a].setIsRead(!0) : o.push(n[a]);
          } let r = 0; if(t.type === S.CONV_C2C){
            const i = o.slice(-t.unreadCount).filter(e => e.isRevoked).length; r = o.length - t.unreadCount - i;
          }
          else {
            r = o.length - t.unreadCount;
          }for(let u = 0; u < r && !o[u].isRead; u++){
            o[u].setIsRead(!0);
          }
        }
      } }, { key: "deleteGroupAtTips", value(e){
        const t = "".concat(this._className, ".deleteGroupAtTips"); Ne.log("".concat(t)); const n = this._conversationMap.get(e); if(!n){
          return Promise.resolve();
        } const o = n.groupAtInfoList; if(0 === o.length){
          return Promise.resolve();
        } const a = this.getMyUserID(); return this.request({ protocolName: kn, requestData: { messageListToDelete: o.map(e => ({ from: e.from, to: a, messageSeq: e.__sequence, messageRandom: e.__random, groupID: e.groupID })) } }).then(() => (Ne.log("".concat(t, " ok. count:").concat(o.length)), n.clearGroupAtInfoList(), Promise.resolve())).catch(e => (Ne.error("".concat(t, " failed. error:"), e), Vr(e)));
      } }, { key: "appendToMessageList", value(e){
        this._messageListHandler.pushIn(e);
      } }, { key: "setMessageRandom", value(e){
        this.singlyLinkedList.set(e.random);
      } }, { key: "deleteMessageRandom", value(e){
        this.singlyLinkedList.delete(e.random);
      } }, { key: "pushIntoMessageList", value(e, t, n){
        return !(!this._messageListHandler.pushIn(t, n) || this._isMessageFromCurrentInstance(t) && !n) && (e.push(t), !0);
      } }, { key: "_isMessageFromCurrentInstance", value(e){
        return this.singlyLinkedList.has(e.random);
      } }, { key: "revoke", value(e, t, n){
        return this._messageListHandler.revoke(e, t, n);
      } }, { key: "getPeerReadTime", value(e){
        return this._peerReadTimeMap.get(e);
      } }, { key: "recordPeerReadTime", value(e, t){
        this._peerReadTimeMap.has(e) ? this._peerReadTimeMap.get(e) < t && this._peerReadTimeMap.set(e, t) : this._peerReadTimeMap.set(e, t);
      } }, { key: "updateMessageIsPeerReadProperty", value(e, t){
        if(e.startsWith(S.CONV_C2C) && t > 0){
          const n = this._messageListHandler.updateMessageIsPeerReadProperty(e, t); n.length > 0 && this.emitOuterEvent(k.MESSAGE_READ_BY_PEER, n);
        }
      } }, { key: "updateMessageIsReadProperty", value(e){
        const t = this.getLocalConversation(e), n = this._messageListHandler.getLocalMessageList(e); if(t && 0 !== n.length && !ut(t.type)){
          for(var o = [], a = 0; a < n.length; a++){
            "in" !== n[a].flow ? "out" !== n[a].flow || n[a].isRead || n[a].setIsRead(!0) : o.push(n[a]);
          } let s = 0; if(t.type === S.CONV_C2C){
            const r = o.slice(-t.unreadCount).filter(e => e.isRevoked).length; s = o.length - t.unreadCount - r;
          }
          else {
            s = o.length - t.unreadCount;
          }for(let i = 0; i < s && !o[i].isRead; i++){
            o[i].setIsRead(!0);
          }
        }
      } }, { key: "updateMessageIsModifiedProperty", value(e){
        this._messageListHandler.updateMessageIsModifiedProperty(e);
      } }, { key: "setCompleted", value(e){
        Ne.log("".concat(this._className, ".setCompleted. conversationID:").concat(e)), this._completedMap.set(e, !0);
      } }, { key: "updateRoamingMessageKeyAndTime", value(e, t, n){
        this._roamingMessageKeyAndTimeMap.set(e, { messageKey: t, lastMessageTime: n });
      } }, { key: "getConversationList", value(e){
        const t = this, n = "".concat(this._className, ".getConversationList"), o = "pagingStatus:".concat(this._pagingStatus, ", local conversation count:").concat(this._conversationMap.size, ", options:").concat(e); if(Ne.log("".concat(n, ". ").concat(o)), this._pagingStatus === Ct.REJECTED){
          const a = new qa(ps); return a.setMessage(o), this._syncConversationList().then(() => {
            a.setNetworkType(t.getNetworkType()).end(); const n = t._getConversationList(e); return Lr({ conversationList: n });
          }).catch(e => (t.probeNetwork().then(t => {
            const n = m(t, 2), o = n[0], s = n[1]; a.setError(e, o, s).end();
          }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
        }if(0 === this._conversationMap.size){
          const s = new qa(ps); return s.setMessage(o), this._syncConversationList().then(() => {
            s.setNetworkType(t.getNetworkType()).end(); const n = t._getConversationList(e); return Lr({ conversationList: n });
          }).catch(e => (t.probeNetwork().then(t => {
            const n = m(t, 2), o = n[0], a = n[1]; s.setError(e, o, a).end();
          }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
        } const r = this._getConversationList(e); return Ne.log("".concat(n, ". returned conversation count:").concat(r.length)), qr({ conversationList: r });
      } }, { key: "_getConversationList", value(e){
        const t = this; if(Ue(e)){
          return this.getLocalConversationList();
        }if(we(e)){
          const n = []; return e.forEach(e => {
            if(t._conversationMap.has(e)){
              const o = t.getLocalConversation(e); n.push(o);
            }
          }), n;
        }
      } }, { key: "_handleC2CPeerReadTime", value(){
        let e, t = C(this._conversationMap); try {
          for(t.s(); !(e = t.n()).done;){
            const n = m(e.value, 2), o = n[0], a = n[1]; a.type === S.CONV_C2C && (Ne.debug("".concat(this._className, "._handleC2CPeerReadTime conversationID:").concat(o, " peerReadTime:").concat(a.peerReadTime)), this.recordPeerReadTime(o, a.peerReadTime));
          }
        }
        catch(s){
          t.e(s);
        }
        finally {
          t.f();
        }
      } }, { key: "getConversationProfile", value(e){
        let t, n = this; if((t = this._conversationMap.has(e) ? this._conversationMap.get(e) : new ai({ conversationID: e, type: e.slice(0, 3) === S.CONV_C2C ? S.CONV_C2C : S.CONV_GROUP }))._isInfoCompleted || t.type === S.CONV_SYSTEM){
          return qr({ conversation: t });
        } const o = new qa(gs), a = "".concat(this._className, ".getConversationProfile"); return Ne.log("".concat(a, ". conversationID:").concat(e, " remark:").concat(t.remark, " lastMessage:"), t.lastMessage), this._updateUserOrGroupProfileCompletely(t).then(s => {
          o.setNetworkType(n.getNetworkType()).setMessage("conversationID:".concat(e, " unreadCount:").concat(s.data.conversation.unreadCount)).end(); const r = n.getModule(Ft); if(r && t.type === S.CONV_C2C){
            const i = e.replace(S.CONV_C2C, ""); if(r.isMyFriend(i)){
              const u = r.getFriendRemark(i); t.remark !== u && (t.remark = u, Ne.log("".concat(a, ". conversationID:").concat(e, " patch remark:").concat(t.remark)));
            }
          } return Ne.log("".concat(a, " ok. conversationID:").concat(e)), s;
        }).catch(t => (n.probeNetwork().then(n => {
          const a = m(n, 2), s = a[0], r = a[1]; o.setError(t, s, r).setMessage("conversationID:".concat(e)).end();
        }), Ne.error("".concat(a, " failed. error:"), t), Vr(t)));
      } }, { key: "_updateUserOrGroupProfileCompletely", value(e){
        const t = this; return e.type === S.CONV_C2C ? this.getModule(Pt).getUserProfile({ userIDList: [e.toAccount] }).then(n => {
          const o = n.data; return 0 === o.length ? Vr(new wr({ code: _o.USER_OR_GROUP_NOT_FOUND, message: zo })) : (e.userProfile = o[0], e._isInfoCompleted = !0, t._unshiftConversation(e), qr({ conversation: e }));
        }) : this.getModule(Ut).getGroupProfile({ groupID: e.toAccount }).then(n => (e.groupProfile = n.data.group, e._isInfoCompleted = !0, t._unshiftConversation(e), qr({ conversation: e })));
      } }, { key: "_unshiftConversation", value(e){
        e instanceof ai && !this._conversationMap.has(e.conversationID) && (this._conversationMap = new Map([[e.conversationID, e]].concat(M(this._conversationMap))), this._setStorageConversationList(), this._emitConversationUpdate(!0, !1));
      } }, { key: "deleteConversation", value(e){
        const t = this, n = { fromAccount: this.getMyUserID(), toAccount: void 0, type: void 0 }; if(!this._conversationMap.has(e)){
          const o = new wr({ code: _o.CONVERSATION_NOT_FOUND, message: Wo }); return Vr(o);
        }switch(this._conversationMap.get(e).type){
          case S.CONV_C2C: n.type = 1, n.toAccount = e.replace(S.CONV_C2C, ""); break; case S.CONV_GROUP: n.type = 2, n.toGroupID = e.replace(S.CONV_GROUP, ""); break; case S.CONV_SYSTEM: return this.getModule(Ut).deleteGroupSystemNotice({ messageList: this._messageListHandler.getLocalMessageList(e) }), this.deleteLocalConversation(e), qr({ conversationID: e }); default: var a = new wr({ code: _o.CONVERSATION_UN_RECORDED_TYPE, message: Jo }); return Vr(a);
        } const s = new qa(hs); s.setMessage("conversationID:".concat(e)); const r = "".concat(this._className, ".deleteConversation"); return Ne.log("".concat(r, ". conversationID:").concat(e)), this.setMessageRead({ conversationID: e }).then(() => t.request({ protocolName: Dn, requestData: n })).then(() => (s.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(r, " ok")), t.deleteLocalConversation(e), qr({ conversationID: e }))).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; s.setError(e, o, a).end();
        }), Ne.error("".concat(r, " failed. error:"), e), Vr(e)));
      } }, { key: "pinConversation", value(e){
        const t = this, n = e.conversationID, o = e.isPinned; if(!this._conversationMap.has(n)){
          return Vr({ code: _o.CONVERSATION_NOT_FOUND, message: Wo });
        } const a = this.getLocalConversation(n); if(a.isPinned === o){
          return qr({ conversationID: n });
        } const s = new qa(_s); s.setMessage("conversationID:".concat(n, " isPinned:").concat(o)); const r = "".concat(this._className, ".pinConversation"); Ne.log("".concat(r, ". conversationID:").concat(n, " isPinned:").concat(o)); let i = null; return rt(n) ? i = { type: 1, toAccount: n.replace(S.CONV_C2C, "") } : it(n) && (i = { type: 2, groupID: n.replace(S.CONV_GROUP, "") }), this.request({ protocolName: Cn, requestData: { fromAccount: this.getMyUserID(), operationType: !0 === o ? 1 : 2, itemList: [i] } }).then(() => (s.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(r, " ok")), a.isPinned !== o && (a.isPinned = o, t._sortConversationListAndEmitEvent()), Lr({ conversationID: n }))).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; s.setError(e, o, a).end();
        }), Ne.error("".concat(r, " failed. error:"), e), Vr(e)));
      } }, { key: "deleteLocalConversation", value(e){
        const t = this._conversationMap.has(e); Ne.log("".concat(this._className, ".deleteLocalConversation conversationID:").concat(e, " has:").concat(t)), t && (this._conversationMap.delete(e), this._roamingMessageKeyAndTimeMap.delete(e), this._setStorageConversationList(), this._messageListHandler.removeByConversationID(e), this._completedMap.delete(e), this._emitConversationUpdate(!0, !1));
      } }, { key: "isMessageSentByCurrentInstance", value(e){
        return !(!this._messageListHandler.hasLocalMessage(e.conversationID, e.ID) && !this.singlyLinkedList.has(e.random));
      } }, { key: "modifyMessageList", value(e){
        if(e.startsWith(S.CONV_C2C)){
          const t = Date.now(); this._messageListHandler.modifyMessageSentByPeer(e); const n = this.getModule(Pt).getNickAndAvatarByUserID(this.getMyUserID()); this._messageListHandler.modifyMessageSentByMe({ conversationID: e, latestNick: n.nick, latestAvatar: n.avatar }), Ne.log("".concat(this._className, ".modifyMessageList conversationID:").concat(e, " cost ").concat(Date.now() - t, " ms"));
        }
      } }, { key: "updateUserProfileSpecifiedKey", value(e){
        Ne.log("".concat(this._className, ".updateUserProfileSpecifiedKey options:"), e); const t = e.conversationID, n = e.nick, o = e.avatar; if(this._conversationMap.has(t)){
          const a = this._conversationMap.get(t).userProfile; Ge(n) && a.nick !== n && (a.nick = n), Ge(o) && a.avatar !== o && (a.avatar = o), this._emitConversationUpdate(!0, !1);
        }
      } }, { key: "onMyProfileModified", value(e){
        const n = this, o = this.getLocalConversationList(), a = Date.now(); o.forEach(o => {
          n.modifyMessageSentByMe(t({ conversationID: o.conversationID }, e));
        }), Ne.log("".concat(this._className, ".onMyProfileModified. modify all messages sent by me, cost ").concat(Date.now() - a, " ms"));
      } }, { key: "modifyMessageSentByMe", value(e){
        this._messageListHandler.modifyMessageSentByMe(e);
      } }, { key: "getLatestMessageSentByMe", value(e){
        return this._messageListHandler.getLatestMessageSentByMe(e);
      } }, { key: "modifyMessageSentByPeer", value(e, t){
        this._messageListHandler.modifyMessageSentByPeer(e, t);
      } }, { key: "getLatestMessageSentByPeer", value(e){
        return this._messageListHandler.getLatestMessageSentByPeer(e);
      } }, { key: "pushIntoNoticeResult", value(e, t){
        return !(!this._messageListHandler.pushIn(t) || this.singlyLinkedList.has(t.random)) && (e.push(t), !0);
      } }, { key: "getGroupLocalLastMessageSequence", value(e){
        return this._messageListHandler.getGroupLocalLastMessageSequence(e);
      } }, { key: "checkAndPatchRemark", value(){
        if(0 !== this._conversationMap.size){
          const e = this.getModule(Ft); if(e){
            const t = M(this._conversationMap.values()).filter(e => e.type === S.CONV_C2C); if(0 !== t.length){
              let n = !1, o = 0; t.forEach(t => {
                const a = t.conversationID.replace(S.CONV_C2C, ""); if(e.isMyFriend(a)){
                  const s = e.getFriendRemark(a); t.remark !== s && (t.remark = s, o += 1, n = !0);
                }
              }), Ne.log("".concat(this._className, ".checkAndPatchRemark. c2c conversation count:").concat(t.length, ", patched count:").concat(o)), n && this._emitConversationUpdate(!0, !1);
            }
          }
        }
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this._pagingStatus = Ct.NOT_START, this._messageListHandler.reset(), this._roamingMessageKeyAndTimeMap.clear(), this.singlyLinkedList.reset(), this._peerReadTimeMap.clear(), this._completedMap.clear(), this._conversationMap.clear(), this._pagingTimeStamp = 0, this._pagingStartIndex = 0, this._pagingPinnedTimeStamp = 0, this._pagingPinnedStartIndex = 0, this.resetReady();
      } }]), a;
    }(nn), ri = function(){
      function e(t){
        o(this, e), this._groupModule = t, this._className = "GroupTipsHandler", this._cachedGroupTipsMap = new Map(), this._checkCountMap = new Map(), this.MAX_CHECK_COUNT = 4;
      } return s(e, [{ key: "onCheckTimer", value(e){
        0 == e % 1 && this._cachedGroupTipsMap.size > 0 && this._checkCachedGroupTips();
      } }, { key: "_checkCachedGroupTips", value(){
        const e = this; this._cachedGroupTipsMap.forEach((t, n) => {
          let o = e._checkCountMap.get(n), a = e._groupModule.hasLocalGroup(n); Ne.log("".concat(e._className, "._checkCachedGroupTips groupID:").concat(n, " hasLocalGroup:").concat(a, " checkCount:").concat(o)), a ? (e._notifyCachedGroupTips(n), e._checkCountMap.delete(n), e._groupModule.deleteUnjoinedAVChatRoom(n)) : o >= e.MAX_CHECK_COUNT ? (e._deleteCachedGroupTips(n), e._checkCountMap.delete(n)) : (o++, e._checkCountMap.set(n, o));
        });
      } }, { key: "onNewGroupTips", value(e){
        Ne.debug("".concat(this._className, ".onReceiveGroupTips count:").concat(e.dataList.length)); const t = this.newGroupTipsStoredAndSummary(e), n = t.eventDataList, o = t.result, a = t.AVChatRoomMessageList; (a.length > 0 && this._groupModule.onAVChatRoomMessage(a), n.length > 0) && (this._groupModule.getModule(Vt).onNewMessage({ conversationOptionsList: n, isInstantMessage: !0 }), this._groupModule.updateNextMessageSeq(n)); o.length > 0 && (this._groupModule.emitOuterEvent(k.MESSAGE_RECEIVED, o), this.handleMessageList(o));
      } }, { key: "newGroupTipsStoredAndSummary", value(e){
        for(var n = e.event, o = e.dataList, a = null, s = [], r = [], i = {}, u = [], c = 0, l = o.length; c < l; c++){
          const d = o[c], p = d.groupProfile.groupID, g = this._groupModule.hasLocalGroup(p); if(g || !this._groupModule.isUnjoinedAVChatRoom(p)){
            if(g){
              if(this._groupModule.isMessageFromAVChatroom(p)){
                const h = nt(d); h.event = n, u.push(h);
              }
              else {
                d.currentUser = this._groupModule.getMyUserID(), d.conversationType = S.CONV_GROUP, (a = new Nr(d)).setElement({ type: S.MSG_GRP_TIP, content: t(t({}, d.elements), {}, { groupProfile: d.groupProfile }) }), a.isSystemMessage = !1; const _ = this._groupModule.getModule(Vt), f = a.conversationID; if(6 === n){
                  a.setOnlineOnlyFlag(!0), r.push(a);
                }
                else if(!_.pushIntoNoticeResult(r, a)){
                  continue;
                }if(6 !== n || !_.getLocalConversation(f)){
                  if(6 !== n){
                    this._groupModule.getModule(tn).addMessageSequence({ key: Ra, message: a });
                  }if(Ue(i[f])){
                    i[f] = s.push({ conversationID: f, unreadCount: "in" === a.flow && a.getOnlineOnlyFlag() ? 0 : 1, type: a.conversationType, subType: a.conversationSubType, lastMessage: a }) - 1;
                  }
                  else {
                    const m = i[f]; s[m].type = a.conversationType, s[m].subType = a.conversationSubType, s[m].lastMessage = a, "in" !== a.flow || a.getOnlineOnlyFlag() || s[m].unreadCount++;
                  }
                }
              }
            }
            else {
              this._cacheGroupTipsAndProbe({ groupID: p, event: n, item: d });
            }
          }
        } return { eventDataList: s, result: r, AVChatRoomMessageList: u };
      } }, { key: "handleMessageList", value(e){
        const t = this; e.forEach(e => {
          switch(e.payload.operationType){
            case 1: t._onNewMemberComeIn(e); break; case 2: t._onMemberQuit(e); break; case 3: t._onMemberKickedOut(e); break; case 4: t._onMemberSetAdmin(e); break; case 5: t._onMemberCancelledAdmin(e); break; case 6: t._onGroupProfileModified(e); break; case 7: t._onMemberInfoModified(e); break; default: Ne.warn("".concat(t._className, ".handleMessageList unknown operationType:").concat(e.payload.operationType));
          }
        });
      } }, { key: "_onNewMemberComeIn", value(e){
        const t = e.payload, n = t.memberNum, o = t.groupProfile.groupID, a = this._groupModule.getLocalGroupProfile(o); a && Re(n) && (a.memberNum = n);
      } }, { key: "_onMemberQuit", value(e){
        const t = e.payload, n = t.memberNum, o = t.groupProfile.groupID, a = this._groupModule.getLocalGroupProfile(o); a && Re(n) && (a.memberNum = n), this._groupModule.deleteLocalGroupMembers(o, e.payload.userIDList);
      } }, { key: "_onMemberKickedOut", value(e){
        const t = e.payload, n = t.memberNum, o = t.groupProfile.groupID, a = this._groupModule.getLocalGroupProfile(o); a && Re(n) && (a.memberNum = n), this._groupModule.deleteLocalGroupMembers(o, e.payload.userIDList);
      } }, { key: "_onMemberSetAdmin", value(e){
        const t = e.payload.groupProfile.groupID, n = e.payload.userIDList, o = this._groupModule.getModule(qt); n.forEach(e => {
          const n = o.getLocalGroupMemberInfo(t, e); n && n.updateRole(S.GRP_MBR_ROLE_ADMIN);
        });
      } }, { key: "_onMemberCancelledAdmin", value(e){
        const t = e.payload.groupProfile.groupID, n = e.payload.userIDList, o = this._groupModule.getModule(qt); n.forEach(e => {
          const n = o.getLocalGroupMemberInfo(t, e); n && n.updateRole(S.GRP_MBR_ROLE_MEMBER);
        });
      } }, { key: "_onGroupProfileModified", value(e){
        const t = this, n = e.payload, o = n.newGroupProfile, a = n.groupProfile.groupID, s = this._groupModule.getLocalGroupProfile(a); Object.keys(o).forEach(e => {
          switch(e){
            case "ownerID": t._ownerChanged(s, o); break; default: s[e] = o[e];
          }
        }), this._groupModule.emitGroupListUpdate(!0, !0);
      } }, { key: "_ownerChanged", value(e, t){
        const n = e.groupID, o = this._groupModule.getLocalGroupProfile(n), a = this.tim.context.identifier; if(a === t.ownerID){
          o.updateGroup({ selfInfo: { role: S.GRP_MBR_ROLE_OWNER } }); const s = this._groupModule.getModule(qt), r = s.getLocalGroupMemberInfo(n, a), i = this._groupModule.getLocalGroupProfile(n).ownerID, u = s.getLocalGroupMemberInfo(n, i); r && r.updateRole(S.GRP_MBR_ROLE_OWNER), u && u.updateRole(S.GRP_MBR_ROLE_MEMBER);
        }
      } }, { key: "_onMemberInfoModified", value(e){
        const t = e.payload.groupProfile.groupID, n = this._groupModule.getModule(qt); e.payload.memberList.forEach(e => {
          const o = n.getLocalGroupMemberInfo(t, e.userID); o && e.muteTime && o.updateMuteUntil(e.muteTime);
        });
      } }, { key: "_cacheGroupTips", value(e, t){
        this._cachedGroupTipsMap.has(e) || this._cachedGroupTipsMap.set(e, []), this._cachedGroupTipsMap.get(e).push(t);
      } }, { key: "_deleteCachedGroupTips", value(e){
        this._cachedGroupTipsMap.has(e) && this._cachedGroupTipsMap.delete(e);
      } }, { key: "_notifyCachedGroupTips", value(e){
        const t = this, n = this._cachedGroupTipsMap.get(e) || []; n.forEach(e => {
          t.onNewGroupTips(e);
        }), this._deleteCachedGroupTips(e), Ne.log("".concat(this._className, "._notifyCachedGroupTips groupID:").concat(e, " count:").concat(n.length));
      } }, { key: "_cacheGroupTipsAndProbe", value(e){
        const t = this, n = e.groupID, o = e.event, a = e.item; this._cacheGroupTips(n, { event: o, dataList: [a] }), this._groupModule.getGroupSimplifiedInfo(n).then(e => {
          e.type === S.GRP_AVCHATROOM ? t._groupModule.hasLocalGroup(n) ? t._notifyCachedGroupTips(n) : t._groupModule.setUnjoinedAVChatRoom(n) : (t._groupModule.updateGroupMap([e]), t._notifyCachedGroupTips(n));
        }), this._checkCountMap.has(n) || this._checkCountMap.set(n, 0), Ne.log("".concat(this._className, "._cacheGroupTipsAndProbe groupID:").concat(n));
      } }, { key: "reset", value(){
        this._cachedGroupTipsMap.clear(), this._checkCountMap.clear();
      } }]), e;
    }(), ii = function(){
      function e(t){
        o(this, e), this._groupModule = t, this._className = "CommonGroupHandler", this.tempConversationList = null, this._cachedGroupMessageMap = new Map(), this._checkCountMap = new Map(), this.MAX_CHECK_COUNT = 4, t.getInnerEmitterInstance().once(Br.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initGroupList, this);
      } return s(e, [{ key: "onCheckTimer", value(e){
        0 == e % 1 && this._cachedGroupMessageMap.size > 0 && this._checkCachedGroupMessage();
      } }, { key: "_checkCachedGroupMessage", value(){
        const e = this; this._cachedGroupMessageMap.forEach((t, n) => {
          let o = e._checkCountMap.get(n), a = e._groupModule.hasLocalGroup(n); Ne.log("".concat(e._className, "._checkCachedGroupMessage groupID:").concat(n, " hasLocalGroup:").concat(a, " checkCount:").concat(o)), a ? (e._notifyCachedGroupMessage(n), e._checkCountMap.delete(n), e._groupModule.deleteUnjoinedAVChatRoom(n)) : o >= e.MAX_CHECK_COUNT ? (e._deleteCachedGroupMessage(n), e._checkCountMap.delete(n)) : (o++, e._checkCountMap.set(n, o));
        });
      } }, { key: "_initGroupList", value(){
        const e = this; Ne.log("".concat(this._className, "._initGroupList")); const t = new qa(Ls), n = this._groupModule.getStorageGroupList(); if(we(n) && n.length > 0){
          n.forEach(t => {
            e._groupModule.initGroupMap(t);
          }), this._groupModule.emitGroupListUpdate(!0, !1); const o = this._groupModule.getLocalGroupList().length; t.setNetworkType(this._groupModule.getNetworkType()).setMessage("group count:".concat(o)).end();
        }
        else {
          t.setNetworkType(this._groupModule.getNetworkType()).setMessage("group count:0").end();
        }Ne.log("".concat(this._className, "._initGroupList ok")), this.getGroupList();
      } }, { key: "handleUpdateGroupLastMessage", value(e){
        const t = "".concat(this._className, ".handleUpdateGroupLastMessage"); if(Ne.debug("".concat(t, " conversation count:").concat(e.length, ", local group count:").concat(this._groupModule.getLocalGroupList().length)), 0 !== this._groupModule.getGroupMap().size){
          for(var n, o, a, s = !1, r = 0, i = e.length; r < i; r++){
            (n = e[r]).type === S.CONV_GROUP && (o = n.conversationID.split(/^GROUP/)[1], (a = this._groupModule.getLocalGroupProfile(o)) && (a.lastMessage = n.lastMessage, s = !0));
          }s && (this._groupModule.sortLocalGroupList(), this._groupModule.emitGroupListUpdate(!0, !1));
        }
        else {
          this.tempConversationList = e;
        }
      } }, { key: "onNewGroupMessage", value(e){
        Ne.debug("".concat(this._className, ".onNewGroupMessage count:").concat(e.dataList.length)); const t = this._newGroupMessageStoredAndSummary(e), n = t.conversationOptionsList, o = t.messageList, a = t.AVChatRoomMessageList; (a.length > 0 && this._groupModule.onAVChatRoomMessage(a), this._groupModule.filterModifiedMessage(o), n.length > 0) && (this._groupModule.getModule(Vt).onNewMessage({ conversationOptionsList: n, isInstantMessage: !0 }), this._groupModule.updateNextMessageSeq(n)); const s = this._groupModule.filterUnmodifiedMessage(o); s.length > 0 && this._groupModule.emitOuterEvent(k.MESSAGE_RECEIVED, s), o.length = 0;
      } }, { key: "_newGroupMessageStoredAndSummary", value(e){
        let t = e.dataList, n = e.event, o = e.isInstantMessage, a = null, s = [], r = [], i = [], u = {}, c = S.CONV_GROUP, l = this._groupModule.getModule(jt), d = t.length; d > 1 && t.sort((e, t) => e.sequence - t.sequence); for(let p = 0; p < d; p++){
          const g = t[p], h = g.groupProfile.groupID, _ = this._groupModule.hasLocalGroup(h); if(_ || !this._groupModule.isUnjoinedAVChatRoom(h)){
            if(_){
              if(this._groupModule.isMessageFromAVChatroom(h)){
                const f = nt(g); f.event = n, i.push(f);
              }
              else {
                g.currentUser = this._groupModule.getMyUserID(), g.conversationType = c, g.isSystemMessage = !!g.isSystemMessage, a = new Nr(g), g.elements = l.parseElements(g.elements, g.from), a.setElement(g.elements); let m = 1 === t[p].isModified, M = this._groupModule.getModule(Vt); M.isMessageSentByCurrentInstance(a) ? a.isModified = m : m = !1; const v = this._groupModule.getModule(tn); if(o && v.addMessageDelay({ currentTime: Date.now(), time: a.time }), 1 === g.onlineOnlyFlag){
                  a.setOnlineOnlyFlag(!0), r.push(a);
                }
                else {
                  if(!M.pushIntoMessageList(r, a, m)){
                    continue;
                  } v.addMessageSequence({ key: Ra, message: a }); const y = a.conversationID; if(Ue(u[y])){
                    u[y] = s.push({ conversationID: y, unreadCount: "out" === a.flow ? 0 : 1, type: a.conversationType, subType: a.conversationSubType, lastMessage: a }) - 1;
                  }
                  else {
                    const I = u[y]; s[I].type = a.conversationType, s[I].subType = a.conversationSubType, s[I].lastMessage = a, "in" === a.flow && s[I].unreadCount++;
                  }
                }
              }
            }
            else {
              this._cacheGroupMessageAndProbe({ groupID: h, event: n, item: g });
            }
          }
        } return { conversationOptionsList: s, messageList: r, AVChatRoomMessageList: i };
      } }, { key: "onGroupMessageRevoked", value(e){
        Ne.debug("".concat(this._className, ".onGroupMessageRevoked nums:").concat(e.dataList.length)); let t = this._groupModule.getModule(Vt), n = [], o = null; e.dataList.forEach(e => {
          const a = e.elements.revokedInfos; Ue(a) || a.forEach(e => {
            (o = t.revoke("GROUP".concat(e.groupID), e.sequence, e.random)) && n.push(o);
          });
        }), 0 !== n.length && (t.onMessageRevoked(n), this._groupModule.emitOuterEvent(k.MESSAGE_REVOKED, n));
      } }, { key: "_groupListTreeShaking", value(e){
        for(var t = new Map(M(this._groupModule.getGroupMap())), n = 0, o = e.length; n < o; n++){
          t.delete(e[n].groupID);
        } this._groupModule.hasJoinedAVChatRoom() && this._groupModule.getJoinedAVChatRoom().forEach(e => {
          t.delete(e);
        }); for(let a = M(t.keys()), s = 0, r = a.length; s < r; s++){
          this._groupModule.deleteGroup(a[s]);
        }
      } }, { key: "getGroupList", value(e){
        const t = this, n = "".concat(this._className, ".getGroupList"), o = new qa(As); Ne.log("".concat(n)); const a = { introduction: "Introduction", notification: "Notification", createTime: "CreateTime", ownerID: "Owner_Account", lastInfoTime: "LastInfoTime", memberNum: "MemberNum", maxMemberNum: "MaxMemberNum", joinOption: "ApplyJoinOption", muteAllMembers: "ShutUpAllMember" }, s = ["Type", "Name", "FaceUrl", "NextMsgSeq", "LastMsgTime"], r = []; return e && e.groupProfileFilter && e.groupProfileFilter.forEach(e => {
          a[e] && s.push(a[e]);
        }), this._pagingGetGroupList({ limit: 50, offset: 0, groupBaseInfoFilter: s, groupList: r }).then(() => {
          Ne.log("".concat(n, " ok. count:").concat(r.length)), t._groupListTreeShaking(r), t._groupModule.updateGroupMap(r); const e = t._groupModule.getLocalGroupList().length; return o.setNetworkType(t._groupModule.getNetworkType()).setMessage("remote count:".concat(r.length, ", after tree shaking, local count:").concat(e)).end(), t.tempConversationList && (Ne.log("".concat(n, " update last message with tempConversationList, count:").concat(t.tempConversationList.length)), t.handleUpdateGroupLastMessage({ data: t.tempConversationList }), t.tempConversationList = null), t._groupModule.emitGroupListUpdate(), Lr({ groupList: t._groupModule.getLocalGroupList() });
        }).catch(e => (t._groupModule.probeNetwork().then(t => {
          const n = m(t, 2), a = n[0], s = n[1]; o.setError(e, a, s).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "_pagingGetGroupList", value(e){
        let t = this, n = "".concat(this._className, "._pagingGetGroupList"), o = e.limit, a = e.offset, s = e.groupBaseInfoFilter, r = e.groupList, i = new qa(Gs); return this._groupModule.request({ protocolName: Sn, requestData: { memberAccount: this._groupModule.getMyUserID(), limit: o, offset: a, responseFilter: { groupBaseInfoFilter: s, selfInfoFilter: ["Role", "JoinTime", "MsgFlag"] } } }).then(e => {
          const u = e.data, c = u.groups, l = u.totalCount; r.push.apply(r, M(c)); const d = a + o, p = !(l > d); return i.setNetworkType(t._groupModule.getNetworkType()).setMessage("offset:".concat(a, " totalCount:").concat(l, " isCompleted:").concat(p, " currentCount:").concat(r.length)).end(), p ? (Ne.log("".concat(n, " ok. totalCount:").concat(l)), Lr({ groupList: r })) : (a = d, t._pagingGetGroupList({ limit: o, offset: a, groupBaseInfoFilter: s, groupList: r }));
        }).catch(e => (t._groupModule.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; i.setError(e, o, a).end();
        }), Vr(e)));
      } }, { key: "_cacheGroupMessage", value(e, t){
        this._cachedGroupMessageMap.has(e) || this._cachedGroupMessageMap.set(e, []), this._cachedGroupMessageMap.get(e).push(t);
      } }, { key: "_deleteCachedGroupMessage", value(e){
        this._cachedGroupMessageMap.has(e) && this._cachedGroupMessageMap.delete(e);
      } }, { key: "_notifyCachedGroupMessage", value(e){
        const t = this, n = this._cachedGroupMessageMap.get(e) || []; n.forEach(e => {
          t.onNewGroupMessage(e);
        }), this._deleteCachedGroupMessage(e), Ne.log("".concat(this._className, "._notifyCachedGroupMessage groupID:").concat(e, " count:").concat(n.length));
      } }, { key: "_cacheGroupMessageAndProbe", value(e){
        const t = this, n = e.groupID, o = e.event, a = e.item; this._cacheGroupMessage(n, { event: o, dataList: [a] }), this._groupModule.getGroupSimplifiedInfo(n).then(e => {
          e.type === S.GRP_AVCHATROOM ? t._groupModule.hasLocalGroup(n) ? t._notifyCachedGroupMessage(n) : t._groupModule.setUnjoinedAVChatRoom(n) : (t._groupModule.updateGroupMap([e]), t._notifyCachedGroupMessage(n));
        }), this._checkCountMap.has(n) || this._checkCountMap.set(n, 0), Ne.log("".concat(this._className, "._cacheGroupMessageAndProbe groupID:").concat(n));
      } }, { key: "reset", value(){
        this._cachedGroupMessageMap.clear(), this._checkCountMap.clear(), this._groupModule.getInnerEmitterInstance().once(Br.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initGroupList, this);
      } }]), e;
    }(), ui = { 1: "init", 2: "modify", 3: "clear", 4: "delete" }, ci = function(){
      function e(t){
        o(this, e), this._groupModule = t, this._className = "GroupAttributesHandler", this._groupAttributesMap = new Map(), this.CACHE_EXPIRE_TIME = 3e4, this._groupModule.getInnerEmitterInstance().on(Br.CLOUD_CONFIG_UPDATED, this._onCloudConfigUpdated, this);
      } return s(e, [{ key: "_onCloudConfigUpdated", value(){
        const e = this._groupModule.getCloudConfig("grp_attr_cache_time"); Ue(e) || (this.CACHE_EXPIRE_TIME = Number(e));
      } }, { key: "updateLocalMainSequenceOnReconnected", value(){
        this._groupAttributesMap.forEach(e => {
          e.localMainSequence = 0;
        });
      } }, { key: "onGroupAttributesUpdated", value(e){
        let t = this, n = e.groupID, o = e.groupAttributeOption, a = o.mainSequence, s = o.hasChangedAttributeInfo, r = o.groupAttributeList, i = void 0 === r ? [] : r, u = o.operationType; if(Ne.log("".concat(this._className, ".onGroupAttributesUpdated. hasChangedAttributeInfo:").concat(s, " operationType:").concat(u)), 1 === s){
          if(4 === u){
            let c = []; i.forEach(e => {
              c.push(e.key);
            }), i = M(c), c = null;
          } return this._refreshCachedGroupAttributes({ groupID: n, remoteMainSequence: a, groupAttributeList: i, operationType: ui[u] }), void this._emitGroupAttributesUpdated(n);
        }if(this._groupAttributesMap.has(n)){
          const l = this._groupAttributesMap.get(n).avChatRoomKey; this._getGroupAttributes({ groupID: n, avChatRoomKey: l }).then(() => {
            t._emitGroupAttributesUpdated(n);
          });
        }
      } }, { key: "initGroupAttributesCache", value(e){
        const t = e.groupID, n = e.avChatRoomKey; this._groupAttributesMap.set(t, { lastUpdateTime: 0, localMainSequence: 0, remoteMainSequence: 0, attributes: new Map(), avChatRoomKey: n }), Ne.log("".concat(this._className, ".initGroupAttributesCache groupID:").concat(t, " avChatRoomKey:").concat(n));
      } }, { key: "initGroupAttributes", value(e){
        const t = this, n = e.groupID, o = e.groupAttributes, a = this._checkCachedGroupAttributes({ groupID: n, funcName: "initGroupAttributes" }); if(!0 !== a){
          return Vr(a);
        } const s = this._groupAttributesMap.get(n), r = s.remoteMainSequence, i = s.avChatRoomKey, u = new qa(ws); return u.setMessage("groupID:".concat(n, " mainSequence:").concat(r, " groupAttributes:").concat(JSON.stringify(o))), this._groupModule.request({ protocolName: $n, requestData: { groupID: n, avChatRoomKey: i, mainSequence: r, groupAttributeList: this._transformGroupAttributes(o) } }).then(e => {
          const a = e.data, s = a.mainSequence, r = M(a.groupAttributeList); return r.forEach(e => {
            e.value = o[e.key];
          }), t._refreshCachedGroupAttributes({ groupID: n, remoteMainSequence: s, groupAttributeList: r, operationType: "init" }), u.setNetworkType(t._groupModule.getNetworkType()).end(), Ne.log("".concat(t._className, ".initGroupAttributes ok. groupID:").concat(n)), Lr({ groupAttributes: o });
        }).catch(e => (t._groupModule.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; u.setError(e, o, a).end();
        }), Vr(e)));
      } }, { key: "setGroupAttributes", value(e){
        const t = this, n = e.groupID, o = e.groupAttributes, a = this._checkCachedGroupAttributes({ groupID: n, funcName: "setGroupAttributes" }); if(!0 !== a){
          return Vr(a);
        } const s = this._groupAttributesMap.get(n), r = s.remoteMainSequence, i = s.avChatRoomKey, u = s.attributes, c = this._transformGroupAttributes(o); c.forEach(e => {
          const t = e.key; e.sequence = 0, u.has(t) && (e.sequence = u.get(t).sequence);
        }); const l = new qa(Us); return l.setMessage("groupID:".concat(n, " mainSequence:").concat(r, " groupAttributes:").concat(JSON.stringify(o))), this._groupModule.request({ protocolName: Wn, requestData: { groupID: n, avChatRoomKey: i, mainSequence: r, groupAttributeList: c } }).then(e => {
          const a = e.data, s = a.mainSequence, r = M(a.groupAttributeList); return r.forEach(e => {
            e.value = o[e.key];
          }), t._refreshCachedGroupAttributes({ groupID: n, remoteMainSequence: s, groupAttributeList: r, operationType: "modify" }), l.setNetworkType(t._groupModule.getNetworkType()).end(), Ne.log("".concat(t._className, ".setGroupAttributes ok. groupID:").concat(n)), Lr({ groupAttributes: o });
        }).catch(e => (t._groupModule.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; l.setError(e, o, a).end();
        }), Vr(e)));
      } }, { key: "deleteGroupAttributes", value(e){
        const t = this, n = e.groupID, o = e.keyList, a = void 0 === o ? [] : o, s = this._checkCachedGroupAttributes({ groupID: n, funcName: "deleteGroupAttributes" }); if(!0 !== s){
          return Vr(s);
        } let r = this._groupAttributesMap.get(n), i = r.remoteMainSequence, u = r.avChatRoomKey, c = r.attributes, l = M(c.keys()), d = Jn, p = "clear", g = { groupID: n, avChatRoomKey: u, mainSequence: i }; if(a.length > 0){
          const h = []; l = [], d = zn, p = "delete", a.forEach(e => {
            let t = 0; c.has(e) && (t = c.get(e).sequence, l.push(e)), h.push({ key: e, sequence: t });
          }), g.groupAttributeList = h;
        } const _ = new qa(Fs); return _.setMessage("groupID:".concat(n, " mainSequence:").concat(i, " keyList:").concat(a, " protocolName:").concat(d)), this._groupModule.request({ protocolName: d, requestData: g }).then(e => {
          const o = e.data.mainSequence; return t._refreshCachedGroupAttributes({ groupID: n, remoteMainSequence: o, groupAttributeList: a, operationType: p }), _.setNetworkType(t._groupModule.getNetworkType()).end(), Ne.log("".concat(t._className, ".deleteGroupAttributes ok. groupID:").concat(n)), Lr({ keyList: l });
        }).catch(e => (t._groupModule.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; _.setError(e, o, a).end();
        }), Vr(e)));
      } }, { key: "getGroupAttributes", value(e){
        const t = this, n = e.groupID, o = this._checkCachedGroupAttributes({ groupID: n, funcName: "getGroupAttributes" }); if(!0 !== o){
          return Vr(o);
        } const a = this._groupAttributesMap.get(n), s = a.avChatRoomKey, r = a.lastUpdateTime, i = a.localMainSequence, u = a.remoteMainSequence, c = new qa(qs); if(c.setMessage("groupID:".concat(n, " localMainSequence:").concat(i, " remoteMainSequence:").concat(u, " keyList:").concat(e.keyList)), Date.now() - r >= this.CACHE_EXPIRE_TIME || i < u){
          return this._getGroupAttributes({ groupID: n, avChatRoomKey: s }).then(o => {
            c.setMoreMessage("get attributes from remote. count:".concat(o.length)).setNetworkType(t._groupModule.getNetworkType()).end(), Ne.log("".concat(t._className, ".getGroupAttributes from remote. groupID:").concat(n)); const a = t._getLocalGroupAttributes(e); return Lr({ groupAttributes: a });
          }).catch(e => (t._groupModule.probeNetwork().then(t => {
            const n = m(t, 2), o = n[0], a = n[1]; c.setError(e, o, a).end();
          }), Vr(e)));
        } c.setMoreMessage("get attributes from cache").setNetworkType(this._groupModule.getNetworkType()).end(), Ne.log("".concat(this._className, ".getGroupAttributes from cache. groupID:").concat(n)); const l = this._getLocalGroupAttributes(e); return qr({ groupAttributes: l });
      } }, { key: "_getGroupAttributes", value(e){
        const n = this; return this._groupModule.request({ protocolName: Xn, requestData: t({}, e) }).then(t => {
          const o = t.data, a = o.mainSequence, s = o.groupAttributeList, r = M(s); return Ne.log("".concat(n._className, "._getGroupAttributes ok. groupID:").concat(e.groupID)), n._refreshCachedGroupAttributes({ groupID: e.groupID, remoteMainSequence: a, groupAttributeList: r, operationType: "get" }), s;
        }).catch(e => Vr(e));
      } }, { key: "_getLocalGroupAttributes", value(e){
        const t = e.groupID, n = e.keyList, o = void 0 === n ? [] : n, a = {}; if(!this._groupAttributesMap.has(t)){
          return a;
        } const s = this._groupAttributesMap.get(t).attributes; if(o.length > 0){
          o.forEach(e => {
            s.has(e) && (a[e] = s.get(e).value);
          });
        }
        else {
          let r, i = C(s.keys()); try {
            for(i.s(); !(r = i.n()).done;){
              const u = r.value; a[u] = s.get(u).value;
            }
          }
          catch(c){
            i.e(c);
          }
          finally {
            i.f();
          }
        } return a;
      } }, { key: "_refreshCachedGroupAttributes", value(e){
        const t = e.groupID, n = e.remoteMainSequence, o = e.groupAttributeList, a = e.operationType; if(this._groupAttributesMap.has(t)){
          const s = this._groupAttributesMap.get(t), r = s.localMainSequence; if("get" === a || 1 == n - r){
            s.remoteMainSequence = n, s.localMainSequence = n, s.lastUpdateTime = Date.now(), this._updateCachedAttributes({ groupAttributes: s, groupAttributeList: o, operationType: a });
          }
          else {
            if(r === n){
              return;
            } s.remoteMainSequence = n;
          } this._groupAttributesMap.set(t, s); const i = "operationType:".concat(a, " localMainSequence:").concat(r, " remoteMainSequence:").concat(n); Ne.log("".concat(this._className, "._refreshCachedGroupAttributes. ").concat(i));
        }
      } }, { key: "_updateCachedAttributes", value(e){
        const t = e.groupAttributes, n = e.groupAttributeList, o = e.operationType; "clear" !== o ? "delete" !== o ? ("init" === o && t.attributes.clear(), n.forEach(e => {
          const n = e.key, o = e.value, a = e.sequence; t.attributes.set(n, { value: o, sequence: a });
        })) : n.forEach(e => {
          t.attributes.delete(e);
        }) : t.attributes.clear();
      } }, { key: "_checkCachedGroupAttributes", value(e){
        const t = e.groupID, n = e.funcName; if(this._groupModule.hasLocalGroup(t) && this._groupModule.getLocalGroupProfile(t).type !== S.GRP_AVCHATROOM){
          return Ne.warn("".concat(this._className, "._checkCachedGroupAttributes. ").concat("非直播群不能使用群属性 API")), new wr({ code: _o.CANNOT_USE_GRP_ATTR_NOT_AVCHATROOM, message: "非直播群不能使用群属性 API" });
        } const o = this._groupAttributesMap.get(t); if(Ue(o)){
          const a = "如果 groupID:".concat(t, " 是直播群，使用 ").concat(n, " 前先使用 joinGroup 接口申请加入群组，详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#joinGroup"); return Ne.warn("".concat(this._className, "._checkCachedGroupAttributes. ").concat(a)), new wr({ code: _o.CANNOT_USE_GRP_ATTR_AVCHATROOM_UNJOIN, message: a });
        } return !0;
      } }, { key: "_transformGroupAttributes", value(e){
        const t = []; return Object.keys(e).forEach(n => {
          t.push({ key: n, value: e[n] });
        }), t;
      } }, { key: "_emitGroupAttributesUpdated", value(e){
        const t = this._getLocalGroupAttributes({ groupID: e }); this._groupModule.emitOuterEvent(k.GROUP_ATTRIBUTES_UPDATED, { groupID: e, groupAttributes: t });
      } }, { key: "reset", value(){
        this._groupAttributesMap.clear(), this.CACHE_EXPIRE_TIME = 3e4;
      } }]), e;
    }(), li = function(){
      function e(t){
        o(this, e); const n = t.manager, a = t.groupID, s = t.onInit, r = t.onSuccess, i = t.onFail; this._className = "Polling", this._manager = n, this._groupModule = n._groupModule, this._onInit = s, this._onSuccess = r, this._onFail = i, this._groupID = a, this._timeoutID = -1, this._isRunning = !1;
      } return s(e, [{ key: "start", value(){
        Ne.log("".concat(this._className, ".start pollingInterval:").concat(this._manager.getPollingInterval())), this._isRunning = !0, this._request();
      } }, { key: "isRunning", value(){
        return this._isRunning;
      } }, { key: "_request", value(){
        let e = this, t = this._onInit(this._groupID), n = Bn; this._groupModule.isLoggedIn() || (n = Hn), this._groupModule.request({ protocolName: n, requestData: t }).then(t => {
          e._onSuccess(e._groupID, t), e.isRunning() && (clearTimeout(e._timeoutID), e._timeoutID = setTimeout(e._request.bind(e), e._manager.getPollingInterval()));
        }).catch(t => {
          e._onFail(e._groupID, t), e.isRunning() && (clearTimeout(e._timeoutID), e._timeoutID = setTimeout(e._request.bind(e), e._manager.MAX_POLLING_INTERVAL));
        });
      } }, { key: "stop", value(){
        Ne.log("".concat(this._className, ".stop")), this._timeoutID > 0 && (clearTimeout(this._timeoutID), this._timeoutID = -1), this._isRunning = !1;
      } }]), e;
    }(), di = { 3: !0, 4: !0, 5: !0, 6: !0 }, pi = function(){
      function e(t){
        o(this, e), this._groupModule = t, this._className = "AVChatRoomHandler", this._joinedGroupMap = new Map(), this._pollingRequestInfoMap = new Map(), this._pollingInstanceMap = new Map(), this.sequencesLinkedList = new Zr(100), this.messageIDLinkedList = new Zr(100), this.receivedMessageCount = 0, this._reportMessageStackedCount = 0, this._onlineMemberCountMap = new Map(), this.DEFAULT_EXPIRE_TIME = 60, this.DEFAULT_POLLING_INTERVAL = 300, this.MAX_POLLING_INTERVAL = 2e3, this._pollingInterval = this.DEFAULT_POLLING_INTERVAL;
      } return s(e, [{ key: "hasJoinedAVChatRoom", value(){
        return this._joinedGroupMap.size > 0;
      } }, { key: "checkJoinedAVChatRoomByID", value(e){
        return this._joinedGroupMap.has(e);
      } }, { key: "getJoinedAVChatRoom", value(){
        return this._joinedGroupMap.size > 0 ? M(this._joinedGroupMap.keys()) : null;
      } }, { key: "_updateRequestData", value(e){
        return t({}, this._pollingRequestInfoMap.get(e));
      } }, { key: "_handleSuccess", value(e, t){
        const n = t.data, o = n.key, a = n.nextSeq, s = n.rspMsgList; if(0 !== n.errorCode){
          const r = this._pollingRequestInfoMap.get(e), i = new qa(zs), u = r ? "".concat(r.key, "-").concat(r.startSeq) : "requestInfo is undefined"; i.setMessage("".concat(e, "-").concat(u, "-").concat(t.errorInfo)).setCode(t.errorCode).setNetworkType(this._groupModule.getNetworkType()).end(!0);
        }
        else {
          if(!this.checkJoinedAVChatRoomByID(e)){
            return;
          } Ge(o) && Re(a) && this._pollingRequestInfoMap.set(e, { key: o, startSeq: a }), we(s) && s.length > 0 && (s.forEach(e => {
            e.to = e.groupID;
          }), this.onMessage(s));
        }
      } }, { key: "_handleFailure", value(e, t){} }, { key: "onMessage", value(e){
        if(we(e) && 0 !== e.length){
          let t = null, n = [], o = this._getModule(Vt), a = e.length; a > 1 && e.sort((e, t) => e.sequence - t.sequence); for(let s = this._getModule(Kt), r = 0; r < a; r++){
            if(di[e[r].event]){
              this.receivedMessageCount += 1, t = this.packMessage(e[r], e[r].event); const i = 1 === e[r].isModified; if((s.isUnlimitedAVChatRoom() || !this.sequencesLinkedList.has(t.sequence)) && !this.messageIDLinkedList.has(t.ID)){
                const u = t.conversationID; if(0 == this.receivedMessageCount % 40 && this._getModule(Xt).detectMessageLoss(u, this.sequencesLinkedList.data()), null !== this.sequencesLinkedList.tail()){
                  const c = this.sequencesLinkedList.tail().value, l = t.sequence - c; l > 1 && l <= 20 ? this._getModule(Xt).onMessageMaybeLost(u, c + 1, l - 1) : l < -1 && l >= -20 && this._getModule(Xt).onMessageMaybeLost(u, t.sequence + 1, Math.abs(l) - 1);
                } this.sequencesLinkedList.set(t.sequence), this.messageIDLinkedList.set(t.ID); let d = !1; if(this._isMessageSentByCurrentInstance(t) ? i && (d = !0, t.isModified = i, o.updateMessageIsModifiedProperty(t)) : d = !0, d){
                  if(t.conversationType, S.CONV_SYSTEM, t.conversationType !== S.CONV_SYSTEM){
                    const p = this._getModule(tn), g = t.conversationID.replace(S.CONV_GROUP, ""); this._pollingInstanceMap.has(g) ? p.addMessageSequence({ key: ba, message: t }) : (t.type !== S.MSG_GRP_TIP && p.addMessageDelay({ currentTime: Date.now(), time: t.time }), p.addMessageSequence({ key: Ga, message: t }));
                  }n.push(t);
                }
              }
            }
            else {
              Ne.warn("".concat(this._className, ".onMessage 未处理的 event 类型: ").concat(e[r].event));
            }
          }if(0 !== n.length){
            this._groupModule.filterModifiedMessage(n); const h = this.packConversationOption(n); if(h.length > 0){
              this._getModule(Vt).onNewMessage({ conversationOptionsList: h, isInstantMessage: !0 });
            } Ne.debug("".concat(this._className, ".onMessage count:").concat(n.length)), this._checkMessageStacked(n); const _ = this._groupModule.filterUnmodifiedMessage(n); _.length > 0 && this._groupModule.emitOuterEvent(k.MESSAGE_RECEIVED, _), n.length = 0;
          }
        }
      } }, { key: "_checkMessageStacked", value(e){
        const t = e.length; t >= 100 && (Ne.warn("".concat(this._className, "._checkMessageStacked 直播群消息堆积数:").concat(e.length, "！可能会导致微信小程序渲染时遇到 \"Dom limit exceeded\" 的错误，建议接入侧此时只渲染最近的10条消息")), this._reportMessageStackedCount < 5 && (new qa(Xs).setNetworkType(this._groupModule.getNetworkType()).setMessage("count:".concat(t, " groupID:").concat(M(this._joinedGroupMap.keys()))).setLevel("warning").end(), this._reportMessageStackedCount += 1));
      } }, { key: "_isMessageSentByCurrentInstance", value(e){
        return !!this._getModule(Vt).isMessageSentByCurrentInstance(e);
      } }, { key: "packMessage", value(e, t){
        e.currentUser = this._groupModule.getMyUserID(), e.conversationType = 5 === t ? S.CONV_SYSTEM : S.CONV_GROUP, e.isSystemMessage = !!e.isSystemMessage; const n = new Nr(e), o = this.packElements(e, t); return n.setElement(o), n;
      } }, { key: "packElements", value(e, n){
        return 4 === n || 6 === n ? (this._updateMemberCountByGroupTips(e), this._onGroupAttributesUpdated(e), { type: S.MSG_GRP_TIP, content: t(t({}, e.elements), {}, { groupProfile: e.groupProfile }) }) : 5 === n ? { type: S.MSG_GRP_SYS_NOTICE, content: t(t({}, e.elements), {}, { groupProfile: e.groupProfile }) } : this._getModule(jt).parseElements(e.elements, e.from);
      } }, { key: "packConversationOption", value(e){
        for(var t = new Map(), n = 0; n < e.length; n++){
          const o = e[n], a = o.conversationID; if(t.has(a)){
            const s = t.get(a); s.lastMessage = o, "in" === o.flow && s.unreadCount++;
          }
          else {
            t.set(a, { conversationID: o.conversationID, unreadCount: "out" === o.flow ? 0 : 1, type: o.conversationType, subType: o.conversationSubType, lastMessage: o });
          }
        } return M(t.values());
      } }, { key: "_updateMemberCountByGroupTips", value(e){
        const t = e.groupProfile.groupID, n = e.elements.onlineMemberInfo, o = void 0 === n ? void 0 : n; if(!vt(o)){
          const a = o.onlineMemberNum, s = void 0 === a ? 0 : a, r = o.expireTime, i = void 0 === r ? this.DEFAULT_EXPIRE_TIME : r, u = this._onlineMemberCountMap.get(t) || {}, c = Date.now(); vt(u) ? Object.assign(u, { lastReqTime: 0, lastSyncTime: 0, latestUpdateTime: c, memberCount: s, expireTime: i }) : (u.latestUpdateTime = c, u.memberCount = s), Ne.debug("".concat(this._className, "._updateMemberCountByGroupTips info:"), u), this._onlineMemberCountMap.set(t, u);
        }
      } }, { key: "start", value(e){
        if(this._pollingInstanceMap.has(e)){
          const t = this._pollingInstanceMap.get(e); t.isRunning() || t.start();
        }
        else {
          const n = new li({ manager: this, groupID: e, onInit: this._updateRequestData.bind(this), onSuccess: this._handleSuccess.bind(this), onFail: this._handleFailure.bind(this) }); n.start(), this._pollingInstanceMap.set(e, n), Ne.log("".concat(this._className, ".start groupID:").concat(e));
        }
      } }, { key: "handleJoinResult", value(e){
        const t = this; return this._preCheck().then(() => {
          const n = e.longPollingKey, o = e.group, a = o.groupID; return t._joinedGroupMap.set(a, o), t._groupModule.updateGroupMap([o]), t._groupModule.deleteUnjoinedAVChatRoom(a), t._groupModule.emitGroupListUpdate(!0, !1), Ue(n) ? qr({ status: gr, group: o }) : Promise.resolve();
        });
      } }, { key: "startRunLoop", value(e){
        const t = this; return this.handleJoinResult(e).then(() => {
          const n = e.longPollingKey, o = e.group, a = o.groupID; return t._pollingRequestInfoMap.set(a, { key: n, startSeq: 0 }), t.start(a), t._groupModule.isLoggedIn() ? qr({ status: gr, group: o }) : qr({ status: gr });
        });
      } }, { key: "_preCheck", value(){
        if(this._getModule(Kt).isUnlimitedAVChatRoom()){
          return Promise.resolve();
        }if(!this.hasJoinedAVChatRoom()){
          return Promise.resolve();
        } const e = m(this._joinedGroupMap.entries().next().value, 2), t = e[0], n = e[1]; if(this._groupModule.isLoggedIn()){
          if(!(n.selfInfo.role === S.GRP_MBR_ROLE_OWNER || n.ownerID === this._groupModule.getMyUserID())){
            return this._groupModule.quitGroup(t);
          } this._groupModule.deleteLocalGroupAndConversation(t);
        }
        else {
          this._groupModule.deleteLocalGroupAndConversation(t);
        } return this.reset(t), Promise.resolve();
      } }, { key: "joinWithoutAuth", value(e){
        const t = this, n = e.groupID, o = "".concat(this._className, ".joinWithoutAuth"), a = new qa(Ps); return this._groupModule.request({ protocolName: Rn, requestData: e }).then(e => {
          const s = e.data.longPollingKey; if(a.setNetworkType(t._groupModule.getNetworkType()).setMessage("groupID:".concat(n, " longPollingKey:").concat(s)).end(!0), Ue(s)){
            return Vr(new wr({ code: _o.CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN, message: sa }));
          } Ne.log("".concat(o, " ok. groupID:").concat(n)), t._getModule(Vt).setCompleted("".concat(S.CONV_GROUP).concat(n)); const r = new ti({ groupID: n }); return t.startRunLoop({ group: r, longPollingKey: s }), Lr({ status: gr });
        }).catch(e => (Ne.error("".concat(o, " failed. groupID:").concat(n, " error:"), e), t._groupModule.probeNetwork().then(t => {
          const o = m(t, 2), s = o[0], r = o[1]; a.setError(e, s, r).setMessage("groupID:".concat(n)).end(!0);
        }), Vr(e))).finally(() => {
          t._groupModule.getModule(Bt).reportAtOnce();
        });
      } }, { key: "getGroupOnlineMemberCount", value(e){
        const t = this._onlineMemberCountMap.get(e) || {}, n = Date.now(); return vt(t) || n - t.lastSyncTime > 1e3 * t.expireTime && n - t.latestUpdateTime > 1e4 && n - t.lastReqTime > 3e3 ? (t.lastReqTime = n, this._onlineMemberCountMap.set(e, t), this._getGroupOnlineMemberCount(e).then(e => Lr({ memberCount: e.memberCount })).catch(e => Vr(e))) : qr({ memberCount: t.memberCount });
      } }, { key: "_getGroupOnlineMemberCount", value(e){
        const t = this, n = "".concat(this._className, "._getGroupOnlineMemberCount"); return this._groupModule.request({ protocolName: jn, requestData: { groupID: e } }).then(o => {
          const a = t._onlineMemberCountMap.get(e) || {}, s = o.data, r = s.onlineMemberNum, i = void 0 === r ? 0 : r, u = s.expireTime, c = void 0 === u ? t.DEFAULT_EXPIRE_TIME : u; Ne.log("".concat(n, " ok. groupID:").concat(e, " memberCount:").concat(i, " expireTime:").concat(c)); const l = Date.now(); return vt(a) && (a.lastReqTime = l), t._onlineMemberCountMap.set(e, Object.assign(a, { lastSyncTime: l, latestUpdateTime: l, memberCount: i, expireTime: c })), { memberCount: i };
        }).catch(o => (Ne.warn("".concat(n, " failed. error:"), o), new qa(Ws).setCode(o.code).setMessage("groupID:".concat(e, " error:").concat(JSON.stringify(o))).setNetworkType(t._groupModule.getNetworkType()).end(), Promise.reject(o)));
      } }, { key: "_onGroupAttributesUpdated", value(e){
        const t = e.groupProfile.groupID, n = e.elements, o = n.operationType, a = n.newGroupProfile; if(6 === o){
          const s = (void 0 === a ? void 0 : a).groupAttributeOption; Ue(s) || this._groupModule.onGroupAttributesUpdated({ groupID: t, groupAttributeOption: s });
        }
      } }, { key: "_getModule", value(e){
        return this._groupModule.getModule(e);
      } }, { key: "setPollingInterval", value(e){
        Ue(e) || Re(e) || (this._pollingInterval = parseInt(e, 10), Ne.log("".concat(this._className, ".setPollingInterval value:").concat(this._pollingInterval)));
      } }, { key: "getPollingInterval", value(){
        return this._pollingInterval;
      } }, { key: "reset", value(e){
        if(e){
          Ne.log("".concat(this._className, ".reset groupID:").concat(e)); const t = this._pollingInstanceMap.get(e); t && t.stop(), this._pollingInstanceMap.delete(e), this._joinedGroupMap.delete(e), this._pollingRequestInfoMap.delete(e), this._onlineMemberCountMap.delete(e);
        }
        else {
          Ne.log("".concat(this._className, ".reset all")); let n, o = C(this._pollingInstanceMap.values()); try {
            for(o.s(); !(n = o.n()).done;){
              n.value.stop();
            }
          }
          catch(a){
            o.e(a);
          }
          finally {
            o.f();
          } this._pollingInstanceMap.clear(), this._joinedGroupMap.clear(), this._pollingRequestInfoMap.clear(), this._onlineMemberCountMap.clear();
        } this.sequencesLinkedList.reset(), this.messageIDLinkedList.reset(), this.receivedMessageCount = 0, this._reportMessageStackedCount = 0, this._pollingInterval = this.DEFAULT_POLLING_INTERVAL;
      } }]), e;
    }(), gi = 1, hi = 15, _i = function(){
      function e(t){
        o(this, e), this._groupModule = t, this._className = "GroupSystemNoticeHandler", this.pendencyMap = new Map();
      } return s(e, [{ key: "onNewGroupSystemNotice", value(e){
        const t = e.dataList, n = e.isSyncingEnded, o = e.isInstantMessage; Ne.debug("".concat(this._className, ".onReceiveSystemNotice count:").concat(t.length)); const a = this.newSystemNoticeStoredAndSummary({ notifiesList: t, isInstantMessage: o }), s = a.eventDataList, r = a.result; s.length > 0 && (this._groupModule.getModule(Vt).onNewMessage({ conversationOptionsList: s, isInstantMessage: o }), this._onReceivedGroupSystemNotice({ result: r, isInstantMessage: o })); o ? r.length > 0 && this._groupModule.emitOuterEvent(k.MESSAGE_RECEIVED, r) : !0 === n && this._clearGroupSystemNotice();
      } }, { key: "newSystemNoticeStoredAndSummary", value(e){
        let n = e.notifiesList, o = e.isInstantMessage, a = null, s = n.length, r = 0, i = [], u = { conversationID: S.CONV_SYSTEM, unreadCount: 0, type: S.CONV_SYSTEM, subType: null, lastMessage: null }; for(r = 0; r < s; r++){
          const c = n[r]; if(c.elements.operationType !== hi){
            c.currentUser = this._groupModule.getMyUserID(), c.conversationType = S.CONV_SYSTEM, c.conversationID = S.CONV_SYSTEM, (a = new Nr(c)).setElement({ type: S.MSG_GRP_SYS_NOTICE, content: t(t({}, c.elements), {}, { groupProfile: c.groupProfile }) }), a.isSystemMessage = !0, (1 === a.sequence && 1 === a.random || 2 === a.sequence && 2 === a.random) && (a.sequence = We(), a.random = We(), a.generateMessageID(c.currentUser), Ne.log("".concat(this._className, ".newSystemNoticeStoredAndSummary sequence and random maybe duplicated, regenerate. ID:").concat(a.ID))), this._groupModule.getModule(Vt).pushIntoNoticeResult(i, a) && (o ? u.unreadCount++ : a.setIsRead(!0), u.subType = a.conversationSubType);
          }
        } return u.lastMessage = i[i.length - 1], { eventDataList: i.length > 0 ? [u] : [], result: i };
      } }, { key: "_clearGroupSystemNotice", value(){
        const e = this; this.getPendencyList().then(t => {
          t.forEach(t => {
            e.pendencyMap.set("".concat(t.from, "_").concat(t.groupID, "_").concat(t.to), t);
          }); const n = e._groupModule.getModule(Vt).getLocalMessageList(S.CONV_SYSTEM), o = []; n.forEach(t => {
            const n = t.payload, a = n.operatorID, s = n.operationType, r = n.groupProfile; if(s === gi){
              const i = "".concat(a, "_").concat(r.groupID, "_").concat(r.to), u = e.pendencyMap.get(i); u && Re(u.handled) && 0 !== u.handled && o.push(t);
            }
          }), e.deleteGroupSystemNotice({ messageList: o });
        });
      } }, { key: "deleteGroupSystemNotice", value(e){
        const t = this, n = "".concat(this._className, ".deleteGroupSystemNotice"); return we(e.messageList) && 0 !== e.messageList.length ? (Ne.log("".concat(n) + e.messageList.map(e => e.ID)), this._groupModule.request({ protocolName: xn, requestData: { messageListToDelete: e.messageList.map(e => ({ from: S.CONV_SYSTEM, messageSeq: e.clientSequence, messageRandom: e.random })) } }).then(() => {
          Ne.log("".concat(n, " ok")); const o = t._groupModule.getModule(Vt); return e.messageList.forEach(e => {
            o.deleteLocalMessage(e);
          }), Lr();
        }).catch(e => (Ne.error("".concat(n, " error:"), e), Vr(e)))) : qr();
      } }, { key: "getPendencyList", value(e){
        const t = this; return this._groupModule.request({ protocolName: Kn, requestData: { startTime: e && e.startTime ? e.startTime : 0, limit: e && e.limit ? e.limit : 10, handleAccount: this._groupModule.getMyUserID() } }).then(e => {
          const n = e.data.pendencyList; return 0 !== e.data.nextStartTime ? t.getPendencyList({ startTime: e.data.nextStartTime }).then(e => [].concat(M(n), M(e))) : n;
        });
      } }, { key: "_onReceivedGroupSystemNotice", value(e){
        const t = this, n = e.result; e.isInstantMessage && n.forEach(e => {
          switch(e.payload.operationType){
            case 1: break; case 2: t._onApplyGroupRequestAgreed(e); break; case 3: break; case 4: t._onMemberKicked(e); break; case 5: t._onGroupDismissed(e); break; case 6: break; case 7: t._onInviteGroup(e); break; case 8: t._onQuitGroup(e); break; case 9: t._onSetManager(e); break; case 10: t._onDeleteManager(e);
          }
        });
      } }, { key: "_onApplyGroupRequestAgreed", value(e){
        const t = this, n = e.payload.groupProfile.groupID; this._groupModule.hasLocalGroup(n) || this._groupModule.getGroupProfile({ groupID: n }).then(e => {
          const n = e.data.group; n && (t._groupModule.updateGroupMap([n]), t._groupModule.emitGroupListUpdate());
        });
      } }, { key: "_onMemberKicked", value(e){
        const t = e.payload.groupProfile.groupID; this._groupModule.hasLocalGroup(t) && this._groupModule.deleteLocalGroupAndConversation(t);
      } }, { key: "_onGroupDismissed", value(e){
        const t = e.payload.groupProfile.groupID; this._groupModule.hasLocalGroup(t) && this._groupModule.deleteLocalGroupAndConversation(t); const n = this._groupModule._AVChatRoomHandler; n && n.checkJoinedAVChatRoomByID(t) && n.reset(t);
      } }, { key: "_onInviteGroup", value(e){
        const t = this, n = e.payload.groupProfile.groupID; this._groupModule.hasLocalGroup(n) || this._groupModule.getGroupProfile({ groupID: n }).then(e => {
          const n = e.data.group; n && (t._groupModule.updateGroupMap([n]), t._groupModule.emitGroupListUpdate());
        });
      } }, { key: "_onQuitGroup", value(e){
        const t = e.payload.groupProfile.groupID; this._groupModule.hasLocalGroup(t) && this._groupModule.deleteLocalGroupAndConversation(t);
      } }, { key: "_onSetManager", value(e){
        const t = e.payload.groupProfile, n = t.to, o = t.groupID, a = this._groupModule.getModule(qt).getLocalGroupMemberInfo(o, n); a && a.updateRole(S.GRP_MBR_ROLE_ADMIN);
      } }, { key: "_onDeleteManager", value(e){
        const t = e.payload.groupProfile, n = t.to, o = t.groupID, a = this._groupModule.getModule(qt).getLocalGroupMemberInfo(o, n); a && a.updateRole(S.GRP_MBR_ROLE_MEMBER);
      } }, { key: "reset", value(){
        this.pendencyMap.clear();
      } }]), e;
    }(), fi = function(e){
      i(a, e); const n = f(a); function a(e){
        let t; return o(this, a), (t = n.call(this, e))._className = "GroupModule", t._commonGroupHandler = null, t._AVChatRoomHandler = null, t._groupSystemNoticeHandler = null, t._commonGroupHandler = new ii(h(t)), t._groupAttributesHandler = new ci(h(t)), t._AVChatRoomHandler = new pi(h(t)), t._groupTipsHandler = new ri(h(t)), t._groupSystemNoticeHandler = new _i(h(t)), t.groupMap = new Map(), t._unjoinedAVChatRoomList = new Map(), t.getInnerEmitterInstance().on(Br.CLOUD_CONFIG_UPDATED, t._onCloudConfigUpdated, h(t)), t;
      } return s(a, [{ key: "_onCloudConfigUpdated", value(){
        const e = this.getCloudConfig("polling_interval"); this._AVChatRoomHandler && this._AVChatRoomHandler.setPollingInterval(e);
      } }, { key: "onCheckTimer", value(e){
        this.isLoggedIn() && (this._commonGroupHandler.onCheckTimer(e), this._groupTipsHandler.onCheckTimer(e));
      } }, { key: "guardForAVChatRoom", value(e){
        const t = this; if(e.conversationType === S.CONV_GROUP){
          const n = e.to; return this.hasLocalGroup(n) ? qr() : this.getGroupProfile({ groupID: n }).then(o => {
            const a = o.data.group.type; if(Ne.log("".concat(t._className, ".guardForAVChatRoom. groupID:").concat(n, " type:").concat(a)), a === S.GRP_AVCHATROOM){
              const s = "userId:".concat(e.from, " 未加入群 groupID:").concat(n, "。发消息前先使用 joinGroup 接口申请加群，详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#joinGroup"); return Ne.warn("".concat(t._className, ".guardForAVChatRoom sendMessage not allowed. ").concat(s)), Vr(new wr({ code: _o.MESSAGE_SEND_FAIL, message: s, data: { message: e } }));
            } return qr();
          });
        } return qr();
      } }, { key: "checkJoinedAVChatRoomByID", value(e){
        return !!this._AVChatRoomHandler && this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e);
      } }, { key: "onNewGroupMessage", value(e){
        this._commonGroupHandler && this._commonGroupHandler.onNewGroupMessage(e);
      } }, { key: "updateNextMessageSeq", value(e){
        const t = this; we(e) && e.forEach(e => {
          const n = e.conversationID.replace(S.CONV_GROUP, ""); t.groupMap.has(n) && (t.groupMap.get(n).nextMessageSeq = e.lastMessage.sequence + 1);
        });
      } }, { key: "onNewGroupTips", value(e){
        this._groupTipsHandler && this._groupTipsHandler.onNewGroupTips(e);
      } }, { key: "onGroupMessageRevoked", value(e){
        this._commonGroupHandler && this._commonGroupHandler.onGroupMessageRevoked(e);
      } }, { key: "onNewGroupSystemNotice", value(e){
        this._groupSystemNoticeHandler && this._groupSystemNoticeHandler.onNewGroupSystemNotice(e);
      } }, { key: "onGroupMessageReadNotice", value(e){
        const t = this; e.dataList.forEach(e => {
          const n = e.elements.groupMessageReadNotice; if(!Ue(n)){
            const o = t.getModule(Vt); n.forEach(e => {
              const n = e.groupID, a = e.lastMessageSeq; Ne.debug("".concat(t._className, ".onGroupMessageReadNotice groupID:").concat(n, " lastMessageSeq:").concat(a)); const s = "".concat(S.CONV_GROUP).concat(n); o.updateIsReadAfterReadReport({ conversationID: s, lastMessageSeq: a }), o.updateUnreadCount(s);
            });
          }
        });
      } }, { key: "deleteGroupSystemNotice", value(e){
        this._groupSystemNoticeHandler && this._groupSystemNoticeHandler.deleteGroupSystemNotice(e);
      } }, { key: "initGroupMap", value(e){
        this.groupMap.set(e.groupID, new ti(e));
      } }, { key: "deleteGroup", value(e){
        this.groupMap.delete(e);
      } }, { key: "updateGroupMap", value(e){
        const t = this; e.forEach(e => {
          t.groupMap.has(e.groupID) ? t.groupMap.get(e.groupID).updateGroup(e) : t.groupMap.set(e.groupID, new ti(e));
        }), this._setStorageGroupList();
      } }, { key: "getStorageGroupList", value(){
        return this.getModule(xt).getItem("groupMap");
      } }, { key: "_setStorageGroupList", value(){
        const e = this.getLocalGroupList().filter(e => {
          const t = e.type; return !st(t);
        }).slice(0, 20).map(e => ({ groupID: e.groupID, name: e.name, avatar: e.avatar, type: e.type })); this.getModule(xt).setItem("groupMap", e);
      } }, { key: "getGroupMap", value(){
        return this.groupMap;
      } }, { key: "getLocalGroupList", value(){
        return M(this.groupMap.values());
      } }, { key: "getLocalGroupProfile", value(e){
        return this.groupMap.get(e);
      } }, { key: "sortLocalGroupList", value(){
        const e = M(this.groupMap).filter(e => {
          const t = m(e, 2); t[0]; return !vt(t[1].lastMessage);
        }); e.sort((e, t) => t[1].lastMessage.lastTime - e[1].lastMessage.lastTime), this.groupMap = new Map(M(e));
      } }, { key: "updateGroupLastMessage", value(e){
        this._commonGroupHandler && this._commonGroupHandler.handleUpdateGroupLastMessage(e);
      } }, { key: "emitGroupListUpdate", value(){
        const e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = this.getLocalGroupList(); if(e && this.emitOuterEvent(k.GROUP_LIST_UPDATED, n), t){
          const o = JSON.parse(JSON.stringify(n)), a = this.getModule(Vt); a.updateConversationGroupProfile(o);
        }
      } }, { key: "getMyNameCardByGroupID", value(e){
        const t = this.getLocalGroupProfile(e); return t ? t.selfInfo.nameCard : "";
      } }, { key: "getGroupList", value(e){
        return this._commonGroupHandler ? this._commonGroupHandler.getGroupList(e) : qr();
      } }, { key: "getGroupProfile", value(e){
        const t = this, n = new qa(Ns), o = "".concat(this._className, ".getGroupProfile"), a = e.groupID, s = e.groupCustomFieldFilter; Ne.log("".concat(o, " groupID:").concat(a)); const r = { groupIDList: [a], responseFilter: { groupBaseInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "Owner_Account", "CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "NextMsgSeq", "ShutUpAllMember"], groupCustomFieldFilter: s } }; return this.getGroupProfileAdvance(r).then(e => {
          let s, r = e.data, i = r.successGroupList, u = r.failureGroupList; return Ne.log("".concat(o, " ok")), u.length > 0 ? Vr(u[0]) : (st(i[0].type) && !t.hasLocalGroup(a) ? s = new ti(i[0]) : (t.updateGroupMap(i), s = t.getLocalGroupProfile(a)), n.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(a, " type:").concat(s.type, " muteAllMembers:").concat(s.muteAllMembers, " ownerID:").concat(s.ownerID)).end(), s && s.selfInfo && !s.selfInfo.nameCard ? t.updateSelfInfo(s).then(e => Lr({ group: e })) : Lr({ group: s }));
        }).catch(a => (t.probeNetwork().then(t => {
          const o = m(t, 2), s = o[0], r = o[1]; n.setError(a, s, r).setMessage("groupID:".concat(e.groupID)).end();
        }), Ne.error("".concat(o, " failed. error:"), a), Vr(a)));
      } }, { key: "getGroupProfileAdvance", value(e){
        const t = "".concat(this._className, ".getGroupProfileAdvance"); return we(e.groupIDList) && e.groupIDList.length > 50 && (Ne.warn("".concat(t, " 获取群资料的数量不能超过50个")), e.groupIDList.length = 50), Ne.log("".concat(t, " groupIDList:").concat(e.groupIDList)), this.request({ protocolName: En, requestData: e }).then(e => {
          Ne.log("".concat(t, " ok")); const n = e.data.groups, o = n.filter(e => Ue(e.errorCode) || 0 === e.errorCode), a = n.filter(e => e.errorCode && 0 !== e.errorCode).map(e => new wr({ code: e.errorCode, message: e.errorInfo, data: { groupID: e.groupID } })); return Lr({ successGroupList: o, failureGroupList: a });
        }).catch(e => (Ne.error("".concat(t, " failed. error:"), e), Vr(e)));
      } }, { key: "updateSelfInfo", value(e){
        const t = "".concat(this._className, ".updateSelfInfo"), n = e.groupID; return Ne.log("".concat(t, " groupID:").concat(n)), this.getModule(qt).getGroupMemberProfile({ groupID: n, userIDList: [this.getMyUserID()] }).then(n => {
          const o = n.data.memberList; return Ne.log("".concat(t, " ok")), e && 0 !== o.length && e.updateSelfInfo(o[0]), e;
        });
      } }, { key: "createGroup", value(e){
        const n = this, o = "".concat(this._className, ".createGroup"); if(!["Public", "Private", "ChatRoom", "AVChatRoom"].includes(e.type)){
          const a = new wr({ code: _o.ILLEGAL_GROUP_TYPE, message: Xo }); return Vr(a);
        }st(e.type) && !Ue(e.memberList) && e.memberList.length > 0 && (Ne.warn("".concat(o, " 创建 AVChatRoom 时不能添加群成员，自动忽略该字段")), e.memberList = void 0), at(e.type) || Ue(e.joinOption) || (Ne.warn("".concat(o, " 创建 Work/Meeting/AVChatRoom 群时不能设置字段 joinOption，自动忽略该字段")), e.joinOption = void 0); const s = new qa(Ms); Ne.log("".concat(o, " options:"), e); let r = []; return this.request({ protocolName: An, requestData: t(t({}, e), {}, { ownerID: this.getMyUserID(), webPushFlag: 1 }) }).then(a => {
          const i = a.data, u = i.groupID, c = i.overLimitUserIDList, l = void 0 === c ? [] : c; if(r = l, s.setNetworkType(n.getNetworkType()).setMessage("groupType:".concat(e.type, " groupID:").concat(u, " overLimitUserIDList=").concat(l)).end(), Ne.log("".concat(o, " ok groupID:").concat(u, " overLimitUserIDList:"), l), e.type === S.GRP_AVCHATROOM){
            return n.getGroupProfile({ groupID: u });
          } vt(e.memberList) || vt(l) || (e.memberList = e.memberList.filter(e => -1 === l.indexOf(e.userID))), n.updateGroupMap([t(t({}, e), {}, { groupID: u })]); const d = n.getModule(bt), p = d.createCustomMessage({ to: u, conversationType: S.CONV_GROUP, payload: { data: "group_create", extension: "".concat(n.getMyUserID(), "创建群组") } }); return d.sendMessageInstance(p), n.emitGroupListUpdate(), n.getGroupProfile({ groupID: u });
        }).then(e => {
          const t = e.data.group, n = t.selfInfo, o = n.nameCard, a = n.joinTime; return t.updateSelfInfo({ nameCard: o, joinTime: a, messageRemindType: S.MSG_REMIND_ACPT_AND_NOTE, role: S.GRP_MBR_ROLE_OWNER }), Lr({ group: t, overLimitUserIDList: r });
        }).catch(t => (s.setMessage("groupType:".concat(e.type)), n.probeNetwork().then(e => {
          const n = m(e, 2), o = n[0], a = n[1]; s.setError(t, o, a).end();
        }), Ne.error("".concat(o, " failed. error:"), t), Vr(t)));
      } }, { key: "dismissGroup", value(e){
        const t = this, n = "".concat(this._className, ".dismissGroup"); if(this.hasLocalGroup(e) && this.getLocalGroupProfile(e).type === S.GRP_WORK){
          return Vr(new wr({ code: _o.CANNOT_DISMISS_WORK, message: ta }));
        } const o = new qa(Ss); return o.setMessage("groupID:".concat(e)), Ne.log("".concat(n, " groupID:").concat(e)), this.request({ protocolName: Nn, requestData: { groupID: e } }).then(() => (o.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(n, " ok")), t.deleteLocalGroupAndConversation(e), t.checkJoinedAVChatRoomByID(e) && t._AVChatRoomHandler.reset(e), Lr({ groupID: e }))).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), a = n[0], s = n[1]; o.setError(e, a, s).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "updateGroupProfile", value(e){
        const t = this, n = "".concat(this._className, ".updateGroupProfile"); !this.hasLocalGroup(e.groupID) || at(this.getLocalGroupProfile(e.groupID).type) || Ue(e.joinOption) || (Ne.warn("".concat(n, " Work/Meeting/AVChatRoom 群不能设置字段 joinOption，自动忽略该字段")), e.joinOption = void 0), Ue(e.muteAllMembers) || (e.muteAllMembers ? e.muteAllMembers = "On" : e.muteAllMembers = "Off"); const o = new qa(Es); return o.setMessage(JSON.stringify(e)), Ne.log("".concat(n, " groupID:").concat(e.groupID)), this.request({ protocolName: Ln, requestData: e }).then(() => {
          (o.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(n, " ok")), t.hasLocalGroup(e.groupID)) && (t.groupMap.get(e.groupID).updateGroup(e), t._setStorageGroupList()); return Lr({ group: t.groupMap.get(e.groupID) });
        }).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), a = n[0], s = n[1]; o.setError(e, a, s).end();
        }), Ne.log("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "joinGroup", value(e){
        const t = this, n = e.groupID, o = e.type, a = "".concat(this._className, ".joinGroup"); if(o === S.GRP_WORK){
          const s = new wr({ code: _o.CANNOT_JOIN_WORK, message: Qo }); return Vr(s);
        }if(this.deleteUnjoinedAVChatRoom(n), this.hasLocalGroup(n)){
          if(!this.isLoggedIn()){
            return qr({ status: S.JOIN_STATUS_ALREADY_IN_GROUP });
          } const r = new qa(vs); return this.getGroupProfile({ groupID: n }).then(() => (r.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(n, " joinedStatus:").concat(S.JOIN_STATUS_ALREADY_IN_GROUP)).end(), qr({ status: S.JOIN_STATUS_ALREADY_IN_GROUP }))).catch(o => (r.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(n, " unjoined")).end(), Ne.warn("".concat(a, " ").concat(n, " was unjoined, now join!")), t.groupMap.delete(n), t.applyJoinGroup(e)));
        } return Ne.log("".concat(a, " groupID:").concat(n)), this.isLoggedIn() ? this.applyJoinGroup(e) : this._AVChatRoomHandler.joinWithoutAuth(e);
      } }, { key: "applyJoinGroup", value(e){
        const t = this, n = "".concat(this._className, ".applyJoinGroup"), o = e.groupID, a = new qa(vs); return this.request({ protocolName: On, requestData: e }).then(e => {
          const s = e.data, r = s.joinedStatus, i = s.longPollingKey, u = s.avChatRoomFlag, c = s.avChatRoomKey, l = "groupID:".concat(o, " joinedStatus:").concat(r, " longPollingKey:").concat(i, " avChatRoomFlag:").concat(u); switch(a.setNetworkType(t.getNetworkType()).setMessage("".concat(l)).end(), Ne.log("".concat(n, " ok. ").concat(l)), r){
            case hr: return Lr({ status: hr }); case gr: return t.getGroupProfile({ groupID: o }).then(e => {
              const n = e.data.group, a = { status: gr, group: n }; return 1 === u ? (t.getModule(Vt).setCompleted("".concat(S.CONV_GROUP).concat(o)), t._groupAttributesHandler.initGroupAttributesCache({ groupID: o, avChatRoomKey: c }), Ue(i) ? t._AVChatRoomHandler.handleJoinResult({ group: n }) : t._AVChatRoomHandler.startRunLoop({ longPollingKey: i, group: n })) : (t.emitGroupListUpdate(!0, !1), Lr(a));
            }); default: var d = new wr({ code: _o.JOIN_GROUP_FAIL, message: oa }); return Ne.error("".concat(n, " error:"), d), Vr(d);
          }
        }).catch(o => (a.setMessage("groupID:".concat(e.groupID)), t.probeNetwork().then(e => {
          const t = m(e, 2), n = t[0], s = t[1]; a.setError(o, n, s).end();
        }), Ne.error("".concat(n, " error:"), o), Vr(o)));
      } }, { key: "quitGroup", value(e){
        const t = this, n = "".concat(this._className, ".quitGroup"); Ne.log("".concat(n, " groupID:").concat(e)); const o = this.checkJoinedAVChatRoomByID(e); if(!o && !this.hasLocalGroup(e)){
          const a = new wr({ code: _o.MEMBER_NOT_IN_GROUP, message: na }); return Vr(a);
        }if(o && !this.isLoggedIn()){
          return Ne.log("".concat(n, " anonymously ok. groupID:").concat(e)), this.deleteLocalGroupAndConversation(e), this._AVChatRoomHandler.reset(e), qr({ groupID: e });
        } const s = new qa(ys); return s.setMessage("groupID:".concat(e)), this.request({ protocolName: Gn, requestData: { groupID: e } }).then(() => (s.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(n, " ok")), o && t._AVChatRoomHandler.reset(e), t.deleteLocalGroupAndConversation(e), Lr({ groupID: e }))).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; s.setError(e, o, a).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "searchGroupByID", value(e){
        const t = this, n = "".concat(this._className, ".searchGroupByID"), o = { groupIDList: [e] }, a = new qa(Is); return a.setMessage("groupID:".concat(e)), Ne.log("".concat(n, " groupID:").concat(e)), this.request({ protocolName: bn, requestData: o }).then(e => {
          const o = e.data.groupProfile; if(0 !== o[0].errorCode){
            throw new wr({ code: o[0].errorCode, message: o[0].errorInfo });
          } return a.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(n, " ok")), Lr({ group: new ti(o[0]) });
        }).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], s = n[1]; a.setError(e, o, s).end();
        }), Ne.warn("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "changeGroupOwner", value(e){
        const t = this, n = "".concat(this._className, ".changeGroupOwner"); if(this.hasLocalGroup(e.groupID) && this.getLocalGroupProfile(e.groupID).type === S.GRP_AVCHATROOM){
          return Vr(new wr({ code: _o.CANNOT_CHANGE_OWNER_IN_AVCHATROOM, message: Zo }));
        }if(e.newOwnerID === this.getMyUserID()){
          return Vr(new wr({ code: _o.CANNOT_CHANGE_OWNER_TO_SELF, message: ea }));
        } const o = new qa(Ts); return o.setMessage("groupID:".concat(e.groupID, " newOwnerID:").concat(e.newOwnerID)), Ne.log("".concat(n, " groupID:").concat(e.groupID)), this.request({ protocolName: Pn, requestData: e }).then(() => {
          o.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(n, " ok")); const a = e.groupID, s = e.newOwnerID; t.groupMap.get(a).ownerID = s; const r = t.getModule(qt).getLocalGroupMemberList(a); if(r instanceof Map){
            const i = r.get(t.getMyUserID()); Ue(i) || (i.updateRole("Member"), t.groupMap.get(a).selfInfo.role = "Member"); const u = r.get(s); Ue(u) || u.updateRole("Owner");
          } return t.emitGroupListUpdate(!0, !1), Lr({ group: t.groupMap.get(a) });
        }).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), a = n[0], s = n[1]; o.setError(e, a, s).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "handleGroupApplication", value(e){
        const n = this, o = "".concat(this._className, ".handleGroupApplication"), a = e.message.payload, s = a.groupProfile.groupID, r = a.authentication, i = a.messageKey, u = a.operatorID, c = new qa(Ds); return c.setMessage("groupID:".concat(s)), Ne.log("".concat(o, " groupID:").concat(s)), this.request({ protocolName: wn, requestData: t(t({}, e), {}, { applicant: u, groupID: s, authentication: r, messageKey: i }) }).then(() => (c.setNetworkType(n.getNetworkType()).end(), Ne.log("".concat(o, " ok")), n._groupSystemNoticeHandler.deleteGroupSystemNotice({ messageList: [e.message] }), Lr({ group: n.getLocalGroupProfile(s) }))).catch(e => (n.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; c.setError(e, o, a).end();
        }), Ne.error("".concat(o, " failed. error"), e), Vr(e)));
      } }, { key: "handleGroupInvitation", value(e){
        const n = this, o = "".concat(this._className, ".handleGroupInvitation"), a = e.message.payload, s = a.groupProfile.groupID, r = a.authentication, i = a.messageKey, u = a.operatorID, c = e.handleAction, l = new qa(Cs); return l.setMessage("groupID:".concat(s, " inviter:").concat(u, " handleAction:").concat(c)), Ne.log("".concat(o, " groupID:").concat(s, " inviter:").concat(u, " handleAction:").concat(c)), this.request({ protocolName: Un, requestData: t(t({}, e), {}, { inviter: u, groupID: s, authentication: r, messageKey: i }) }).then(() => (l.setNetworkType(n.getNetworkType()).end(), Ne.log("".concat(o, " ok")), n._groupSystemNoticeHandler.deleteGroupSystemNotice({ messageList: [e.message] }), Lr({ group: n.getLocalGroupProfile(s) }))).catch(e => (n.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; l.setError(e, o, a).end();
        }), Ne.error("".concat(o, " failed. error"), e), Vr(e)));
      } }, { key: "getGroupOnlineMemberCount", value(e){
        return this._AVChatRoomHandler ? this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e) ? this._AVChatRoomHandler.getGroupOnlineMemberCount(e) : qr({ memberCount: 0 }) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "hasLocalGroup", value(e){
        return this.groupMap.has(e);
      } }, { key: "deleteLocalGroupAndConversation", value(e){
        this._deleteLocalGroup(e), this.getModule(Vt).deleteLocalConversation("GROUP".concat(e)), this.emitGroupListUpdate(!0, !1);
      } }, { key: "_deleteLocalGroup", value(e){
        this.groupMap.delete(e), this.getModule(qt).deleteGroupMemberList(e), this._setStorageGroupList();
      } }, { key: "sendMessage", value(e, t){
        const n = this.createGroupMessagePack(e, t); return this.request(n);
      } }, { key: "createGroupMessagePack", value(e, t){
        let n = null; t && t.offlinePushInfo && (n = t.offlinePushInfo); let o = ""; Ge(e.cloudCustomData) && e.cloudCustomData.length > 0 && (o = e.cloudCustomData); const a = e.getGroupAtInfoList(); return { protocolName: ln, tjgID: this.generateTjgID(e), requestData: { fromAccount: this.getMyUserID(), groupID: e.to, msgBody: e.getElements(), cloudCustomData: o, random: e.random, priority: e.priority, clientSequence: e.clientSequence, groupAtInfo: e.type !== S.MSG_TEXT || vt(a) ? void 0 : a, onlineOnlyFlag: this.isOnlineMessage(e, t) ? 1 : 0, offlinePushInfo: n ? { pushFlag: !0 === n.disablePush ? 1 : 0, title: n.title || "", desc: n.description || "", ext: n.extension || "", apnsInfo: { badgeMode: !0 === n.ignoreIOSBadge ? 1 : 0 }, androidInfo: { OPPOChannelID: n.androidOPPOChannelID || "" } } : void 0 } };
      } }, { key: "revokeMessage", value(e){
        return this.request({ protocolName: Fn, requestData: { to: e.to, msgSeqList: [{ msgSeq: e.sequence }] } });
      } }, { key: "deleteMessage", value(e){
        const t = e.to, n = e.keyList; return Ne.log("".concat(this._className, ".deleteMessage groupID:").concat(t, " count:").concat(n.length)), this.request({ protocolName: Yn, requestData: { groupID: t, deleter: this.getMyUserID(), keyList: n } });
      } }, { key: "getRoamingMessage", value(e){
        let t = this, n = "".concat(this._className, ".getRoamingMessage"), o = new qa(ts), a = 0; return this._computeLastSequence(e).then(n => (a = n, Ne.log("".concat(t._className, ".getRoamingMessage groupID:").concat(e.groupID, " lastSequence:").concat(a)), t.request({ protocolName: Vn, requestData: { groupID: e.groupID, count: 21, sequence: a } }))).then(s => {
          const r = s.data, i = r.messageList, u = r.complete; Ue(i) ? Ne.log("".concat(n, " ok. complete:").concat(u, " but messageList is undefined!")) : Ne.log("".concat(n, " ok. complete:").concat(u, " count:").concat(i.length)), o.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(e.groupID, " lastSequence:").concat(a, " complete:").concat(u, " count:").concat(i ? i.length : "undefined")).end(); const c = "GROUP".concat(e.groupID), l = t.getModule(Vt); if(2 === u || vt(i)){
            return l.setCompleted(c), [];
          } const d = l.storeRoamingMessage(i, c); return l.updateIsRead(c), l.patchConversationLastMessage(c), d;
        }).catch(s => (t.probeNetwork().then(t => {
          const n = m(t, 2), r = n[0], i = n[1]; o.setError(s, r, i).setMessage("groupID:".concat(e.groupID, " lastSequence:").concat(a)).end();
        }), Ne.warn("".concat(n, " failed. error:"), s), Vr(s)));
      } }, { key: "setMessageRead", value(e){
        const t = this, n = e.conversationID, o = e.lastMessageSeq, a = "".concat(this._className, ".setMessageRead"); Ne.log("".concat(a, " conversationID:").concat(n, " lastMessageSeq:").concat(o)), Re(o) || Ne.warn("".concat(a, " 请勿修改 Conversation.lastMessage.lastSequence，否则可能会导致已读上报结果不准确")); const s = new qa(ss); return s.setMessage("".concat(n, "-").concat(o)), this.request({ protocolName: qn, requestData: { groupID: n.replace("GROUP", ""), messageReadSeq: o } }).then(() => {
          s.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(a, " ok.")); const e = t.getModule(Vt); return e.updateIsReadAfterReadReport({ conversationID: n, lastMessageSeq: o }), e.updateUnreadCount(n), Lr();
        }).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; s.setError(e, o, a).end();
        }), Ne.log("".concat(a, " failed. error:"), e), Vr(e)));
      } }, { key: "_computeLastSequence", value(e){
        return e.sequence > 0 ? Promise.resolve(e.sequence) : this.getGroupLastSequence(e.groupID);
      } }, { key: "getGroupLastSequence", value(e){
        let t = this, n = "".concat(this._className, ".getGroupLastSequence"), o = new qa(Os), a = 0, s = ""; if(this.hasLocalGroup(e)){
          const r = this.getLocalGroupProfile(e), i = r.lastMessage; if(i.lastSequence > 0 && !1 === i.onlineOnlyFlag){
            return a = i.lastSequence, s = "got lastSequence:".concat(a, " from local group profile[lastMessage.lastSequence]. groupID:").concat(e), Ne.log("".concat(n, " ").concat(s)), o.setNetworkType(this.getNetworkType()).setMessage("".concat(s)).end(), Promise.resolve(a);
          }if(r.nextMessageSeq > 1){
            return a = r.nextMessageSeq - 1, s = "got lastSequence:".concat(a, " from local group profile[nextMessageSeq]. groupID:").concat(e), Ne.log("".concat(n, " ").concat(s)), o.setNetworkType(this.getNetworkType()).setMessage("".concat(s)).end(), Promise.resolve(a);
          }
        } const u = "GROUP".concat(e), c = this.getModule(Vt).getLocalConversation(u); if(c && c.lastMessage.lastSequence && !1 === c.lastMessage.onlineOnlyFlag){
          return a = c.lastMessage.lastSequence, s = "got lastSequence:".concat(a, " from local conversation profile[lastMessage.lastSequence]. groupID:").concat(e), Ne.log("".concat(n, " ").concat(s)), o.setNetworkType(this.getNetworkType()).setMessage("".concat(s)).end(), Promise.resolve(a);
        } const l = { groupIDList: [e], responseFilter: { groupBaseInfoFilter: ["NextMsgSeq"] } }; return this.getGroupProfileAdvance(l).then(r => {
          const i = r.data.successGroupList; return vt(i) ? Ne.log("".concat(n, " successGroupList is empty. groupID:").concat(e)) : (a = i[0].nextMessageSeq - 1, s = "got lastSequence:".concat(a, " from getGroupProfileAdvance. groupID:").concat(e), Ne.log("".concat(n, " ").concat(s))), o.setNetworkType(t.getNetworkType()).setMessage("".concat(s)).end(), a;
        }).catch(a => (t.probeNetwork().then(t => {
          const n = m(t, 2), s = n[0], r = n[1]; o.setError(a, s, r).setMessage("get lastSequence failed from getGroupProfileAdvance. groupID:".concat(e)).end();
        }), Ne.warn("".concat(n, " failed. error:"), a), Vr(a)));
      } }, { key: "isMessageFromAVChatroom", value(e){
        return !!this._AVChatRoomHandler && this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e);
      } }, { key: "hasJoinedAVChatRoom", value(){
        return this._AVChatRoomHandler ? this._AVChatRoomHandler.hasJoinedAVChatRoom() : 0;
      } }, { key: "getJoinedAVChatRoom", value(){
        return this._AVChatRoomHandler ? this._AVChatRoomHandler.getJoinedAVChatRoom() : [];
      } }, { key: "isOnlineMessage", value(e, t){
        return !(!this._canIUseOnlineOnlyFlag(e) || !t || !0 !== t.onlineUserOnly);
      } }, { key: "_canIUseOnlineOnlyFlag", value(e){
        const t = this.getJoinedAVChatRoom(); return !t || !t.includes(e.to) || e.conversationType !== S.CONV_GROUP;
      } }, { key: "deleteLocalGroupMembers", value(e, t){
        this.getModule(qt).deleteLocalGroupMembers(e, t);
      } }, { key: "onAVChatRoomMessage", value(e){
        this._AVChatRoomHandler && this._AVChatRoomHandler.onMessage(e);
      } }, { key: "getGroupSimplifiedInfo", value(e){
        const t = this, n = new qa(bs), o = { groupIDList: [e], responseFilter: { groupBaseInfoFilter: ["Type", "Name"] } }; return this.getGroupProfileAdvance(o).then(o => {
          const a = o.data.successGroupList; return n.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(e, " type:").concat(a[0].type)).end(), a[0];
        }).catch(o => {
          t.probeNetwork().then(t => {
            const a = m(t, 2), s = a[0], r = a[1]; n.setError(o, s, r).setMessage("groupID:".concat(e)).end();
          });
        });
      } }, { key: "setUnjoinedAVChatRoom", value(e){
        this._unjoinedAVChatRoomList.set(e, 1);
      } }, { key: "deleteUnjoinedAVChatRoom", value(e){
        this._unjoinedAVChatRoomList.has(e) && this._unjoinedAVChatRoomList.delete(e);
      } }, { key: "isUnjoinedAVChatRoom", value(e){
        return this._unjoinedAVChatRoomList.has(e);
      } }, { key: "onGroupAttributesUpdated", value(e){
        this._groupAttributesHandler && this._groupAttributesHandler.onGroupAttributesUpdated(e);
      } }, { key: "updateLocalMainSequenceOnReconnected", value(){
        this._groupAttributesHandler && this._groupAttributesHandler.updateLocalMainSequenceOnReconnected();
      } }, { key: "initGroupAttributes", value(e){
        return this._groupAttributesHandler.initGroupAttributes(e);
      } }, { key: "setGroupAttributes", value(e){
        return this._groupAttributesHandler.setGroupAttributes(e);
      } }, { key: "deleteGroupAttributes", value(e){
        return this._groupAttributesHandler.deleteGroupAttributes(e);
      } }, { key: "getGroupAttributes", value(e){
        return this._groupAttributesHandler.getGroupAttributes(e);
      } }, { key: "reset", value(){
        this.groupMap.clear(), this._unjoinedAVChatRoomList.clear(), this._commonGroupHandler.reset(), this._groupSystemNoticeHandler.reset(), this._groupTipsHandler.reset(), this._AVChatRoomHandler && this._AVChatRoomHandler.reset();
      } }]), a;
    }(nn), mi = function(){
      function e(t){
        o(this, e), this.userID = "", this.avatar = "", this.nick = "", this.role = "", this.joinTime = "", this.lastSendMsgTime = "", this.nameCard = "", this.muteUntil = 0, this.memberCustomField = [], this._initMember(t);
      } return s(e, [{ key: "_initMember", value(e){
        this.updateMember(e);
      } }, { key: "updateMember", value(e){
        const t = [null, void 0, "", 0, NaN]; e.memberCustomField && ot(this.memberCustomField, e.memberCustomField), je(this, e, ["memberCustomField"], t);
      } }, { key: "updateRole", value(e){
        ["Owner", "Admin", "Member"].indexOf(e) < 0 || (this.role = e);
      } }, { key: "updateMuteUntil", value(e){
        Ue(e) || (this.muteUntil = Math.floor((Date.now() + 1e3 * e) / 1e3));
      } }, { key: "updateNameCard", value(e){
        Ue(e) || (this.nameCard = e);
      } }, { key: "updateMemberCustomField", value(e){
        e && ot(this.memberCustomField, e);
      } }]), e;
    }(), Mi = function(e){
      i(a, e); const n = f(a); function a(e){
        let t; return o(this, a), (t = n.call(this, e))._className = "GroupMemberModule", t.groupMemberListMap = new Map(), t.getInnerEmitterInstance().on(Br.PROFILE_UPDATED, t._onProfileUpdated, h(t)), t;
      } return s(a, [{ key: "_onProfileUpdated", value(e){
        for(var t = this, n = e.data, o = function(e){
            const o = n[e]; t.groupMemberListMap.forEach(e => {
              e.has(o.userID) && e.get(o.userID).updateMember({ nick: o.nick, avatar: o.avatar });
            });
          }, a = 0; a < n.length; a++){
          o(a);
        }
      } }, { key: "deleteGroupMemberList", value(e){
        this.groupMemberListMap.delete(e);
      } }, { key: "getGroupMemberList", value(e){
        const t = this, n = e.groupID, o = e.offset, a = void 0 === o ? 0 : o, s = e.count, r = void 0 === s ? 15 : s, i = "".concat(this._className, ".getGroupMemberList"), u = new qa(Vs); Ne.log("".concat(i, " groupID:").concat(n, " offset:").concat(a, " count:").concat(r)); let c = []; return this.request({ protocolName: Qn, requestData: { groupID: n, offset: a, limit: r > 100 ? 100 : r } }).then(e => {
          const o = e.data, a = o.members, s = o.memberNum; if(!we(a) || 0 === a.length){
            return Promise.resolve([]);
          } const r = t.getModule(Ut); return r.hasLocalGroup(n) && (r.getLocalGroupProfile(n).memberNum = s), c = t._updateLocalGroupMemberMap(n, a), t.getModule(Pt).getUserProfile({ userIDList: a.map(e => e.userID), tagList: [cr.NICK, cr.AVATAR] });
        }).then(e => {
          const o = e.data; if(!we(o) || 0 === o.length){
            return qr({ memberList: [] });
          } const s = o.map(e => ({ userID: e.userID, nick: e.nick, avatar: e.avatar })); return t._updateLocalGroupMemberMap(n, s), u.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(n, " offset:").concat(a, " count:").concat(r)).end(), Ne.log("".concat(i, " ok.")), Lr({ memberList: c });
        }).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; u.setError(e, o, a).end();
        }), Ne.error("".concat(i, " failed. error:"), e), Vr(e)));
      } }, { key: "getGroupMemberProfile", value(e){
        const n = this, o = "".concat(this._className, ".getGroupMemberProfile"), a = new qa(Ks); a.setMessage(e.userIDList.length > 5 ? "userIDList.length:".concat(e.userIDList.length) : "userIDList:".concat(e.userIDList)), Ne.log("".concat(o, " groupID:").concat(e.groupID, " userIDList:").concat(e.userIDList.join(","))), e.userIDList.length > 50 && (e.userIDList = e.userIDList.slice(0, 50)); const s = e.groupID, r = e.userIDList; return this._getGroupMemberProfileAdvance(t(t({}, e), {}, { userIDList: r })).then(e => {
          const t = e.data.members; return we(t) && 0 !== t.length ? (n._updateLocalGroupMemberMap(s, t), n.getModule(Pt).getUserProfile({ userIDList: t.map(e => e.userID), tagList: [cr.NICK, cr.AVATAR] })) : qr([]);
        }).then(e => {
          const t = e.data.map(e => ({ userID: e.userID, nick: e.nick, avatar: e.avatar })); n._updateLocalGroupMemberMap(s, t); const o = r.filter(e => n.hasLocalGroupMember(s, e)).map(e => n.getLocalGroupMemberInfo(s, e)); return a.setNetworkType(n.getNetworkType()).end(), Lr({ memberList: o });
        });
      } }, { key: "addGroupMember", value(e){
        const t = this, n = "".concat(this._className, ".addGroupMember"), o = e.groupID, a = this.getModule(Ut).getLocalGroupProfile(o), s = a.type, r = new qa(xs); if(r.setMessage("groupID:".concat(o, " groupType:").concat(s)), st(s)){
          const i = new wr({ code: _o.CANNOT_ADD_MEMBER_IN_AVCHATROOM, message: aa }); return r.setCode(_o.CANNOT_ADD_MEMBER_IN_AVCHATROOM).setError(aa).setNetworkType(this.getNetworkType()).end(), Vr(i);
        } return e.userIDList = e.userIDList.map(e => ({ userID: e })), Ne.log("".concat(n, " groupID:").concat(o)), this.request({ protocolName: eo, requestData: e }).then(o => {
          const s = o.data.members; Ne.log("".concat(n, " ok")); const i = s.filter(e => 1 === e.result).map(e => e.userID), u = s.filter(e => 0 === e.result).map(e => e.userID), c = s.filter(e => 2 === e.result).map(e => e.userID), l = s.filter(e => 4 === e.result).map(e => e.userID), d = "groupID:".concat(e.groupID, ", ") + "successUserIDList:".concat(i, ", ") + "failureUserIDList:".concat(u, ", ") + "existedUserIDList:".concat(c, ", ") + "overLimitUserIDList:".concat(l); return r.setNetworkType(t.getNetworkType()).setMoreMessage(d).end(), 0 === i.length ? Lr({ successUserIDList: i, failureUserIDList: u, existedUserIDList: c, overLimitUserIDList: l }) : (a.memberNum += i.length, Lr({ successUserIDList: i, failureUserIDList: u, existedUserIDList: c, overLimitUserIDList: l, group: a }));
        }).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; r.setError(e, o, a).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "deleteGroupMember", value(e){
        const t = this, n = "".concat(this._className, ".deleteGroupMember"), o = e.groupID, a = e.userIDList, s = new qa(Bs), r = "groupID:".concat(o, " ").concat(a.length > 5 ? "userIDList.length:".concat(a.length) : "userIDList:".concat(a)); s.setMessage(r), Ne.log("".concat(n, " groupID:").concat(o, " userIDList:"), a); const i = this.getModule(Ut).getLocalGroupProfile(o); return st(i.type) ? Vr(new wr({ code: _o.CANNOT_KICK_MEMBER_IN_AVCHATROOM, message: ra })) : this.request({ protocolName: to, requestData: e }).then(() => (s.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(n, " ok")), i.memberNum--, t.deleteLocalGroupMembers(o, a), Lr({ group: i, userIDList: a }))).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; s.setError(e, o, a).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "setGroupMemberMuteTime", value(e){
        const t = this, n = e.groupID, o = e.userID, a = e.muteTime, s = "".concat(this._className, ".setGroupMemberMuteTime"); if(o === this.getMyUserID()){
          return Vr(new wr({ code: _o.CANNOT_MUTE_SELF, message: da }));
        } Ne.log("".concat(s, " groupID:").concat(n, " userID:").concat(o)); const r = new qa(Hs); return r.setMessage("groupID:".concat(n, " userID:").concat(o, " muteTime:").concat(a)), this._modifyGroupMemberInfo({ groupID: n, userID: o, muteTime: a }).then(e => {
          r.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(s, " ok")); const o = t.getModule(Ut); return Lr({ group: o.getLocalGroupProfile(n), member: e });
        }).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; r.setError(e, o, a).end();
        }), Ne.error("".concat(s, " failed. error:"), e), Vr(e)));
      } }, { key: "setGroupMemberRole", value(e){
        const t = this, n = "".concat(this._className, ".setGroupMemberRole"), o = e.groupID, a = e.userID, s = e.role, r = this.getModule(Ut).getLocalGroupProfile(o); if(r.selfInfo.role !== S.GRP_MBR_ROLE_OWNER){
          return Vr(new wr({ code: _o.NOT_OWNER, message: ia }));
        }if([S.GRP_WORK, S.GRP_AVCHATROOM].includes(r.type)){
          return Vr(new wr({ code: _o.CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM, message: ua }));
        }if([S.GRP_MBR_ROLE_ADMIN, S.GRP_MBR_ROLE_MEMBER].indexOf(s) < 0){
          return Vr(new wr({ code: _o.INVALID_MEMBER_ROLE, message: ca }));
        }if(a === this.getMyUserID()){
          return Vr(new wr({ code: _o.CANNOT_SET_SELF_MEMBER_ROLE, message: la }));
        } const i = new qa(Ys); return i.setMessage("groupID:".concat(o, " userID:").concat(a, " role:").concat(s)), Ne.log("".concat(n, " groupID:").concat(o, " userID:").concat(a)), this._modifyGroupMemberInfo({ groupID: o, userID: a, role: s }).then(e => (i.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(n, " ok")), Lr({ group: r, member: e }))).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; i.setError(e, o, a).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "setGroupMemberNameCard", value(e){
        const t = this, n = "".concat(this._className, ".setGroupMemberNameCard"), o = e.groupID, a = e.userID, s = void 0 === a ? this.getMyUserID() : a, r = e.nameCard; Ne.log("".concat(n, " groupID:").concat(o, " userID:").concat(s)); const i = new qa(js); return i.setMessage("groupID:".concat(o, " userID:").concat(s, " nameCard:").concat(r)), this._modifyGroupMemberInfo({ groupID: o, userID: s, nameCard: r }).then(e => {
          Ne.log("".concat(n, " ok")), i.setNetworkType(t.getNetworkType()).end(); const a = t.getModule(Ut).getLocalGroupProfile(o); return s === t.getMyUserID() && a && a.setSelfNameCard(r), Lr({ group: a, member: e });
        }).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; i.setError(e, o, a).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "setGroupMemberCustomField", value(e){
        const t = this, n = "".concat(this._className, ".setGroupMemberCustomField"), o = e.groupID, a = e.userID, s = void 0 === a ? this.getMyUserID() : a, r = e.memberCustomField; Ne.log("".concat(n, " groupID:").concat(o, " userID:").concat(s)); const i = new qa($s); return i.setMessage("groupID:".concat(o, " userID:").concat(s, " memberCustomField:").concat(JSON.stringify(r))), this._modifyGroupMemberInfo({ groupID: o, userID: s, memberCustomField: r }).then(e => {
          i.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(n, " ok")); const a = t.getModule(Ut).getLocalGroupProfile(o); return Lr({ group: a, member: e });
        }).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; i.setError(e, o, a).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "setMessageRemindType", value(e){
        const t = this, n = "".concat(this._className, ".setMessageRemindType"), o = new qa(ks); o.setMessage("groupID:".concat(e.groupID)), Ne.log("".concat(n, " groupID:").concat(e.groupID)); const a = e.groupID, s = e.messageRemindType; return this._modifyGroupMemberInfo({ groupID: a, messageRemindType: s, userID: this.getMyUserID() }).then(() => {
          o.setNetworkType(t.getNetworkType()).end(), Ne.log("".concat(n, " ok. groupID:").concat(e.groupID)); const a = t.getModule(Ut).getLocalGroupProfile(e.groupID); return a && (a.selfInfo.messageRemindType = s), Lr({ group: a });
        }).catch(e => (t.probeNetwork().then(t => {
          const n = m(t, 2), a = n[0], s = n[1]; o.setError(e, a, s).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "_modifyGroupMemberInfo", value(e){
        const t = this, n = e.groupID, o = e.userID; return this.request({ protocolName: no, requestData: e }).then(() => {
          if(t.hasLocalGroupMember(n, o)){
            const a = t.getLocalGroupMemberInfo(n, o); return Ue(e.muteTime) || a.updateMuteUntil(e.muteTime), Ue(e.role) || a.updateRole(e.role), Ue(e.nameCard) || a.updateNameCard(e.nameCard), Ue(e.memberCustomField) || a.updateMemberCustomField(e.memberCustomField), a;
          } return t.getGroupMemberProfile({ groupID: n, userIDList: [o] }).then(e => m(e.data.memberList, 1)[0]);
        });
      } }, { key: "_getGroupMemberProfileAdvance", value(e){
        return this.request({ protocolName: Zn, requestData: t(t({}, e), {}, { memberInfoFilter: e.memberInfoFilter ? e.memberInfoFilter : ["Role", "JoinTime", "NameCard", "ShutUpUntil"] }) });
      } }, { key: "_updateLocalGroupMemberMap", value(e, t){
        const n = this; return we(t) && 0 !== t.length ? t.map(t => (n.hasLocalGroupMember(e, t.userID) ? n.getLocalGroupMemberInfo(e, t.userID).updateMember(t) : n.setLocalGroupMember(e, new mi(t)), n.getLocalGroupMemberInfo(e, t.userID))) : [];
      } }, { key: "deleteLocalGroupMembers", value(e, t){
        const n = this.groupMemberListMap.get(e); n && t.forEach(e => {
          n.delete(e);
        });
      } }, { key: "getLocalGroupMemberInfo", value(e, t){
        return this.groupMemberListMap.has(e) ? this.groupMemberListMap.get(e).get(t) : null;
      } }, { key: "setLocalGroupMember", value(e, t){
        if(this.groupMemberListMap.has(e)){
          this.groupMemberListMap.get(e).set(t.userID, t);
        }
        else {
          const n = new Map().set(t.userID, t); this.groupMemberListMap.set(e, n);
        }
      } }, { key: "getLocalGroupMemberList", value(e){
        return this.groupMemberListMap.get(e);
      } }, { key: "hasLocalGroupMember", value(e, t){
        return this.groupMemberListMap.has(e) && this.groupMemberListMap.get(e).has(t);
      } }, { key: "hasLocalGroupMemberMap", value(e){
        return this.groupMemberListMap.has(e);
      } }, { key: "reset", value(){
        this.groupMemberListMap.clear();
      } }]), a;
    }(nn), vi = function(){
      function e(t){
        o(this, e), this._userModule = t, this._className = "ProfileHandler", this.TAG = "profile", this.accountProfileMap = new Map(), this.expirationTime = 864e5;
      } return s(e, [{ key: "setExpirationTime", value(e){
        this.expirationTime = e;
      } }, { key: "getUserProfile", value(e){
        const t = this, n = e.userIDList; e.fromAccount = this._userModule.getMyAccount(), n.length > 100 && (Ne.warn("".concat(this._className, ".getUserProfile 获取用户资料人数不能超过100人")), n.length = 100); for(var o, a = [], s = [], r = 0, i = n.length; r < i; r++){
          o = n[r], this._userModule.isMyFriend(o) && this._containsAccount(o) ? s.push(this._getProfileFromMap(o)) : a.push(o);
        }if(0 === a.length){
          return qr(s);
        } e.toAccount = a; const u = e.bFromGetMyProfile || !1, c = []; e.toAccount.forEach(e => {
          c.push({ toAccount: e, standardSequence: 0, customSequence: 0 });
        }), e.userItem = c; const l = new qa(Qs); return l.setMessage(n.length > 5 ? "userIDList.length:".concat(n.length) : "userIDList:".concat(n)), this._userModule.request({ protocolName: dn, requestData: e }).then(e => {
          l.setNetworkType(t._userModule.getNetworkType()).end(), Ne.info("".concat(t._className, ".getUserProfile ok")); const n = t._handleResponse(e).concat(s); return Lr(u ? n[0] : n);
        }).catch(e => (t._userModule.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0], a = n[1]; l.setError(e, o, a).end();
        }), Ne.error("".concat(t._className, ".getUserProfile failed. error:"), e), Vr(e)));
      } }, { key: "getMyProfile", value(){
        const e = this._userModule.getMyAccount(); if(Ne.log("".concat(this._className, ".getMyProfile myAccount:").concat(e)), this._fillMap(), this._containsAccount(e)){
          const t = this._getProfileFromMap(e); return Ne.debug("".concat(this._className, ".getMyProfile from cache, myProfile:") + JSON.stringify(t)), qr(t);
        } return this.getUserProfile({ fromAccount: e, userIDList: [e], bFromGetMyProfile: !0 });
      } }, { key: "_handleResponse", value(e){
        for(var t, n, o = He.now(), a = e.data.userProfileItem, s = [], r = 0, i = a.length; r < i; r++){
          "@TLS#NOT_FOUND" !== a[r].to && "" !== a[r].to && (t = a[r].to, n = this._updateMap(t, this._getLatestProfileFromResponse(t, a[r].profileItem)), s.push(n));
        } return Ne.log("".concat(this._className, "._handleResponse cost ").concat(He.now() - o, " ms")), s;
      } }, { key: "_getLatestProfileFromResponse", value(e, t){
        const n = {}; if(n.userID = e, n.profileCustomField = [], !vt(t)){
          for(let o = 0, a = t.length; o < a; o++){
            if(t[o].tag.indexOf("Tag_Profile_Custom") > -1){
              n.profileCustomField.push({ key: t[o].tag, value: t[o].value });
            }
            else {
              switch(t[o].tag){
                case cr.NICK: n.nick = t[o].value; break; case cr.GENDER: n.gender = t[o].value; break; case cr.BIRTHDAY: n.birthday = t[o].value; break; case cr.LOCATION: n.location = t[o].value; break; case cr.SELFSIGNATURE: n.selfSignature = t[o].value; break; case cr.ALLOWTYPE: n.allowType = t[o].value; break; case cr.LANGUAGE: n.language = t[o].value; break; case cr.AVATAR: n.avatar = t[o].value; break; case cr.MESSAGESETTINGS: n.messageSettings = t[o].value; break; case cr.ADMINFORBIDTYPE: n.adminForbidType = t[o].value; break; case cr.LEVEL: n.level = t[o].value; break; case cr.ROLE: n.role = t[o].value; break; default: Ne.warn("".concat(this._className, "._handleResponse unknown tag:"), t[o].tag, t[o].value);
              }
            }
          }
        } return n;
      } }, { key: "updateMyProfile", value(e){
        const t = this, n = "".concat(this._className, ".updateMyProfile"), o = new qa(Zs); o.setMessage(JSON.stringify(e)); const a = new Xr().validate(e); if(!a.valid){
          return o.setCode(_o.UPDATE_PROFILE_INVALID_PARAM).setMoreMessage("".concat(n, " info:").concat(a.tips)).setNetworkType(this._userModule.getNetworkType()).end(), Ne.error("".concat(n, " info:").concat(a.tips, "，请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#updateMyProfile")), Vr({ code: _o.UPDATE_PROFILE_INVALID_PARAM, message: pa });
        } const s = []; for(const r in e){
          Object.prototype.hasOwnProperty.call(e, r) && ("profileCustomField" === r ? e.profileCustomField.forEach(e => {
            s.push({ tag: e.key, value: e.value });
          }) : s.push({ tag: cr[r.toUpperCase()], value: e[r] }));
        } return 0 === s.length ? (o.setCode(_o.UPDATE_PROFILE_NO_KEY).setMoreMessage(ga).setNetworkType(this._userModule.getNetworkType()).end(), Ne.error("".concat(n, " info:").concat(ga, "，请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#updateMyProfile")), Vr({ code: _o.UPDATE_PROFILE_NO_KEY, message: ga })) : this._userModule.request({ protocolName: pn, requestData: { fromAccount: this._userModule.getMyAccount(), profileItem: s } }).then(a => {
          o.setNetworkType(t._userModule.getNetworkType()).end(), Ne.info("".concat(n, " ok")); const s = t._updateMap(t._userModule.getMyAccount(), e); return t._userModule.emitOuterEvent(k.PROFILE_UPDATED, [s]), qr(s);
        }).catch(e => (t._userModule.probeNetwork().then(t => {
          const n = m(t, 2), a = n[0], s = n[1]; o.setError(e, a, s).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)));
      } }, { key: "onProfileModified", value(e){
        const t = e.dataList; if(!vt(t)){
          let n, o, a = t.length; Ne.info("".concat(this._className, ".onProfileModified count:").concat(a)); for(var s = [], r = this._userModule.getModule(Vt), i = 0; i < a; i++){
            n = t[i].userID, o = this._updateMap(n, this._getLatestProfileFromResponse(n, t[i].profileList)), s.push(o), n === this._userModule.getMyAccount() && r.onMyProfileModified({ latestNick: o.nick, latestAvatar: o.avatar });
          } this._userModule.emitInnerEvent(Br.PROFILE_UPDATED, s), this._userModule.emitOuterEvent(k.PROFILE_UPDATED, s);
        }
      } }, { key: "_fillMap", value(){
        if(0 === this.accountProfileMap.size){
          for(let e = this._getCachedProfiles(), t = Date.now(), n = 0, o = e.length; n < o; n++){
            t - e[n].lastUpdatedTime < this.expirationTime && this.accountProfileMap.set(e[n].userID, e[n]);
          }Ne.log("".concat(this._className, "._fillMap from cache, map.size:").concat(this.accountProfileMap.size));
        }
      } }, { key: "_updateMap", value(e, t){
        let n, o = Date.now(); return this._containsAccount(e) ? (n = this._getProfileFromMap(e), t.profileCustomField && ot(n.profileCustomField, t.profileCustomField), je(n, t, ["profileCustomField"]), n.lastUpdatedTime = o) : (n = new Xr(t), (this._userModule.isMyFriend(e) || e === this._userModule.getMyAccount()) && (n.lastUpdatedTime = o, this.accountProfileMap.set(e, n))), this._flushMap(e === this._userModule.getMyAccount()), n;
      } }, { key: "_flushMap", value(e){
        const t = M(this.accountProfileMap.values()), n = this._userModule.getStorageModule(); Ne.debug("".concat(this._className, "._flushMap length:").concat(t.length, " flushAtOnce:").concat(e)), n.setItem(this.TAG, t, e);
      } }, { key: "_containsAccount", value(e){
        return this.accountProfileMap.has(e);
      } }, { key: "_getProfileFromMap", value(e){
        return this.accountProfileMap.get(e);
      } }, { key: "_getCachedProfiles", value(){
        const e = this._userModule.getStorageModule().getItem(this.TAG); return vt(e) ? [] : e;
      } }, { key: "onConversationsProfileUpdated", value(e){
        for(var t, n, o, a = [], s = 0, r = e.length; s < r; s++){
          n = (t = e[s]).userID, this._userModule.isMyFriend(n) || (this._containsAccount(n) ? (o = this._getProfileFromMap(n), je(o, t) > 0 && a.push(n)) : a.push(t.userID));
        }0 !== a.length && (Ne.info("".concat(this._className, ".onConversationsProfileUpdated toAccountList:").concat(a)), this.getUserProfile({ userIDList: a }));
      } }, { key: "getNickAndAvatarByUserID", value(e){
        if(this._containsAccount(e)){
          const t = this._getProfileFromMap(e); return { nick: t.nick, avatar: t.avatar };
        } return { nick: "", avatar: "" };
      } }, { key: "reset", value(){
        this._flushMap(!0), this.accountProfileMap.clear();
      } }]), e;
    }(), yi = function e(t){
      o(this, e), vt || (this.userID = t.userID || "", this.timeStamp = t.timeStamp || 0);
    }, Ii = function(){
      function e(t){
        o(this, e), this._userModule = t, this._className = "BlacklistHandler", this._blacklistMap = new Map(), this.startIndex = 0, this.maxLimited = 100, this.currentSequence = 0;
      } return s(e, [{ key: "getLocalBlacklist", value(){
        return M(this._blacklistMap.keys());
      } }, { key: "getBlacklist", value(){
        const e = this, t = "".concat(this._className, ".getBlacklist"), n = { fromAccount: this._userModule.getMyAccount(), maxLimited: this.maxLimited, startIndex: 0, lastSequence: this.currentSequence }, o = new qa(er); return this._userModule.request({ protocolName: gn, requestData: n }).then(n => {
          const a = n.data, s = a.blackListItem, r = a.currentSequence, i = vt(s) ? 0 : s.length; o.setNetworkType(e._userModule.getNetworkType()).setMessage("blackList count:".concat(i)).end(), Ne.info("".concat(t, " ok")), e.currentSequence = r, e._handleResponse(s, !0), e._userModule.emitOuterEvent(k.BLACKLIST_UPDATED, M(e._blacklistMap.keys()));
        }).catch(n => (e._userModule.probeNetwork().then(e => {
          const t = m(e, 2), a = t[0], s = t[1]; o.setError(n, a, s).end();
        }), Ne.error("".concat(t, " failed. error:"), n), Vr(n)));
      } }, { key: "addBlacklist", value(e){
        const t = this, n = "".concat(this._className, ".addBlacklist"), o = new qa(tr); if(!we(e.userIDList)){
          return o.setCode(_o.ADD_BLACKLIST_INVALID_PARAM).setMessage(ha).setNetworkType(this._userModule.getNetworkType()).end(), Ne.error("".concat(n, " options.userIDList 必需是数组")), Vr({ code: _o.ADD_BLACKLIST_INVALID_PARAM, message: ha });
        } const a = this._userModule.getMyAccount(); return 1 === e.userIDList.length && e.userIDList[0] === a ? (o.setCode(_o.CANNOT_ADD_SELF_TO_BLACKLIST).setMessage(fa).setNetworkType(this._userModule.getNetworkType()).end(), Ne.error("".concat(n, " 不能把自己拉黑")), Vr({ code: _o.CANNOT_ADD_SELF_TO_BLACKLIST, message: fa })) : (e.userIDList.includes(a) && (e.userIDList = e.userIDList.filter(e => e !== a), Ne.warn("".concat(n, " 不能把自己拉黑，已过滤"))), e.fromAccount = this._userModule.getMyAccount(), e.toAccount = e.userIDList, this._userModule.request({ protocolName: hn, requestData: e }).then(a => (o.setNetworkType(t._userModule.getNetworkType()).setMessage(e.userIDList.length > 5 ? "userIDList.length:".concat(e.userIDList.length) : "userIDList:".concat(e.userIDList)).end(), Ne.info("".concat(n, " ok")), t._handleResponse(a.resultItem, !0), Lr(M(t._blacklistMap.keys())))).catch(e => (t._userModule.probeNetwork().then(t => {
          const n = m(t, 2), a = n[0], s = n[1]; o.setError(e, a, s).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e))));
      } }, { key: "_handleResponse", value(e, t){
        if(!vt(e)){
          for(var n, o, a, s = 0, r = e.length; s < r; s++){
            o = e[s].to, a = e[s].resultCode, (Ue(a) || 0 === a) && (t ? ((n = this._blacklistMap.has(o) ? this._blacklistMap.get(o) : new yi()).userID = o, !vt(e[s].addBlackTimeStamp) && (n.timeStamp = e[s].addBlackTimeStamp), this._blacklistMap.set(o, n)) : this._blacklistMap.has(o) && (n = this._blacklistMap.get(o), this._blacklistMap.delete(o)));
          }
        }Ne.log("".concat(this._className, "._handleResponse total:").concat(this._blacklistMap.size, " bAdd:").concat(t));
      } }, { key: "deleteBlacklist", value(e){
        const t = this, n = "".concat(this._className, ".deleteBlacklist"), o = new qa(nr); return we(e.userIDList) ? (e.fromAccount = this._userModule.getMyAccount(), e.toAccount = e.userIDList, this._userModule.request({ protocolName: _n, requestData: e }).then(a => (o.setNetworkType(t._userModule.getNetworkType()).setMessage(e.userIDList.length > 5 ? "userIDList.length:".concat(e.userIDList.length) : "userIDList:".concat(e.userIDList)).end(), Ne.info("".concat(n, " ok")), t._handleResponse(a.data.resultItem, !1), Lr(M(t._blacklistMap.keys())))).catch(e => (t._userModule.probeNetwork().then(t => {
          const n = m(t, 2), a = n[0], s = n[1]; o.setError(e, a, s).end();
        }), Ne.error("".concat(n, " failed. error:"), e), Vr(e)))) : (o.setCode(_o.DEL_BLACKLIST_INVALID_PARAM).setMessage(_a).setNetworkType(this._userModule.getNetworkType()).end(), Ne.error("".concat(n, " options.userIDList 必需是数组")), Vr({ code: _o.DEL_BLACKLIST_INVALID_PARAM, message: _a }));
      } }, { key: "onAccountDeleted", value(e){
        for(var t, n = [], o = 0, a = e.length; o < a; o++){
          t = e[o], this._blacklistMap.has(t) && (this._blacklistMap.delete(t), n.push(t));
        }n.length > 0 && (Ne.log("".concat(this._className, ".onAccountDeleted count:").concat(n.length, " userIDList:"), n), this._userModule.emitOuterEvent(k.BLACKLIST_UPDATED, M(this._blacklistMap.keys())));
      } }, { key: "onAccountAdded", value(e){
        for(var t, n = [], o = 0, a = e.length; o < a; o++){
          t = e[o], this._blacklistMap.has(t) || (this._blacklistMap.set(t, new yi({ userID: t })), n.push(t));
        }n.length > 0 && (Ne.log("".concat(this._className, ".onAccountAdded count:").concat(n.length, " userIDList:"), n), this._userModule.emitOuterEvent(k.BLACKLIST_UPDATED, M(this._blacklistMap.keys())));
      } }, { key: "reset", value(){
        this._blacklistMap.clear(), this.startIndex = 0, this.maxLimited = 100, this.currentSequence = 0;
      } }]), e;
    }(), Ti = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this, e))._className = "UserModule", a._profileHandler = new vi(h(a)), a._blacklistHandler = new Ii(h(a)), a.getInnerEmitterInstance().on(Br.CONTEXT_A2KEY_AND_TINYID_UPDATED, a.onContextUpdated, h(a)), a;
      } return s(n, [{ key: "onContextUpdated", value(e){
        this._profileHandler.getMyProfile(), this._blacklistHandler.getBlacklist();
      } }, { key: "onProfileModified", value(e){
        this._profileHandler.onProfileModified(e);
      } }, { key: "onRelationChainModified", value(e){
        const t = e.dataList; if(!vt(t)){
          const n = []; t.forEach(e => {
            e.blackListDelAccount && n.push.apply(n, M(e.blackListDelAccount));
          }), n.length > 0 && this._blacklistHandler.onAccountDeleted(n); const o = []; t.forEach(e => {
            e.blackListAddAccount && o.push.apply(o, M(e.blackListAddAccount));
          }), o.length > 0 && this._blacklistHandler.onAccountAdded(o);
        }
      } }, { key: "onConversationsProfileUpdated", value(e){
        this._profileHandler.onConversationsProfileUpdated(e);
      } }, { key: "getMyAccount", value(){
        return this.getMyUserID();
      } }, { key: "getMyProfile", value(){
        return this._profileHandler.getMyProfile();
      } }, { key: "getStorageModule", value(){
        return this.getModule(xt);
      } }, { key: "isMyFriend", value(e){
        const t = this.getModule(Ft); return !!t && t.isMyFriend(e);
      } }, { key: "getUserProfile", value(e){
        return this._profileHandler.getUserProfile(e);
      } }, { key: "updateMyProfile", value(e){
        return this._profileHandler.updateMyProfile(e);
      } }, { key: "getNickAndAvatarByUserID", value(e){
        return this._profileHandler.getNickAndAvatarByUserID(e);
      } }, { key: "getLocalBlacklist", value(){
        const e = this._blacklistHandler.getLocalBlacklist(); return qr(e);
      } }, { key: "addBlacklist", value(e){
        return this._blacklistHandler.addBlacklist(e);
      } }, { key: "deleteBlacklist", value(e){
        return this._blacklistHandler.deleteBlacklist(e);
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this._profileHandler.reset(), this._blacklistHandler.reset();
      } }]), n;
    }(nn), Di = function(){
      function e(t, n){
        o(this, e), this._moduleManager = t, this._isLoggedIn = !1, this._SDKAppID = n.SDKAppID, this._userID = n.userID || "", this._userSig = n.userSig || "", this._version = "2.15.0", this._a2Key = "", this._tinyID = "", this._contentType = "json", this._unlimitedAVChatRoom = n.unlimitedAVChatRoom, this._scene = n.scene || "", this._oversea = n.oversea, this._instanceID = n.instanceID, this._statusInstanceID = 0;
      } return s(e, [{ key: "isLoggedIn", value(){
        return this._isLoggedIn;
      } }, { key: "isOversea", value(){
        return this._oversea;
      } }, { key: "isUnlimitedAVChatRoom", value(){
        return this._unlimitedAVChatRoom;
      } }, { key: "getUserID", value(){
        return this._userID;
      } }, { key: "setUserID", value(e){
        this._userID = e;
      } }, { key: "setUserSig", value(e){
        this._userSig = e;
      } }, { key: "getUserSig", value(){
        return this._userSig;
      } }, { key: "getSDKAppID", value(){
        return this._SDKAppID;
      } }, { key: "getTinyID", value(){
        return this._tinyID;
      } }, { key: "setTinyID", value(e){
        this._tinyID = e, this._isLoggedIn = !0;
      } }, { key: "getScene", value(){
        return function(){
          let e = !1, t = []; X && (t = Object.keys(Z)), Q && (t = Object.keys(window)); for(let n = 0, o = t.length; n < o; n++){
            if(t[n].toLowerCase().includes("uikit")){
              e = !0; break;
            }
          } return t = null, e;
        }() ? "tuikit" : this._scene;
      } }, { key: "getInstanceID", value(){
        return this._instanceID;
      } }, { key: "getStatusInstanceID", value(){
        return this._statusInstanceID;
      } }, { key: "setStatusInstanceID", value(e){
        this._statusInstanceID = e;
      } }, { key: "getVersion", value(){
        return this._version;
      } }, { key: "getA2Key", value(){
        return this._a2Key;
      } }, { key: "setA2Key", value(e){
        this._a2Key = e;
      } }, { key: "getContentType", value(){
        return this._contentType;
      } }, { key: "reset", value(){
        this._isLoggedIn = !1, this._userSig = "", this._a2Key = "", this._tinyID = "", this._statusInstanceID = 0;
      } }]), e;
    }(), Ci = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this, e))._className = "SignModule", a._helloInterval = 120, a._lastLoginTs = 0, Hr.mixin(h(a)), a;
      } return s(n, [{ key: "onCheckTimer", value(e){
        this.isLoggedIn() && 0 == e % this._helloInterval && this._hello();
      } }, { key: "login", value(e){
        if(this.isLoggedIn()){
          const t = "您已经登录账号".concat(e.userID, "！如需切换账号登录，请先调用 logout 接口登出，再调用 login 接口登录。"); return Ne.warn(t), qr({ actionStatus: "OK", errorCode: 0, errorInfo: t, repeatLogin: !0 });
        }if(Date.now() - this._lastLoginTs <= 15e3){
          return Ne.warn("您正在尝试登录账号".concat(e.userID, "！请勿重复登录。")), Vr({ code: _o.REPEAT_LOGIN, message: To });
        } Ne.log("".concat(this._className, ".login userID:").concat(e.userID)); const n = this._checkLoginInfo(e); if(0 !== n.code){
          return Vr(n);
        } const o = this.getModule(Kt), a = e.userID, s = e.userSig; return o.setUserID(a), o.setUserSig(s), this.getModule(zt).updateProtocolConfig(), this._login();
      } }, { key: "_login", value(){
        const e = this, t = this.getModule(Kt), n = new qa(xa); return n.setMessage("".concat(t.getScene())).setMoreMessage("identifier:".concat(this.getMyUserID())), this._lastLoginTs = Date.now(), this.request({ protocolName: on }).then(o => {
          e._lastLoginTs = 0; let a = Date.now(), s = null, r = o.data, i = r.a2Key, u = r.tinyID, c = r.helloInterval, l = r.instanceID, d = r.timeStamp; Ne.log("".concat(e._className, ".login ok. helloInterval:").concat(c, " instanceID:").concat(l, " timeStamp:").concat(d)); const p = 1e3 * d, g = a - n.getStartTs(), h = p + parseInt(g / 2) - a, _ = n.getStartTs() + h; if(n.start(_), function(e, t){
            De = t; const n = new Date(); n.setTime(e), Ne.info("baseTime from server: ".concat(n, " offset: ").concat(De));
          }(p, h), !u){
            throw s = new wr({ code: _o.NO_TINYID, message: vo }), n.setError(s, !0, e.getNetworkType()).end(), s;
          }if(!i){
            throw s = new wr({ code: _o.NO_A2KEY, message: yo }), n.setError(s, !0, e.getNetworkType()).end(), s;
          } return n.setNetworkType(e.getNetworkType()).setMoreMessage("helloInterval:".concat(c, " instanceID:").concat(l, " offset:").concat(h)).end(), t.setA2Key(i), t.setTinyID(u), t.setStatusInstanceID(l), e.getModule(zt).updateProtocolConfig(), e.emitInnerEvent(Br.CONTEXT_A2KEY_AND_TINYID_UPDATED), e._helloInterval = c, e.triggerReady(), e._fetchCloudControlConfig(), o;
        }).catch(t => (e.probeNetwork().then(e => {
          const o = m(e, 2), a = o[0], s = o[1]; n.setError(t, a, s).end(!0);
        }), Ne.error("".concat(e._className, ".login failed. error:"), t), e._moduleManager.onLoginFailed(), Vr(t)));
      } }, { key: "logout", value(){
        const e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; if(!this.isLoggedIn()){
          return Vr({ code: _o.USER_NOT_LOGGED_IN, message: Io });
        } const n = new qa(Ba); return n.setNetworkType(this.getNetworkType()).setMessage("identifier:".concat(this.getMyUserID())).end(!0), Ne.info("".concat(this._className, ".logout type:").concat(t)), this.request({ protocolName: an, requestData: { type: t } }).then(() => (e.resetReady(), qr({}))).catch(t => (Ne.error("".concat(e._className, "._logout error:"), t), e.resetReady(), qr({})));
      } }, { key: "_fetchCloudControlConfig", value(){
        this.getModule(Qt).fetchConfig();
      } }, { key: "_hello", value(){
        const e = this; this.request({ protocolName: sn }).catch(t => {
          Ne.warn("".concat(e._className, "._hello error:"), t);
        });
      } }, { key: "_checkLoginInfo", value(e){
        let t = 0, n = ""; return vt(this.getModule(Kt).getSDKAppID()) ? (t = _o.NO_SDKAPPID, n = fo) : vt(e.userID) ? (t = _o.NO_IDENTIFIER, n = mo) : vt(e.userSig) && (t = _o.NO_USERSIG, n = Mo), { code: t, message: n };
      } }, { key: "onMultipleAccountKickedOut", value(e){
        const t = this; new qa(Ha).setNetworkType(this.getNetworkType()).setMessage("type:".concat(S.KICKED_OUT_MULT_ACCOUNT, " newInstanceInfo:").concat(JSON.stringify(e))).end(!0), Ne.warn("".concat(this._className, ".onMultipleAccountKickedOut userID:").concat(this.getMyUserID(), " newInstanceInfo:"), e), this.logout(1).then(() => {
          t.emitOuterEvent(k.KICKED_OUT, { type: S.KICKED_OUT_MULT_ACCOUNT }), t._moduleManager.reset();
        });
      } }, { key: "onMultipleDeviceKickedOut", value(e){
        const t = this; new qa(Ha).setNetworkType(this.getNetworkType()).setMessage("type:".concat(S.KICKED_OUT_MULT_DEVICE, " newInstanceInfo:").concat(JSON.stringify(e))).end(!0), Ne.warn("".concat(this._className, ".onMultipleDeviceKickedOut userID:").concat(this.getMyUserID(), " newInstanceInfo:"), e), this.logout(1).then(() => {
          t.emitOuterEvent(k.KICKED_OUT, { type: S.KICKED_OUT_MULT_DEVICE }), t._moduleManager.reset();
        });
      } }, { key: "onUserSigExpired", value(){
        new qa(Ha).setNetworkType(this.getNetworkType()).setMessage(S.KICKED_OUT_USERSIG_EXPIRED).end(!0), Ne.warn("".concat(this._className, ".onUserSigExpired: userSig 签名过期被踢下线")), 0 !== this.getModule(Kt).getStatusInstanceID() && (this.emitOuterEvent(k.KICKED_OUT, { type: S.KICKED_OUT_USERSIG_EXPIRED }), this._moduleManager.reset());
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this.resetReady(), this._helloInterval = 120, this._lastLoginTs = 0;
      } }]), n;
    }(nn); function ki(){
    return null;
  } const Si = function(){
      function e(t){
        o(this, e), this._moduleManager = t, this._className = "StorageModule", this._storageQueue = new Map(), this._errorTolerantHandle();
      } return s(e, [{ key: "_errorTolerantHandle", value(){
        X || !Ue(window) && !Ue(window.localStorage) || (this.getItem = ki, this.setItem = ki, this.removeItem = ki, this.clear = ki);
      } }, { key: "onCheckTimer", value(e){
        if(0 == e % 20){
          if(0 === this._storageQueue.size){
            return;
          } this._doFlush();
        }
      } }, { key: "_doFlush", value(){
        try {
          let e, t = C(this._storageQueue); try {
            for(t.s(); !(e = t.n()).done;){
              const n = m(e.value, 2), o = n[0], a = n[1]; this._setStorageSync(this._getKey(o), a);
            }
          }
          catch(s){
            t.e(s);
          }
          finally {
            t.f();
          } this._storageQueue.clear();
        }
        catch(r){
          Ne.warn("".concat(this._className, "._doFlush error:"), r);
        }
      } }, { key: "_getPrefix", value(){
        const e = this._moduleManager.getModule(Kt); return "TIM_".concat(e.getSDKAppID(), "_").concat(e.getUserID(), "_");
      } }, { key: "_getKey", value(e){
        return "".concat(this._getPrefix()).concat(e);
      } }, { key: "getItem", value(e){
        const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; try {
          const n = t ? this._getKey(e) : e; return this._getStorageSync(n);
        }
        catch(o){
          return Ne.warn("".concat(this._className, ".getItem error:"), o), {};
        }
      } }, { key: "setItem", value(e, t){
        const n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]; if(n){
          const a = o ? this._getKey(e) : e; this._setStorageSync(a, t);
        }
        else {
          this._storageQueue.set(e, t);
        }
      } }, { key: "clear", value(){
        try {
          X ? Z.clearStorageSync() : localStorage && localStorage.clear();
        }
        catch(e){
          Ne.warn("".concat(this._className, ".clear error:"), e);
        }
      } }, { key: "removeItem", value(e){
        const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; try {
          const n = t ? this._getKey(e) : e; this._removeStorageSync(n);
        }
        catch(o){
          Ne.warn("".concat(this._className, ".removeItem error:"), o);
        }
      } }, { key: "getSize", value(e){
        const t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "b"; try {
          const o = { size: 0, limitSize: 5242880, unit: n }; if(Object.defineProperty(o, "leftSize", { enumerable: !0, get(){
            return o.limitSize - o.size;
          } }), X && (o.limitSize = 1024 * Z.getStorageInfoSync().limitSize), e){
            o.size = JSON.stringify(this.getItem(e)).length + this._getKey(e).length;
          }
          else if(X){
            const a = Z.getStorageInfoSync(), s = a.keys; s.forEach(e => {
              o.size += JSON.stringify(t._getStorageSync(e)).length + t._getKey(e).length;
            });
          }
          else if(localStorage){
            for(const r in localStorage){
              localStorage.hasOwnProperty(r) && (o.size += localStorage.getItem(r).length + r.length);
            }
          } return this._convertUnit(o);
        }
        catch(i){
          Ne.warn("".concat(this._className, " error:"), i);
        }
      } }, { key: "_convertUnit", value(e){
        const t = {}, n = e.unit; for(const o in t.unit = n, e){
          "number" == typeof e[o] && ("kb" === n.toLowerCase() ? t[o] = Math.round(e[o] / 1024) : "mb" === n.toLowerCase() ? t[o] = Math.round(e[o] / 1024 / 1024) : t[o] = e[o]);
        } return t;
      } }, { key: "_setStorageSync", value(e, t){
        X ? z ? my.setStorageSync({ key: e, data: t }) : Z.setStorageSync(e, t) : localStorage && localStorage.setItem(e, JSON.stringify(t));
      } }, { key: "_getStorageSync", value(e){
        return X ? z ? my.getStorageSync({ key: e }).data : Z.getStorageSync(e) : localStorage ? JSON.parse(localStorage.getItem(e)) : {};
      } }, { key: "_removeStorageSync", value(e){
        X ? z ? my.removeStorageSync({ key: e }) : Z.removeStorageSync(e) : localStorage && localStorage.removeItem(e);
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this._doFlush();
      } }]), e;
    }(), Ei = function(){
      function e(t){
        o(this, e), this._className = "SSOLogBody", this._report = [];
      } return s(e, [{ key: "pushIn", value(e){
        Ne.debug("".concat(this._className, ".pushIn"), this._report.length, e), this._report.push(e);
      } }, { key: "backfill", value(e){
        let t; we(e) && 0 !== e.length && (Ne.debug("".concat(this._className, ".backfill"), this._report.length, e.length), (t = this._report).unshift.apply(t, M(e)));
      } }, { key: "getLogsNumInMemory", value(){
        return this._report.length;
      } }, { key: "isEmpty", value(){
        return 0 === this._report.length;
      } }, { key: "_reset", value(){
        this._report.length = 0, this._report = [];
      } }, { key: "getLogsInMemory", value(){
        const e = this._report.slice(); return this._reset(), e;
      } }]), e;
    }(), Ai = function(e){
      const t = e.getModule(Kt); return { SDKType: 10, SDKAppID: t.getSDKAppID(), SDKVersion: t.getVersion(), tinyID: Number(t.getTinyID()), userID: t.getUserID(), platform: e.getPlatform(), instanceID: t.getInstanceID(), traceID: Ce() };
    }, Ni = function(e){
      i(a, e); const n = f(a); function a(e){
        let t; o(this, a), (t = n.call(this, e))._className = "EventStatModule", t.TAG = "im-ssolog-event", t._reportBody = new Ei(), t.MIN_THRESHOLD = 20, t.MAX_THRESHOLD = 100, t.WAITING_TIME = 6e4, t.REPORT_LEVEL = [4, 5, 6], t.REPORT_SDKAPPID_BLACKLIST = [], t.REPORT_TINYID_WHITELIST = [], t._lastReportTime = Date.now(); const s = t.getInnerEmitterInstance(); return s.on(Br.CONTEXT_A2KEY_AND_TINYID_UPDATED, t._onLoginSuccess, h(t)), s.on(Br.CLOUD_CONFIG_UPDATED, t._onCloudConfigUpdated, h(t)), t;
      } return s(a, [{ key: "reportAtOnce", value(){
        Ne.debug("".concat(this._className, ".reportAtOnce")), this._report();
      } }, { key: "_onLoginSuccess", value(){
        const e = this, t = this.getModule(xt), n = t.getItem(this.TAG, !1); !vt(n) && qe(n.forEach) && (Ne.log("".concat(this._className, "._onLoginSuccess get ssolog in storage, count:").concat(n.length)), n.forEach(t => {
          e._reportBody.pushIn(t);
        }), t.removeItem(this.TAG, !1));
      } }, { key: "_onCloudConfigUpdated", value(){
        const e = this.getCloudConfig("evt_rpt_threshold"), t = this.getCloudConfig("evt_rpt_waiting"), n = this.getCloudConfig("evt_rpt_level"), o = this.getCloudConfig("evt_rpt_sdkappid_bl"), a = this.getCloudConfig("evt_rpt_tinyid_wl"); Ue(e) || (this.MIN_THRESHOLD = Number(e)), Ue(t) || (this.WAITING_TIME = Number(t)), Ue(n) || (this.REPORT_LEVEL = n.split(",").map(e => Number(e))), Ue(o) || (this.REPORT_SDKAPPID_BLACKLIST = o.split(",").map(e => Number(e))), Ue(a) || (this.REPORT_TINYID_WHITELIST = a.split(","));
      } }, { key: "pushIn", value(e){
        e instanceof qa && (e.updateTimeStamp(), this._reportBody.pushIn(e), this._reportBody.getLogsNumInMemory() >= this.MIN_THRESHOLD && this._report());
      } }, { key: "onCheckTimer", value(){
        Date.now() < this._lastReportTime + this.WAITING_TIME || this._reportBody.isEmpty() || this._report();
      } }, { key: "_filterLogs", value(e){
        const t = this, n = this.getModule(Kt), o = n.getSDKAppID(), a = n.getTinyID(); return ft(this.REPORT_SDKAPPID_BLACKLIST, o) && !mt(this.REPORT_TINYID_WHITELIST, a) ? [] : e.filter(e => t.REPORT_LEVEL.includes(e.level));
      } }, { key: "_report", value(){
        const e = this; if(!this._reportBody.isEmpty()){
          const n = this._reportBody.getLogsInMemory(), o = this._filterLogs(n); if(0 !== o.length){
            const a = { header: Ai(this), event: o }; this.request({ protocolName: so, requestData: t({}, a) }).then(() => {
              e._lastReportTime = Date.now();
            }).catch(t => {
              Ne.warn("".concat(e._className, ".report failed. networkType:").concat(e.getNetworkType(), " error:"), t), e._reportBody.backfill(n), e._reportBody.getLogsNumInMemory() > e.MAX_THRESHOLD && e._flushAtOnce();
            });
          }
          else {
            this._lastReportTime = Date.now();
          }
        }
      } }, { key: "_flushAtOnce", value(){
        const e = this.getModule(xt), t = e.getItem(this.TAG, !1), n = this._reportBody.getLogsInMemory(); if(vt(t)){
          Ne.log("".concat(this._className, "._flushAtOnce count:").concat(n.length)), e.setItem(this.TAG, n, !0, !1);
        }
        else {
          let o = n.concat(t); o.length > this.MAX_THRESHOLD && (o = o.slice(0, this.MAX_THRESHOLD)), Ne.log("".concat(this._className, "._flushAtOnce count:").concat(o.length)), e.setItem(this.TAG, o, !0, !1);
        }
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this._lastReportTime = 0, this._report(), this.REPORT_SDKAPPID_BLACKLIST = [], this.REPORT_TINYID_WHITELIST = [];
      } }]), a;
    }(nn), Li = "none", Oi = "online", Ri = function(){
      function e(t){
        o(this, e), this._moduleManager = t, this._networkType = "", this._className = "NetMonitorModule", this.MAX_WAIT_TIME = 3e3;
      } return s(e, [{ key: "start", value(){
        const e = this; if(X){
          Z.getNetworkType({ success(t){
            e._networkType = t.networkType, t.networkType === Li ? Ne.warn("".concat(e._className, ".start no network, please check!")) : Ne.info("".concat(e._className, ".start networkType:").concat(t.networkType));
          } }); const t = this._onNetworkStatusChange.bind(this); Z.offNetworkStatusChange && (J || $ ? Z.offNetworkStatusChange(t) : Z.offNetworkStatusChange()), Z.onNetworkStatusChange(t);
        }
        else {
          this._networkType = Oi;
        }
      } }, { key: "_onNetworkStatusChange", value(e){
        e.isConnected ? (Ne.info("".concat(this._className, "._onNetworkStatusChange previousNetworkType:").concat(this._networkType, " currentNetworkType:").concat(e.networkType)), this._networkType !== e.networkType && this._moduleManager.getModule(Jt).reConnect()) : Ne.warn("".concat(this._className, "._onNetworkStatusChange no network, please check!")); this._networkType = e.networkType;
      } }, { key: "probe", value(){
        const e = this; return new Promise((t, n) => {
          if(X){
            Z.getNetworkType({ success(n){
              e._networkType = n.networkType, n.networkType === Li ? (Ne.warn("".concat(e._className, ".probe no network, please check!")), t([!1, n.networkType])) : (Ne.info("".concat(e._className, ".probe networkType:").concat(n.networkType)), t([!0, n.networkType]));
            } });
          }
          else if(window && window.fetch){
            fetch("".concat(Ze(), "//web.sdk.qcloud.com/im/assets/speed.xml?random=").concat(Math.random())).then(e => {
              e.ok ? t([!0, Oi]) : t([!1, Li]);
            }).catch(e => {
              t([!1, Li]);
            });
          }
          else {
            const o = new XMLHttpRequest(), a = setTimeout(() => {
              Ne.warn("".concat(e._className, ".probe fetch timeout. Probably no network, please check!")), o.abort(), e._networkType = Li, t([!1, Li]);
            }, e.MAX_WAIT_TIME); o.onreadystatechange = function(){
              4 === o.readyState && (clearTimeout(a), 200 === o.status || 304 === o.status ? (this._networkType = Oi, t([!0, Oi])) : (Ne.warn("".concat(this.className, ".probe fetch status:").concat(o.status, ". Probably no network, please check!")), this._networkType = Li, t([!1, Li])));
            }, o.open("GET", "".concat(Ze(), "//web.sdk.qcloud.com/im/assets/speed.xml?random=").concat(Math.random())), o.send();
          }
        });
      } }, { key: "getNetworkType", value(){
        return this._networkType;
      } }]), e;
    }(), Gi = N(e => {
      let t = Object.prototype.hasOwnProperty, n = "~"; function o(){} function a(e, t, n){
        this.fn = e, this.context = t, this.once = n || !1;
      } function s(e, t, o, s, r){
        if("function" != typeof o){
          throw new TypeError("The listener must be a function");
        } const i = new a(o, s || e, r), u = n ? n + t : t; return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], i] : e._events[u].push(i) : (e._events[u] = i, e._eventsCount++), e;
      } function r(e, t){
        0 == --e._eventsCount ? e._events = new o() : delete e._events[t];
      } function i(){
        this._events = new o(), this._eventsCount = 0;
      }Object.create && (o.prototype = Object.create(null), new o().__proto__ || (n = !1)), i.prototype.eventNames = function(){
        let e, o, a = []; if(0 === this._eventsCount){
          return a;
        }for(o in e = this._events){
          t.call(e, o) && a.push(n ? o.slice(1) : o);
        } return Object.getOwnPropertySymbols ? a.concat(Object.getOwnPropertySymbols(e)) : a;
      }, i.prototype.listeners = function(e){
        const t = n ? n + e : e, o = this._events[t]; if(!o){
          return [];
        }if(o.fn){
          return [o.fn];
        }for(var a = 0, s = o.length, r = new Array(s); a < s; a++){
          r[a] = o[a].fn;
        } return r;
      }, i.prototype.listenerCount = function(e){
        const t = n ? n + e : e, o = this._events[t]; return o ? o.fn ? 1 : o.length : 0;
      }, i.prototype.emit = function(e, t, o, a, s, r){
        const i = n ? n + e : e; if(!this._events[i]){
          return !1;
        } let u, c, l = this._events[i], d = arguments.length; if(l.fn){
          switch(l.once && this.removeListener(e, l.fn, void 0, !0), d){
            case 1: return l.fn.call(l.context), !0; case 2: return l.fn.call(l.context, t), !0; case 3: return l.fn.call(l.context, t, o), !0; case 4: return l.fn.call(l.context, t, o, a), !0; case 5: return l.fn.call(l.context, t, o, a, s), !0; case 6: return l.fn.call(l.context, t, o, a, s, r), !0;
          }for(c = 1, u = new Array(d - 1); c < d; c++){
            u[c - 1] = arguments[c];
          }l.fn.apply(l.context, u);
        }
        else {
          let p, g = l.length; for(c = 0; c < g; c++){
            switch(l[c].once && this.removeListener(e, l[c].fn, void 0, !0), d){
              case 1: l[c].fn.call(l[c].context); break; case 2: l[c].fn.call(l[c].context, t); break; case 3: l[c].fn.call(l[c].context, t, o); break; case 4: l[c].fn.call(l[c].context, t, o, a); break; default: if(!u){
                for(p = 1, u = new Array(d - 1); p < d; p++){
                  u[p - 1] = arguments[p];
                }
              }l[c].fn.apply(l[c].context, u);
            }
          }
        } return !0;
      }, i.prototype.on = function(e, t, n){
        return s(this, e, t, n, !1);
      }, i.prototype.once = function(e, t, n){
        return s(this, e, t, n, !0);
      }, i.prototype.removeListener = function(e, t, o, a){
        const s = n ? n + e : e; if(!this._events[s]){
          return this;
        }if(!t){
          return r(this, s), this;
        } const i = this._events[s]; if(i.fn){
          i.fn !== t || a && !i.once || o && i.context !== o || r(this, s);
        }
        else {
          for(var u = 0, c = [], l = i.length; u < l; u++){
            (i[u].fn !== t || a && !i[u].once || o && i[u].context !== o) && c.push(i[u]);
          }c.length ? this._events[s] = 1 === c.length ? c[0] : c : r(this, s);
        } return this;
      }, i.prototype.removeAllListeners = function(e){
        let t; return e ? (t = n ? n + e : e, this._events[t] && r(this, t)) : (this._events = new o(), this._eventsCount = 0), this;
      }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prefixed = n, i.EventEmitter = i, e.exports = i;
    }), bi = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this, e))._className = "BigDataChannelModule", a.FILETYPE = { SOUND: 2106, FILE: 2107, VIDEO: 2113 }, a._bdh_download_server = "grouptalk.c2c.qq.com", a._BDHBizID = 10001, a._authKey = "", a._expireTime = 0, a.getInnerEmitterInstance().on(Br.CONTEXT_A2KEY_AND_TINYID_UPDATED, a._getAuthKey, h(a)), a;
      } return s(n, [{ key: "_getAuthKey", value(){
        const e = this; this.request({ protocolName: un }).then(t => {
          t.data.authKey && (e._authKey = t.data.authKey, e._expireTime = parseInt(t.data.expireTime));
        });
      } }, { key: "_isFromOlderVersion", value(e){
        return !(!e.content || 2 === e.content.downloadFlag);
      } }, { key: "parseElements", value(e, t){
        if(!we(e) || !t){
          return [];
        }for(var n = [], o = null, a = 0; a < e.length; a++){
          o = e[a], this._needParse(o) ? n.push(this._parseElement(o, t)) : n.push(e[a]);
        } return n;
      } }, { key: "_needParse", value(e){
        return !e.cloudCustomData && !(!this._isFromOlderVersion(e) || e.type !== S.MSG_AUDIO && e.type !== S.MSG_FILE && e.type !== S.MSG_VIDEO);
      } }, { key: "_parseElement", value(e, t){
        switch(e.type){
          case S.MSG_AUDIO: return this._parseAudioElement(e, t); case S.MSG_FILE: return this._parseFileElement(e, t); case S.MSG_VIDEO: return this._parseVideoElement(e, t);
        }
      } }, { key: "_parseAudioElement", value(e, t){
        return e.content.url = this._genAudioUrl(e.content.uuid, t), e;
      } }, { key: "_parseFileElement", value(e, t){
        return e.content.url = this._genFileUrl(e.content.uuid, t, e.content.fileName), e;
      } }, { key: "_parseVideoElement", value(e, t){
        return e.content.url = this._genVideoUrl(e.content.uuid, t), e;
      } }, { key: "_genAudioUrl", value(e, t){
        if("" === this._authKey){
          return Ne.warn("".concat(this._className, "._genAudioUrl no authKey!")), "";
        } const n = this.getModule(Kt).getSDKAppID(); return "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(n, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.SOUND, "&openid=").concat(t, "&ver=0");
      } }, { key: "_genFileUrl", value(e, t, n){
        if("" === this._authKey){
          return Ne.warn("".concat(this._className, "._genFileUrl no authKey!")), "";
        } n || (n = "".concat(Math.floor(1e5 * Math.random()), "-").concat(Date.now())); const o = this.getModule(Kt).getSDKAppID(); return "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(o, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.FILE, "&openid=").concat(t, "&ver=0&filename=").concat(encodeURIComponent(n));
      } }, { key: "_genVideoUrl", value(e, t){
        if("" === this._authKey){
          return Ne.warn("".concat(this._className, "._genVideoUrl no authKey!")), "";
        } const n = this.getModule(Kt).getSDKAppID(); return "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(n, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.VIDEO, "&openid=").concat(t, "&ver=0");
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this._authKey = "", this.expireTime = 0;
      } }]), n;
    }(nn), Pi = function(e){
      i(a, e); const n = f(a); function a(e){
        let t; return o(this, a), (t = n.call(this, e))._className = "UploadModule", t.TIMUploadPlugin = null, t.timUploadPlugin = null, t.COSSDK = null, t._cosUploadMethod = null, t.expiredTimeLimit = 600, t.appid = 0, t.bucketName = "", t.ciUrl = "", t.directory = "", t.downloadUrl = "", t.uploadUrl = "", t.region = "ap-shanghai", t.cos = null, t.cosOptions = { secretId: "", secretKey: "", sessionToken: "", expiredTime: 0 }, t.uploadFileType = "", t.duration = 900, t.tryCount = 0, t.getInnerEmitterInstance().on(Br.CONTEXT_A2KEY_AND_TINYID_UPDATED, t._init, h(t)), t;
      } return s(a, [{ key: "_init", value(){
        const e = "".concat(this._className, "._init"), t = this.getModule($t); if(this.TIMUploadPlugin = t.getPlugin("tim-upload-plugin"), this.TIMUploadPlugin){
          this._initUploaderMethod();
        }
        else {
          const n = X ? "cos-wx-sdk" : "cos-js-sdk"; this.COSSDK = t.getPlugin(n), this.COSSDK ? (this._getAuthorizationKey(), Ne.warn("".concat(e, " v2.9.2起推荐使用 tim-upload-plugin 代替 ").concat(n, "，上传更快更安全。详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin"))) : Ne.warn("".concat(e, " 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin"));
        }
      } }, { key: "_getAuthorizationKey", value(){
        const e = this, t = new qa(Ja), n = Math.ceil(Date.now() / 1e3); this.request({ protocolName: oo, requestData: { duration: this.expiredTimeLimit } }).then(o => {
          const a = o.data; Ne.log("".concat(e._className, "._getAuthorizationKey ok. data:"), a); const s = a.expiredTime - n; t.setMessage("requestId:".concat(a.requestId, " requestTime:").concat(n, " expiredTime:").concat(a.expiredTime, " diff:").concat(s, "s")).setNetworkType(e.getNetworkType()).end(), !X && a.region && (e.region = a.region), e.appid = a.appid, e.bucketName = a.bucketName, e.ciUrl = a.ciUrl, e.directory = a.directory, e.downloadUrl = a.downloadUrl, e.uploadUrl = a.uploadUrl, e.cosOptions = { secretId: a.secretId, secretKey: a.secretKey, sessionToken: a.sessionToken, expiredTime: a.expiredTime }, Ne.log("".concat(e._className, "._getAuthorizationKey ok. region:").concat(e.region, " bucketName:").concat(e.bucketName)), e._initUploaderMethod();
        }).catch(n => {
          e.probeNetwork().then(e => {
            const o = m(e, 2), a = o[0], s = o[1]; t.setError(n, a, s).end();
          }), Ne.warn("".concat(e._className, "._getAuthorizationKey failed. error:"), n);
        });
      } }, { key: "_getCosPreSigUrl", value(e){
        const t = this, n = "".concat(this._className, "._getCosPreSigUrl"), o = Math.ceil(Date.now() / 1e3), a = new qa(Xa); return this.request({ protocolName: ao, requestData: { fileType: e.fileType, fileName: e.fileName, uploadMethod: e.uploadMethod, duration: e.duration } }).then(e => {
          t.tryCount = 0; const s = e.data || {}, r = s.expiredTime - o; return Ne.log("".concat(n, " ok. data:"), s), a.setMessage("requestId:".concat(s.requestId, " expiredTime:").concat(s.expiredTime, " diff:").concat(r, "s")).setNetworkType(t.getNetworkType()).end(), s;
        }).catch(o => (-1 === o.code && (o.code = _o.COS_GET_SIG_FAIL), t.probeNetwork().then(e => {
          const t = m(e, 2), n = t[0], s = t[1]; a.setError(o, n, s).end();
        }), Ne.warn("".concat(n, " failed. error:"), o), t.tryCount < 1 ? (t.tryCount++, t._getCosPreSigUrl(e)) : (t.tryCount = 0, Vr({ code: _o.COS_GET_SIG_FAIL, message: Co }))));
      } }, { key: "_initUploaderMethod", value(){
        const e = this; if(this.TIMUploadPlugin){
          return this.timUploadPlugin = new this.TIMUploadPlugin(), void(this._cosUploadMethod = function(t, n){
            e.timUploadPlugin.uploadFile(t, n);
          });
        } this.appid && (this.cos = X ? new this.COSSDK({ ForcePathStyle: !0, getAuthorization: this._getAuthorization.bind(this) }) : new this.COSSDK({ getAuthorization: this._getAuthorization.bind(this) }), this._cosUploadMethod = X ? function(t, n){
          e.cos.postObject(t, n);
        } : function(t, n){
          e.cos.uploadFiles(t, n);
        });
      } }, { key: "onCheckTimer", value(e){
        this.COSSDK && (this.TIMUploadPlugin || this.isLoggedIn() && 0 == e % 60 && Math.ceil(Date.now() / 1e3) >= this.cosOptions.expiredTime - 120 && this._getAuthorizationKey());
      } }, { key: "_getAuthorization", value(e, t){
        t({ TmpSecretId: this.cosOptions.secretId, TmpSecretKey: this.cosOptions.secretKey, XCosSecurityToken: this.cosOptions.sessionToken, ExpiredTime: this.cosOptions.expiredTime });
      } }, { key: "upload", value(e){
        if(!0 === e.getRelayFlag()){
          return Promise.resolve();
        } const t = this.getModule(tn); switch(e.type){
          case S.MSG_IMAGE: return t.addTotalCount(Oa), this._uploadImage(e); case S.MSG_FILE: return t.addTotalCount(Oa), this._uploadFile(e); case S.MSG_AUDIO: return t.addTotalCount(Oa), this._uploadAudio(e); case S.MSG_VIDEO: return t.addTotalCount(Oa), this._uploadVideo(e); default: return Promise.resolve();
        }
      } }, { key: "_uploadImage", value(e){
        const n = this.getModule(bt), o = e.getElements()[0], a = n.getMessageOptionByID(e.ID); return this.doUploadImage({ file: a.payload.file, to: a.to, onProgress(e){
          if(o.updatePercent(e), qe(a.onProgress)){
            try {
              a.onProgress(e);
            }
            catch(t){
              return Vr({ code: _o.MESSAGE_ONPROGRESS_FUNCTION_ERROR, message: No });
            }
          }
        } }).then(n => {
          const a = n.location, s = n.fileType, r = n.fileSize, i = n.width, u = n.height, c = et(a); o.updateImageFormat(s); const l = pt({ originUrl: c, originWidth: i, originHeight: u, min: 198 }), d = pt({ originUrl: c, originWidth: i, originHeight: u, min: 720 }); return o.updateImageInfoArray([{ size: r, url: c, width: i, height: u }, t({}, d), t({}, l)]), e;
        });
      } }, { key: "_uploadFile", value(e){
        const t = this.getModule(bt), n = e.getElements()[0], o = t.getMessageOptionByID(e.ID); return this.doUploadFile({ file: o.payload.file, to: o.to, onProgress(e){
          if(n.updatePercent(e), qe(o.onProgress)){
            try {
              o.onProgress(e);
            }
            catch(t){
              return Vr({ code: _o.MESSAGE_ONPROGRESS_FUNCTION_ERROR, message: No });
            }
          }
        } }).then(t => {
          const o = t.location, a = et(o); return n.updateFileUrl(a), e;
        });
      } }, { key: "_uploadAudio", value(e){
        const t = this.getModule(bt), n = e.getElements()[0], o = t.getMessageOptionByID(e.ID); return this.doUploadAudio({ file: o.payload.file, to: o.to, onProgress(e){
          if(n.updatePercent(e), qe(o.onProgress)){
            try {
              o.onProgress(e);
            }
            catch(t){
              return Vr({ code: _o.MESSAGE_ONPROGRESS_FUNCTION_ERROR, message: No });
            }
          }
        } }).then(t => {
          const o = t.location, a = et(o); return n.updateAudioUrl(a), e;
        });
      } }, { key: "_uploadVideo", value(e){
        const t = this.getModule(bt), n = e.getElements()[0], o = t.getMessageOptionByID(e.ID); return this.doUploadVideo({ file: o.payload.file, to: o.to, onProgress(e){
          if(n.updatePercent(e), qe(o.onProgress)){
            try {
              o.onProgress(e);
            }
            catch(t){
              return Vr({ code: _o.MESSAGE_ONPROGRESS_FUNCTION_ERROR, message: No });
            }
          }
        } }).then(t => {
          const o = et(t.location); return n.updateVideoUrl(o), e;
        });
      } }, { key: "doUploadImage", value(e){
        if(!e.file){
          return Vr({ code: _o.MESSAGE_IMAGE_SELECT_FILE_FIRST, message: Ro });
        } const t = this._checkImageType(e.file); if(!0 !== t){
          return t;
        } const n = this._checkImageSize(e.file); if(!0 !== n){
          return n;
        } let o = null; return this._setUploadFileType($r), this.uploadByCOS(e).then(e => {
          return o = e, t = "https://".concat(e.location), X ? new Promise((e, n) => {
            Z.getImageInfo({ src: t, success(t){
              e({ width: t.width, height: t.height });
            }, fail(){
              e({ width: 0, height: 0 });
            } });
          }) : de && 9 === pe ? Promise.resolve({ width: 0, height: 0 }) : new Promise((e, n) => {
            let o = new Image(); o.onload = function(){
              e({ width: this.width, height: this.height }), o = null;
            }, o.onerror = function(){
              e({ width: 0, height: 0 }), o = null;
            }, o.src = t;
          }); let t;
        }).then(e => (o.width = e.width, o.height = e.height, Promise.resolve(o)));
      } }, { key: "_checkImageType", value(e){
        let t = ""; return t = X ? e.url.slice(e.url.lastIndexOf(".") + 1) : e.files[0].name.slice(e.files[0].name.lastIndexOf(".") + 1), jr.indexOf(t.toLowerCase()) >= 0 || Vr({ code: _o.MESSAGE_IMAGE_TYPES_LIMIT, message: Go });
      } }, { key: "_checkImageSize", value(e){
        let t = 0; return 0 === (t = X ? e.size : e.files[0].size) ? Vr({ code: _o.MESSAGE_FILE_IS_EMPTY, message: "".concat(Ao) }) : t < 20971520 || Vr({ code: _o.MESSAGE_IMAGE_SIZE_LIMIT, message: "".concat(bo) });
      } }, { key: "doUploadFile", value(e){
        let t = null; return e.file ? e.file.files[0].size > 104857600 ? Vr(t = { code: _o.MESSAGE_FILE_SIZE_LIMIT, message: xo }) : 0 === e.file.files[0].size ? (t = { code: _o.MESSAGE_FILE_IS_EMPTY, message: "".concat(Ao) }, Vr(t)) : (this._setUploadFileType(Jr), this.uploadByCOS(e)) : Vr(t = { code: _o.MESSAGE_FILE_SELECT_FILE_FIRST, message: Ko });
      } }, { key: "doUploadVideo", value(e){
        return e.file.videoFile.size > 104857600 ? Vr({ code: _o.MESSAGE_VIDEO_SIZE_LIMIT, message: "".concat(Fo) }) : 0 === e.file.videoFile.size ? Vr({ code: _o.MESSAGE_FILE_IS_EMPTY, message: "".concat(Ao) }) : -1 === Yr.indexOf(e.file.videoFile.type) ? Vr({ code: _o.MESSAGE_VIDEO_TYPES_LIMIT, message: "".concat(qo) }) : (this._setUploadFileType(Wr), X ? this.handleVideoUpload({ file: e.file.videoFile, onProgress: e.onProgress }) : Q ? this.handleVideoUpload(e) : void 0);
      } }, { key: "handleVideoUpload", value(e){
        const t = this; return new Promise((n, o) => {
          t.uploadByCOS(e).then(e => {
            n(e);
          }).catch(() => {
            t.uploadByCOS(e).then(e => {
              n(e);
            }).catch(() => {
              o(new wr({ code: _o.MESSAGE_VIDEO_UPLOAD_FAIL, message: Uo }));
            });
          });
        });
      } }, { key: "doUploadAudio", value(e){
        return e.file ? e.file.size > 20971520 ? Vr(new wr({ code: _o.MESSAGE_AUDIO_SIZE_LIMIT, message: "".concat(wo) })) : 0 === e.file.size ? Vr(new wr({ code: _o.MESSAGE_FILE_IS_EMPTY, message: "".concat(Ao) })) : (this._setUploadFileType(zr), this.uploadByCOS(e)) : Vr(new wr({ code: _o.MESSAGE_AUDIO_UPLOAD_FAIL, message: Po }));
      } }, { key: "uploadByCOS", value(e){
        const t = this, n = "".concat(this._className, ".uploadByCOS"); if(!qe(this._cosUploadMethod)){
          return Ne.warn("".concat(n, " 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin")), Vr({ code: _o.COS_UNDETECTED, message: Do });
        }if(this.timUploadPlugin){
          return this._uploadWithPreSigUrl(e);
        } const o = new qa(Qa), a = Date.now(), s = X ? e.file : e.file.files[0]; return new Promise((r, i) => {
          const u = X ? t._createCosOptionsWXMiniApp(e) : t._createCosOptionsWeb(e), c = t; t._cosUploadMethod(u, (e, u) => {
            const l = Object.create(null); if(u){
              if(e || we(u.files) && u.files[0].error){
                const d = new wr({ code: _o.MESSAGE_FILE_UPLOAD_FAIL, message: Vo }); return o.setError(d, !0, t.getNetworkType()).end(), Ne.log("".concat(n, " failed. error:"), u.files[0].error), 403 === u.files[0].error.statusCode && (Ne.warn("".concat(n, " failed. cos AccessKeyId was invalid, regain auth key!")), t._getAuthorizationKey()), void i(d);
              }l.fileName = s.name, l.fileSize = s.size, l.fileType = s.type.slice(s.type.indexOf("/") + 1).toLowerCase(), l.location = X ? u.Location : u.files[0].data.Location; const p = Date.now() - a, g = c._formatFileSize(s.size), h = c._formatSpeed(1e3 * s.size / p), _ = "size:".concat(g, " time:").concat(p, "ms speed:").concat(h); Ne.log("".concat(n, " success. name:").concat(s.name, " ").concat(_)), r(l); const f = t.getModule(tn); return f.addCost(Oa, p), f.addFileSize(Oa, s.size), void o.setNetworkType(t.getNetworkType()).setMessage(_).end();
            } const m = new wr({ code: _o.MESSAGE_FILE_UPLOAD_FAIL, message: Vo }); o.setError(m, !0, c.getNetworkType()).end(), Ne.warn("".concat(n, " failed. error:"), e), 403 === e.statusCode && (Ne.warn("".concat(n, " failed. cos AccessKeyId was invalid, regain auth key!")), t._getAuthorizationKey()), i(m);
          });
        });
      } }, { key: "_uploadWithPreSigUrl", value(e){
        const t = this, n = "".concat(this._className, "._uploadWithPreSigUrl"), o = X ? e.file : e.file.files[0]; return this._createCosOptionsPreSigUrl(e).then(e => new Promise((a, s) => {
          const r = new qa(Qa); Ne.time(Ca), t._cosUploadMethod(e, (e, i) => {
            const u = Object.create(null); if(e || 403 === i.statusCode){
              const c = new wr({ code: _o.MESSAGE_FILE_UPLOAD_FAIL, message: Vo }); return r.setError(c, !0, t.getNetworkType()).end(), Ne.log("".concat(n, " failed, error:"), e), void s(c);
            } let l = i.data.location || ""; 0 !== l.indexOf("https://") && 0 !== l.indexOf("http://") || (l = l.split("//")[1]), u.fileName = o.name, u.fileSize = o.size, u.fileType = o.type.slice(o.type.indexOf("/") + 1).toLowerCase(), u.location = l; const d = Ne.timeEnd(Ca), p = t._formatFileSize(o.size), g = t._formatSpeed(1e3 * o.size / d), h = "size:".concat(p, ",time:").concat(d, "ms,speed:").concat(g); Ne.log("".concat(n, " success name:").concat(o.name, ",").concat(h)), r.setNetworkType(t.getNetworkType()).setMessage(h).end(); const _ = t.getModule(tn); _.addCost(Oa, d), _.addFileSize(Oa, o.size), a(u);
          });
        }));
      } }, { key: "_formatFileSize", value(e){
        return e < 1024 ? `${e}B` : e < 1048576 ? `${Math.floor(e / 1024)}KB` : `${Math.floor(e / 1048576)}MB`;
      } }, { key: "_formatSpeed", value(e){
        return e <= 1048576 ? `${_t(e / 1024, 1)}KB/s` : `${_t(e / 1048576, 1)}MB/s`;
      } }, { key: "_createCosOptionsWeb", value(e){
        const t = e.file.files[0].name, n = t.slice(t.lastIndexOf(".")), o = this._genFileName("".concat(We(999999)).concat(n)); return { files: [{ Bucket: "".concat(this.bucketName, "-").concat(this.appid), Region: this.region, Key: "".concat(this.directory, "/").concat(o), Body: e.file.files[0] }], SliceSize: 1048576, onProgress(t){
          if("function" == typeof e.onProgress){
            try {
              e.onProgress(t.percent);
            }
            catch(n){
              Ne.warn("onProgress callback error:", n);
            }
          }
        }, onFileFinish(e, t, n){} };
      } }, { key: "_createCosOptionsWXMiniApp", value(e){
        const t = this._genFileName(e.file.name), n = e.file.url; return { Bucket: "".concat(this.bucketName, "-").concat(this.appid), Region: this.region, Key: "".concat(this.directory, "/").concat(t), FilePath: n, onProgress(t){
          if(Ne.log(JSON.stringify(t)), "function" == typeof e.onProgress){
            try {
              e.onProgress(t.percent);
            }
            catch(n){
              Ne.warn("onProgress callback error:", n);
            }
          }
        } };
      } }, { key: "_createCosOptionsPreSigUrl", value(e){
        let t = this, n = "", o = "", a = 0; if(X){
          n = this._genFileName(e.file.name), o = e.file.url, a = 1;
        }
        else {
          const s = e.file.files[0].name, r = s.slice(s.lastIndexOf(".")); n = this._genFileName("".concat(We(999999)).concat(r)), o = e.file.files[0], a = 0;
        } return this._getCosPreSigUrl({ fileType: this.uploadFileType, fileName: n, uploadMethod: a, duration: this.duration }).then(a => {
          const s = a.uploadUrl, r = a.downloadUrl; return { url: s, fileType: t.uploadFileType, fileName: n, resources: o, downloadUrl: r, onProgress(t){
            if("function" == typeof e.onProgress){
              try {
                e.onProgress(t.percent);
              }
              catch(n){
                Ne.warn("onProgress callback error:", n), Ne.error(n);
              }
            }
          } };
        });
      } }, { key: "_genFileName", value(e){
        return "".concat(lt(), "-").concat(e);
      } }, { key: "_setUploadFileType", value(e){
        this.uploadFileType = e;
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset"));
      } }]), a;
    }(nn), wi = ["downloadKey", "pbDownloadKey", "messageList"], Ui = function(){
      function e(t){
        o(this, e), this._className = "MergerMessageHandler", this._messageModule = t;
      } return s(e, [{ key: "uploadMergerMessage", value(e, t){
        const n = this; Ne.debug("".concat(this._className, ".uploadMergerMessage message:"), e, "messageBytes:".concat(t)); const o = e.payload.messageList, a = o.length, s = new qa(us); return this._messageModule.request({ protocolName: lo, requestData: { messageList: o } }).then(e => {
          Ne.debug("".concat(n._className, ".uploadMergerMessage ok. response:"), e.data); const o = e.data, r = o.pbDownloadKey, i = o.downloadKey, u = { pbDownloadKey: r, downloadKey: i, messageNumber: a }; return s.setNetworkType(n._messageModule.getNetworkType()).setMessage("".concat(a, "-").concat(t, "-").concat(i)).end(), u;
        }).catch(e => {
          throw Ne.warn("".concat(n._className, ".uploadMergerMessage failed. error:"), e), n._messageModule.probeNetwork().then(t => {
            const n = m(t, 2), o = n[0], a = n[1]; s.setError(e, o, a).end();
          }), e;
        });
      } }, { key: "downloadMergerMessage", value(e){
        const n = this; Ne.debug("".concat(this._className, ".downloadMergerMessage message:"), e); const o = e.payload.downloadKey, a = new qa(cs); return a.setMessage("downloadKey:".concat(o)), this._messageModule.request({ protocolName: po, requestData: { downloadKey: o } }).then(o => {
          if(Ne.debug("".concat(n._className, ".downloadMergerMessage ok. response:"), o.data), qe(e.clearElement)){
            const s = e.payload, r = (s.downloadKey, s.pbDownloadKey, s.messageList, g(s, wi)); e.clearElement(), e.setElement({ type: e.type, content: t({ messageList: o.data.messageList }, r) });
          }
          else {
            const i = []; o.data.messageList.forEach(e => {
              if(!vt(e)){
                const t = new Sr(e); i.push(t);
              }
            }), e.payload.messageList = i, e.payload.downloadKey = "", e.payload.pbDownloadKey = "";
          } return a.setNetworkType(n._messageModule.getNetworkType()).end(), e;
        }).catch(e => {
          throw Ne.warn("".concat(n._className, ".downloadMergerMessage failed. key:").concat(o, " error:"), e), n._messageModule.probeNetwork().then(t => {
            const n = m(t, 2), o = n[0], s = n[1]; a.setError(e, o, s).end();
          }), e;
        });
      } }, { key: "createMergerMessagePack", value(e, t, n){
        return e.conversationType === S.CONV_C2C ? this._createC2CMergerMessagePack(e, t, n) : this._createGroupMergerMessagePack(e, t, n);
      } }, { key: "_createC2CMergerMessagePack", value(e, t, n){
        let o = null; t && (t.offlinePushInfo && (o = t.offlinePushInfo), !0 === t.onlineUserOnly && (o ? o.disablePush = !0 : o = { disablePush: !0 })); let a = ""; Ge(e.cloudCustomData) && e.cloudCustomData.length > 0 && (a = e.cloudCustomData); const s = n.pbDownloadKey, r = n.downloadKey, i = n.messageNumber, u = e.payload, c = u.title, l = u.abstractList, d = u.compatibleText, p = this._messageModule.getModule(wt); return { protocolName: cn, tjgID: this._messageModule.generateTjgID(e), requestData: { fromAccount: this._messageModule.getMyUserID(), toAccount: e.to, msgBody: [{ msgType: e.type, msgContent: { pbDownloadKey: s, downloadKey: r, title: c, abstractList: l, compatibleText: d, messageNumber: i } }], cloudCustomData: a, msgSeq: e.sequence, msgRandom: e.random, msgLifeTime: p && p.isOnlineMessage(e, t) ? 0 : void 0, offlinePushInfo: o ? { pushFlag: !0 === o.disablePush ? 1 : 0, title: o.title || "", desc: o.description || "", ext: o.extension || "", apnsInfo: { badgeMode: !0 === o.ignoreIOSBadge ? 1 : 0 }, androidInfo: { OPPOChannelID: o.androidOPPOChannelID || "" } } : void 0 } };
      } }, { key: "_createGroupMergerMessagePack", value(e, t, n){
        let o = null; t && t.offlinePushInfo && (o = t.offlinePushInfo); let a = ""; Ge(e.cloudCustomData) && e.cloudCustomData.length > 0 && (a = e.cloudCustomData); const s = n.pbDownloadKey, r = n.downloadKey, i = n.messageNumber, u = e.payload, c = u.title, l = u.abstractList, d = u.compatibleText, p = this._messageModule.getModule(Ut); return { protocolName: ln, tjgID: this._messageModule.generateTjgID(e), requestData: { fromAccount: this._messageModule.getMyUserID(), groupID: e.to, msgBody: [{ msgType: e.type, msgContent: { pbDownloadKey: s, downloadKey: r, title: c, abstractList: l, compatibleText: d, messageNumber: i } }], random: e.random, priority: e.priority, clientSequence: e.clientSequence, groupAtInfo: void 0, cloudCustomData: a, onlineOnlyFlag: p && p.isOnlineMessage(e, t) ? 1 : 0, offlinePushInfo: o ? { pushFlag: !0 === o.disablePush ? 1 : 0, title: o.title || "", desc: o.description || "", ext: o.extension || "", apnsInfo: { badgeMode: !0 === o.ignoreIOSBadge ? 1 : 0 }, androidInfo: { OPPOChannelID: o.androidOPPOChannelID || "" } } : void 0 } };
      } }]), e;
    }(), Fi = { ERR_SVR_COMM_SENSITIVE_TEXT: 80001, ERR_SVR_COMM_BODY_SIZE_LIMIT: 80002, ERR_SVR_MSG_PKG_PARSE_FAILED: 20001, ERR_SVR_MSG_INTERNAL_AUTH_FAILED: 20002, ERR_SVR_MSG_INVALID_ID: 20003, ERR_SVR_MSG_PUSH_DENY: 20006, ERR_SVR_MSG_IN_PEER_BLACKLIST: 20007, ERR_SVR_MSG_BOTH_NOT_FRIEND: 20009, ERR_SVR_MSG_NOT_PEER_FRIEND: 20010, ERR_SVR_MSG_NOT_SELF_FRIEND: 20011, ERR_SVR_MSG_SHUTUP_DENY: 20012, ERR_SVR_GROUP_INVALID_PARAMETERS: 10004, ERR_SVR_GROUP_PERMISSION_DENY: 10007, ERR_SVR_GROUP_NOT_FOUND: 10010, ERR_SVR_GROUP_INVALID_GROUPID: 10015, ERR_SVR_GROUP_REJECT_FROM_THIRDPARTY: 10016, ERR_SVR_GROUP_SHUTUP_DENY: 10017, MESSAGE_SEND_FAIL: 2100 }, qi = [_o.MESSAGE_ONPROGRESS_FUNCTION_ERROR, _o.MESSAGE_IMAGE_SELECT_FILE_FIRST, _o.MESSAGE_IMAGE_TYPES_LIMIT, _o.MESSAGE_FILE_IS_EMPTY, _o.MESSAGE_IMAGE_SIZE_LIMIT, _o.MESSAGE_FILE_SELECT_FILE_FIRST, _o.MESSAGE_FILE_SIZE_LIMIT, _o.MESSAGE_VIDEO_SIZE_LIMIT, _o.MESSAGE_VIDEO_TYPES_LIMIT, _o.MESSAGE_AUDIO_UPLOAD_FAIL, _o.MESSAGE_AUDIO_SIZE_LIMIT, _o.COS_UNDETECTED], Vi = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this, e))._className = "MessageModule", a._messageOptionsMap = new Map(), a._mergerMessageHandler = new Ui(h(a)), a;
      } return s(n, [{ key: "createTextMessage", value(e){
        const t = this.getMyUserID(); e.currentUser = t; const n = new Nr(e), o = "string" == typeof e.payload ? e.payload : e.payload.text, a = new ir({ text: o }), s = this._getNickAndAvatarByUserID(t); return n.setElement(a), n.setNickAndAvatar(s), n.setNameCard(this._getNameCardByGroupID(n)), n;
      } }, { key: "createImageMessage", value(e){
        const t = this.getMyUserID(); e.currentUser = t; const n = new Nr(e); if(X){
          const o = e.payload.file; if(Oe(o)){
            return void Ne.warn("小程序环境下调用 createImageMessage 接口时，payload.file 不支持传入 File 对象");
          } const a = o.tempFilePaths[0], s = { url: a, name: a.slice(a.lastIndexOf("/") + 1), size: o.tempFiles && o.tempFiles[0].size || 1, type: a.slice(a.lastIndexOf(".") + 1).toLowerCase() }; e.payload.file = s;
        }
        else if(Q){
          if(Oe(e.payload.file)){
            const r = e.payload.file; e.payload.file = { files: [r] };
          }
          else if(Pe(e.payload.file) && "undefined" != typeof uni){
            const i = e.payload.file.tempFiles[0]; e.payload.file = { files: [i] };
          }
        } const u = new _r({ imageFormat: ur.IMAGE_FORMAT.UNKNOWN, uuid: this._generateUUID(), file: e.payload.file }), c = this._getNickAndAvatarByUserID(t); return n.setElement(u), n.setNickAndAvatar(c), n.setNameCard(this._getNameCardByGroupID(n)), this._messageOptionsMap.set(n.ID, e), n;
      } }, { key: "createAudioMessage", value(e){
        if(X){
          const t = e.payload.file; if(X){
            const n = { url: t.tempFilePath, name: t.tempFilePath.slice(t.tempFilePath.lastIndexOf("/") + 1), size: t.fileSize, second: parseInt(t.duration) / 1e3, type: t.tempFilePath.slice(t.tempFilePath.lastIndexOf(".") + 1).toLowerCase() }; e.payload.file = n;
          } const o = this.getMyUserID(); e.currentUser = o; const a = new Nr(e), s = new mr({ second: Math.floor(t.duration / 1e3), size: t.fileSize, url: t.tempFilePath, uuid: this._generateUUID() }), r = this._getNickAndAvatarByUserID(o); return a.setElement(s), a.setNickAndAvatar(r), a.setNameCard(this._getNameCardByGroupID(a)), this._messageOptionsMap.set(a.ID, e), a;
        }Ne.warn("createAudioMessage 目前只支持小程序环境下发语音消息");
      } }, { key: "createVideoMessage", value(e){
        const t = this.getMyUserID(); e.currentUser = t, e.payload.file.thumbUrl = "https://web.sdk.qcloud.com/im/assets/images/transparent.png", e.payload.file.thumbSize = 1668; const n = {}; if(X){
          if(z){
            return void Ne.warn("createVideoMessage 不支持在支付宝小程序环境下使用");
          }if(Oe(e.payload.file)){
            return void Ne.warn("小程序环境下调用 createVideoMessage 接口时，payload.file 不支持传入 File 对象");
          } const o = e.payload.file; n.url = o.tempFilePath, n.name = o.tempFilePath.slice(o.tempFilePath.lastIndexOf("/") + 1), n.size = o.size, n.second = o.duration, n.type = o.tempFilePath.slice(o.tempFilePath.lastIndexOf(".") + 1).toLowerCase();
        }
        else if(Q){
          if(Oe(e.payload.file)){
            const a = e.payload.file; e.payload.file.files = [a];
          }
          else if(Pe(e.payload.file) && "undefined" != typeof uni){
            const s = e.payload.file.tempFile; e.payload.file.files = [s];
          } const r = e.payload.file; n.url = window.URL.createObjectURL(r.files[0]), n.name = r.files[0].name, n.size = r.files[0].size, n.second = r.files[0].duration || 0, n.type = r.files[0].type.split("/")[1];
        }e.payload.file.videoFile = n; const i = new Nr(e), u = new Cr({ videoFormat: n.type, videoSecond: _t(n.second, 0), videoSize: n.size, remoteVideoUrl: "", videoUrl: n.url, videoUUID: this._generateUUID(), thumbUUID: this._generateUUID(), thumbWidth: e.payload.file.width || 200, thumbHeight: e.payload.file.height || 200, thumbUrl: e.payload.file.thumbUrl, thumbSize: e.payload.file.thumbSize, thumbFormat: e.payload.file.thumbUrl.slice(e.payload.file.thumbUrl.lastIndexOf(".") + 1).toLowerCase() }), c = this._getNickAndAvatarByUserID(t); return i.setElement(u), i.setNickAndAvatar(c), i.setNameCard(this._getNameCardByGroupID(i)), this._messageOptionsMap.set(i.ID, e), i;
      } }, { key: "createCustomMessage", value(e){
        const t = this.getMyUserID(); e.currentUser = t; const n = new Nr(e), o = new Dr({ data: e.payload.data, description: e.payload.description, extension: e.payload.extension }), a = this._getNickAndAvatarByUserID(t); return n.setElement(o), n.setNickAndAvatar(a), n.setNameCard(this._getNameCardByGroupID(n)), n;
      } }, { key: "createFaceMessage", value(e){
        const t = this.getMyUserID(); e.currentUser = t; const n = new Nr(e), o = new fr(e.payload), a = this._getNickAndAvatarByUserID(t); return n.setElement(o), n.setNickAndAvatar(a), n.setNameCard(this._getNameCardByGroupID(n)), n;
      } }, { key: "createMergerMessage", value(e){
        const t = this.getMyUserID(); e.currentUser = t; const n = this._getNickAndAvatarByUserID(t), o = new Nr(e), a = new Er(e.payload); return o.setElement(a), o.setNickAndAvatar(n), o.setNameCard(this._getNameCardByGroupID(o)), o.setRelayFlag(!0), o;
      } }, { key: "createForwardMessage", value(e){
        const t = e.to, n = e.conversationType, o = e.priority, a = e.payload, s = this.getMyUserID(), r = this._getNickAndAvatarByUserID(s); if(a.type === S.MSG_GRP_TIP){
          return Vr(new wr({ code: _o.MESSAGE_FORWARD_TYPE_INVALID, message: $o }));
        } const i = { to: t, conversationType: n, conversationID: "".concat(n).concat(t), priority: o, isPlaceMessage: 0, status: Dt.UNSEND, currentUser: s, cloudCustomData: e.cloudCustomData || a.cloudCustomData || "" }, u = new Nr(i); return u.setElement(a.getElements()[0]), u.setNickAndAvatar(r), u.setNameCard(this._getNameCardByGroupID(a)), u.setRelayFlag(!0), u;
      } }, { key: "downloadMergerMessage", value(e){
        return this._mergerMessageHandler.downloadMergerMessage(e);
      } }, { key: "createFileMessage", value(e){
        if(!X){
          if(Q){
            if(Oe(e.payload.file)){
              const t = e.payload.file; e.payload.file = { files: [t] };
            }
            else if(Pe(e.payload.file) && "undefined" != typeof uni){
              const n = e.payload.file.tempFiles[0]; e.payload.file = { files: [n] };
            }
          } const o = this.getMyUserID(); e.currentUser = o; const a = new Nr(e), s = new Tr({ uuid: this._generateUUID(), file: e.payload.file }), r = this._getNickAndAvatarByUserID(o); return a.setElement(s), a.setNickAndAvatar(r), a.setNameCard(this._getNameCardByGroupID(a)), this._messageOptionsMap.set(a.ID, e), a;
        }Ne.warn("小程序目前不支持选择文件， createFileMessage 接口不可用！");
      } }, { key: "createLocationMessage", value(e){
        const t = this.getMyUserID(); e.currentUser = t; const n = new Nr(e), o = new kr(e.payload), a = this._getNickAndAvatarByUserID(t); return n.setElement(o), n.setNickAndAvatar(a), n.setNameCard(this._getNameCardByGroupID(n)), this._messageOptionsMap.set(n.ID, e), n;
      } }, { key: "_onCannotFindModule", value(){
        return Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "sendMessageInstance", value(e, t){
        let n, o = this, a = null; switch(e.conversationType){
          case S.CONV_C2C: if(!(a = this.getModule(wt))){
            return this._onCannotFindModule();
          } break; case S.CONV_GROUP: if(!(a = this.getModule(Ut))){
            return this._onCannotFindModule();
          } break; default: return Vr({ code: _o.MESSAGE_SEND_INVALID_CONVERSATION_TYPE, message: Eo });
        } const s = this.getModule(Yt), r = this.getModule(Ut); return s.upload(e).then(() => {
          o._getSendMessageSpecifiedKey(e) === La && o.getModule(tn).addSuccessCount(Oa); return r.guardForAVChatRoom(e).then(() => {
            if(!e.isSendable()){
              return Vr({ code: _o.MESSAGE_FILE_URL_IS_EMPTY, message: Bo });
            } o._addSendMessageTotalCount(e), n = Date.now(); const s = function(e){
              let t = "utf-8"; Q && document && (t = document.charset.toLowerCase()); let n, o, a = 0; if(o = e.length, "utf-8" === t || "utf8" === t){
                for(let s = 0; s < o; s++){
                  (n = e.codePointAt(s)) <= 127 ? a += 1 : n <= 2047 ? a += 2 : n <= 65535 ? a += 3 : (a += 4, s++);
                }
              }
              else if("utf-16" === t || "utf16" === t){
                for(let r = 0; r < o; r++){
                  (n = e.codePointAt(r)) <= 65535 ? a += 2 : (a += 4, r++);
                }
              }
              else {
                a = e.replace(/[^\x00-\xff]/g, "aa").length;
              } return a;
            }(JSON.stringify(e)); return e.type === S.MSG_MERGER && s > 7e3 ? o._mergerMessageHandler.uploadMergerMessage(e, s).then(n => {
              const a = o._mergerMessageHandler.createMergerMessagePack(e, t, n); return o.request(a);
            }) : (o.getModule(Vt).setMessageRandom(e), e.conversationType === S.CONV_C2C || e.conversationType === S.CONV_GROUP ? a.sendMessage(e, t) : void 0);
          }).then(s => {
            const r = s.data, i = r.time, u = r.sequence; o._addSendMessageSuccessCount(e, n), o._messageOptionsMap.delete(e.ID); const c = o.getModule(Vt); e.status = Dt.SUCCESS, e.time = i; let l = !1; if(e.conversationType === S.CONV_GROUP){
              e.sequence = u, e.generateMessageID(o.getMyUserID());
            }
            else if(e.conversationType === S.CONV_C2C){
              const d = c.getLatestMessageSentByMe(e.conversationID); if(d){
                const p = d.nick, g = d.avatar; p === e.nick && g === e.avatar || (l = !0);
              }
            } return c.appendToMessageList(e), l && c.modifyMessageSentByMe({ conversationID: e.conversationID, latestNick: e.nick, latestAvatar: e.avatar }), a.isOnlineMessage(e, t) ? e.setOnlineOnlyFlag(!0) : c.onMessageSent({ conversationOptionsList: [{ conversationID: e.conversationID, unreadCount: 0, type: e.conversationType, subType: e.conversationSubType, lastMessage: e }] }), e.getRelayFlag() || "TIMImageElem" !== e.type || gt(e.payload.imageInfoArray), Lr({ message: e });
          });
        }).catch(t => o._onSendMessageFailed(e, t));
      } }, { key: "_onSendMessageFailed", value(e, t){
        e.status = Dt.FAIL, this.getModule(Vt).deleteMessageRandom(e), this._addSendMessageFailCountOnUser(e, t); const n = new qa(Za); return n.setMessage("tjg_id:".concat(this.generateTjgID(e), " type:").concat(e.type, " from:").concat(e.from, " to:").concat(e.to)), this.probeNetwork().then(e => {
          const o = m(e, 2), a = o[0], s = o[1]; n.setError(t, a, s).end();
        }), Ne.error("".concat(this._className, "._onSendMessageFailed error:"), t), Vr(new wr({ code: t && t.code ? t.code : _o.MESSAGE_SEND_FAIL, message: t && t.message ? t.message : ko, data: { message: e } }));
      } }, { key: "_getSendMessageSpecifiedKey", value(e){
        if([S.MSG_IMAGE, S.MSG_AUDIO, S.MSG_VIDEO, S.MSG_FILE].includes(e.type)){
          return La;
        }if(e.conversationType === S.CONV_C2C){
          return Ea;
        }if(e.conversationType === S.CONV_GROUP){
          const t = this.getModule(Ut).getLocalGroupProfile(e.to); if(!t){
            return;
          } const n = t.type; return st(n) ? Na : Aa;
        }
      } }, { key: "_addSendMessageTotalCount", value(e){
        const t = this._getSendMessageSpecifiedKey(e); t && this.getModule(tn).addTotalCount(t);
      } }, { key: "_addSendMessageSuccessCount", value(e, t){
        const n = Math.abs(Date.now() - t), o = this._getSendMessageSpecifiedKey(e); if(o){
          const a = this.getModule(tn); a.addSuccessCount(o), a.addCost(o, n);
        }
      } }, { key: "_addSendMessageFailCountOnUser", value(e, t){
        let n, o, a = t.code, s = void 0 === a ? -1 : a, r = this.getModule(tn), i = this._getSendMessageSpecifiedKey(e); i === La && (n = s, o = !1, qi.includes(n) && (o = !0), o) ? r.addFailedCountOfUserSide(Oa) : function(e){
          let t = !1; return Object.values(Fi).includes(e) && (t = !0), (e >= 120001 && e <= 13e4 || e >= 10100 && e <= 10200) && (t = !0), t;
        }(s) && i && r.addFailedCountOfUserSide(i);
      } }, { key: "resendMessage", value(e){
        return e.isResend = !0, e.status = Dt.UNSEND, this.sendMessageInstance(e);
      } }, { key: "revokeMessage", value(e){
        let t = this, n = null; if(e.conversationType === S.CONV_C2C){
          if(!(n = this.getModule(wt))){
            return this._onCannotFindModule();
          }
        }
        else if(e.conversationType === S.CONV_GROUP && !(n = this.getModule(Ut))){
          return this._onCannotFindModule();
        } const o = new qa(ns); return o.setMessage("tjg_id:".concat(this.generateTjgID(e), " type:").concat(e.type, " from:").concat(e.from, " to:").concat(e.to)), n.revokeMessage(e).then(n => {
          const a = n.data.recallRetList; if(!vt(a) && 0 !== a[0].retCode){
            const s = new wr({ code: a[0].retCode, message: Pr[a[0].retCode] || Lo, data: { message: e } }); return o.setCode(s.code).setMoreMessage(s.message).end(), Vr(s);
          } return Ne.info("".concat(t._className, ".revokeMessage ok. ID:").concat(e.ID)), e.isRevoked = !0, o.end(), t.getModule(Vt).onMessageRevoked([e]), Lr({ message: e });
        }).catch(n => {
          t.probeNetwork().then(e => {
            const t = m(e, 2), a = t[0], s = t[1]; o.setError(n, a, s).end();
          }); const a = new wr({ code: n && n.code ? n.code : _o.MESSAGE_REVOKE_FAIL, message: n && n.message ? n.message : Lo, data: { message: e } }); return Ne.warn("".concat(t._className, ".revokeMessage failed. error:"), n), Vr(a);
        });
      } }, { key: "deleteMessage", value(e){
        let t = this, n = null, o = e[0], a = o.conversationID, s = "", r = [], i = []; if(o.conversationType === S.CONV_C2C ? (n = this.getModule(wt), s = a.replace(S.CONV_C2C, ""), e.forEach(e => {
          e && e.status === Dt.SUCCESS && e.conversationID === a && (e.getOnlineOnlyFlag() || r.push("".concat(e.sequence, "_").concat(e.random, "_").concat(e.time)), i.push(e));
        })) : o.conversationType === S.CONV_GROUP && (n = this.getModule(Ut), s = a.replace(S.CONV_GROUP, ""), e.forEach(e => {
          e && e.status === Dt.SUCCESS && e.conversationID === a && (e.getOnlineOnlyFlag() || r.push("".concat(e.sequence)), i.push(e));
        })), !n){
          return this._onCannotFindModule();
        }if(0 === r.length){
          return this._onMessageDeleted(i);
        } r.length > 30 && (r = r.slice(0, 30), i = i.slice(0, 30)); const u = new qa(os); return u.setMessage("to:".concat(s, " count:").concat(r.length)), n.deleteMessage({ to: s, keyList: r }).then(e => (u.end(), Ne.info("".concat(t._className, ".deleteMessage ok")), t._onMessageDeleted(i))).catch(e => {
          t.probeNetwork().then(t => {
            const n = m(t, 2), o = n[0], a = n[1]; u.setError(e, o, a).end();
          }), Ne.warn("".concat(t._className, ".deleteMessage failed. error:"), e); const n = new wr({ code: e && e.code ? e.code : _o.MESSAGE_DELETE_FAIL, message: e && e.message ? e.message : Oo }); return Vr(n);
        });
      } }, { key: "_onMessageDeleted", value(e){
        return this.getModule(Vt).onMessageDeleted(e), qr({ messageList: e });
      } }, { key: "_generateUUID", value(){
        const e = this.getModule(Kt); return "".concat(e.getSDKAppID(), "-").concat(e.getUserID(), "-").concat(function(){
          for(var e = "", t = 32; t > 0; --t){
            e += ze[Math.floor(Math.random() * Je)];
          } return e;
        }());
      } }, { key: "getMessageOptionByID", value(e){
        return this._messageOptionsMap.get(e);
      } }, { key: "_getNickAndAvatarByUserID", value(e){
        return this.getModule(Pt).getNickAndAvatarByUserID(e);
      } }, { key: "_getNameCardByGroupID", value(e){
        if(e.conversationType === S.CONV_GROUP){
          const t = this.getModule(Ut); if(t){
            return t.getMyNameCardByGroupID(e.to);
          }
        } return "";
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this._messageOptionsMap.clear();
      } }]), n;
    }(nn), Ki = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this, e))._className = "PluginModule", a.plugins = {}, a;
      } return s(n, [{ key: "registerPlugin", value(e){
        const t = this; Object.keys(e).forEach(n => {
          t.plugins[n] = e[n];
        }), new qa(ja).setMessage("key=".concat(Object.keys(e))).end();
      } }, { key: "getPlugin", value(e){
        return this.plugins[e];
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset"));
      } }]), n;
    }(nn), xi = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this, e))._className = "SyncUnreadMessageModule", a._cookie = "", a._onlineSyncFlag = !1, a.getInnerEmitterInstance().on(Br.CONTEXT_A2KEY_AND_TINYID_UPDATED, a._onLoginSuccess, h(a)), a;
      } return s(n, [{ key: "_onLoginSuccess", value(e){
        this._startSync({ cookie: this._cookie, syncFlag: 0, isOnlineSync: 0 });
      } }, { key: "_startSync", value(e){
        const t = this, n = e.cookie, o = e.syncFlag, a = e.isOnlineSync; Ne.log("".concat(this._className, "._startSync cookie:").concat(n, " syncFlag:").concat(o, " isOnlineSync:").concat(a)), this.request({ protocolName: rn, requestData: { cookie: n, syncFlag: o, isOnlineSync: a } }).then(e => {
          const n = e.data, o = n.cookie, a = n.syncFlag, s = n.eventArray, r = n.messageList, i = n.C2CRemainingUnreadList; if(t._cookie = o, vt(o)){}
          else if(0 === a || 1 === a){
            if(s){
              t.getModule(zt).onMessage({ head: {}, body: { eventArray: s, isInstantMessage: t._onlineSyncFlag, isSyncingEnded: !1 } });
            }t.getModule(wt).onNewC2CMessage({ dataList: r, isInstantMessage: !1, C2CRemainingUnreadList: i }), t._startSync({ cookie: o, syncFlag: a, isOnlineSync: 0 });
          }
          else if(2 === a){
            if(s){
              t.getModule(zt).onMessage({ head: {}, body: { eventArray: s, isInstantMessage: t._onlineSyncFlag, isSyncingEnded: !0 } });
            }t.getModule(wt).onNewC2CMessage({ dataList: r, isInstantMessage: t._onlineSyncFlag, C2CRemainingUnreadList: i });
          }
        }).catch(e => {
          Ne.error("".concat(t._className, "._startSync failed. error:"), e);
        });
      } }, { key: "startOnlineSync", value(){
        Ne.log("".concat(this._className, ".startOnlineSync")), this._onlineSyncFlag = !0, this._startSync({ cookie: this._cookie, syncFlag: 0, isOnlineSync: 1 });
      } }, { key: "startSyncOnReconnected", value(){
        Ne.log("".concat(this._className, ".startSyncOnReconnected.")), this._onlineSyncFlag = !0, this._startSync({ cookie: this._cookie, syncFlag: 0, isOnlineSync: 0 });
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this._onlineSyncFlag = !1, this._cookie = "";
      } }]), n;
    }(nn), Bi = { request: { toAccount: "To_Account", fromAccount: "From_Account", to: "To_Account", from: "From_Account", groupID: "GroupId", groupAtUserID: "GroupAt_Account", extension: "Ext", data: "Data", description: "Desc", elements: "MsgBody", sizeType: "Type", downloadFlag: "Download_Flag", thumbUUID: "ThumbUUID", videoUUID: "VideoUUID", remoteAudioUrl: "Url", remoteVideoUrl: "VideoUrl", videoUrl: "", imageUrl: "URL", fileUrl: "Url", uuid: "UUID", priority: "MsgPriority", receiverUserID: "To_Account", receiverGroupID: "GroupId", messageSender: "SenderId", messageReceiver: "ReceiverId", nick: "From_AccountNick", avatar: "From_AccountHeadurl", messageNumber: "MsgNum", pbDownloadKey: "PbMsgKey", downloadKey: "JsonMsgKey", applicationType: "PendencyType", userIDList: "To_Account", groupNameList: "GroupName", userID: "To_Account", groupAttributeList: "GroupAttr", mainSequence: "AttrMainSeq", avChatRoomKey: "BytesKey", attributeControl: "AttrControl", sequence: "seq" }, response: { MsgPriority: "priority", ThumbUUID: "thumbUUID", VideoUUID: "videoUUID", Download_Flag: "downloadFlag", GroupId: "groupID", Member_Account: "userID", MsgList: "messageList", SyncFlag: "syncFlag", To_Account: "to", From_Account: "from", MsgSeq: "sequence", MsgRandom: "random", MsgTime: "time", MsgTimeStamp: "time", MsgContent: "content", MsgBody: "elements", From_AccountNick: "nick", From_AccountHeadurl: "avatar", GroupWithdrawInfoArray: "revokedInfos", GroupReadInfoArray: "groupMessageReadNotice", LastReadMsgSeq: "lastMessageSeq", WithdrawC2cMsgNotify: "c2cMessageRevokedNotify", C2cWithdrawInfoArray: "revokedInfos", C2cReadedReceipt: "c2cMessageReadReceipt", ReadC2cMsgNotify: "c2cMessageReadNotice", LastReadTime: "peerReadTime", MsgRand: "random", MsgType: "type", MsgShow: "messageShow", NextMsgSeq: "nextMessageSeq", FaceUrl: "avatar", ProfileDataMod: "profileModify", Profile_Account: "userID", ValueBytes: "value", ValueNum: "value", NoticeSeq: "noticeSequence", NotifySeq: "notifySequence", MsgFrom_AccountExtraInfo: "messageFromAccountExtraInformation", Operator_Account: "operatorID", OpType: "operationType", ReportType: "operationType", UserId: "userID", User_Account: "userID", List_Account: "userIDList", MsgOperatorMemberExtraInfo: "operatorInfo", MsgMemberExtraInfo: "memberInfoList", ImageUrl: "avatar", NickName: "nick", MsgGroupNewInfo: "newGroupProfile", MsgAppDefinedData: "groupCustomField", Owner_Account: "ownerID", GroupFaceUrl: "avatar", GroupIntroduction: "introduction", GroupNotification: "notification", GroupApplyJoinOption: "joinOption", MsgKey: "messageKey", GroupInfo: "groupProfile", ShutupTime: "muteTime", Desc: "description", Ext: "extension", GroupAt_Account: "groupAtUserID", MsgNum: "messageNumber", PbMsgKey: "pbDownloadKey", JsonMsgKey: "downloadKey", MsgModifiedFlag: "isModified", PendencyItem: "applicationItem", PendencyType: "applicationType", AddTime: "time", AddSource: "source", AddWording: "wording", ProfileImImage: "avatar", PendencyAdd: "friendApplicationAdded", FrienPencydDel_Account: "friendApplicationDeletedUserIDList", Peer_Account: "userID", GroupAttr: "groupAttributeList", GroupAttrAry: "groupAttributeList", AttrMainSeq: "mainSequence", seq: "sequence", GroupAttrOption: "groupAttributeOption", BytesChangedKeys: "changedKeyList", GroupAttrInfo: "groupAttributeList", GroupAttrSeq: "mainSequence", PushChangedAttrValFlag: "hasChangedAttributeInfo", SubKeySeq: "sequence", Val: "value", MsgGroupFromCardName: "senderNameCard", MsgGroupFromNickName: "senderNick", C2cNick: "peerNick", C2cImage: "peerAvatar" }, ignoreKeyWord: ["C2C", "ID", "USP"] }; function Hi(e, t){
    if("string" != typeof e && !Array.isArray(e)){
      throw new TypeError("Expected the input to be `string | string[]`");
    } t = { pascalCase: !1, ... t }; let n; return 0 === (e = Array.isArray(e) ? e.map(e => e.trim()).filter(e => e.length).join("-") : e.trim()).length ? "" : 1 === e.length ? t.pascalCase ? e.toUpperCase() : e.toLowerCase() : (e !== e.toLowerCase() && (e = ji(e)), e = e.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (e, t) => t.toUpperCase()).replace(/\d+(\w|$)/g, e => e.toUpperCase()), n = e, t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n);
  } var ji = function(e){
    for(let t = !1, n = !1, o = !1, a = 0; a < e.length; a++){
      const s = e[a]; t && /[a-zA-Z]/.test(s) && s.toUpperCase() === s ? (e = `${e.slice(0, a)}-${e.slice(a)}`, t = !1, o = n, n = !0, a++) : n && o && /[a-zA-Z]/.test(s) && s.toLowerCase() === s ? (e = `${e.slice(0, a - 1)}-${e.slice(a - 1)}`, o = n, n = !1, t = !0) : (t = s.toLowerCase() === s && s.toUpperCase() !== s, o = n, n = s.toUpperCase() === s && s.toLowerCase() !== s);
    } return e;
  }; function Yi(e, t){
    let n = 0; return function e(t, o){
      if(++n > 100){
        return n--, t;
      }if(we(t)){
        const a = t.map(t => be(t) ? e(t, o) : t); return n--, a;
      }if(be(t)){
        let s = (r = t, i = function(e, t){
          if(!xe(t)){
            return !1;
          }if((a = t) !== Hi(a)){
            for(let n = 0; n < Bi.ignoreKeyWord.length && !t.includes(Bi.ignoreKeyWord[n]); n++){}
          } let a; return Ue(o[t]) ? function(e){
            return "OPPOChannelID" === e ? e : e[0].toUpperCase() + Hi(e).slice(1);
          }(t) : o[t];
        }, u = Object.create(null), Object.keys(r).forEach(e => {
          const t = i(r[e], e); t && (u[t] = r[e]);
        }), u); return s = ct(s, (t, n) => we(t) || be(t) ? e(t, o) : t), n--, s;
      } let r, i, u;
    }(e, t);
  } function $i(e, t){
    if(we(e)){
      return e.map(e => be(e) ? $i(e, t) : e);
    }if(be(e)){
      let n = (o = e, a = function(e, n){
        return Ue(t[n]) ? Hi(n) : t[n];
      }, s = {}, Object.keys(o).forEach(e => {
        s[a(o[e], e)] = o[e];
      }), s); return n = ct(n, e => we(e) || be(e) ? $i(e, t) : e);
    } let o, a, s;
  } const Wi = function(){
      function e(t){
        o(this, e), this._handler = t; const n = t.getURL(); this._socket = null, this._id = We(), X ? z ? (Z.connectSocket({ url: n, header: { "content-type": "application/json" } }), Z.onSocketClose(this._onClose.bind(this)), Z.onSocketOpen(this._onOpen.bind(this)), Z.onSocketMessage(this._onMessage.bind(this)), Z.onSocketError(this._onError.bind(this))) : (this._socket = Z.connectSocket({ url: n, header: { "content-type": "application/json" }, complete(){} }), this._socket.onClose(this._onClose.bind(this)), this._socket.onOpen(this._onOpen.bind(this)), this._socket.onMessage(this._onMessage.bind(this)), this._socket.onError(this._onError.bind(this))) : Q && (this._socket = new WebSocket(n), this._socket.onopen = this._onOpen.bind(this), this._socket.onmessage = this._onMessage.bind(this), this._socket.onclose = this._onClose.bind(this), this._socket.onerror = this._onError.bind(this));
      } return s(e, [{ key: "getID", value(){
        return this._id;
      } }, { key: "_onOpen", value(){
        this._handler.onOpen({ id: this._id });
      } }, { key: "_onClose", value(e){
        this._handler.onClose({ id: this._id, e });
      } }, { key: "_onMessage", value(e){
        this._handler.onMessage(e);
      } }, { key: "_onError", value(e){
        this._handler.onError({ id: this._id, e });
      } }, { key: "close", value(e){
        if(z){
          return Z.offSocketClose(), Z.offSocketMessage(), Z.offSocketOpen(), Z.offSocketError(), void Z.closeSocket();
        } this._socket && (X ? (this._socket.onClose(() => {}), this._socket.onOpen(() => {}), this._socket.onMessage(() => {}), this._socket.onError(() => {})) : Q && (this._socket.onopen = null, this._socket.onmessage = null, this._socket.onclose = null, this._socket.onerror = null), W ? this._socket.close({ code: e }) : this._socket.close(e), this._socket = null);
      } }, { key: "send", value(e){
        z ? Z.sendSocketMessage({ data: e.data, fail(){
          e.fail && e.requestID && e.fail(e.requestID);
        } }) : this._socket && (X ? this._socket.send({ data: e.data, fail(){
          e.fail && e.requestID && e.fail(e.requestID);
        } }) : Q && this._socket.send(e.data));
      } }]), e;
    }(), zi = 4e3, Ji = 4001, Xi = ["keyMap"], Qi = ["keyMap"], Zi = "connected", eu = "connecting", tu = "disconnected", nu = function(){
      function e(t){
        o(this, e), this._channelModule = t, this._className = "SocketHandler", this._promiseMap = new Map(), this._readyState = tu, this._simpleRequestMap = new Map(), this.MAX_SIZE = 100, this._startSequence = We(), this._startTs = 0, this._reConnectFlag = !1, this._nextPingTs = 0, this._reConnectCount = 0, this.MAX_RECONNECT_COUNT = 3, this._socketID = -1, this._random = 0, this._socket = null, this._url = "", this._onOpenTs = 0, this._setWebsocketHost(), this._initConnection();
      } return s(e, [{ key: "_setWebsocketHost", value(){
        const e = this._channelModule.getModule(Kt).getSDKAppID(); this._channelModule.isOversea() && V.HOST.setCurrent(w), e >= 2e7 && e < 3e7 && V.HOST.setCurrent(U), e >= 3e7 && e < 4e7 && V.HOST.setCurrent(F), e >= 4e7 && e < 5e7 && V.HOST.setCurrent(q);
      } }, { key: "_initConnection", value(){
        Ue(V.HOST.CURRENT.BACKUP) || "" === this._url ? this._url = V.HOST.CURRENT.DEFAULT : this._url === V.HOST.CURRENT.DEFAULT ? this._url = V.HOST.CURRENT.BACKUP : this._url === V.HOST.CURRENT.BACKUP && (this._url = V.HOST.CURRENT.DEFAULT), this._connect(), this._nextPingTs = 0;
      } }, { key: "onCheckTimer", value(e){
        0 == e % 1 && this._checkPromiseMap();
      } }, { key: "_checkPromiseMap", value(){
        const e = this; 0 !== this._promiseMap.size && this._promiseMap.forEach((t, n) => {
          const o = t.reject, a = t.timestamp; Date.now() - a >= 15e3 && (Ne.log("".concat(e._className, "._checkPromiseMap request timeout, delete requestID:").concat(n)), e._promiseMap.delete(n), o(new wr({ code: _o.NETWORK_TIMEOUT, message: Ma })), e._channelModule.onRequestTimeout(n));
        });
      } }, { key: "onOpen", value(e){
        this._onOpenTs = Date.now(); const t = e.id; this._socketID = t, new qa($a).setMessage(n).setMessage("socketID:".concat(t)).end(); var n = Date.now() - this._startTs; Ne.log("".concat(this._className, "._onOpen cost ").concat(n, " ms. socketID:").concat(t)), e.id === this._socketID && (this._readyState = Zi, this._reConnectCount = 0, this._resend(), !0 === this._reConnectFlag && (this._channelModule.onReconnected(), this._reConnectFlag = !1), this._channelModule.onOpen());
      } }, { key: "onClose", value(e){
        let t = new qa(Wa), n = e.id, o = e.e, a = "sourceSocketID:".concat(n, " currentSocketID:").concat(this._socketID), s = 0; 0 !== this._onOpenTs && (s = Date.now() - this._onOpenTs), t.setMessage(s).setMoreMessage(a).setCode(o.code).end(), Ne.log("".concat(this._className, "._onClose code:").concat(o.code, " reason:").concat(o.reason, " ").concat(a, " onlineTime:").concat(s)), n === this._socketID && (this._readyState = tu, s < 1e3 ? this._channelModule.onReconnectFailed() : this._channelModule.onClose());
      } }, { key: "onError", value(e){
        const t = e.id, n = e.e, o = "sourceSocketID:".concat(t, " currentSocketID:").concat(this._socketID); new qa(za).setMessage(n.errMsg || Ye(n)).setMoreMessage(o).setLevel("error").end(), Ne.warn("".concat(this._className, "._onError"), n, o), t === this._socketID && (this._readyState = "", this._channelModule.onError());
      } }, { key: "onMessage", value(e){
        let t; try {
          t = JSON.parse(e.data);
        }
        catch(c){
          new qa(ls).setMessage(e.data).end();
        }if(t && t.head){
          const n = this._getRequestIDFromHead(t.head), o = ht(t.head), a = $i(t.body, this._getResponseKeyMap(o)); if(Ne.debug("".concat(this._className, ".onMessage ret:").concat(JSON.stringify(a), " requestID:").concat(n, " has:").concat(this._promiseMap.has(n))), this._setNextPingTs(), this._promiseMap.has(n)){
            const s = this._promiseMap.get(n), r = s.resolve, i = s.reject, u = s.timestamp; return this._promiseMap.delete(n), this._calcRTT(u), void(a.errorCode && 0 !== a.errorCode ? (this._channelModule.onErrorCodeNotZero(a), i(new wr({ code: a.errorCode, message: a.errorInfo || "" }))) : r(Lr(a)));
          } this._channelModule.onMessage({ head: t.head, body: a });
        }
      } }, { key: "_calcRTT", value(e){
        const t = Date.now() - e; this._channelModule.getModule(tn).addRTT(t);
      } }, { key: "_connect", value(){
        new qa(Ya).setMessage("url:".concat(this.getURL())).end(), Ne.log("".concat(this._className, "._connect url:").concat(this.getURL())), this._startTs = Date.now(), this._socket = new Wi(this), this._socketID = this._socket.getID(), this._readyState = eu;
      } }, { key: "getURL", value(){
        const e = this._channelModule.getModule(Kt); return "".concat(this._url, "/info?sdkappid=").concat(e.getSDKAppID(), "&instanceid=").concat(e.getInstanceID(), "&random=").concat(this._getRandom());
      } }, { key: "_closeConnection", value(e){
        Ne.log("".concat(this._className, "._closeConnection")), this._socket && (this._socket.close(e), this._socketID = -1, this._socket = null, this._readyState = tu);
      } }, { key: "_resend", value(){
        const e = this; if(Ne.log("".concat(this._className, "._resend reConnectFlag:").concat(this._reConnectFlag), "promiseMap.size:".concat(this._promiseMap.size, " simpleRequestMap.size:").concat(this._simpleRequestMap.size)), this._promiseMap.size > 0 && this._promiseMap.forEach((t, n) => {
          const o = t.uplinkData, a = t.resolve, s = t.reject; e._promiseMap.set(n, { resolve: a, reject: s, timestamp: Date.now(), uplinkData: o }), e._execute(n, o);
        }), this._simpleRequestMap.size > 0){
          let t, n = C(this._simpleRequestMap); try {
            for(n.s(); !(t = n.n()).done;){
              const o = m(t.value, 2), a = o[0], s = o[1]; this._execute(a, s);
            }
          }
          catch(r){
            n.e(r);
          }
          finally {
            n.f();
          } this._simpleRequestMap.clear();
        }
      } }, { key: "send", value(e){
        const t = this; e.head.seq = this._getSequence(), e.head.reqtime = Math.floor(Date.now() / 1e3); e.keyMap; const n = g(e, Xi), o = this._getRequestIDFromHead(e.head), a = JSON.stringify(n); return new Promise((e, s) => {
          (t._promiseMap.set(o, { resolve: e, reject: s, timestamp: Date.now(), uplinkData: a }), Ne.debug("".concat(t._className, ".send uplinkData:").concat(JSON.stringify(n), " requestID:").concat(o, " readyState:").concat(t._readyState)), t._readyState !== Zi) ? t._reConnect() : (t._execute(o, a), t._channelModule.getModule(tn).addRequestCount());
        });
      } }, { key: "simplySend", value(e){
        e.head.seq = this._getSequence(), e.head.reqtime = Math.floor(Date.now() / 1e3); e.keyMap; const t = g(e, Qi), n = this._getRequestIDFromHead(e.head), o = JSON.stringify(t); this._readyState !== Zi ? (this._simpleRequestMap.size < this.MAX_SIZE ? this._simpleRequestMap.set(n, o) : Ne.log("".concat(this._className, ".simplySend. simpleRequestMap is full, drop request!")), this._reConnect()) : this._execute(n, o);
      } }, { key: "_execute", value(e, t){
        this._socket.send({ data: t, fail: X ? this._onSendFail.bind(this) : void 0, requestID: e });
      } }, { key: "_onSendFail", value(e){
        Ne.log("".concat(this._className, "._onSendFail requestID:").concat(e));
      } }, { key: "_getSequence", value(){
        let e; if(this._startSequence < 2415919103){
          return e = this._startSequence, this._startSequence += 1, 2415919103 === this._startSequence && (this._startSequence = We()), e;
        }
      } }, { key: "_getRequestIDFromHead", value(e){
        return e.servcmd + e.seq;
      } }, { key: "_getResponseKeyMap", value(e){
        const n = this._channelModule.getKeyMap(e); return t(t({}, Bi.response), n.response);
      } }, { key: "_reConnect", value(){
        this._readyState !== Zi && this._readyState !== eu && this.forcedReconnect();
      } }, { key: "forcedReconnect", value(){
        const e = this; Ne.log("".concat(this._className, ".forcedReconnect count:").concat(this._reConnectCount, " readyState:").concat(this._readyState)), this._reConnectFlag = !0, this._resetRandom(), this._reConnectCount < this.MAX_RECONNECT_COUNT ? (this._reConnectCount += 1, this._closeConnection(Ji), this._initConnection()) : this._channelModule.probeNetwork().then(t => {
          const n = m(t, 2), o = n[0]; n[1]; o ? (Ne.warn("".concat(e._className, ".forcedReconnect disconnected from wsserver but network is ok, continue...")), e._reConnectCount = 0, e._closeConnection(Ji), e._initConnection()) : e._channelModule.onReconnectFailed();
        });
      } }, { key: "getReconnectFlag", value(){
        return this._reConnectFlag;
      } }, { key: "_setNextPingTs", value(){
        this._nextPingTs = Date.now() + 1e4;
      } }, { key: "getNextPingTs", value(){
        return this._nextPingTs;
      } }, { key: "isConnected", value(){
        return this._readyState === Zi;
      } }, { key: "_getRandom", value(){
        return 0 === this._random && (this._random = Math.random()), this._random;
      } }, { key: "_resetRandom", value(){
        this._random = 0;
      } }, { key: "close", value(){
        Ne.log("".concat(this._className, ".close")), this._closeConnection(zi), this._promiseMap.clear(), this._startSequence = We(), this._readyState = tu, this._simpleRequestMap.clear(), this._reConnectFlag = !1, this._reConnectCount = 0, this._onOpenTs = 0, this._url = "", this._random = 0;
      } }]), e;
    }(), ou = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; if(o(this, n), (a = t.call(this, e))._className = "ChannelModule", a._socketHandler = new nu(h(a)), a._probing = !1, a._isAppShowing = !0, a._previousState = S.NET_STATE_CONNECTED, X && "function" == typeof Z.onAppShow && "function" == typeof Z.onAppHide){
          const s = a._onAppHide.bind(h(a)), r = a._onAppShow.bind(h(a)); "function" == typeof Z.offAppHide && Z.offAppHide(s), "function" == typeof Z.offAppShow && Z.offAppShow(r), Z.onAppHide(s), Z.onAppShow(r);
        } return a._timerForNotLoggedIn = -1, a._timerForNotLoggedIn = setInterval(a.onCheckTimer.bind(h(a)), 1e3), a._fatalErrorFlag = !1, a;
      } return s(n, [{ key: "onCheckTimer", value(e){
        this._socketHandler && (this.isLoggedIn() ? (this._timerForNotLoggedIn > 0 && (clearInterval(this._timerForNotLoggedIn), this._timerForNotLoggedIn = -1), this._socketHandler.onCheckTimer(e)) : this._socketHandler.onCheckTimer(1), this._checkNextPing());
      } }, { key: "onErrorCodeNotZero", value(e){
        this.getModule(zt).onErrorCodeNotZero(e);
      } }, { key: "onMessage", value(e){
        this.getModule(zt).onMessage(e);
      } }, { key: "send", value(e){
        return this._socketHandler ? this._previousState !== S.NET_STATE_CONNECTED && e.head.servcmd.includes(so) ? this._sendLogViaHTTP(e) : this._socketHandler.send(e) : Promise.reject();
      } }, { key: "_sendLogViaHTTP", value(e){
        return new Promise((t, n) => {
          const o = "https://webim.tim.qq.com/v4/imopenstat/tim_web_report_v2?sdkappid=".concat(e.head.sdkappid, "&reqtime=").concat(Date.now()), a = JSON.stringify(e.body), s = "application/x-www-form-urlencoded;charset=UTF-8"; if(X){
            Z.request({ url: o, data: a, method: "POST", timeout: 3e3, header: { "content-type": s }, success(){
              t();
            }, fail(){
              n(new wr({ code: _o.NETWORK_ERROR, message: ma }));
            } });
          }
          else {
            const r = new XMLHttpRequest(), i = setTimeout(() => {
              r.abort(), n(new wr({ code: _o.NETWORK_TIMEOUT, message: Ma }));
            }, 3e3); r.onreadystatechange = function(){
              4 === r.readyState && (clearTimeout(i), 200 === r.status || 304 === r.status ? t() : n(new wr({ code: _o.NETWORK_ERROR, message: ma })));
            }, r.open("POST", o, !0), r.setRequestHeader("Content-type", s), r.send(a);
          }
        });
      } }, { key: "simplySend", value(e){
        return this._socketHandler ? this._socketHandler.simplySend(e) : Promise.reject();
      } }, { key: "onOpen", value(){
        this._ping();
      } }, { key: "onClose", value(){
        this.reConnect();
      } }, { key: "onError", value(){
        X && Ne.error("".concat(this._className, ".onError 从v2.11.2起，SDK 支持了 WebSocket，如您未添加相关受信域名，请先添加！升级指引: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-02-upgradeguideline.html"));
      } }, { key: "getKeyMap", value(e){
        return this.getModule(zt).getKeyMap(e);
      } }, { key: "_onAppHide", value(){
        this._isAppShowing = !1;
      } }, { key: "_onAppShow", value(){
        this._isAppShowing = !0;
      } }, { key: "onRequestTimeout", value(e){} }, { key: "onReconnected", value(){
        Ne.log("".concat(this._className, ".onReconnected")), this.getModule(zt).onReconnected(), this._emitNetStateChangeEvent(S.NET_STATE_CONNECTED);
      } }, { key: "onReconnectFailed", value(){
        Ne.log("".concat(this._className, ".onReconnectFailed")), this._emitNetStateChangeEvent(S.NET_STATE_DISCONNECTED);
      } }, { key: "reConnect", value(){
        if(!this._fatalErrorFlag && this._socketHandler){
          const e = this._socketHandler.getReconnectFlag(); if(Ne.log("".concat(this._className, ".reConnect previousState:").concat(this._previousState, " reconnectFlag:").concat(e)), this._previousState === S.NET_STATE_CONNECTING && e){
            return;
          } this._socketHandler.forcedReconnect(), this._emitNetStateChangeEvent(S.NET_STATE_CONNECTING);
        }
      } }, { key: "_emitNetStateChangeEvent", value(e){
        this._previousState !== e && (this._previousState = e, this.emitOuterEvent(k.NET_STATE_CHANGE, { state: e }));
      } }, { key: "_ping", value(){
        const e = this; if(!0 !== this._probing){
          this._probing = !0; const t = this.getModule(zt).getProtocolData({ protocolName: ro }); this.send(t).then(() => {
            e._probing = !1;
          }).catch(t => {
            if(Ne.warn("".concat(e._className, "._ping failed. error:"), t), e._probing = !1, t && 60002 === t.code){
              return new qa(rr).setMessage("code:".concat(t.code, " message:").concat(t.message)).setNetworkType(e.getModule(Ht).getNetworkType()).end(), e._fatalErrorFlag = !0, void e._emitNetStateChangeEvent(S.NET_STATE_DISCONNECTED);
            } e.probeNetwork().then(t => {
              const n = m(t, 2), o = n[0], a = n[1]; Ne.log("".concat(e._className, "._ping failed. isAppShowing:").concat(e._isAppShowing, " online:").concat(o, " networkType:").concat(a)), o ? e.reConnect() : e._emitNetStateChangeEvent(S.NET_STATE_DISCONNECTED);
            });
          });
        }
      } }, { key: "_checkNextPing", value(){
        this._socketHandler && (this._socketHandler.isConnected() && Date.now() >= this._socketHandler.getNextPingTs() && this._ping());
      } }, { key: "dealloc", value(){
        this._socketHandler && (this._socketHandler.close(), this._socketHandler = null), this._timerForNotLoggedIn > -1 && clearInterval(this._timerForNotLoggedIn);
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this._previousState = S.NET_STATE_CONNECTED, this._probing = !1, this._fatalErrorFlag = !1, this._timerForNotLoggedIn = setInterval(this.onCheckTimer.bind(this), 1e3);
      } }]), n;
    }(nn), au = ["a2", "tinyid"], su = ["a2", "tinyid"], ru = function(){
      function e(t){
        o(this, e), this._className = "ProtocolHandler", this._sessionModule = t, this._configMap = new Map(), this._fillConfigMap();
      } return s(e, [{ key: "_fillConfigMap", value(){
        this._configMap.clear(); const e = this._sessionModule.genCommonHead(), n = this._sessionModule.genCosSpecifiedHead(), o = this._sessionModule.genSSOReportHead(); this._configMap.set(on, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.LOGIN) }), body: { state: "Online" }, keyMap: { response: { TinyId: "tinyID", InstId: "instanceID", HelloInterval: "helloInterval" } } };
        }(e)), this._configMap.set(an, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.LOGOUT) }), body: { type: 0 }, keyMap: { request: { type: "wslogout_type" } } };
        }(e)), this._configMap.set(sn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.HELLO) }), body: {}, keyMap: { response: { NewInstInfo: "newInstanceInfo" } } };
        }(e)), this._configMap.set(oo, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.IM_COS_SIGN, ".").concat(V.CMD.COS_SIGN) }), body: { cmd: "open_im_cos_svc", subCmd: "get_cos_token", duration: 300, version: 2 }, keyMap: { request: { userSig: "usersig", subCmd: "sub_cmd", cmd: "cmd", duration: "duration", version: "version" }, response: { expired_time: "expiredTime", bucket_name: "bucketName", session_token: "sessionToken", tmp_secret_id: "secretId", tmp_secret_key: "secretKey" } } };
        }(n)), this._configMap.set(ao, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.CUSTOM_UPLOAD, ".").concat(V.CMD.COS_PRE_SIG) }), body: { fileType: void 0, fileName: void 0, uploadMethod: 0, duration: 900 }, keyMap: { request: { userSig: "usersig", fileType: "file_type", fileName: "file_name", uploadMethod: "upload_method" }, response: { expired_time: "expiredTime", request_id: "requestId", head_url: "headUrl", upload_url: "uploadUrl", download_url: "downloadUrl", ci_url: "ciUrl" } } };
        }(n)), this._configMap.set(go, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.CLOUD_CONTROL, ".").concat(V.CMD.FETCH_CLOUD_CONTROL_CONFIG) }), body: { SDKAppID: 0, version: 0 }, keyMap: { request: { SDKAppID: "uint32_sdkappid", version: "uint64_version" }, response: { int32_error_code: "errorCode", str_error_message: "errorMessage", str_json_config: "cloudControlConfig", uint32_expired_time: "expiredTime", uint32_sdkappid: "SDKAppID", uint64_version: "version" } } };
        }(e)), this._configMap.set(ho, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.CLOUD_CONTROL, ".").concat(V.CMD.PUSHED_CLOUD_CONTROL_CONFIG) }), body: {}, keyMap: { response: { int32_error_code: "errorCode", str_error_message: "errorMessage", str_json_config: "cloudControlConfig", uint32_expired_time: "expiredTime", uint32_sdkappid: "SDKAppID", uint64_version: "version" } } };
        }(e)), this._configMap.set(rn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.GET_MESSAGES) }), body: { cookie: "", syncFlag: 0, needAbstract: 1, isOnlineSync: 0 }, keyMap: { request: { fromAccount: "From_Account", toAccount: "To_Account", from: "From_Account", to: "To_Account", time: "MsgTimeStamp", sequence: "MsgSeq", random: "MsgRandom", elements: "MsgBody" }, response: { MsgList: "messageList", SyncFlag: "syncFlag", To_Account: "to", From_Account: "from", ClientSeq: "clientSequence", MsgSeq: "sequence", NoticeSeq: "noticeSequence", NotifySeq: "notifySequence", MsgRandom: "random", MsgTimeStamp: "time", MsgContent: "content", ToGroupId: "groupID", MsgKey: "messageKey", GroupTips: "groupTips", MsgBody: "elements", MsgType: "type", C2CRemainingUnreadCount: "C2CRemainingUnreadList", C2CPairUnreadCount: "C2CPairUnreadList" } } };
        }(e)), this._configMap.set(un, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.BIG_DATA_HALLWAY_AUTH_KEY) }), body: {} };
        }(e)), this._configMap.set(cn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.SEND_MESSAGE) }), body: { fromAccount: "", toAccount: "", msgTimeStamp: void 0, msgSeq: 0, msgRandom: 0, msgBody: [], cloudCustomData: void 0, nick: "", avatar: "", msgLifeTime: void 0, offlinePushInfo: { pushFlag: 0, title: "", desc: "", ext: "", apnsInfo: { badgeMode: 0 }, androidInfo: { OPPOChannelID: "" } } }, keyMap: { request: { fromAccount: "From_Account", toAccount: "To_Account", msgTimeStamp: "MsgTimeStamp", msgSeq: "MsgSeq", msgRandom: "MsgRandom", msgBody: "MsgBody", count: "MaxCnt", lastMessageTime: "LastMsgTime", messageKey: "MsgKey", peerAccount: "Peer_Account", data: "Data", description: "Desc", extension: "Ext", type: "MsgType", content: "MsgContent", sizeType: "Type", uuid: "UUID", url: "", imageUrl: "URL", fileUrl: "Url", remoteAudioUrl: "Url", remoteVideoUrl: "VideoUrl", thumbUUID: "ThumbUUID", videoUUID: "VideoUUID", videoUrl: "", downloadFlag: "Download_Flag", nick: "From_AccountNick", avatar: "From_AccountHeadurl", from: "From_Account", time: "MsgTimeStamp", messageRandom: "MsgRandom", messageSequence: "MsgSeq", elements: "MsgBody", clientSequence: "ClientSeq", payload: "MsgContent", messageList: "MsgList", messageNumber: "MsgNum", abstractList: "AbstractList", messageBody: "MsgBody" } } };
        }(e)), this._configMap.set(ln, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.SEND_GROUP_MESSAGE) }), body: { fromAccount: "", groupID: "", random: 0, clientSequence: 0, priority: "", msgBody: [], cloudCustomData: void 0, onlineOnlyFlag: 0, offlinePushInfo: { pushFlag: 0, title: "", desc: "", ext: "", apnsInfo: { badgeMode: 0 }, androidInfo: { OPPOChannelID: "" } }, groupAtInfo: [] }, keyMap: { request: { to: "GroupId", extension: "Ext", data: "Data", description: "Desc", random: "Random", sequence: "ReqMsgSeq", count: "ReqMsgNumber", type: "MsgType", priority: "MsgPriority", content: "MsgContent", elements: "MsgBody", sizeType: "Type", uuid: "UUID", url: "", imageUrl: "URL", fileUrl: "Url", remoteAudioUrl: "Url", remoteVideoUrl: "VideoUrl", thumbUUID: "ThumbUUID", videoUUID: "VideoUUID", videoUrl: "", downloadFlag: "Download_Flag", clientSequence: "ClientSeq", from: "From_Account", time: "MsgTimeStamp", messageRandom: "MsgRandom", messageSequence: "MsgSeq", payload: "MsgContent", messageList: "MsgList", messageNumber: "MsgNum", abstractList: "AbstractList", messageBody: "MsgBody" }, response: { MsgTime: "time", MsgSeq: "sequence" } } };
        }(e)), this._configMap.set(fn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.REVOKE_C2C_MESSAGE) }), body: { msgInfo: { fromAccount: "", toAccount: "", msgTimeStamp: 0, msgSeq: 0, msgRandom: 0 } }, keyMap: { request: { msgInfo: "MsgInfo", msgTimeStamp: "MsgTimeStamp", msgSeq: "MsgSeq", msgRandom: "MsgRandom" } } };
        }(e)), this._configMap.set(Fn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.REVOKE_GROUP_MESSAGE) }), body: { to: "", msgSeqList: void 0 }, keyMap: { request: { to: "GroupId", msgSeqList: "MsgSeqList", msgSeq: "MsgSeq" } } };
        }(e)), this._configMap.set(Mn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.GET_C2C_ROAM_MESSAGES) }), body: { peerAccount: "", count: 15, lastMessageTime: 0, messageKey: "", withRecalledMessage: 1 }, keyMap: { request: { messageKey: "MsgKey", peerAccount: "Peer_Account", count: "MaxCnt", lastMessageTime: "LastMsgTime", withRecalledMessage: "WithRecalledMsg" }, response: { LastMsgTime: "lastMessageTime" } } };
        }(e)), this._configMap.set(Vn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_GROUP_ROAM_MESSAGES) }), body: { withRecalledMsg: 1, groupID: "", count: 15, sequence: "" }, keyMap: { request: { sequence: "ReqMsgSeq", count: "ReqMsgNumber", withRecalledMessage: "WithRecalledMsg" }, response: { Random: "random", MsgTime: "time", MsgSeq: "sequence", ReqMsgSeq: "sequence", RspMsgList: "messageList", IsPlaceMsg: "isPlaceMessage", IsSystemMsg: "isSystemMessage", ToGroupId: "to", EnumFrom_AccountType: "fromAccountType", EnumTo_AccountType: "toAccountType", GroupCode: "groupCode", MsgPriority: "priority", MsgBody: "elements", MsgType: "type", MsgContent: "content", IsFinished: "complete", Download_Flag: "downloadFlag", ClientSeq: "clientSequence", ThumbUUID: "thumbUUID", VideoUUID: "videoUUID" } } };
        }(e)), this._configMap.set(mn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.SET_C2C_MESSAGE_READ) }), body: { C2CMsgReaded: void 0 }, keyMap: { request: { lastMessageTime: "LastedMsgTime" } } };
        }(e)), this._configMap.set(qn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.SET_GROUP_MESSAGE_READ) }), body: { groupID: void 0, messageReadSeq: void 0 }, keyMap: { request: { messageReadSeq: "MsgReadedSeq" } } };
        }(e)), this._configMap.set(yn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.DELETE_C2C_MESSAGE) }), body: { fromAccount: "", to: "", keyList: void 0 }, keyMap: { request: { keyList: "MsgKeyList" } } };
        }(e)), this._configMap.set(Yn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.DELETE_GROUP_MESSAGE) }), body: { groupID: "", deleter: "", keyList: void 0 }, keyMap: { request: { deleter: "Deleter_Account", keyList: "Seqs" } } };
        }(e)), this._configMap.set(vn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.GET_PEER_READ_TIME) }), body: { userIDList: void 0 }, keyMap: { request: { userIDList: "To_Account" }, response: { ReadTime: "peerReadTimeList" } } };
        }(e)), this._configMap.set(Tn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.GET_CONVERSATION_LIST) }), body: { fromAccount: void 0, count: 0 }, keyMap: { request: {}, response: { SessionItem: "conversations", ToAccount: "groupID", To_Account: "userID", UnreadMsgCount: "unreadCount", MsgGroupReadedSeq: "messageReadSeq", C2cPeerReadTime: "c2cPeerReadTime" } } };
        }(e)), this._configMap.set(In, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.PAGING_GET_CONVERSATION_LIST) }), body: { fromAccount: void 0, timeStamp: void 0, startIndex: void 0, pinnedTimeStamp: void 0, pinnedStartIndex: void 0, orderType: void 0, messageAssistFlag: 4, assistFlag: 7 }, keyMap: { request: { messageAssistFlag: "MsgAssistFlags", assistFlag: "AssistFlags", pinnedTimeStamp: "TopTimeStamp", pinnedStartIndex: "TopStartIndex" }, response: { SessionItem: "conversations", ToAccount: "groupID", To_Account: "userID", UnreadMsgCount: "unreadCount", MsgGroupReadedSeq: "messageReadSeq", C2cPeerReadTime: "c2cPeerReadTime", LastMsgFlags: "lastMessageFlag", TopFlags: "isPinned", TopTimeStamp: "pinnedTimeStamp", TopStartIndex: "pinnedStartIndex" } } };
        }(e)), this._configMap.set(Dn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.DELETE_CONVERSATION) }), body: { fromAccount: "", toAccount: void 0, type: 1, toGroupID: void 0 }, keyMap: { request: { toGroupID: "ToGroupid" } } };
        }(e)), this._configMap.set(Cn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.PIN_CONVERSATION) }), body: { fromAccount: "", operationType: 1, itemList: void 0 }, keyMap: { request: { itemList: "RecentContactItem" } } };
        }(e)), this._configMap.set(kn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.DELETE_GROUP_AT_TIPS) }), body: { messageListToDelete: void 0 }, keyMap: { request: { messageListToDelete: "DelMsgList", messageSeq: "MsgSeq", messageRandom: "MsgRandom" } } };
        }(e)), this._configMap.set(dn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.PROFILE, ".").concat(V.CMD.PORTRAIT_GET) }), body: { fromAccount: "", userItem: [] }, keyMap: { request: { toAccount: "To_Account", standardSequence: "StandardSequence", customSequence: "CustomSequence" } } };
        }(e)), this._configMap.set(pn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.PROFILE, ".").concat(V.CMD.PORTRAIT_SET) }), body: { fromAccount: "", profileItem: [{ tag: cr.NICK, value: "" }, { tag: cr.GENDER, value: "" }, { tag: cr.ALLOWTYPE, value: "" }, { tag: cr.AVATAR, value: "" }] }, keyMap: { request: { toAccount: "To_Account", standardSequence: "StandardSequence", customSequence: "CustomSequence" } } };
        }(e)), this._configMap.set(gn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.FRIEND, ".").concat(V.CMD.GET_BLACKLIST) }), body: { fromAccount: "", startIndex: 0, maxLimited: 30, lastSequence: 0 }, keyMap: { response: { CurruentSequence: "currentSequence" } } };
        }(e)), this._configMap.set(hn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.FRIEND, ".").concat(V.CMD.ADD_BLACKLIST) }), body: { fromAccount: "", toAccount: [] } };
        }(e)), this._configMap.set(_n, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.FRIEND, ".").concat(V.CMD.DELETE_BLACKLIST) }), body: { fromAccount: "", toAccount: [] } };
        }(e)), this._configMap.set(Sn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_JOINED_GROUPS) }), body: { memberAccount: "", limit: void 0, offset: void 0, groupType: void 0, responseFilter: { groupBaseInfoFilter: void 0, selfInfoFilter: void 0 } }, keyMap: { request: { memberAccount: "Member_Account" }, response: { GroupIdList: "groups", MsgFlag: "messageRemindType" } } };
        }(e)), this._configMap.set(En, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_GROUP_INFO) }), body: { groupIDList: void 0, responseFilter: { groupBaseInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "Owner_Account", "CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "NextMsgSeq", "ShutUpAllMember"], groupCustomFieldFilter: void 0, memberInfoFilter: void 0, memberCustomFieldFilter: void 0 } }, keyMap: { request: { groupIDList: "GroupIdList", groupCustomField: "AppDefinedData", memberCustomField: "AppMemberDefinedData", groupCustomFieldFilter: "AppDefinedDataFilter_Group", memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember" }, response: { GroupIdList: "groups", MsgFlag: "messageRemindType", AppDefinedData: "groupCustomField", AppMemberDefinedData: "memberCustomField", AppDefinedDataFilter_Group: "groupCustomFieldFilter", AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter", InfoSeq: "infoSequence", MemberList: "members", GroupInfo: "groups", ShutUpUntil: "muteUntil", ShutUpAllMember: "muteAllMembers", ApplyJoinOption: "joinOption" } } };
        }(e)), this._configMap.set(An, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.CREATE_GROUP) }), body: { type: void 0, name: void 0, groupID: void 0, ownerID: void 0, introduction: void 0, notification: void 0, maxMemberNum: void 0, joinOption: void 0, memberList: void 0, groupCustomField: void 0, memberCustomField: void 0, webPushFlag: 1, avatar: "FaceUrl" }, keyMap: { request: { ownerID: "Owner_Account", userID: "Member_Account", avatar: "FaceUrl", maxMemberNum: "MaxMemberCount", joinOption: "ApplyJoinOption", groupCustomField: "AppDefinedData", memberCustomField: "AppMemberDefinedData" }, response: { HugeGroupFlag: "avChatRoomFlag", OverJoinedGroupLimit_Account: "overLimitUserIDList" } } };
        }(e)), this._configMap.set(Nn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.DESTROY_GROUP) }), body: { groupID: void 0 } };
        }(e)), this._configMap.set(Ln, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.MODIFY_GROUP_INFO) }), body: { groupID: void 0, name: void 0, introduction: void 0, notification: void 0, avatar: void 0, maxMemberNum: void 0, joinOption: void 0, groupCustomField: void 0, muteAllMembers: void 0 }, keyMap: { request: { maxMemberNum: "MaxMemberCount", groupCustomField: "AppDefinedData", muteAllMembers: "ShutUpAllMember", joinOption: "ApplyJoinOption", avatar: "FaceUrl" }, response: { AppDefinedData: "groupCustomField", ShutUpAllMember: "muteAllMembers", ApplyJoinOption: "joinOption" } } };
        }(e)), this._configMap.set(On, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.APPLY_JOIN_GROUP) }), body: { groupID: void 0, applyMessage: void 0, userDefinedField: void 0, webPushFlag: 1 }, keyMap: { request: { applyMessage: "ApplyMsg" }, response: { HugeGroupFlag: "avChatRoomFlag", AVChatRoomKey: "avChatRoomKey" } } };
        }(e)), this._configMap.set(Rn, function(e){
          e.a2, e.tinyid; return { head: t(t({}, g(e, au)), {}, { servcmd: "".concat(V.NAME.BIG_GROUP_NO_AUTH, ".").concat(V.CMD.APPLY_JOIN_GROUP) }), body: { groupID: void 0, applyMessage: void 0, userDefinedField: void 0, webPushFlag: 1 }, keyMap: { request: { applyMessage: "ApplyMsg" }, response: { HugeGroupFlag: "avChatRoomFlag" } } };
        }(e)), this._configMap.set(Gn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.QUIT_GROUP) }), body: { groupID: void 0 } };
        }(e)), this._configMap.set(bn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.SEARCH_GROUP_BY_ID) }), body: { groupIDList: void 0, responseFilter: { groupBasePublicInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "CreateTime", "Owner_Account", "LastInfoTime", "LastMsgTime", "NextMsgSeq", "MemberNum", "MaxMemberNum", "ApplyJoinOption"] } }, keyMap: { response: { ApplyJoinOption: "joinOption" } } };
        }(e)), this._configMap.set(Pn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.CHANGE_GROUP_OWNER) }), body: { groupID: void 0, newOwnerID: void 0 }, keyMap: { request: { newOwnerID: "NewOwner_Account" } } };
        }(e)), this._configMap.set(wn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.HANDLE_APPLY_JOIN_GROUP) }), body: { groupID: void 0, applicant: void 0, handleAction: void 0, handleMessage: void 0, authentication: void 0, messageKey: void 0, userDefinedField: void 0 }, keyMap: { request: { applicant: "Applicant_Account", handleAction: "HandleMsg", handleMessage: "ApprovalMsg", messageKey: "MsgKey" } } };
        }(e)), this._configMap.set(Un, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.HANDLE_GROUP_INVITATION) }), body: { groupID: void 0, inviter: void 0, handleAction: void 0, handleMessage: void 0, authentication: void 0, messageKey: void 0, userDefinedField: void 0 }, keyMap: { request: { inviter: "Inviter_Account", handleAction: "HandleMsg", handleMessage: "ApprovalMsg", messageKey: "MsgKey" } } };
        }(e)), this._configMap.set(Kn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_GROUP_APPLICATION) }), body: { startTime: void 0, limit: void 0, handleAccount: void 0 }, keyMap: { request: { handleAccount: "Handle_Account" } } };
        }(e)), this._configMap.set(xn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.DELETE_GROUP_SYSTEM_MESSAGE) }), body: { messageListToDelete: void 0 }, keyMap: { request: { messageListToDelete: "DelMsgList", messageSeq: "MsgSeq", messageRandom: "MsgRandom" } } };
        }(e)), this._configMap.set(Bn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.BIG_GROUP_LONG_POLLING, ".").concat(V.CMD.AVCHATROOM_LONG_POLL) }), body: { USP: 1, startSeq: 1, holdTime: 90, key: void 0 }, keyMap: { request: { USP: "USP" }, response: { ToGroupId: "groupID" } } };
        }(e)), this._configMap.set(Hn, function(e){
          e.a2, e.tinyid; return { head: t(t({}, g(e, su)), {}, { servcmd: "".concat(V.NAME.BIG_GROUP_LONG_POLLING_NO_AUTH, ".").concat(V.CMD.AVCHATROOM_LONG_POLL) }), body: { USP: 1, startSeq: 1, holdTime: 90, key: void 0 }, keyMap: { request: { USP: "USP" }, response: { ToGroupId: "groupID" } } };
        }(e)), this._configMap.set(jn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_ONLINE_MEMBER_NUM) }), body: { groupID: void 0 } };
        }(e)), this._configMap.set($n, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.SET_GROUP_ATTRIBUTES) }), body: { groupID: void 0, groupAttributeList: void 0, mainSequence: void 0, avChatRoomKey: void 0, attributeControl: ["RaceConflict"] }, keyMap: { request: { key: "key", value: "value" } } };
        }(e)), this._configMap.set(Wn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.MODIFY_GROUP_ATTRIBUTES) }), body: { groupID: void 0, groupAttributeList: void 0, mainSequence: void 0, avChatRoomKey: void 0, attributeControl: ["RaceConflict"] }, keyMap: { request: { key: "key", value: "value" } } };
        }(e)), this._configMap.set(zn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.DELETE_GROUP_ATTRIBUTES) }), body: { groupID: void 0, groupAttributeList: void 0, mainSequence: void 0, avChatRoomKey: void 0, attributeControl: ["RaceConflict"] }, keyMap: { request: { key: "key" } } };
        }(e)), this._configMap.set(Jn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.CLEAR_GROUP_ATTRIBUTES) }), body: { groupID: void 0, mainSequence: void 0, avChatRoomKey: void 0, attributeControl: ["RaceConflict"] } };
        }(e)), this._configMap.set(Xn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP_ATTR, ".").concat(V.CMD.GET_GROUP_ATTRIBUTES) }), body: { groupID: void 0, avChatRoomKey: void 0, groupType: 1 }, keyMap: { request: { avChatRoomKey: "Key", groupType: "GroupType" } } };
        }(e)), this._configMap.set(Qn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_GROUP_MEMBER_LIST) }), body: { groupID: void 0, limit: 0, offset: 0, memberRoleFilter: void 0, memberInfoFilter: ["Role", "NameCard", "ShutUpUntil", "JoinTime"], memberCustomFieldFilter: void 0 }, keyMap: { request: { memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember" }, response: { AppMemberDefinedData: "memberCustomField", AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter", MemberList: "members", ShutUpUntil: "muteUntil" } } };
        }(e)), this._configMap.set(Zn, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_GROUP_MEMBER_INFO) }), body: { groupID: void 0, userIDList: void 0, memberInfoFilter: void 0, memberCustomFieldFilter: void 0 }, keyMap: { request: { userIDList: "Member_List_Account", memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember" }, response: { MemberList: "members", ShutUpUntil: "muteUntil", AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter", AppMemberDefinedData: "memberCustomField" } } };
        }(e)), this._configMap.set(eo, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.ADD_GROUP_MEMBER) }), body: { groupID: void 0, silence: void 0, userIDList: void 0 }, keyMap: { request: { userID: "Member_Account", userIDList: "MemberList" }, response: { MemberList: "members" } } };
        }(e)), this._configMap.set(to, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.DELETE_GROUP_MEMBER) }), body: { groupID: void 0, userIDList: void 0, reason: void 0 }, keyMap: { request: { userIDList: "MemberToDel_Account" } } };
        }(e)), this._configMap.set(no, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.MODIFY_GROUP_MEMBER_INFO) }), body: { groupID: void 0, userID: void 0, messageRemindType: void 0, nameCard: void 0, role: void 0, memberCustomField: void 0, muteTime: void 0 }, keyMap: { request: { userID: "Member_Account", memberCustomField: "AppMemberDefinedData", muteTime: "ShutUpTime", messageRemindType: "MsgFlag" } } };
        }(e)), this._configMap.set(so, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STAT, ".").concat(V.CMD.TIM_WEB_REPORT_V2) }), body: { header: {}, event: [], quality: [] }, keyMap: { request: { SDKType: "sdk_type", SDKVersion: "sdk_version", deviceType: "device_type", platform: "platform", instanceID: "instance_id", traceID: "trace_id", SDKAppID: "sdk_app_id", userID: "user_id", tinyID: "tiny_id", extension: "extension", timestamp: "timestamp", networkType: "network_type", eventType: "event_type", code: "error_code", message: "error_message", moreMessage: "more_message", duplicate: "duplicate", costTime: "cost_time", level: "level", qualityType: "quality_type", reportIndex: "report_index", wholePeriod: "whole_period", totalCount: "total_count", rttCount: "success_count_business", successRateOfRequest: "percent_business", countLessThan1Second: "success_count_business", percentOfCountLessThan1Second: "percent_business", countLessThan3Second: "success_count_platform", percentOfCountLessThan3Second: "percent_platform", successCountOfBusiness: "success_count_business", successRateOfBusiness: "percent_business", successCountOfPlatform: "success_count_platform", successRateOfPlatform: "percent_platform", successCountOfMessageReceived: "success_count_business", successRateOfMessageReceived: "percent_business", avgRTT: "average_value", avgDelay: "average_value", avgValue: "average_value" } } };
        }(o)), this._configMap.set(ro, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.HEARTBEAT, ".").concat(V.CMD.ALIVE) }), body: {} };
        }(e)), this._configMap.set(io, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.IM_OPEN_PUSH, ".").concat(V.CMD.MESSAGE_PUSH) }), body: {}, keyMap: { response: { C2cMsgArray: "C2CMessageArray", GroupMsgArray: "groupMessageArray", GroupTips: "groupTips", C2cNotifyMsgArray: "C2CNotifyMessageArray", ClientSeq: "clientSequence", MsgPriority: "priority", NoticeSeq: "noticeSequence", MsgContent: "content", MsgType: "type", MsgBody: "elements", ToGroupId: "to", Desc: "description", Ext: "extension", IsSyncMsg: "isSyncMessage", Flag: "needSync", NeedAck: "needAck", PendencyAdd_Account: "userID", ProfileImNick: "nick", PendencyType: "applicationType" } } };
        }(e)), this._configMap.set(uo, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.MESSAGE_PUSH_ACK) }), body: { sessionData: void 0 }, keyMap: { request: { sessionData: "SessionData" } } };
        }(e)), this._configMap.set(co, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.STATUS_FORCEOFFLINE) }), body: {}, keyMap: { response: { C2cNotifyMsgArray: "C2CNotifyMessageArray", NoticeSeq: "noticeSequence", KickoutMsgNotify: "kickoutMsgNotify", NewInstInfo: "newInstanceInfo" } } };
        }(e)), this._configMap.set(po, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.IM_LONG_MESSAGE, ".").concat(V.CMD.DOWNLOAD_MERGER_MESSAGE) }), body: { downloadKey: "" }, keyMap: { response: { Data: "data", Desc: "description", Ext: "extension", Download_Flag: "downloadFlag", ThumbUUID: "thumbUUID", VideoUUID: "videoUUID" } } };
        }(e)), this._configMap.set(lo, function(e){
          return { head: t(t({}, e), {}, { servcmd: "".concat(V.NAME.IM_LONG_MESSAGE, ".").concat(V.CMD.UPLOAD_MERGER_MESSAGE) }), body: { messageList: [] }, keyMap: { request: { fromAccount: "From_Account", toAccount: "To_Account", msgTimeStamp: "MsgTimeStamp", msgSeq: "MsgSeq", msgRandom: "MsgRandom", msgBody: "MsgBody", type: "MsgType", content: "MsgContent", data: "Data", description: "Desc", extension: "Ext", sizeType: "Type", uuid: "UUID", url: "", imageUrl: "URL", fileUrl: "Url", remoteAudioUrl: "Url", remoteVideoUrl: "VideoUrl", thumbUUID: "ThumbUUID", videoUUID: "VideoUUID", videoUrl: "", downloadFlag: "Download_Flag", from: "From_Account", time: "MsgTimeStamp", messageRandom: "MsgRandom", messageSequence: "MsgSeq", elements: "MsgBody", clientSequence: "ClientSeq", payload: "MsgContent", messageList: "MsgList", messageNumber: "MsgNum", abstractList: "AbstractList", messageBody: "MsgBody" } } };
        }(e));
      } }, { key: "has", value(e){
        return this._configMap.has(e);
      } }, { key: "get", value(e){
        return this._configMap.get(e);
      } }, { key: "update", value(){
        this._fillConfigMap();
      } }, { key: "getKeyMap", value(e){
        return this.has(e) ? this.get(e).keyMap || {} : (Ne.warn("".concat(this._className, ".getKeyMap unknown protocolName:").concat(e)), {});
      } }, { key: "getProtocolData", value(e){
        let t = e.protocolName, n = e.requestData, o = this.get(t), a = null; if(n){
          const s = this._simpleDeepCopy(o), r = s.body, i = Object.create(null); for(const u in r){
            if(Object.prototype.hasOwnProperty.call(r, u)){
              if(i[u] = r[u], void 0 === n[u]){
                continue;
              } i[u] = n[u];
            }
          }s.body = i, a = this._getUplinkData(s);
        }
        else {
          a = this._getUplinkData(o);
        } return a;
      } }, { key: "_getUplinkData", value(e){
        const t = this._requestDataCleaner(e), n = ht(t.head), o = Yi(t.body, this._getRequestKeyMap(n)); return t.body = o, t;
      } }, { key: "_getRequestKeyMap", value(e){
        const n = this.getKeyMap(e); return t(t({}, Bi.request), n.request);
      } }, { key: "_requestDataCleaner", value(e){
        const t = Array.isArray(e) ? [] : Object.create(null); for(const o in e){
          Object.prototype.hasOwnProperty.call(e, o) && xe(o) && null !== e[o] && void 0 !== e[o] && ("object" !== n(e[o]) ? t[o] = e[o] : t[o] = this._requestDataCleaner.bind(this)(e[o]));
        } return t;
      } }, { key: "_simpleDeepCopy", value(e){
        for(var t, n = Object.keys(e), o = {}, a = 0, s = n.length; a < s; a++){
          t = n[a], we(e[t]) ? o[t] = Array.from(e[t]) : be(e[t]) ? o[t] = this._simpleDeepCopy(e[t]) : o[t] = e[t];
        } return o;
      } }]), e;
    }(), iu = [uo], uu = function(){
      function e(t){
        o(this, e), this._sessionModule = t, this._className = "DownlinkHandler", this._eventHandlerMap = new Map(), this._eventHandlerMap.set("C2CMessageArray", this._c2cMessageArrayHandler.bind(this)), this._eventHandlerMap.set("groupMessageArray", this._groupMessageArrayHandler.bind(this)), this._eventHandlerMap.set("groupTips", this._groupTipsHandler.bind(this)), this._eventHandlerMap.set("C2CNotifyMessageArray", this._C2CNotifyMessageArrayHandler.bind(this)), this._eventHandlerMap.set("profileModify", this._profileHandler.bind(this)), this._eventHandlerMap.set("friendListMod", this._relationChainHandler.bind(this)), this._eventHandlerMap.set("recentContactMod", this._recentContactHandler.bind(this)), this._keys = M(this._eventHandlerMap.keys());
      } return s(e, [{ key: "_c2cMessageArrayHandler", value(e){
        const t = this._sessionModule.getModule(wt); if(t){
          if(e.dataList.forEach(e => {
            if(1 === e.isSyncMessage){
              const t = e.from; e.from = e.to, e.to = t;
            }
          }), 1 === e.needSync){
            this._sessionModule.getModule(Wt).startOnlineSync();
          } t.onNewC2CMessage({ dataList: e.dataList, isInstantMessage: !0 });
        }
      } }, { key: "_groupMessageArrayHandler", value(e){
        const t = this._sessionModule.getModule(Ut); t && t.onNewGroupMessage({ event: e.event, dataList: e.dataList, isInstantMessage: !0 });
      } }, { key: "_groupTipsHandler", value(e){
        const t = this._sessionModule.getModule(Ut); if(t){
          const n = e.event, o = e.dataList, a = e.isInstantMessage, s = void 0 === a || a, r = e.isSyncingEnded; switch(n){
            case 4: case 6: t.onNewGroupTips({ event: n, dataList: o }); break; case 5: o.forEach(e => {
              we(e.elements.revokedInfos) ? t.onGroupMessageRevoked({ dataList: o }) : we(e.elements.groupMessageReadNotice) ? t.onGroupMessageReadNotice({ dataList: o }) : t.onNewGroupSystemNotice({ dataList: o, isInstantMessage: s, isSyncingEnded: r });
            }); break; case 12: this._sessionModule.getModule(Vt).onNewGroupAtTips({ dataList: o }); break; default: Ne.log("".concat(this._className, "._groupTipsHandler unknown event:").concat(n, " dataList:"), o);
          }
        }
      } }, { key: "_C2CNotifyMessageArrayHandler", value(e){
        const t = this, n = e.dataList; if(we(n)){
          const o = this._sessionModule.getModule(wt); n.forEach(e => {
            if(Pe(e)){
              if(e.hasOwnProperty("kickoutMsgNotify")){
                const a = e.kickoutMsgNotify, s = a.kickType, r = a.newInstanceInfo, i = void 0 === r ? {} : r; 1 === s ? t._sessionModule.onMultipleAccountKickedOut(i) : 2 === s && t._sessionModule.onMultipleDeviceKickedOut(i);
              }
              else {
                e.hasOwnProperty("c2cMessageRevokedNotify") ? o && o.onC2CMessageRevoked({ dataList: n }) : e.hasOwnProperty("c2cMessageReadReceipt") ? o && o.onC2CMessageReadReceipt({ dataList: n }) : e.hasOwnProperty("c2cMessageReadNotice") && o && o.onC2CMessageReadNotice({ dataList: n });
              }
            }
          });
        }
      } }, { key: "_profileHandler", value(e){
        this._sessionModule.getModule(Pt).onProfileModified({ dataList: e.dataList }); const t = this._sessionModule.getModule(Ft); t && t.onFriendProfileModified({ dataList: e.dataList });
      } }, { key: "_relationChainHandler", value(e){
        this._sessionModule.getModule(Pt).onRelationChainModified({ dataList: e.dataList }); const t = this._sessionModule.getModule(Ft); t && t.onRelationChainModified({ dataList: e.dataList });
      } }, { key: "_recentContactHandler", value(e){
        const t = e.dataList; if(we(t)){
          const n = this._sessionModule.getModule(Vt); n && t.forEach(e => {
            const t = e.pushType, o = e.recentContactTopItem, a = e.recentContactDeleteItem; 1 === t ? n.onConversationDeleted(a.recentContactList) : 2 === t ? n.onConversationPinned(o.recentContactList) : 3 === t && n.onConversationUnpinned(o.recentContactList);
          });
        }
      } }, { key: "_cloudControlConfigHandler", value(e){
        this._sessionModule.getModule(Qt).onPushedCloudControlConfig(e);
      } }, { key: "onMessage", value(e){
        const t = this, n = e.head, o = e.body; if(this._isPushedCloudControlConfig(n)){
          this._cloudControlConfigHandler(o);
        }
        else {
          const a = o.eventArray, s = o.isInstantMessage, r = o.isSyncingEnded, i = o.needSync; if(we(a)){
            for(let u = null, c = null, l = 0, d = 0, p = a.length; d < p; d++){
              l = (u = a[d]).event; const g = Object.keys(u).find(e => -1 !== t._keys.indexOf(e)); g ? (c = u[g], this._eventHandlerMap.get(g)({ event: l, dataList: c, isInstantMessage: s, isSyncingEnded: r, needSync: i })) : Ne.log("".concat(this._className, ".onMessage unknown eventItem:").concat(u));
            }
          }
        }
      } }, { key: "_isPushedCloudControlConfig", value(e){
        return e.servcmd && e.servcmd.includes(ho);
      } }]), e;
    }(), cu = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this, e))._className = "SessionModule", a._platform = a.getPlatform(), a._protocolHandler = new ru(h(a)), a._messageDispatcher = new uu(h(a)), a;
      } return s(n, [{ key: "updateProtocolConfig", value(){
        this._protocolHandler.update();
      } }, { key: "request", value(e){
        Ne.debug("".concat(this._className, ".request options:"), e); const t = e.protocolName, n = e.tjgID; if(!this._protocolHandler.has(t)){
          return Ne.warn("".concat(this._className, ".request unknown protocol:").concat(t)), Vr({ code: _o.CANNOT_FIND_PROTOCOL, message: Ia });
        } const o = this.getProtocolData(e); vt(n) || (o.head.tjgID = n); const a = this.getModule(Jt); return iu.includes(t) ? a.simplySend(o) : a.send(o);
      } }, { key: "getKeyMap", value(e){
        return this._protocolHandler.getKeyMap(e);
      } }, { key: "genCommonHead", value(){
        const e = this.getModule(Kt); return { ver: "v4", platform: this._platform, websdkappid: b, websdkversion: G, a2: e.getA2Key() || void 0, tinyid: e.getTinyID() || void 0, status_instid: e.getStatusInstanceID(), sdkappid: e.getSDKAppID(), contenttype: e.getContentType(), reqtime: 0, identifier: e.getA2Key() ? void 0 : e.getUserID(), usersig: e.getA2Key() ? void 0 : e.getUserSig(), sdkability: 2, tjgID: "" };
      } }, { key: "genCosSpecifiedHead", value(){
        const e = this.getModule(Kt); return { ver: "v4", platform: this._platform, websdkappid: b, websdkversion: G, sdkappid: e.getSDKAppID(), contenttype: e.getContentType(), reqtime: 0, identifier: e.getUserID(), usersig: e.getUserSig(), status_instid: e.getStatusInstanceID(), sdkability: 2 };
      } }, { key: "genSSOReportHead", value(){
        const e = this.getModule(Kt); return { ver: "v4", platform: this._platform, websdkappid: b, websdkversion: G, sdkappid: e.getSDKAppID(), contenttype: "", reqtime: 0, identifier: "", usersig: "", status_instid: e.getStatusInstanceID(), sdkability: 2 };
      } }, { key: "getProtocolData", value(e){
        return this._protocolHandler.getProtocolData(e);
      } }, { key: "onErrorCodeNotZero", value(e){
        const t = e.errorCode; if(t === _o.HELLO_ANSWER_KICKED_OUT){
          const n = e.kickType, o = e.newInstanceInfo, a = void 0 === o ? {} : o; 1 === n ? this.onMultipleAccountKickedOut(a) : 2 === n && this.onMultipleDeviceKickedOut(a);
        }t !== _o.MESSAGE_A2KEY_EXPIRED && t !== _o.ACCOUNT_A2KEY_EXPIRED || (this._onUserSigExpired(), this.getModule(Jt).reConnect());
      } }, { key: "onMessage", value(e){
        const t = e.body, n = t.needAck, o = void 0 === n ? 0 : n, a = t.sessionData; 1 === o && this._sendACK(a), this._messageDispatcher.onMessage(e);
      } }, { key: "onReconnected", value(){
        const e = this; this.isLoggedIn() && this.request({ protocolName: on }).then(t => {
          const n = t.data.instanceID; e.getModule(Kt).setStatusInstanceID(n), Ne.log("".concat(e._className, ".onReconnected, login ok. start to sync unread messages.")), e.getModule(Wt).startSyncOnReconnected(), e.getModule(en).startPull(), e.getModule(Ut).updateLocalMainSequenceOnReconnected();
        });
      } }, { key: "onMultipleAccountKickedOut", value(e){
        this.getModule(Gt).onMultipleAccountKickedOut(e);
      } }, { key: "onMultipleDeviceKickedOut", value(e){
        this.getModule(Gt).onMultipleDeviceKickedOut(e);
      } }, { key: "_onUserSigExpired", value(){
        this.getModule(Gt).onUserSigExpired();
      } }, { key: "_sendACK", value(e){
        this.request({ protocolName: uo, requestData: { sessionData: e } });
      } }]), n;
    }(nn), lu = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this, e))._className = "MessageLossDetectionModule", a._maybeLostSequencesMap = new Map(), a;
      } return s(n, [{ key: "onMessageMaybeLost", value(e, t, n){
        this._maybeLostSequencesMap.has(e) || this._maybeLostSequencesMap.set(e, []); for(var o = this._maybeLostSequencesMap.get(e), a = 0; a < n; a++){
          o.push(t + a);
        }Ne.debug("".concat(this._className, ".onMessageMaybeLost. maybeLostSequences:").concat(o));
      } }, { key: "detectMessageLoss", value(e, t){
        const n = this._maybeLostSequencesMap.get(e); if(!vt(n) && !vt(t)){
          const o = t.filter(e => -1 !== n.indexOf(e)); if(Ne.debug("".concat(this._className, ".detectMessageLoss. matchedSequences:").concat(o)), n.length === o.length){
            Ne.info("".concat(this._className, ".detectMessageLoss no message loss. conversationID:").concat(e));
          }
          else {
            let a, s = n.filter(e => -1 === o.indexOf(e)), r = s.length; r <= 5 ? a = `${e}-${s.join("-")}` : (s.sort((e, t) => e - t), a = `${e} start:${s[0]} end:${s[r - 1]} count:${r}`), new qa(Js).setMessage(a).setNetworkType(this.getNetworkType()).setLevel("warning").end(), Ne.warn("".concat(this._className, ".detectMessageLoss message loss detected. conversationID:").concat(e, " lostSequences:").concat(s));
          }n.length = 0;
        }
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this._maybeLostSequencesMap.clear();
      } }]), n;
    }(nn), du = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this, e))._className = "CloudControlModule", a._cloudConfig = new Map(), a._expiredTime = 0, a._version = 0, a._isFetching = !1, a;
      } return s(n, [{ key: "getCloudConfig", value(e){
        return Ue(e) ? this._cloudConfig : this._cloudConfig.has(e) ? this._cloudConfig.get(e) : void 0;
      } }, { key: "_canFetchConfig", value(){
        return this.isLoggedIn() && !this._isFetching && Date.now() >= this._expiredTime;
      } }, { key: "fetchConfig", value(){
        const e = this, t = this._canFetchConfig(); if(Ne.log("".concat(this._className, ".fetchConfig canFetchConfig:").concat(t)), t){
          const n = new qa(ar), o = this.getModule(Kt).getSDKAppID(); this._isFetching = !0, this.request({ protocolName: go, requestData: { SDKAppID: o, version: this._version } }).then(t => {
            e._isFetching = !1, n.setMessage("version:".concat(e._version, " newVersion:").concat(t.data.version, " config:").concat(t.data.cloudControlConfig)).setNetworkType(e.getNetworkType()).end(), Ne.log("".concat(e._className, ".fetchConfig ok")), e._parseCloudControlConfig(t.data);
          }).catch(t => {
            e._isFetching = !1, e.probeNetwork().then(e => {
              const o = m(e, 2), a = o[0], s = o[1]; n.setError(t, a, s).end();
            }), Ne.log("".concat(e._className, ".fetchConfig failed. error:"), t), e._setExpiredTimeOnResponseError(12e4);
          });
        }
      } }, { key: "onPushedCloudControlConfig", value(e){
        Ne.log("".concat(this._className, ".onPushedCloudControlConfig")), new qa(sr).setNetworkType(this.getNetworkType()).setMessage("newVersion:".concat(e.version, " config:").concat(e.cloudControlConfig)).end(), this._parseCloudControlConfig(e);
      } }, { key: "onCheckTimer", value(e){
        this._canFetchConfig() && this.fetchConfig();
      } }, { key: "_parseCloudControlConfig", value(e){
        const t = this, n = "".concat(this._className, "._parseCloudControlConfig"), o = e.errorCode, a = e.errorMessage, s = e.cloudControlConfig, r = e.version, i = e.expiredTime; if(0 === o){
          if(this._version !== r){
            let u = null; try {
              u = JSON.parse(s);
            }
            catch(c){
              Ne.error("".concat(n, " JSON parse error:").concat(s));
            }u && (this._cloudConfig.clear(), Object.keys(u).forEach(e => {
              t._cloudConfig.set(e, u[e]);
            }), this._version = r, this.emitInnerEvent(Br.CLOUD_CONFIG_UPDATED));
          } this._expiredTime = Date.now() + 1e3 * i;
        }
        else {
          Ue(o) ? (Ne.log("".concat(n, " failed. Invalid message format:"), e), this._setExpiredTimeOnResponseError(36e5)) : (Ne.error("".concat(n, " errorCode:").concat(o, " errorMessage:").concat(a)), this._setExpiredTimeOnResponseError(12e4));
        }
      } }, { key: "_setExpiredTimeOnResponseError", value(e){
        this._expiredTime = Date.now() + e;
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this._cloudConfig.clear(), this._expiredTime = 0, this._version = 0, this._isFetching = !1;
      } }]), n;
    }(nn), pu = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this, e))._className = "PullGroupMessageModule", a._remoteLastMessageSequenceMap = new Map(), a.PULL_LIMIT_COUNT = 15, a;
      } return s(n, [{ key: "startPull", value(){
        const e = this, t = this._getNeedPullConversationList(); this._getRemoteLastMessageSequenceList().then(() => {
          const n = e.getModule(Vt); t.forEach(t => {
            const o = t.conversationID, a = o.replace(S.CONV_GROUP, ""), s = n.getGroupLocalLastMessageSequence(o), r = e._remoteLastMessageSequenceMap.get(a) || 0, i = r - s; Ne.log("".concat(e._className, ".startPull groupID:").concat(a, " localLastMessageSequence:").concat(s, " ") + "remoteLastMessageSequence:".concat(r, " diff:").concat(i)), s > 0 && i >= 1 && i < 300 && e._pullMissingMessage({ groupID: a, localLastMessageSequence: s, remoteLastMessageSequence: r, diff: i });
          });
        });
      } }, { key: "_getNeedPullConversationList", value(){
        return this.getModule(Vt).getLocalConversationList().filter(e => e.type === S.CONV_GROUP && e.groupProfile.type !== S.GRP_AVCHATROOM);
      } }, { key: "_getRemoteLastMessageSequenceList", value(){
        const e = this; return this.getModule(Ut).getGroupList().then(t => {
          for(let n = t.data.groupList, o = void 0 === n ? [] : n, a = 0; a < o.length; a++){
            const s = o[a], r = s.groupID, i = s.nextMessageSeq; if(s.type !== S.GRP_AVCHATROOM){
              const u = i - 1; e._remoteLastMessageSequenceMap.set(r, u);
            }
          }
        });
      } }, { key: "_pullMissingMessage", value(e){
        const t = this, n = e.localLastMessageSequence, o = e.remoteLastMessageSequence, a = e.diff; e.count = a > this.PULL_LIMIT_COUNT ? this.PULL_LIMIT_COUNT : a, e.sequence = a > this.PULL_LIMIT_COUNT ? n + this.PULL_LIMIT_COUNT : n + a, this._getGroupMissingMessage(e).then(s => {
          s.length > 0 && (s[0].sequence + 1 <= o && (e.localLastMessageSequence = n + t.PULL_LIMIT_COUNT, e.diff = a - t.PULL_LIMIT_COUNT, t._pullMissingMessage(e)), t.getModule(Ut).onNewGroupMessage({ dataList: s, isInstantMessage: !1 }));
        });
      } }, { key: "_getGroupMissingMessage", value(e){
        const t = this, n = new qa(Rs); return this.request({ protocolName: Vn, requestData: { groupID: e.groupID, count: e.count, sequence: e.sequence } }).then(o => {
          const a = o.data.messageList, s = void 0 === a ? [] : a; return n.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(e.groupID, " count:").concat(e.count, " sequence:").concat(e.sequence, " messageList length:").concat(s.length)).end(), s;
        }).catch(e => {
          t.probeNetwork().then(t => {
            const o = m(t, 2), a = o[0], s = o[1]; n.setError(e, a, s).end();
          });
        });
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this._remoteLastMessageSequenceMap.clear();
      } }]), n;
    }(nn), gu = function(){
      function e(){
        o(this, e), this._className = "AvgE2EDelay", this._e2eDelayArray = [];
      } return s(e, [{ key: "addMessageDelay", value(e){
        const t = _t(e.currentTime / 1e3 - e.time, 2); this._e2eDelayArray.push(t);
      } }, { key: "_calcAvg", value(e, t){
        if(0 === t){
          return 0;
        } let n = 0; return e.forEach(e => {
          n += e;
        }), _t(n / t, 1);
      } }, { key: "_calcTotalCount", value(){
        return this._e2eDelayArray.length;
      } }, { key: "_calcCountWithLimit", value(e){
        const t = e.e2eDelayArray, n = e.min, o = e.max; return t.filter(e => n < e && e <= o).length;
      } }, { key: "_calcPercent", value(e, t){
        let n = _t(e / t * 100, 2); return n > 100 && (n = 100), n;
      } }, { key: "_checkE2EDelayException", value(e, t){
        const n = e.filter(e => e > t); if(n.length > 0){
          const o = n.length, a = Math.min.apply(Math, M(n)), s = Math.max.apply(Math, M(n)), r = this._calcAvg(n, o), i = _t(o / e.length * 100, 2); new qa(ds).setMessage("message e2e delay exception. count:".concat(o, " min:").concat(a, " max:").concat(s, " avg:").concat(r, " percent:").concat(i)).setLevel("warning").end();
        }
      } }, { key: "getStatResult", value(){
        const e = this._calcTotalCount(); if(0 === e){
          return null;
        } const t = M(this._e2eDelayArray), n = this._calcCountWithLimit({ e2eDelayArray: t, min: 0, max: 1 }), o = this._calcCountWithLimit({ e2eDelayArray: t, min: 1, max: 3 }), a = this._calcPercent(n, e), s = this._calcPercent(o, e), r = this._calcAvg(t, e); return this._checkE2EDelayException(t, 3), this.reset(), { totalCount: e, countLessThan1Second: n, percentOfCountLessThan1Second: a, countLessThan3Second: o, percentOfCountLessThan3Second: s, avgDelay: r };
      } }, { key: "reset", value(){
        this._e2eDelayArray.length = 0;
      } }]), e;
    }(), hu = function(){
      function e(){
        o(this, e), this._className = "AvgRTT", this._requestCount = 0, this._rttArray = [];
      } return s(e, [{ key: "addRequestCount", value(){
        this._requestCount += 1;
      } }, { key: "addRTT", value(e){
        this._rttArray.push(e);
      } }, { key: "_calcTotalCount", value(){
        return this._requestCount;
      } }, { key: "_calcRTTCount", value(e){
        return e.length;
      } }, { key: "_calcSuccessRateOfRequest", value(e, t){
        if(0 === t){
          return 0;
        } let n = _t(e / t * 100, 2); return n > 100 && (n = 100), n;
      } }, { key: "_calcAvg", value(e, t){
        if(0 === t){
          return 0;
        } let n = 0; return e.forEach(e => {
          n += e;
        }), parseInt(n / t);
      } }, { key: "_calcMax", value(){
        return Math.max.apply(Math, M(this._rttArray));
      } }, { key: "_calcMin", value(){
        return Math.min.apply(Math, M(this._rttArray));
      } }, { key: "getStatResult", value(){
        const e = this._calcTotalCount(), t = M(this._rttArray); if(0 === e){
          return null;
        } const n = this._calcRTTCount(t), o = this._calcSuccessRateOfRequest(n, e), a = this._calcAvg(t, n); return Ne.log("".concat(this._className, ".getStatResult max:").concat(this._calcMax(), " min:").concat(this._calcMin(), " avg:").concat(a)), this.reset(), { totalCount: e, rttCount: n, successRateOfRequest: o, avgRTT: a };
      } }, { key: "reset", value(){
        this._requestCount = 0, this._rttArray.length = 0;
      } }]), e;
    }(), _u = function(){
      function e(){
        o(this, e), this._map = new Map();
      } return s(e, [{ key: "initMap", value(e){
        const t = this; e.forEach(e => {
          t._map.set(e, { totalCount: 0, successCount: 0, failedCountOfUserSide: 0, costArray: [], fileSizeArray: [] });
        });
      } }, { key: "addTotalCount", value(e){
        return !(Ue(e) || !this._map.has(e)) && (this._map.get(e).totalCount += 1, !0);
      } }, { key: "addSuccessCount", value(e){
        return !(Ue(e) || !this._map.has(e)) && (this._map.get(e).successCount += 1, !0);
      } }, { key: "addFailedCountOfUserSide", value(e){
        return !(Ue(e) || !this._map.has(e)) && (this._map.get(e).failedCountOfUserSide += 1, !0);
      } }, { key: "addCost", value(e, t){
        return !(Ue(e) || !this._map.has(e)) && (this._map.get(e).costArray.push(t), !0);
      } }, { key: "addFileSize", value(e, t){
        return !(Ue(e) || !this._map.has(e)) && (this._map.get(e).fileSizeArray.push(t), !0);
      } }, { key: "_calcSuccessRateOfBusiness", value(e){
        if(Ue(e) || !this._map.has(e)){
          return -1;
        } let t = this._map.get(e), n = _t(t.successCount / t.totalCount * 100, 2); return n > 100 && (n = 100), n;
      } }, { key: "_calcSuccessRateOfPlatform", value(e){
        if(Ue(e) || !this._map.has(e)){
          return -1;
        } let t = this._map.get(e), n = this._calcSuccessCountOfPlatform(e) / t.totalCount * 100; return (n = _t(n, 2)) > 100 && (n = 100), n;
      } }, { key: "_calcTotalCount", value(e){
        return Ue(e) || !this._map.has(e) ? -1 : this._map.get(e).totalCount;
      } }, { key: "_calcSuccessCountOfBusiness", value(e){
        return Ue(e) || !this._map.has(e) ? -1 : this._map.get(e).successCount;
      } }, { key: "_calcSuccessCountOfPlatform", value(e){
        if(Ue(e) || !this._map.has(e)){
          return -1;
        } const t = this._map.get(e); return t.successCount + t.failedCountOfUserSide;
      } }, { key: "_calcAvg", value(e){
        return Ue(e) || !this._map.has(e) ? -1 : e === Oa ? this._calcAvgSpeed(e) : this._calcAvgCost(e);
      } }, { key: "_calcAvgCost", value(e){
        const t = this._map.get(e).costArray.length; if(0 === t){
          return 0;
        } let n = 0; return this._map.get(e).costArray.forEach(e => {
          n += e;
        }), parseInt(n / t);
      } }, { key: "_calcAvgSpeed", value(e){
        let t = 0, n = 0; return this._map.get(e).costArray.forEach(e => {
          t += e;
        }), this._map.get(e).fileSizeArray.forEach(e => {
          n += e;
        }), parseInt(1e3 * n / t);
      } }, { key: "getStatResult", value(e){
        const t = this._calcTotalCount(e); if(0 === t){
          return null;
        } const n = this._calcSuccessCountOfBusiness(e), o = this._calcSuccessRateOfBusiness(e), a = this._calcSuccessCountOfPlatform(e), s = this._calcSuccessRateOfPlatform(e), r = this._calcAvg(e); return this.reset(e), { totalCount: t, successCountOfBusiness: n, successRateOfBusiness: o, successCountOfPlatform: a, successRateOfPlatform: s, avgValue: r };
      } }, { key: "reset", value(e){
        Ue(e) ? this._map.clear() : this._map.set(e, { totalCount: 0, successCount: 0, failedCountOfUserSide: 0, costArray: [], fileSizeArray: [] });
      } }]), e;
    }(), fu = function(){
      function e(){
        o(this, e), this._lastMap = new Map(), this._currentMap = new Map();
      } return s(e, [{ key: "initMap", value(e){
        const t = this; e.forEach(e => {
          t._lastMap.set(e, new Map()), t._currentMap.set(e, new Map());
        });
      } }, { key: "addMessageSequence", value(e){
        const t = e.key, n = e.message; if(Ue(t) || !this._lastMap.has(t) || !this._currentMap.has(t)){
          return !1;
        } const o = n.conversationID, a = n.sequence, s = o.replace(S.CONV_GROUP, ""); if(0 === this._lastMap.get(t).size){
          this._addCurrentMap(e);
        }
        else if(this._lastMap.get(t).has(s)){
          const r = this._lastMap.get(t).get(s), i = r.length - 1; a > r[0] && a < r[i] ? (r.push(a), r.sort(), this._lastMap.get(t).set(s, r)) : this._addCurrentMap(e);
        }
        else {
          this._addCurrentMap(e);
        } return !0;
      } }, { key: "_addCurrentMap", value(e){
        const t = e.key, n = e.message, o = n.conversationID, a = n.sequence, s = o.replace(S.CONV_GROUP, ""); this._currentMap.get(t).has(s) || this._currentMap.get(t).set(s, []), this._currentMap.get(t).get(s).push(a);
      } }, { key: "_copyData", value(e){
        if(!Ue(e)){
          this._lastMap.set(e, new Map()); let t, n = this._lastMap.get(e), o = C(this._currentMap.get(e)); try {
            for(o.s(); !(t = o.n()).done;){
              const a = m(t.value, 2), s = a[0], r = a[1]; n.set(s, r);
            }
          }
          catch(i){
            o.e(i);
          }
          finally {
            o.f();
          }n = null, this._currentMap.set(e, new Map());
        }
      } }, { key: "getStatResult", value(e){
        if(Ue(this._currentMap.get(e)) || Ue(this._lastMap.get(e))){
          return null;
        }if(0 === this._lastMap.get(e).size){
          return this._copyData(e), null;
        } let t = 0, n = 0; if(this._lastMap.get(e).forEach((e, o) => {
          const a = M(e.values()), s = a.length, r = a[s - 1] - a[0] + 1; t += r, n += s;
        }), 0 === t){
          return null;
        } let o = _t(n / t * 100, 2); return o > 100 && (o = 100), this._copyData(e), { totalCount: t, successCountOfMessageReceived: n, successRateOfMessageReceived: o };
      } }, { key: "reset", value(){
        this._currentMap.clear(), this._lastMap.clear();
      } }]), e;
    }(), mu = function(e){
      i(a, e); const n = f(a); function a(e){
        let t; o(this, a), (t = n.call(this, e))._className = "QualityStatModule", t.TAG = "im-ssolog-quality-stat", t.reportIndex = 0, t.wholePeriod = !1, t._qualityItems = [ka, Sa, Ea, Aa, Na, La, Oa, Ra, Ga, ba], t._messageSentItems = [Ea, Aa, Na, La, Oa], t._messageReceivedItems = [Ra, Ga, ba], t.REPORT_INTERVAL = 120, t.REPORT_SDKAPPID_BLACKLIST = [], t.REPORT_TINYID_WHITELIST = [], t._statInfoArr = [], t._avgRTT = new hu(), t._avgE2EDelay = new gu(), t._rateMessageSent = new _u(), t._rateMessageReceived = new fu(); const s = t.getInnerEmitterInstance(); return s.on(Br.CONTEXT_A2KEY_AND_TINYID_UPDATED, t._onLoginSuccess, h(t)), s.on(Br.CLOUD_CONFIG_UPDATED, t._onCloudConfigUpdated, h(t)), t;
      } return s(a, [{ key: "_onLoginSuccess", value(){
        const e = this; this._rateMessageSent.initMap(this._messageSentItems), this._rateMessageReceived.initMap(this._messageReceivedItems); const t = this.getModule(xt), n = t.getItem(this.TAG, !1); !vt(n) && qe(n.forEach) && (Ne.log("".concat(this._className, "._onLoginSuccess.get quality stat log in storage, nums=").concat(n.length)), n.forEach(t => {
          e._statInfoArr.push(t);
        }), t.removeItem(this.TAG, !1));
      } }, { key: "_onCloudConfigUpdated", value(){
        const e = this.getCloudConfig("q_rpt_interval"), t = this.getCloudConfig("q_rpt_sdkappid_bl"), n = this.getCloudConfig("q_rpt_tinyid_wl"); Ue(e) || (this.REPORT_INTERVAL = Number(e)), Ue(t) || (this.REPORT_SDKAPPID_BLACKLIST = t.split(",").map(e => Number(e))), Ue(n) || (this.REPORT_TINYID_WHITELIST = n.split(","));
      } }, { key: "onCheckTimer", value(e){
        this.isLoggedIn() && 0 == e % this.REPORT_INTERVAL && (this.wholePeriod = !0, this._report());
      } }, { key: "addRequestCount", value(){
        this._avgRTT.addRequestCount();
      } }, { key: "addRTT", value(e){
        this._avgRTT.addRTT(e);
      } }, { key: "addMessageDelay", value(e){
        this._avgE2EDelay.addMessageDelay(e);
      } }, { key: "addTotalCount", value(e){
        this._rateMessageSent.addTotalCount(e) || Ne.warn("".concat(this._className, ".addTotalCount invalid key:"), e);
      } }, { key: "addSuccessCount", value(e){
        this._rateMessageSent.addSuccessCount(e) || Ne.warn("".concat(this._className, ".addSuccessCount invalid key:"), e);
      } }, { key: "addFailedCountOfUserSide", value(e){
        this._rateMessageSent.addFailedCountOfUserSide(e) || Ne.warn("".concat(this._className, ".addFailedCountOfUserSide invalid key:"), e);
      } }, { key: "addCost", value(e, t){
        this._rateMessageSent.addCost(e, t) || Ne.warn("".concat(this._className, ".addCost invalid key or cost:"), e, t);
      } }, { key: "addFileSize", value(e, t){
        this._rateMessageSent.addFileSize(e, t) || Ne.warn("".concat(this._className, ".addFileSize invalid key or size:"), e, t);
      } }, { key: "addMessageSequence", value(e){
        this._rateMessageReceived.addMessageSequence(e) || Ne.warn("".concat(this._className, ".addMessageSequence invalid key:"), e.key);
      } }, { key: "_getQualityItem", value(e){
        let n = {}, o = Ua[this.getNetworkType()]; Ue(o) && (o = 8); const a = { qualityType: Pa[e], timestamp: Ce(), networkType: o, extension: "" }; switch(e){
          case ka: n = this._avgRTT.getStatResult(); break; case Sa: n = this._avgE2EDelay.getStatResult(); break; case Ea: case Aa: case Na: case La: case Oa: n = this._rateMessageSent.getStatResult(e); break; case Ra: case Ga: case ba: n = this._rateMessageReceived.getStatResult(e);
        } return null === n ? null : t(t({}, a), n);
      } }, { key: "_report", value(e){
        let t = this, n = [], o = null; Ue(e) ? this._qualityItems.forEach(e => {
          null !== (o = t._getQualityItem(e)) && (o.reportIndex = t.reportIndex, o.wholePeriod = t.wholePeriod, n.push(o));
        }) : null !== (o = this._getQualityItem(e)) && (o.reportIndex = this.reportIndex, o.wholePeriod = this.wholePeriod, n.push(o)), Ne.debug("".concat(this._className, "._report"), n), this._statInfoArr.length > 0 && (n = n.concat(this._statInfoArr), this._statInfoArr = []); const a = this.getModule(Kt), s = a.getSDKAppID(), r = a.getTinyID(); ft(this.REPORT_SDKAPPID_BLACKLIST, s) && !mt(this.REPORT_TINYID_WHITELIST, r) && (n = []), n.length > 0 && this._doReport(n);
      } }, { key: "_doReport", value(e){
        const n = this, o = { header: Ai(this), quality: e }; this.request({ protocolName: so, requestData: t({}, o) }).then(() => {
          n.reportIndex++, n.wholePeriod = !1;
        }).catch(t => {
          Ne.warn("".concat(n._className, "._doReport, online:").concat(n.getNetworkType(), " error:"), t), n._statInfoArr = n._statInfoArr.concat(e), n._flushAtOnce();
        });
      } }, { key: "_flushAtOnce", value(){
        const e = this.getModule(xt), t = e.getItem(this.TAG, !1), n = this._statInfoArr; if(vt(t)){
          Ne.log("".concat(this._className, "._flushAtOnce count:").concat(n.length)), e.setItem(this.TAG, n, !0, !1);
        }
        else {
          let o = n.concat(t); o.length > 10 && (o = o.slice(0, 10)), Ne.log("".concat(this.className, "._flushAtOnce count:").concat(o.length)), e.setItem(this.TAG, o, !0, !1);
        } this._statInfoArr = [];
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), this._report(), this.reportIndex = 0, this.wholePeriod = !1, this.REPORT_SDKAPPID_BLACKLIST = [], this.REPORT_TINYID_WHITELIST = [], this._avgRTT.reset(), this._avgE2EDelay.reset(), this._rateMessageSent.reset(), this._rateMessageReceived.reset();
      } }]), a;
    }(nn), Mu = function(e){
      i(n, e); const t = f(n); function n(e){
        let a; return o(this, n), (a = t.call(this, e))._className = "WorkerModule", a._isWorkerEnabled = !1, a._workerTimer = null, a._init(), a.getInnerEmitterInstance().on(Br.CLOUD_CONFIG_UPDATED, a._onCloudConfigUpdated, h(a)), a;
      } return s(n, [{ key: "isWorkerEnabled", value(){
        return this._isWorkerEnabled && me && this._workerTimer;
      } }, { key: "startWorkerTimer", value(){
        Ne.log("".concat(this._className, ".startWorkerTimer")), this._workerTimer && this._workerTimer.postMessage("start");
      } }, { key: "stopWorkerTimer", value(){
        Ne.log("".concat(this._className, ".stopWorkerTimer")), this._workerTimer && this._workerTimer.postMessage("stop");
      } }, { key: "_init", value(){
        if(me){
          const e = URL.createObjectURL(new Blob(["let interval = -1;onmessage = function(event) {  if (event.data === \"start\") {    if (interval > 0) {      clearInterval(interval);    }    interval = setInterval(() => {      postMessage(\"\");    }, 1000)  } else if (event.data === \"stop\") {    clearInterval(interval);    interval = -1;  }};"], { type: "application/javascript; charset=utf-8" })); this._workerTimer = new Worker(e); const t = this; this._workerTimer.onmessage = function(){
            t._moduleManager.onCheckTimer();
          };
        }
      } }, { key: "_onCloudConfigUpdated", value(){
        "1" === this.getCloudConfig("enable_worker") ? !this._isWorkerEnabled && me && (this._isWorkerEnabled = !0, this.startWorkerTimer(), this._moduleManager.onWorkerTimerEnabled()) : this._isWorkerEnabled && me && (this._isWorkerEnabled = !1, this.stopWorkerTimer(), this._moduleManager.onWorkerTimerDisabled());
      } }, { key: "terminate", value(){
        Ne.log("".concat(this._className, ".terminate")), this._workerTimer && (this._workerTimer.terminate(), this._workerTimer = null);
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset"));
      } }]), n;
    }(nn), vu = function(){
      function e(t){
        o(this, e); const n = new qa(Va); this._className = "ModuleManager", this._isReady = !1, this._startLoginTs = 0, this._moduleMap = new Map(), this._innerEmitter = null, this._outerEmitter = null, this._checkCount = 0, this._checkTimer = -1, this._moduleMap.set(Kt, new Di(this, t)), this._moduleMap.set(Qt, new du(this)), this._moduleMap.set(Zt, new Mu(this)), this._moduleMap.set(tn, new mu(this)), this._moduleMap.set(Jt, new ou(this)), this._moduleMap.set(zt, new cu(this)), this._moduleMap.set(Gt, new Ci(this)), this._moduleMap.set(bt, new Vi(this)), this._moduleMap.set(Pt, new Ti(this)), this._moduleMap.set(wt, new Kr(this)), this._moduleMap.set(Vt, new si(this)), this._moduleMap.set(Ut, new fi(this)), this._moduleMap.set(qt, new Mi(this)), this._moduleMap.set(xt, new Si(this)), this._moduleMap.set(Bt, new Ni(this)), this._moduleMap.set(Ht, new Ri(this)), this._moduleMap.set(jt, new bi(this)), this._moduleMap.set(Yt, new Pi(this)), this._moduleMap.set($t, new Ki(this)), this._moduleMap.set(Wt, new xi(this)), this._moduleMap.set(Xt, new lu(this)), this._moduleMap.set(en, new pu(this)); const a = t.instanceID, s = t.oversea, r = t.SDKAppID, i = "instanceID:".concat(a, " oversea:").concat(s, " workerAvailable:").concat(me, " host:").concat(dt(), " ") + "inBrowser:".concat(Q, " inMiniApp:").concat(X, " SDKAppID:").concat(r, " UserAgent:").concat(te); qa.bindEventStatModule(this._moduleMap.get(Bt)), n.setMessage("".concat(i)).end(), Ne.info("SDK ".concat(i)), this._readyList = void 0, this._ssoLogForReady = null, this._initReadyList();
      } return s(e, [{ key: "_startTimer", value(){
        const e = this._moduleMap.get(Zt).isWorkerEnabled(); Ne.log("".concat(this._className, ".startTimer isWorkerEnabled:").concat(e, " seed:").concat(this._checkTimer)), e ? this._moduleMap.get(Zt).startWorkerTimer() : this._startMainThreadTimer();
      } }, { key: "_startMainThreadTimer", value(){
        Ne.log("".concat(this._className, "._startMainThreadTimer")), this._checkTimer < 0 && (this._checkTimer = setInterval(this.onCheckTimer.bind(this), 1e3));
      } }, { key: "stopTimer", value(){
        const e = this._moduleMap.get(Zt).isWorkerEnabled(); Ne.log("".concat(this._className, ".stopTimer isWorkerEnabled:").concat(e, " seed:").concat(this._checkTimer)), e ? this._moduleMap.get(Zt).stopWorkerTimer() : this._stopMainThreadTimer();
      } }, { key: "_stopMainThreadTimer", value(){
        Ne.log("".concat(this._className, "._stopMainThreadTimer")), this._checkTimer > 0 && (clearInterval(this._checkTimer), this._checkTimer = -1, this._checkCount = 0);
      } }, { key: "onWorkerTimerEnabled", value(){
        Ne.log("".concat(this._className, ".onWorkerTimerEnabled, disable main thread timer")), this._stopMainThreadTimer();
      } }, { key: "onWorkerTimerDisabled", value(){
        Ne.log("".concat(this._className, ".onWorkerTimerDisabled, enable main thread timer")), this._startMainThreadTimer();
      } }, { key: "onCheckTimer", value(){
        this._checkCount += 1; let e, t = C(this._moduleMap); try {
          for(t.s(); !(e = t.n()).done;){
            const n = m(e.value, 2)[1]; n.onCheckTimer && n.onCheckTimer(this._checkCount);
          }
        }
        catch(o){
          t.e(o);
        }
        finally {
          t.f();
        }
      } }, { key: "_initReadyList", value(){
        const e = this; this._readyList = [this._moduleMap.get(Gt), this._moduleMap.get(Vt)], this._readyList.forEach(t => {
          t.ready(() => e._onModuleReady());
        });
      } }, { key: "_onModuleReady", value(){
        let e = !0; if(this._readyList.forEach(t => {
          t.isReady() || (e = !1);
        }), e && !this._isReady){
          this._isReady = !0, this._outerEmitter.emit(k.SDK_READY); const t = Date.now() - this._startLoginTs; Ne.warn("SDK is ready. cost ".concat(t, " ms")), this._startLoginTs = Date.now(); const n = this._moduleMap.get(Ht).getNetworkType(), o = this._ssoLogForReady.getStartTs() + De; this._ssoLogForReady.setNetworkType(n).setMessage(t).start(o).end();
        }
      } }, { key: "login", value(){
        0 === this._startLoginTs && (ke(), this._startLoginTs = Date.now(), this._startTimer(), this._moduleMap.get(Ht).start(), this._ssoLogForReady = new qa(Ka));
      } }, { key: "onLoginFailed", value(){
        this._startLoginTs = 0;
      } }, { key: "getOuterEmitterInstance", value(){
        return null === this._outerEmitter && (this._outerEmitter = new Gi(), Fr(this._outerEmitter), this._outerEmitter._emit = this._outerEmitter.emit, this._outerEmitter.emit = function(e, t){
          const n = arguments[0], o = [n, { name: arguments[0], data: arguments[1] }]; this._outerEmitter._emit.apply(this._outerEmitter, o);
        }.bind(this)), this._outerEmitter;
      } }, { key: "getInnerEmitterInstance", value(){
        return null === this._innerEmitter && (this._innerEmitter = new Gi(), this._innerEmitter._emit = this._innerEmitter.emit, this._innerEmitter.emit = function(e, t){
          let n; Pe(arguments[1]) && arguments[1].data ? (Ne.warn("inner eventData has data property, please check!"), n = [e, { name: arguments[0], data: arguments[1].data }]) : n = [e, { name: arguments[0], data: arguments[1] }], this._innerEmitter._emit.apply(this._innerEmitter, n);
        }.bind(this)), this._innerEmitter;
      } }, { key: "hasModule", value(e){
        return this._moduleMap.has(e);
      } }, { key: "getModule", value(e){
        return this._moduleMap.get(e);
      } }, { key: "isReady", value(){
        return this._isReady;
      } }, { key: "onError", value(e){
        Ne.warn("Oops! code:".concat(e.code, " message:").concat(e.message)), new qa(rr).setMessage("code:".concat(e.code, " message:").concat(e.message)).setNetworkType(this.getModule(Ht).getNetworkType()).setLevel("error").end(), this.getOuterEmitterInstance().emit(k.ERROR, e);
      } }, { key: "reset", value(){
        Ne.log("".concat(this._className, ".reset")), ke(); let e, t = C(this._moduleMap); try {
          for(t.s(); !(e = t.n()).done;){
            const n = m(e.value, 2)[1]; n.reset && n.reset();
          }
        }
        catch(o){
          t.e(o);
        }
        finally {
          t.f();
        } this._startLoginTs = 0, this._initReadyList(), this._isReady = !1, this.stopTimer(), this._outerEmitter.emit(k.SDK_NOT_READY);
      } }]), e;
    }(), yu = function(){
      function e(){
        o(this, e), this._funcMap = new Map();
      } return s(e, [{ key: "defense", value(e, t){
        const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; if("string" != typeof e){
          return null;
        }if(0 === e.length){
          return null;
        }if("function" != typeof t){
          return null;
        }if(this._funcMap.has(e) && this._funcMap.get(e).has(t)){
          return this._funcMap.get(e).get(t);
        } this._funcMap.has(e) || this._funcMap.set(e, new Map()); let o = null; return this._funcMap.get(e).has(t) ? o = this._funcMap.get(e).get(t) : (o = this._pack(e, t, n), this._funcMap.get(e).set(t, o)), o;
      } }, { key: "defenseOnce", value(e, t){
        const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; return "function" != typeof t ? null : this._pack(e, t, n);
      } }, { key: "find", value(e, t){
        return "string" != typeof e || 0 === e.length || "function" != typeof t ? null : this._funcMap.has(e) ? this._funcMap.get(e).has(t) ? this._funcMap.get(e).get(t) : (Ne.log("SafetyCallback.find: 找不到 func —— ".concat(e, "/").concat("" !== t.name ? t.name : "[anonymous]")), null) : (Ne.log("SafetyCallback.find: 找不到 eventName-".concat(e, " 对应的 func")), null);
      } }, { key: "delete", value(e, t){
        return "function" == typeof t && (!!this._funcMap.has(e) && (!!this._funcMap.get(e).has(t) && (this._funcMap.get(e).delete(t), 0 === this._funcMap.get(e).size && this._funcMap.delete(e), !0)));
      } }, { key: "_pack", value(e, t, n){
        return function(){
          try {
            t.apply(n, Array.from(arguments));
          }
          catch(r){
            const o = Object.values(k).indexOf(e); if(-1 !== o){
              const a = Object.keys(k)[o]; Ne.warn("接入侧事件 TIM.EVENT.".concat(a, " 对应的回调函数逻辑存在问题，请检查！"), r);
            } const s = new qa(or); s.setMessage("eventName:".concat(e)).setMoreMessage(r.message).end();
          }
        };
      } }]), e;
    }(), Iu = function(){
      function e(t){
        o(this, e); const n = { SDKAppID: t.SDKAppID, unlimitedAVChatRoom: t.unlimitedAVChatRoom || !1, scene: t.scene || "", oversea: t.oversea || !1, instanceID: lt() }; this._moduleManager = new vu(n), this._safetyCallbackFactory = new yu();
      } return s(e, [{ key: "isReady", value(){
        return this._moduleManager.isReady();
      } }, { key: "onError", value(e){
        this._moduleManager.onError(e);
      } }, { key: "login", value(e){
        return this._moduleManager.login(), this._moduleManager.getModule(Gt).login(e);
      } }, { key: "logout", value(){
        const e = this; return this._moduleManager.getModule(Gt).logout().then(t => (e._moduleManager.reset(), t));
      } }, { key: "destroy", value(){
        const e = this; return this.logout().finally(() => {
          e._moduleManager.stopTimer(), e._moduleManager.getModule(Zt).terminate(), e._moduleManager.getModule(Jt).dealloc(); const t = e._moduleManager.getOuterEmitterInstance(), n = e._moduleManager.getModule(Kt); t.emit(k.SDK_DESTROY, { SDKAppID: n.getSDKAppID() });
        });
      } }, { key: "on", value(e, t, n){
        e === k.GROUP_SYSTEM_NOTICE_RECEIVED && Ne.warn("！！！TIM.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED v2.6.0起弃用，为了更好的体验，请在 TIM.EVENT.MESSAGE_RECEIVED 事件回调内接收处理群系统通知，详细请参考：https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.GroupSystemNoticePayload"), Ne.debug("on", "eventName:".concat(e)), this._moduleManager.getOuterEmitterInstance().on(e, this._safetyCallbackFactory.defense(e, t, n), n);
      } }, { key: "once", value(e, t, n){
        Ne.debug("once", "eventName:".concat(e)), this._moduleManager.getOuterEmitterInstance().once(e, this._safetyCallbackFactory.defenseOnce(e, t, n), n || this);
      } }, { key: "off", value(e, t, n, o){
        Ne.debug("off", "eventName:".concat(e)); const a = this._safetyCallbackFactory.find(e, t); null !== a && (this._moduleManager.getOuterEmitterInstance().off(e, a, n, o), this._safetyCallbackFactory.delete(e, t));
      } }, { key: "registerPlugin", value(e){
        this._moduleManager.getModule($t).registerPlugin(e);
      } }, { key: "setLogLevel", value(e){
        if(e <= 0){
          console.log(["", " ________  ______  __       __  __       __  ________  _______", "|        \\|      \\|  \\     /  \\|  \\  _  |  \\|        \\|       \\", " \\$$$$$$$$ \\$$$$$$| $$\\   /  $$| $$ / \\ | $$| $$$$$$$$| $$$$$$$\\", "   | $$     | $$  | $$$\\ /  $$$| $$/  $\\| $$| $$__    | $$__/ $$", "   | $$     | $$  | $$$$\\  $$$$| $$  $$$\\ $$| $$  \\   | $$    $$", "   | $$     | $$  | $$\\$$ $$ $$| $$ $$\\$$\\$$| $$$$$   | $$$$$$$\\", "   | $$    _| $$_ | $$ \\$$$| $$| $$$$  \\$$$$| $$_____ | $$__/ $$", "   | $$   |   $$ \\| $$  \\$ | $$| $$$    \\$$$| $$     \\| $$    $$", "    \\$$    \\$$$$$$ \\$$      \\$$ \\$$      \\$$ \\$$$$$$$$ \\$$$$$$$", "", ""].join("\n")), console.log("%cIM 智能客服，随时随地解决您的问题 →_→ https://cloud.tencent.com/act/event/smarty-service?from=im-doc", "color:#006eff"), console.log("%c从v2.11.2起，SDK 支持了 WebSocket，小程序需要添加受信域名！升级指引: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-02-upgradeguideline.html", "color:#ff0000"); console.log(["", "参考以下文档，会更快解决问题哦！(#^.^#)\n", "SDK 更新日志: https://cloud.tencent.com/document/product/269/38492\n", "SDK 接口文档: https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html\n", "常见问题: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-01-faq.html\n", "反馈问题？戳我提 issue: https://github.com/tencentyun/TIMSDK/issues\n", "如果您需要在生产环境关闭上面的日志，请 tim.setLogLevel(1)\n"].join("\n"));
        }Ne.setLevel(e);
      } }, { key: "createTextMessage", value(e){
        return this._moduleManager.getModule(bt).createTextMessage(e);
      } }, { key: "createTextAtMessage", value(e){
        return this._moduleManager.getModule(bt).createTextMessage(e);
      } }, { key: "createImageMessage", value(e){
        return this._moduleManager.getModule(bt).createImageMessage(e);
      } }, { key: "createAudioMessage", value(e){
        return this._moduleManager.getModule(bt).createAudioMessage(e);
      } }, { key: "createVideoMessage", value(e){
        return this._moduleManager.getModule(bt).createVideoMessage(e);
      } }, { key: "createCustomMessage", value(e){
        return this._moduleManager.getModule(bt).createCustomMessage(e);
      } }, { key: "createFaceMessage", value(e){
        return this._moduleManager.getModule(bt).createFaceMessage(e);
      } }, { key: "createFileMessage", value(e){
        return this._moduleManager.getModule(bt).createFileMessage(e);
      } }, { key: "createLocationMessage", value(e){
        return this._moduleManager.getModule(bt).createLocationMessage(e);
      } }, { key: "createMergerMessage", value(e){
        return this._moduleManager.getModule(bt).createMergerMessage(e);
      } }, { key: "downloadMergerMessage", value(e){
        return e.type !== S.MSG_MERGER ? Vr(new wr({ code: _o.MESSAGE_MERGER_TYPE_INVALID, message: Ho })) : vt(e.payload.downloadKey) ? Vr(new wr({ code: _o.MESSAGE_MERGER_KEY_INVALID, message: jo })) : this._moduleManager.getModule(bt).downloadMergerMessage(e).catch(e => Vr(new wr({ code: _o.MESSAGE_MERGER_DOWNLOAD_FAIL, message: Yo })));
      } }, { key: "createForwardMessage", value(e){
        return this._moduleManager.getModule(bt).createForwardMessage(e);
      } }, { key: "sendMessage", value(e, t){
        return e instanceof Nr ? this._moduleManager.getModule(bt).sendMessageInstance(e, t) : Vr(new wr({ code: _o.MESSAGE_SEND_NEED_MESSAGE_INSTANCE, message: So }));
      } }, { key: "callExperimentalAPI", value(e, t){
        return "handleGroupInvitation" === e ? this._moduleManager.getModule(Ut).handleGroupInvitation(t) : Vr(new wr({ code: _o.INVALID_OPERATION, message: ya }));
      } }, { key: "revokeMessage", value(e){
        return this._moduleManager.getModule(bt).revokeMessage(e);
      } }, { key: "resendMessage", value(e){
        return this._moduleManager.getModule(bt).resendMessage(e);
      } }, { key: "deleteMessage", value(e){
        return this._moduleManager.getModule(bt).deleteMessage(e);
      } }, { key: "getMessageList", value(e){
        return this._moduleManager.getModule(Vt).getMessageList(e);
      } }, { key: "setMessageRead", value(e){
        return this._moduleManager.getModule(Vt).setMessageRead(e);
      } }, { key: "getConversationList", value(e){
        return this._moduleManager.getModule(Vt).getConversationList(e);
      } }, { key: "getConversationProfile", value(e){
        return this._moduleManager.getModule(Vt).getConversationProfile(e);
      } }, { key: "deleteConversation", value(e){
        return this._moduleManager.getModule(Vt).deleteConversation(e);
      } }, { key: "pinConversation", value(e){
        return this._moduleManager.getModule(Vt).pinConversation(e);
      } }, { key: "getMyProfile", value(){
        return this._moduleManager.getModule(Pt).getMyProfile();
      } }, { key: "getUserProfile", value(e){
        return this._moduleManager.getModule(Pt).getUserProfile(e);
      } }, { key: "updateMyProfile", value(e){
        return this._moduleManager.getModule(Pt).updateMyProfile(e);
      } }, { key: "getBlacklist", value(){
        return this._moduleManager.getModule(Pt).getLocalBlacklist();
      } }, { key: "addToBlacklist", value(e){
        return this._moduleManager.getModule(Pt).addBlacklist(e);
      } }, { key: "removeFromBlacklist", value(e){
        return this._moduleManager.getModule(Pt).deleteBlacklist(e);
      } }, { key: "getFriendList", value(){
        const e = this._moduleManager.getModule(Ft); return e ? e.getLocalFriendList() : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "addFriend", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.addFriend(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "deleteFriend", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.deleteFriend(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "checkFriend", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.checkFriend(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "getFriendProfile", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.getFriendProfile(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "updateFriend", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.updateFriend(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "getFriendApplicationList", value(){
        const e = this._moduleManager.getModule(Ft); return e ? e.getLocalFriendApplicationList() : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "acceptFriendApplication", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.acceptFriendApplication(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "refuseFriendApplication", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.refuseFriendApplication(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "deleteFriendApplication", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.deleteFriendApplication(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "setFriendApplicationRead", value(){
        const e = this._moduleManager.getModule(Ft); return e ? e.setFriendApplicationRead() : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "getFriendGroupList", value(){
        const e = this._moduleManager.getModule(Ft); return e ? e.getLocalFriendGroupList() : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "createFriendGroup", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.createFriendGroup(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "deleteFriendGroup", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.deleteFriendGroup(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "addToFriendGroup", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.addToFriendGroup(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "removeFromFriendGroup", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.removeFromFriendGroup(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "renameFriendGroup", value(e){
        const t = this._moduleManager.getModule(Ft); return t ? t.renameFriendGroup(e) : Vr({ code: _o.CANNOT_FIND_MODULE, message: Ta });
      } }, { key: "getGroupList", value(e){
        return this._moduleManager.getModule(Ut).getGroupList(e);
      } }, { key: "getGroupProfile", value(e){
        return this._moduleManager.getModule(Ut).getGroupProfile(e);
      } }, { key: "createGroup", value(e){
        return this._moduleManager.getModule(Ut).createGroup(e);
      } }, { key: "dismissGroup", value(e){
        return this._moduleManager.getModule(Ut).dismissGroup(e);
      } }, { key: "updateGroupProfile", value(e){
        return this._moduleManager.getModule(Ut).updateGroupProfile(e);
      } }, { key: "joinGroup", value(e){
        return this._moduleManager.getModule(Ut).joinGroup(e);
      } }, { key: "quitGroup", value(e){
        return this._moduleManager.getModule(Ut).quitGroup(e);
      } }, { key: "searchGroupByID", value(e){
        return this._moduleManager.getModule(Ut).searchGroupByID(e);
      } }, { key: "getGroupOnlineMemberCount", value(e){
        return this._moduleManager.getModule(Ut).getGroupOnlineMemberCount(e);
      } }, { key: "changeGroupOwner", value(e){
        return this._moduleManager.getModule(Ut).changeGroupOwner(e);
      } }, { key: "handleGroupApplication", value(e){
        return this._moduleManager.getModule(Ut).handleGroupApplication(e);
      } }, { key: "initGroupAttributes", value(e){
        return this._moduleManager.getModule(Ut).initGroupAttributes(e);
      } }, { key: "setGroupAttributes", value(e){
        return this._moduleManager.getModule(Ut).setGroupAttributes(e);
      } }, { key: "deleteGroupAttributes", value(e){
        return this._moduleManager.getModule(Ut).deleteGroupAttributes(e);
      } }, { key: "getGroupAttributes", value(e){
        return this._moduleManager.getModule(Ut).getGroupAttributes(e);
      } }, { key: "getGroupMemberList", value(e){
        return this._moduleManager.getModule(qt).getGroupMemberList(e);
      } }, { key: "getGroupMemberProfile", value(e){
        return this._moduleManager.getModule(qt).getGroupMemberProfile(e);
      } }, { key: "addGroupMember", value(e){
        return this._moduleManager.getModule(qt).addGroupMember(e);
      } }, { key: "deleteGroupMember", value(e){
        return this._moduleManager.getModule(qt).deleteGroupMember(e);
      } }, { key: "setGroupMemberMuteTime", value(e){
        return this._moduleManager.getModule(qt).setGroupMemberMuteTime(e);
      } }, { key: "setGroupMemberRole", value(e){
        return this._moduleManager.getModule(qt).setGroupMemberRole(e);
      } }, { key: "setGroupMemberNameCard", value(e){
        return this._moduleManager.getModule(qt).setGroupMemberNameCard(e);
      } }, { key: "setGroupMemberCustomField", value(e){
        return this._moduleManager.getModule(qt).setGroupMemberCustomField(e);
      } }, { key: "setMessageRemindType", value(e){
        return this._moduleManager.getModule(qt).setMessageRemindType(e);
      } }]), e;
    }(), Tu = { login: "login", logout: "logout", destroy: "destroy", on: "on", off: "off", ready: "ready", setLogLevel: "setLogLevel", joinGroup: "joinGroup", quitGroup: "quitGroup", registerPlugin: "registerPlugin", getGroupOnlineMemberCount: "getGroupOnlineMemberCount" }; function Du(e, t){
    if(e.isReady() || void 0 !== Tu[t]){
      return !0;
    } const n = new wr({ code: _o.SDK_IS_NOT_READY, message: "".concat(t, " ").concat(Da, "，请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/module-EVENT.html#.SDK_READY") }); return e.onError(n), !1;
  } const Cu = {}, ku = {}; return ku.create = function(e){
    let n = 0; if(Re(e.SDKAppID)){
      n = e.SDKAppID;
    }
    else if(Ne.warn("TIM.create SDKAppID 的类型应该为 Number，请修改！"), n = parseInt(e.SDKAppID), isNaN(n)){
      return Ne.error("TIM.create failed. 解析 SDKAppID 失败，请检查传参！"), null;
    }if(n && Cu[n]){
      return Cu[n];
    } Ne.log("TIM.create"); const o = new Iu(t(t({}, e), {}, { SDKAppID: n })); o.on(k.SDK_DESTROY, e => {
      Cu[e.data.SDKAppID] = null, delete Cu[e.data.SDKAppID];
    }); const a = function(e){
      const t = Object.create(null); return Object.keys(Rt).forEach(n => {
        if(e[n]){
          const o = Rt[n], a = new E(); t[o] = function(){
            const t = Array.from(arguments); return a.use((t, o) => Du(e, n) ? o() : Vr(new wr({ code: _o.SDK_IS_NOT_READY, message: "".concat(n, " ").concat(Da, "。") }))).use((e, t) => {
              if(!0 === yt(e, Ot[n], o)){
                return t();
              }
            }).use((t, o) => e[n].apply(e, t)), a.run(t);
          };
        }
      }), t;
    }(o); return Cu[n] = a, Ne.log("TIM.create ok"), a;
  }, ku.TYPES = S, ku.EVENT = k, ku.VERSION = "2.15.0", Ne.log("TIM.VERSION: ".concat(ku.VERSION)), ku;
});