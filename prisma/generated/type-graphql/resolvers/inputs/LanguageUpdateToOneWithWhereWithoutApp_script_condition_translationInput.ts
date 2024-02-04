import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutApp_script_condition_translationInput } from "../inputs/LanguageUpdateWithoutApp_script_condition_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutApp_script_condition_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutApp_script_condition_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutApp_script_condition_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutApp_script_condition_translationInput;
}
