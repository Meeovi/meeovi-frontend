import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logWhereInput } from "../inputs/Import_export_logWhereInput";

@TypeGraphQL.InputType("Import_export_logListRelationFilter", {})
export class Import_export_logListRelationFilter {
  @TypeGraphQL.Field(_type => Import_export_logWhereInput, {
    nullable: true
  })
  every?: Import_export_logWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logWhereInput, {
    nullable: true
  })
  some?: Import_export_logWhereInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logWhereInput, {
    nullable: true
  })
  none?: Import_export_logWhereInput | undefined;
}
