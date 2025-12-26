import PageLoader from "@components/shared/loader";
import { UseMealByCategory, useSingleMeal } from "../hooks/use-healthy.hook";
import { Button } from "@components/ui/button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

type IngredientKey = `strIngredient${number}`;
type MeasureKey = `strMeasure${number}`;

export default function HealthyId() {
    const { t } = useTranslation("healthy-id");
    const mealValue = [
        { key: "seafood", value: t("seafood") },
        { key: "chicken", value: t("chicken") },
        { key: "beef", value: t("beef") },
    ];

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get("category") || "seafood";

    const [category, setCategory] = useState(categoryParam);

    const { mealData, mealLoading } = useSingleMeal({ id: id! });
    const { mealByCategoryData, mealByCategoryLoading } = UseMealByCategory({ category });

    // Redirect if meal is invalid
    useEffect(() => {
        if (!mealLoading) {
            if (!mealData?.meals || String(mealData?.meals) === "Invalid ID" || mealData?.meals?.length === 0) {
                navigate("/not-found", { replace: true });
            }
        }
    }, [mealData, mealLoading, navigate]);

    // Update query param when category changes
    useEffect(() => {
        setSearchParams({ category });
    }, [category, setSearchParams]);

    if (!mealData?.meals || String(mealData?.meals) === "Invalid ID") {
        return null;
    }

    return (
        <div className="pt-30 px-3 md:px-10 font-baloo pb-8">
            <div className="gap-8 flex flex-col-reverse md:flex-row justify-center">
                {/* Sidebar */}
                <div className="w-full md:w-400 border-1 border-secondary/50 dark:border-secondary-dark/50 rounded-3xl p-4 md:max-h-700 max-h-fit">
                    <div className="flex justify-between items-center pb-4">
                        {mealValue.map((item) => (
                            <Button
                                key={item.key}
                                variant={category === item.key ? "default" : "ghost"}
                                size={"rounded-btn"}
                                className="text-xl capitalize w-fit py-2 px-3"
                                onClick={() => setCategory(item.key)}
                            >
                                {item.value}
                            </Button>
                        ))}
                    </div>

                    <div className="w-full  max-h-600 px-2 md:overflow-y-scroll overflow-y-hidden overflow-x-scroll md:overflow-hidden">
                        {/*  other Meals */}
                        <div className="flex md:flex-col gap-3">
                            {mealByCategoryLoading ? (
                                <PageLoader />
                            ) : (
                                mealByCategoryData?.meals?.map((meal) => (
                                    <Link
                                        to={`/healthy/${meal.idMeal}`}
                                        key={meal.idMeal}
                                        className="flex  flex-col md:flex-row  gap-12 py-4 border-light-dark  rounded-2xl md:rounded-none  justify-center px-2 items-center md:items-start border-1 md:border-x-transparent md:border-t-transparent min-w-fit "
                                    >
                                        {/* Meal img */}
                                        <div className="w-20 h-24">
                                            <img src={meal.strMealThumb} alt={meal.strMeal} className="md:w-20 min-w-20 h-24 rounded-2xl" />
                                        </div>

                                        {/* Meals detailes */}
                                        <div className="flex flex-col  gap-4 items-center md:items-start">
                                            <h4 className="font-medium dark:text-secondary-dark text-secondary md:text-lg text-sm">
                                                {meal.strMeal}
                                            </h4>
                                            <p className="text-xs md:text-base">Lorem ipsum dolor sit amet consectetur. Tempus </p>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Meal Details */}
                <div className="flex-1 w-full">
                    {mealLoading ? (
                        <PageLoader />
                    ) : (
                        mealData.meals.map((item) => (
                            <div key={item.idMeal} className="flex gap-6 flex-col">
                                {/* Meal Image and Info */}
                                <div className="w-full relative">
                                    <div
                                        className="w-full h-536 rounded-t-3xl bg-center bg-cover relative justify-center items-end p-8 flex"
                                        style={{ backgroundImage: `url(${item.strMealThumb})` }}
                                    >
                                        <div className="absolute inset-0 rounded-t-3xl bg-gradient-to-b from-black opacity-80 to-secondary z-30" />
                                        <div className="z-40 relative text-secondary-dark flex flex-col justify-center items-center gap-4">
                                            {/* Meal name */}
                                            <h2 className="text-5xl font-medium">{item.strMeal}</h2>

                                            {/* Meal instructions */}
                                            <h4 className="sm:text-sm text-start line-clamp-5 overflow-clip md:text-lg sm:hover:line-clamp-none">
                                                {item.strInstructions}
                                            </h4>
                                            <div className="flex justify-center gap-6 items-center text-base text-secondary-dark">
                                                <div className="border-1 border-primary-disabled p-8 flex justify-center items-center flex-col w-24 h-13 rounded-3xl">
                                                    <h6>{t("category")}</h6>
                                                    <h6 className="text-primary font-bold">{item.strCategory}</h6>
                                                </div>
                                                <div className="border-1 border-primary-disabled p-8 flex justify-center items-center flex-col w-24 h-13 rounded-3xl">
                                                    <h6>{t("area")}</h6>
                                                    <h6 className="text-primary font-bold">{item.strArea}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ingredients */}
                                <div>
                                    <h3 className="font-medium text-3xl capitalize pb-4">Ingredients</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-4 bg-secondary-dark dark:bg-secondary pt-4 px-2 rounded-3xl">
                                        {Array.from({ length: 20 }, (_, i) => {
                                            const ingredient = item[`strIngredient${i + 1}` as IngredientKey];
                                            const measure = item[`strMeasure${i + 1}` as MeasureKey];

                                            if (!ingredient || ingredient.trim() === "") return null;

                                            return (
                                                <div
                                                    key={i}
                                                    className="flex items-center justify-between border-b-1 border-light-dark px-4 py-3"
                                                >
                                                    <span className="font-medium">{ingredient}</span>
                                                    <span className="text-primary">{measure}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
