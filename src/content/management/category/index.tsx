import Button from "../../../component/button";
import { useNavigate } from "react-router-dom";
import { testExpenseData, testIncomeData } from "./data";
import CategoryItem from "../../../component/categoryItem";

function CategoryManagement() {
  const useNavaigation = useNavigate();

  function handleNavaigation(url: string) {
    useNavaigation(url);
  }

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center mb-3">
      <p className="fs-1">類別管理</p>

      <div className="w-100 d-flex justify-content-center align-items-center">
        {/* INCOME類別 */}
        <div className="w-50 d-flex flex-column justify-content-center align-items-center mb-3">
          {testIncomeData.map((_category) => {
            return (
              <CategoryItem
                key={_category.id}
                categoryName={_category.categoryName}
                type={"income"}
                onChange={() => {}}
              />
            );
          })}
          <Button text={"新增"} style={"w-50 m-3"} onClick={() => {}} />
        </div>
        {/* EXPENSE類別 */}
        <div className="w-50 d-flex flex-column justify-content-center align-items-center mb-3">
          {testExpenseData.map((_category) => {
            return (
              <CategoryItem
                key={_category.id}
                categoryName={_category.categoryName}
                type={"expense"}
                onChange={() => {}}
              />
            );
          })}
          <Button text={"新增"} style={"w-50 m-3"} onClick={() => {}} />
        </div>
      </div>

      <div className="w-50 d-flex justify-content-between">
        <Button
          text={"返回"}
          style={"w-100 m-3"}
          variant={"secondary"}
          onClick={() => handleNavaigation("/management")}
        />
      </div>
    </div>
  );
}

export default CategoryManagement;
