import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_propertyCountOrderByAggregateInput } from "../inputs/Product_propertyCountOrderByAggregateInput";
import { Product_propertyMaxOrderByAggregateInput } from "../inputs/Product_propertyMaxOrderByAggregateInput";
import { Product_propertyMinOrderByAggregateInput } from "../inputs/Product_propertyMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_propertyOrderByWithAggregationInput", {})
export class Product_propertyOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => Product_propertyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_propertyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_propertyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_propertyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_propertyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_propertyMinOrderByAggregateInput | undefined;
}
