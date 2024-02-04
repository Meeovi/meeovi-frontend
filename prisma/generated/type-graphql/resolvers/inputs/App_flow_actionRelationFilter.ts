import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionWhereInput } from "../inputs/App_flow_actionWhereInput";

@TypeGraphQL.InputType("App_flow_actionRelationFilter", {})
export class App_flow_actionRelationFilter {
  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  is?: App_flow_actionWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  isNot?: App_flow_actionWhereInput | undefined;
}
