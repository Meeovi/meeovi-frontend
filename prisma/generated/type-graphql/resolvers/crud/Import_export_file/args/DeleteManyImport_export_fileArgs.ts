import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_fileWhereInput } from "../../../inputs/Import_export_fileWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyImport_export_fileArgs {
  @TypeGraphQL.Field(_type => Import_export_fileWhereInput, {
    nullable: true
  })
  where?: Import_export_fileWhereInput | undefined;
}
