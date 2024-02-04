import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_categoryCountOrderByAggregateInput } from "../inputs/Product_categoryCountOrderByAggregateInput";
import { Product_categoryMaxOrderByAggregateInput } from "../inputs/Product_categoryMaxOrderByAggregateInput";
import { Product_categoryMinOrderByAggregateInput } from "../inputs/Product_categoryMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_categoryOrderByWithAggregationInput", {})
export class Product_categoryOrderByWithAggregationInput {
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
  category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Product_categoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_categoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_categoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_categoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_categoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_categoryMinOrderByAggregateInput | undefined;
}
