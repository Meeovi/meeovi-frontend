import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutApp_script_condition_translationInput } from "../inputs/LanguageCreateOrConnectWithoutApp_script_condition_translationInput";
import { LanguageCreateWithoutApp_script_condition_translationInput } from "../inputs/LanguageCreateWithoutApp_script_condition_translationInput";
import { LanguageUpdateToOneWithWhereWithoutApp_script_condition_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutApp_script_condition_translationInput";
import { LanguageUpsertWithoutApp_script_condition_translationInput } from "../inputs/LanguageUpsertWithoutApp_script_condition_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutApp_script_condition_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutApp_script_condition_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_script_condition_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutApp_script_condition_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutApp_script_condition_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutApp_script_condition_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutApp_script_condition_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutApp_script_condition_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutApp_script_condition_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutApp_script_condition_translationInput | undefined;
}
