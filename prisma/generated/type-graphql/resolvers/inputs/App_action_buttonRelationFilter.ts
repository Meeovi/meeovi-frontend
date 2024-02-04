import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonWhereInput } from "../inputs/App_action_buttonWhereInput";

@TypeGraphQL.InputType("App_action_buttonRelationFilter", {})
export class App_action_buttonRelationFilter {
  @TypeGraphQL.Field(_type => App_action_buttonWhereInput, {
    nullable: true
  })
  is?: App_action_buttonWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonWhereInput, {
    nullable: true
  })
  isNot?: App_action_buttonWhereInput | undefined;
}
