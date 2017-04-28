import FontIcon from "material-ui/FontIcon";
import React, { PropTypes } from "react";

const Options = ( {handleChange, options, optionsActives} ) => {
  return (
    <ul
        className="pdt-2"
        id="hexGrid"
    >
      {options.map((stackOptions,index)=>
        <li
            className="hex"
            key={index}
            onTouchTap={()=>handleChange(stackOptions.get("name"),
              optionsActives?
                optionsActives.findIndex(stack =>
                  stack===stackOptions.get("name")
                )==-1
              :true
            )}
        >
          <div className="hexIn">
              <a
                  className={optionsActives?
                    optionsActives.findIndex(stack =>
                      stack===stackOptions.get("name")
                    )==-1?"hexLink":"hexLink active"
                  :"hexLink"}
                  href="#"
              >
              {stackOptions.get("icon").size==1?
                <FontIcon className={"icon "+stackOptions.get("icon").first()}/>
                :<span className={"icon "+stackOptions.get("icon").first()}>
                  {stackOptions.get("icon").map((icon,index)=>{
                    if(index!=0)
                      return (
                        <span
                            className={icon}
                            key={index}
                        />
                      );
                  })}
                </span>
              }
              <h2>{stackOptions.get("title")}</h2>
              <p>{stackOptions.get("description")}</p>
            </a>
          </div>
        </li>
      )}
    </ul>
  );
};

Options.propTypes = {
  handleChange: PropTypes.func.isRequired,
  optionsActives: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired
};

export default Options;
