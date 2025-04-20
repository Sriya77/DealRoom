import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Mail, User } from "lucide-react";


const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(authUser?.profilePic);

  const handleAvatarClick = async (avatarUrl) => {
    setSelectedImg(avatarUrl);
    await updateProfile({ profilePic: avatarUrl });
  };

  return (
    <div className="h-screen pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>

          {/* Profile Picture */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={"/female2.png" || "/male.png"}
              alt="Profile"
              className="size-32 rounded-full object-cover border-4"
            />
            <p className="text-sm text-zinc-400">
              Click on an avatar below to change your profile picture
            </p>
          </div>

          {/* User Info */}
          <div className="space-y-6 mt-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {authUser?.fullName}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {authUser?.email}
              </p>
            </div>
          </div>

          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
