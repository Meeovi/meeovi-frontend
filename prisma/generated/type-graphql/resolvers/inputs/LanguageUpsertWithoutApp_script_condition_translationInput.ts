import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutApp_script_condition_translationInput } from "../inputs/LanguageCreateWithoutApp_script_condition_translationInput";
import { LanguageUpdateWithoutApp_script_condition_translationInput } from "../inputs/LanguageUpdateWithoutApp_script_condition_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutApp_script_condition_translationInput", {})
export class LanguageUpsertWithoutApp_script_condition_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutApp_script_condition_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutApp_script_condition_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_script_condition_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutApp_script_condition_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
