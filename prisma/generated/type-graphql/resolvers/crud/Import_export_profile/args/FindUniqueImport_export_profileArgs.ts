import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profileWhereUniqueInput } from "../../../inputs/Import_export_profileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueImport_export_profileArgs {
  @TypeGraphQL.Field(_type => Import_export_profileWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_profileWhereUniqueInput;
}
