import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profile_translationCreateWithoutLanguageInput } from "../inputs/Import_export_profile_translationCreateWithoutLanguageInput";
import { Import_export_profile_translationUpdateWithoutLanguageInput } from "../inputs/Import_export_profile_translationUpdateWithoutLanguageInput";
import { Import_export_profile_translationWhereUniqueInput } from "../inputs/Import_export_profile_translationWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_profile_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Import_export_profile_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_profile_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Import_export_profile_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Import_export_profile_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Import_export_profile_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Import_export_profile_translationCreateWithoutLanguageInput;
}
