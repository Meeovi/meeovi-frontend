import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profileWhereInput } from "../inputs/Import_export_profileWhereInput";

@TypeGraphQL.InputType("Import_export_profileNullableRelationFilter", {})
export class Import_export_profileNullableRelationFilter {
  @TypeGraphQL.Field(_type => Import_export_profileWhereInput, {
    nullable: true
  })
  is?: Import_export_profileWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileWhereInput, {
    nullable: true
  })
  isNot?: Import_export_profileWhereInput | undefined;
}
