import Friend from "./Friend";
import data from "./Data";

export default function FriendList(props){
    const friend = data.map(item => (
        <Friend
          key={item.id} 
          {...item}
        />
      ));
      return(
        <div className="friend-list">
          {friend}
        </div>

    )
   

}