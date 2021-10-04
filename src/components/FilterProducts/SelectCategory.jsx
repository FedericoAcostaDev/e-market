import { FormControl, Paper, Select, MenuItem } from "@material-ui/core";
import "./styles.css";

const SelectCategory = ({ onChange, selectedCategory, categories }) => {
  return (
    <Paper margin="10px">
      <FormControl className="formControl">
        <Select value={selectedCategory.id} onChange={onChange}>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
};

export default SelectCategory;
