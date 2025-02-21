const options = {
    method: "POST",
    url: "https://control.msg91.com/api/v5/otp",
    params: {
      otp_expiry: "",
      template_id: "",
      mobile: "",
      authkey: "",
      realTimeResponse: "",
    },
    headers: {
      "Content-Type": "application/JSON",
      "content-type": "application/json",
    },
    data: '{\n  "Param1": "value1",\n  "Param2": "value2",\n  "Param3": "value3"\n}',
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
