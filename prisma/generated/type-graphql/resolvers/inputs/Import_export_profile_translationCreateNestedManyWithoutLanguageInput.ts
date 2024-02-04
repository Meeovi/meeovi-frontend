import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profile_translationCreateManyLanguageInputEnvelope } from "../inputs/Import_export_profile_translationCreateManyLanguageInputEnvelope";
import { Import_export_profile_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Import_export_profile_translationCreateOrConnectWithoutLanguageInput";
import { Import_export_profile_translationCreateWithoutLanguageInput } from "../inputs/Import_export_profile_translationCreateWithoutLanguageInput";
import { Import_export_profile_translationWhereUniqueInput } from "../inputs/Import_export_profile_translationWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_profile_translationCreateNestedManyWithoutLanguageInput", {})
export class Import_export_profile_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Import_export_profile_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Import_export_profile_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Import_export_profile_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Import_export_profile_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Import_export_profile_translationWhereUniqueInput[] | undefined;
}
