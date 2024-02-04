import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_logUpdateInput } from "../../../inputs/Import_export_logUpdateInput";
import { Import_export_logWhereUniqueInput } from "../../../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneImport_export_logArgs {
  @TypeGraphQL.Field(_type => Import_export_logUpdateInput, {
    nullable: false
  })
  data!: Import_export_logUpdateInput;

  @TypeGraphQL.Field(_type => Import_export_logWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_logWhereUniqueInput;
}
