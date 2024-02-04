import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_fileWhereUniqueInput } from "../../../inputs/Import_export_fileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueImport_export_fileOrThrowArgs {
  @TypeGraphQL.Field(_type => Import_export_fileWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_fileWhereUniqueInput;
}
