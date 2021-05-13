const request = require('request');

var fanblox = {};

fanblox.getUsersSet = function(id, cb){
  request('https://www.roblox.com/sets/get-by-creator?userid='+ id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.getUsersSubbedSets = function(id, cb){
  request('https://www.roblox.com/sets/get-subscribed?userid='+ id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}


fanblox.getAssetsfromSet = function(id, num, page, cb){
  request('https://www.roblox.com/sets/' + id + '/items?num='+ num + '&page=' + page, (err, res, data) => {
    cb(JSON.parse(data))
  })
}


fanblox.getHeadshot = function(id, cb){
  request('https://www.roblox.com/headshot-thumbnail/json?userId='+ id +'&width=180&height=180', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
// Size: Small or large depend on what do you need.
fanblox.getPlaceThumbnail = function(id, cb){
  request('https://www.roblox.com/place-thumbnails?params=[{placeId:'+ id +'}]', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
//Size: Small or large depend on what do you need.
fanblox.getItemThumbnail = function(id, cb){
  request('https://www.roblox.com/item-thumbnails?params=[{assetId:'+ id +'}]', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.getAvatarThumbnail = function(id, cb){
  request('https://www.roblox.com/avatar-thumbnails?params=[{userId:'+ id +'}]', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.getGroupThumbnail = function(id, cb){
  request('https://www.roblox.com/group-thumbnails?params=[{groupId:'+ id +'}]', (err, res, data) => {
    cb(JSON.parse(data))
  })
}

/* Clan Part */
fanblox.getClanDataFromUser = function(id, cb){
  request('https://api.roblox.com/clans/get-by-user?userId='+ id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.getClanDataById = function(id, cb){
  request('https://api.roblox.com/clans/get-by-id?clanId='+ id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}

/* Group Part*/
fanblox.checkIfUserInGroup = function(userId, groupId, cb){
  request('https://assetgame.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsInGroup&playerid='+ userId + '&groupid=' + groupId, (err, res, data) => {
    cb(data)
  })
}
fanblox.getGroupData = function(id, cb){
  request('https://api.roblox.com/groups/'+ id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.getGroupRoleSets = function(id, cb){
  request('http://www.roblox.com/api/groups/'+ id + '/RoleSets/', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.getPrimary = function(name, cb){
  request('https://www.roblox.com/Groups/GetPrimaryGroupInfo.ashx?users=' + name, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.getGroupAllies = function(groupId, cb){
  request('https://www.roblox.com/groups/'+groupId+'/allies', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.getGroupEnemies = function(groupId, cb){
  request('https://www.roblox.com/groups/'+groupId+'/enemies', (err, res, data) => {
    cb(JSON.parse(data))
  })
}

/* User Part */
fanblox.canManageItem = function(userId, assetId, cb){
  request('http://api.roblox.com/users/'+user+'/canmanage/'+item, (err, res, data) => {
    cb(data)
  })
}
fanblox.getUserRankNumber = function(userId, groupId, cb){
  request('https://assetgame.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid='+ userId + '&groupid=' + groupId, (err, res, data) => {
    cb(data)
  })
}
fanblox.getUserRankName = function(userId, groupId, cb){
  request('https://assetgame.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid='+ userId + '&groupid=' + groupId, (err, res, data) => {
    cb(data)
  })
}
fanblox.checkTwoFriends = function(f1, f2, cb){
  request('https://assetgame.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsFriendsWith&playerId='+f1+'&userId='+f2, (err, res, data) => {
    cb(data)
  })
}
fanblox.getUsersFriends = function(id, cb){
  request('https://api.roblox.com/users/'+id+'/friends', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.getFriendshipCount = function(id, cb){
  request('https://api.roblox.com/user/get-friendship-count?userId'+id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.checkUserFollowing = function(userId, followerId, cb){
  request('https://api.roblox.com/user/following-exists?userId='+userId+'&followerUserId='+followerId, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.getUsersFollower = function(id, cb){
  request('https://api.roblox.com/users/followers?userId='+id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.getUsersFollowing = function(id, cb){
  request('https://api.roblox.com/users/followings?userId='+id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.idToUser = function(id, cb){
  request('https://api.roblox.com/users/'+ id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.userToId = function(user, cb){
  request('https://api.roblox.com/users/get-by-username?username='+ user, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.gamesCreated = function(id, cb){
  request('https://www.roblox.com/users/profile/playergames-json?userId='+ user, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.checkUserTaken = function(name, cb){
  request('http://www.roblox.com/UserCheck/DoesUsernameExist?username='+ user, (err, res, data) => {
    cb(JSON.parse(data))
  })
}

/* Assets */
fanblox.getPartsOfPackage = function(pack, cb){
  request('http://assetgame.roblox.com/Game/GetAssetIdsForPackageId?packageId='+ pack, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
fanblox.checkUserHasItem = function(user, item, cb){
  request('http://api.roblox.com/Ownership/HasAsset?userId='+user+'&assetId='+item, (err, res, data) => {
    cb(data)
  })
}
fanblox.AssetInfo = function(item, cb){
  request('http://api.roblox.com/Marketplace/ProductInfo?assetId='+item, (err, res, data) => {
    cb(JSON.parse(data))
  })
}

/* Misc */
fanblox.getDeviceInfo = function(cb){
   request('http://api.roblox.com/reference/deviceinfo', (err, res, data) => {
     cb(JSON.parse(data))
   })
}

fanblox.login = function(cookie){
  request({
    url: "https://www.roblox.com/NewLogin",
    method: "POST",
    json: true,
    body: {"cookies": cookie}
  });
}

fanblox.unfollow = function(followedUserId){
  request({
    url: "https://api.roblox.com/user/unfollow",
    method: "POST",
    json: true,
    body: {"followedUserId": followedUserId}
  });
}

fanblox.follow = function(followedUserId){
  request({
    url: "https://api.roblox.com/user/follow",
    method: "POST",
    json: true,
    body: {"followedUserId": followedUserId}
  });
}

fanblox.friend = function(recipientUserId){
  request({
    url: "https://api.roblox.com/user/request-friendship",
    method: "POST",
    json: true,
    body: {"recipientUserId": recipientUserId}
  });
}
fanblox.unfriend = function(friendUserId){
  request({
    url: "https://api.roblox.com/user/unfriend",
    method: "POST",
    json: true,
    body: {"friendUserId": friendUserId}
  });
}

fanblox.acceptfriend = function(requesterUserId){
  request({
    url: "https://api.roblox.com/user/accept-friend-request",
    method: "POST",
    json: true,
    body: {"requesterUserId": requesterUserId}
  });
}
fanblox.declinefriend = function(friendUserId){
  request({
    url: "https://api.roblox.com/user/decline-friend-request",
    method: "POST",
    json: true,
    body: {"requesterUserId": requesterUserId}
  });
}


module.exports = fanblox
