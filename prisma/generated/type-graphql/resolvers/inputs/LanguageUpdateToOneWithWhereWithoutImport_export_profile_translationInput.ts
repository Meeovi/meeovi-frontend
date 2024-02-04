import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutImport_export_profile_translationInput } from "../inputs/LanguageUpdateWithoutImport_export_profile_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutImport_export_profile_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutImport_export_profile_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutImport_export_profile_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutImport_export_profile_translationInput;
}
