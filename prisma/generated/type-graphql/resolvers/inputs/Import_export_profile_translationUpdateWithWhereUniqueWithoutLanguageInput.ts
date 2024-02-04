import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profile_translationUpdateWithoutLanguageInput } from "../inputs/Import_export_profile_translationUpdateWithoutLanguageInput";
import { Import_export_profile_translationWhereUniqueInput } from "../inputs/Import_export_profile_translationWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_profile_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Import_export_profile_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_profile_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Import_export_profile_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Import_export_profile_translationUpdateWithoutLanguageInput;
}
