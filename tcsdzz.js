var body = $response.body;
var objc = JSON.parse(body);

objc = {
  "code" : 200,
  "data" : {
    "ai_exp_flag" : 0,
    "relive_card" : 0,
    "total_game_count" : 31,
    "bounty_game_flag" : 0,
    "chest_today_length" : 1090,
    "user_item" : {
      "user_box" : [

      ],
      "user_limited_kill" : [

      ],
      "user_skin_chips" : [
        {
          "item_id" : 1009,
          "num" : 67
        }
      ],
      "skin_card" : [

      ],
      "user_limited_skin" : [
        {
          "item_id" : 606,
          "use_limit_time" : 604800,
          "expire_time" : 1676190262
        }
      ],
      "user_kill_chips" : [

      ],
      "user_skin" : [
        926,
        906,
        1001,
        124,
        118,
        813,
        607,
        815
      ],
      "user_kill" : [

      ]
    },
    "game_buff_remain" : 3,
    "box_id" : 0,
    "group_match_flag" : 0,
    "user_money" : {
      "diamond" : 777,
      "coin" : 991470,
      "happycoin" : 888
    },
    "chest_days" : 5,
    "ws_addr" : "wss://wxsnake-ws.afunapp.com:6002/ws",
    "rank" : 25,
    "protect_card" : 0,
    "skill_info" : {
      "skill_level" : 15
    },
    "endless_max_length" : 121855,
    "limit_game_flag" : 1,
    "share_code" : "19FAXGG",
    "perform_score" : 15,
    "first_charge_select_idx" : 0,
    "revive_share_flag" : 0,
    "share_remain_info" : {
      "position9" : {
        "share_remain_x" : 0,
        "share_remain_n" : 0,
        "share_remain_m" : 0
      },
      "position13" : {
        "share_remain_x" : 0,
        "share_remain_n" : 0,
        "share_remain_m" : 0
      },
      "position14" : {
        "share_remain_x" : 0,
        "share_remain_n" : 0,
        "share_remain_m" : 0
      },
      "position10" : {
        "share_remain_x" : 0,
        "share_remain_n" : 0,
        "share_remain_m" : 0
      }
    },
    "share_remain_m" : 0,
    "user_share_flag" : 0,
    "ad_card" : 1,
    "forever_limit" : {
      "items" : {

      }
    },
    "bounty_open_flag" : 1,
    "rank_game_flag" : 1,
    "weekly_buy_limit_info" : {
      "items" : {
        "23_1" : 1
      }
    },
    "game_skin_remain" : 7,
    "competition_flag" : 0,
    "share_skin_flag" : {
      "1001" : 1,
      "118" : 1,
      "124" : 1,
      "813" : 1,
       
      "926" : 1,
      "607" : 1,
      "815" : 1,
      "906" : 1
    },
    "skin_card" : {

    },
    "first_charge_pack_day" : 0,
    "rank_open_flag" : 1,
    "chest_ad_times" : [

    ],
    "new_flag" : 0,
    "user_info" : {
      "avatar" : "https://thirdwx.qlogo.cn/mmopen/vi_32/LPClibVXwCyv2494cr3DOF61uVJcc62wmt4oRQA8ZV2Shh1oMzj1prsvibTOyCueHzL0aLvUcZZTFaxeuNdB52fA/132",
      "gender" : 1,
      "login_type" : 2,
      "nickname" : "啊哈",
      "openid" : "odhAB5bUqsKolqHDXHh10ju64JvQ",
      "gamename" : "",
      "uid" : 76296724,
      "register_time" : 1549329823
    },
    "bounty_game_skin_remain" : 7,
    "first_charge_pack_flag" : 0,
    "game_flag" : 1,
    "bounty_reward_flag" : 0,
    "rank_new_flag" : 2,
    "doll_coin" : 999,
    "daily_buy_limit_info" : {
      "items" : {
        "20_6" : 1
      }
    },
    "bingo_card" : 0,
    "goods_buy" : {
      "108" : 0,
      "109" : 0
    }
  },
  "message" : "ok",
  "time" : 1675585654
}

body = JSON.stringify(objc);
$done({ 
    body 
});
