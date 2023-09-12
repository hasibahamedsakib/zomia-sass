import PropTypes from "prop-types";

const SectionTitle = ({ text, isBoth = false }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>
      <span className="w-5 h-1 bg-slate-400 rounded-xl"></span>
      <h4 className="text-base lg:text-xl font-bold text-purple-0 ">{text}</h4>
      {isBoth ? (
        <>
          <span className="w-5 h-1 bg-slate-400 rounded-xl"></span>
          <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

// handle propType validation...
SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
  isBoth: PropTypes.bool.isRequired,
};
export default SectionTitle;
