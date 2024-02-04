import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutApp_flow_action_translationInput } from "../inputs/LanguageCreateWithoutApp_flow_action_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutApp_flow_action_translationInput", {})
export class LanguageCreateOrConnectWithoutApp_flow_action_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_flow_action_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutApp_flow_action_translationInput;
}
