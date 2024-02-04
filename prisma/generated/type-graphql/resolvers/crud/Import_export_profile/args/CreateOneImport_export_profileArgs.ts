import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profileCreateInput } from "../../../inputs/Import_export_profileCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneImport_export_profileArgs {
  @TypeGraphQL.Field(_type => Import_export_profileCreateInput, {
    nullable: false
  })
  data!: Import_export_profileCreateInput;
}
