import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profile_translationCreateWithoutLanguageInput } from "../inputs/Import_export_profile_translationCreateWithoutLanguageInput";
import { Import_export_profile_translationWhereUniqueInput } from "../inputs/Import_export_profile_translationWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_profile_translationCreateOrConnectWithoutLanguageInput", {})
export class Import_export_profile_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_profile_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Import_export_profile_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Import_export_profile_translationCreateWithoutLanguageInput;
}
