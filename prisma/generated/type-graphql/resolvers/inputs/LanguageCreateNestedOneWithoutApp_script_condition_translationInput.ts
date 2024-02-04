import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutApp_script_condition_translationInput } from "../inputs/LanguageCreateOrConnectWithoutApp_script_condition_translationInput";
import { LanguageCreateWithoutApp_script_condition_translationInput } from "../inputs/LanguageCreateWithoutApp_script_condition_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutApp_script_condition_translationInput", {})
export class LanguageCreateNestedOneWithoutApp_script_condition_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_script_condition_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutApp_script_condition_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutApp_script_condition_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutApp_script_condition_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
