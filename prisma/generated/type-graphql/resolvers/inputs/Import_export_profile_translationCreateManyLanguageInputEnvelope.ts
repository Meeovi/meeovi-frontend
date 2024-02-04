import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profile_translationCreateManyLanguageInput } from "../inputs/Import_export_profile_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Import_export_profile_translationCreateManyLanguageInputEnvelope", {})
export class Import_export_profile_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Import_export_profile_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Import_export_profile_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
