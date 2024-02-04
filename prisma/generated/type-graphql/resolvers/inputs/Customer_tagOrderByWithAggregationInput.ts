import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagCountOrderByAggregateInput } from "../inputs/Customer_tagCountOrderByAggregateInput";
import { Customer_tagMaxOrderByAggregateInput } from "../inputs/Customer_tagMaxOrderByAggregateInput";
import { Customer_tagMinOrderByAggregateInput } from "../inputs/Customer_tagMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_tagOrderByWithAggregationInput", {})
export class Customer_tagOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Customer_tagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Customer_tagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_tagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Customer_tagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_tagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Customer_tagMinOrderByAggregateInput | undefined;
}
