import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionWhereInput } from "../inputs/App_script_conditionWhereInput";

@TypeGraphQL.InputType("App_script_conditionRelationFilter", {})
export class App_script_conditionRelationFilter {
  @TypeGraphQL.Field(_type => App_script_conditionWhereInput, {
    nullable: true
  })
  is?: App_script_conditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionWhereInput, {
    nullable: true
  })
  isNot?: App_script_conditionWhereInput | undefined;
}
