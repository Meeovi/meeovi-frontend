import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_configCountOrderByAggregateInput } from "../inputs/App_configCountOrderByAggregateInput";
import { App_configMaxOrderByAggregateInput } from "../inputs/App_configMaxOrderByAggregateInput";
import { App_configMinOrderByAggregateInput } from "../inputs/App_configMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_configOrderByWithAggregationInput", {})
export class App_configOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  key?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => App_configCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_configCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_configMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_configMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_configMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_configMinOrderByAggregateInput | undefined;
}
