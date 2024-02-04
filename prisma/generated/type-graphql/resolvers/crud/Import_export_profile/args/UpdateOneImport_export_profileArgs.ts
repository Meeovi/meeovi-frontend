import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profileUpdateInput } from "../../../inputs/Import_export_profileUpdateInput";
import { Import_export_profileWhereUniqueInput } from "../../../inputs/Import_export_profileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneImport_export_profileArgs {
  @TypeGraphQL.Field(_type => Import_export_profileUpdateInput, {
    nullable: false
  })
  data!: Import_export_profileUpdateInput;

  @TypeGraphQL.Field(_type => Import_export_profileWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_profileWhereUniqueInput;
}
