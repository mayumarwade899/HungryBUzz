const Contact = () => {
  return (
    <div className="h-[1000px]">
      <h1 className="text-3xl font-bold p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="Message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-slate-100 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
