export const Form = ({ onSubmit }) => {
    return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Metric Name</label>
          <input className="form-control" id="name" />
        </div>

        <div className="form-group">
          <button type="submit">
            Add Metric
          </button>
        </div>
      </form>
      <style jsx>{`
        form{
            display: block;
            margin-top: 0em;
        }
        div.form-group{
            display: block;
            margin-bottom: 1rem;
        }
        label{
            display: inline-block;
            margin-bottom: 0.5rem;
        }
        input.form-control{
            display: block;
            width: 100%;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }
        button{
            width: 100%;
            color: #fff;
            background-color: #0069d9;
            border-color: #0062cc;
            display: inline-block;
            font-weight: 400;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border: 1px solid transparent;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 0.25rem;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }
        }
        label {
            display: inline-block;
            margin-bottom: 0.5rem;
        }
      `}</style>
    </>
    );
  };
  export default Form;
  