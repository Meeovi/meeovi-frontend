import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_fileWhereInput } from "../inputs/Import_export_fileWhereInput";

@TypeGraphQL.InputType("Import_export_fileNullableRelationFilter", {})
export class Import_export_fileNullableRelationFilter {
  @TypeGraphQL.Field(_type => Import_export_fileWhereInput, {
    nullable: true
  })
  is?: Import_export_fileWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileWhereInput, {
    nullable: true
  })
  isNot?: Import_export_fileWhereInput | undefined;
}
