import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_fileCreateInput } from "../../../inputs/Import_export_fileCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneImport_export_fileArgs {
  @TypeGraphQL.Field(_type => Import_export_fileCreateInput, {
    nullable: false
  })
  data!: Import_export_fileCreateInput;
}
