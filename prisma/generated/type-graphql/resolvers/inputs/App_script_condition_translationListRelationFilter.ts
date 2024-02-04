import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_condition_translationWhereInput } from "../inputs/App_script_condition_translationWhereInput";

@TypeGraphQL.InputType("App_script_condition_translationListRelationFilter", {})
export class App_script_condition_translationListRelationFilter {
  @TypeGraphQL.Field(_type => App_script_condition_translationWhereInput, {
    nullable: true
  })
  every?: App_script_condition_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationWhereInput, {
    nullable: true
  })
  some?: App_script_condition_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationWhereInput, {
    nullable: true
  })
  none?: App_script_condition_translationWhereInput | undefined;
}
