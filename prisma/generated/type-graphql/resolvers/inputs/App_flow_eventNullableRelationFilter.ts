import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventWhereInput } from "../inputs/App_flow_eventWhereInput";

@TypeGraphQL.InputType("App_flow_eventNullableRelationFilter", {})
export class App_flow_eventNullableRelationFilter {
  @TypeGraphQL.Field(_type => App_flow_eventWhereInput, {
    nullable: true
  })
  is?: App_flow_eventWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventWhereInput, {
    nullable: true
  })
  isNot?: App_flow_eventWhereInput | undefined;
}
