import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_keyword_dictionaryCountOrderByAggregateInput } from "../inputs/Product_keyword_dictionaryCountOrderByAggregateInput";
import { Product_keyword_dictionaryMaxOrderByAggregateInput } from "../inputs/Product_keyword_dictionaryMaxOrderByAggregateInput";
import { Product_keyword_dictionaryMinOrderByAggregateInput } from "../inputs/Product_keyword_dictionaryMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_keyword_dictionaryOrderByWithAggregationInput", {})
export class Product_keyword_dictionaryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  keyword?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  reversed?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_keyword_dictionaryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_keyword_dictionaryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_keyword_dictionaryMinOrderByAggregateInput | undefined;
}
