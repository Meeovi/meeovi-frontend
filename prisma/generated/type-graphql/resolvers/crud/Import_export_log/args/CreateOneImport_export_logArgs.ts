import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_logCreateInput } from "../../../inputs/Import_export_logCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneImport_export_logArgs {
  @TypeGraphQL.Field(_type => Import_export_logCreateInput, {
    nullable: false
  })
  data!: Import_export_logCreateInput;
}
