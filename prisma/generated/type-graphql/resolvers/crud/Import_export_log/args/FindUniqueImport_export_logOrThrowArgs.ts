import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_logWhereUniqueInput } from "../../../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueImport_export_logOrThrowArgs {
  @TypeGraphQL.Field(_type => Import_export_logWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_logWhereUniqueInput;
}
