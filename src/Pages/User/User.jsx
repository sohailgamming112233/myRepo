import React, { useEffect, useState } from "react";
import { auth, db } from "../../Services/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const User = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [hasData, setHasData] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        navigate("/login");
        return;
      }

      setUser(currentUser);

      const ref = doc(db, "users", currentUser.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setFormData(snap.data());
        setHasData(true);
      } else {
        setFormData((prev) => ({
          ...prev,
          name: currentUser.displayName || "",
        }));
        setHasData(false);
      }
    });

    return () => unsub();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "users", user.uid), formData);
      toast.success("Profile saved");
      navigate("/");
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out");
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">{user?.displayName || user?.email} Settings</h2>

      {!hasData ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-2"
          />
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full border p-2"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full border p-2"
          />
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full border p-2"
          />
          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className="w-full border p-2"
          />

          <button className="w-full bg-black text-white py-2">Save</button>
        </form>
      ) : (
        <div className="space-y-2">
          <p>
            <b>Name:</b> {formData.name}
          </p>
          <p>
            <b>Age:</b> {formData.age}
          </p>
          <p>
            <b>Address:</b> {formData.address}
          </p>
          <p>
            <b>City:</b> {formData.city}
          </p>
          <p>
            <b>Country:</b> {formData.country}
          </p>

          <button
            onClick={handleLogout}
            className="w-full mt-4 bg-red-500 text-white py-2"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
