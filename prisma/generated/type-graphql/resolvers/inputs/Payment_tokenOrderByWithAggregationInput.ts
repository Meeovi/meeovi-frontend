import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_tokenCountOrderByAggregateInput } from "../inputs/Payment_tokenCountOrderByAggregateInput";
import { Payment_tokenMaxOrderByAggregateInput } from "../inputs/Payment_tokenMaxOrderByAggregateInput";
import { Payment_tokenMinOrderByAggregateInput } from "../inputs/Payment_tokenMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Payment_tokenOrderByWithAggregationInput", {})
export class Payment_tokenOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expires?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Payment_tokenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Payment_tokenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Payment_tokenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Payment_tokenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Payment_tokenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Payment_tokenMinOrderByAggregateInput | undefined;
}
