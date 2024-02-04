import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profile_translationWhereInput } from "../inputs/Import_export_profile_translationWhereInput";

@TypeGraphQL.InputType("Import_export_profile_translationListRelationFilter", {})
export class Import_export_profile_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereInput, {
    nullable: true
  })
  every?: Import_export_profile_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereInput, {
    nullable: true
  })
  some?: Import_export_profile_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereInput, {
    nullable: true
  })
  none?: Import_export_profile_translationWhereInput | undefined;
}
