"use client";

import MainLayout from "../layouts/MainLayout";
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import TextInput from "../components/TextInput";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/user";
import { useIsLoading, useCreateAddress, useUserAddress } from "../hooks";
import { toast } from "react-toastify";
import ClientOnly from "../components/ClientOnly";

const Address = () => {
  const router = useRouter();
  const { user } = useUser();

  console.log(user);

  const [addressId, setAddressId] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isUpdatingAddress, setIsUpdatingAddress] = useState(false);
  const [error, setError] = useState({});

  const showError = (type) => {
    if (Object.entries(error).length > 0 && error?.type == type) {
      return error.message;
    }
    return "";
  };

  const getAddress = async () => {
    if (user?.id == null || user?.id == undefined) {
      useIsLoading(false);
      return;
    }

    const response = await useUserAddress();
    console.log(response);
    if (response) {
      setTheCurrentAddress(response);
      useIsLoading(false);
      return;
    }
    useIsLoading(false);
  };

  useEffect(() => {
    useIsLoading(true);
    getAddress();
  }, [user]);

  const setTheCurrentAddress = (result) => {
    setAddressId(result.id);
    setName(result.name);
    setAddress(result.address);
    setZipcode(result.zipcode);
    setCity(result.city);
    setCountry(result.country);
  };

  const validate = () => {
    setError(null);
    setError({});
    let isError = false;

    if (!name) {
      setError({ type: "name", message: "Tên không được để trống" });
      isError = true;
    } else if (!address) {
      setError({ type: "address", message: "Địa chỉ không được để trống" });
      isError = true;
    } else if (!zipcode) {
      setError({ type: "zipcode", message: "Zipcode không được để trống" });
      isError = true;
    } else if (!city) {
      setError({ type: "city", message: "Thành phố khôn được để trống" });
      isError = true;
    } else if (!country) {
      setError({ type: "country", message: "Đất nước không được để trống" });
      isError = true;
    }
    return isError;
  };

  const submit = async (event) => {
    event.preventDefault();
    let isError = validate();

    if (isError) {
      toast.error(error.message, { autoClose: 3000 });
      return;
    }

    try {
      setIsUpdatingAddress(true);

      const response = await useCreateAddress({
        addressId,
        name,
        address,
        zipcode,
        city,
        country,
      });

      setTheCurrentAddress(response);
      setIsUpdatingAddress(false);

      toast.success("Địa chỉ đã được cập nhật!", { autoClose: 3000 });

      router.push("/checkout");
    } catch (error) {
      setIsUpdatingAddress(false);
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <MainLayout>
        <div id="AddressPage" className="mt-4 max-w-[600px] mx-auto px-2">
          <div className="mx-auto bg-white rounded-lg p-3">
            <div className="text-xl text-bold mb-2">Thông tin địa chỉ</div>

            <form onSubmit={submit}>
              <div className="mb-4">
                <ClientOnly>
                  <TextInput
                    className="w-full"
                    string={name}
                    placeholder="Tên"
                    onUpdate={setName}
                    error={showError("name")}
                  />
                </ClientOnly>
              </div>

              <div className="mb-4">
                <ClientOnly>
                  <TextInput
                    className="w-full"
                    string={address}
                    placeholder="Địa chỉ"
                    onUpdate={setAddress}
                    error={showError("address")}
                  />
                </ClientOnly>
              </div>

              <div className="mb-4">
                <ClientOnly>
                  <TextInput
                    className="w-full mt-2"
                    string={zipcode}
                    placeholder="Zip Code"
                    onUpdate={setZipcode}
                    error={showError("zipcode")}
                  />
                </ClientOnly>
              </div>

              <div className="mb-4">
                <ClientOnly>
                  <TextInput
                    className="w-full mt-2"
                    string={city}
                    placeholder="Thành phố"
                    onUpdate={setCity}
                    error={showError("city")}
                  />
                </ClientOnly>
              </div>

              <div>
                <ClientOnly>
                  <TextInput
                    className="w-full mt-2"
                    string={country}
                    placeholder="Đất nước"
                    onUpdate={setCountry}
                    error={showError("country")}
                  />
                </ClientOnly>
              </div>

              <button 
                type="submit"
                disabled={isUpdatingAddress}
                className={
                  `
                    mt-6 w-full text-white text-lg font-semibold p-3 rounded bg-blue-600
                    ${isUpdatingAddress? "bg-blue-800" : "bg-blue-600"}
                  `
                }>
                {
                  !isUpdatingAddress ? (
                    <div>Cập nhật địa chỉ</div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <AiOutlineLoading3Quarters className="animate-spin"/>
                      Vui lòng chờ...
                    </div>
                  )
                }
              </button>
            </form>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Address;
