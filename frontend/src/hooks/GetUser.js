
export const getuser = (loggedInUser, chatUsers) => {
  if(!chatUsers || !chatUsers.length === 0) return "unKnown user"
  if(chatUsers.length > 2) return "Group Chat"

  const otherUser = chatUsers.find((u) => u.id !== loggedInUser?.id)
  return otherUser ? otherUser.fullName : "Unknown User"
}

  export const getFullUser = (user, users) => {
    if (!users || users.length === 0) return "Unknown User";
    if (users.length > 2) return "user" || "Group Chat";

    const otherUser = users.find((u) => u.id !== user.id);
    return otherUser ? otherUser : "Unknown User";
  };

  
const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";
const apiUrl = backendUrl.endsWith("/") ? backendUrl.slice(0, -1) : backendUrl;

export default apiUrl;