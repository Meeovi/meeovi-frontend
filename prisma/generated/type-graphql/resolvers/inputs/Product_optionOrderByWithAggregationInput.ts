import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_optionCountOrderByAggregateInput } from "../inputs/Product_optionCountOrderByAggregateInput";
import { Product_optionMaxOrderByAggregateInput } from "../inputs/Product_optionMaxOrderByAggregateInput";
import { Product_optionMinOrderByAggregateInput } from "../inputs/Product_optionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_optionOrderByWithAggregationInput", {})
export class Product_optionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  property_group_option_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Product_optionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_optionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_optionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_optionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_optionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_optionMinOrderByAggregateInput | undefined;
}
