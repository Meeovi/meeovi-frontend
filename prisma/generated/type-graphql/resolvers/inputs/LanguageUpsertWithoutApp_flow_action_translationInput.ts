import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutApp_flow_action_translationInput } from "../inputs/LanguageCreateWithoutApp_flow_action_translationInput";
import { LanguageUpdateWithoutApp_flow_action_translationInput } from "../inputs/LanguageUpdateWithoutApp_flow_action_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutApp_flow_action_translationInput", {})
export class LanguageUpsertWithoutApp_flow_action_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutApp_flow_action_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutApp_flow_action_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_flow_action_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutApp_flow_action_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
