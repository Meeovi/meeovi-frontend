import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profileWhereInput } from "../../../inputs/Import_export_profileWhereInput";

@TypeGraphQL.ArgsType()
export class Import_export_logImport_export_profileArgs {
  @TypeGraphQL.Field(_type => Import_export_profileWhereInput, {
    nullable: true
  })
  where?: Import_export_profileWhereInput | undefined;
}
