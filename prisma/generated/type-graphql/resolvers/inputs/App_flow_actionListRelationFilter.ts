import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionWhereInput } from "../inputs/App_flow_actionWhereInput";

@TypeGraphQL.InputType("App_flow_actionListRelationFilter", {})
export class App_flow_actionListRelationFilter {
  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  every?: App_flow_actionWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  some?: App_flow_actionWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  none?: App_flow_actionWhereInput | undefined;
}
