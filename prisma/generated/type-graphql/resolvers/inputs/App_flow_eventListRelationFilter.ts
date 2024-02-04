import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventWhereInput } from "../inputs/App_flow_eventWhereInput";

@TypeGraphQL.InputType("App_flow_eventListRelationFilter", {})
export class App_flow_eventListRelationFilter {
  @TypeGraphQL.Field(_type => App_flow_eventWhereInput, {
    nullable: true
  })
  every?: App_flow_eventWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventWhereInput, {
    nullable: true
  })
  some?: App_flow_eventWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventWhereInput, {
    nullable: true
  })
  none?: App_flow_eventWhereInput | undefined;
}
