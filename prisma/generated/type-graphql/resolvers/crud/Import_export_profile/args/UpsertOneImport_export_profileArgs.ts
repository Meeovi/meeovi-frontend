import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profileCreateInput } from "../../../inputs/Import_export_profileCreateInput";
import { Import_export_profileUpdateInput } from "../../../inputs/Import_export_profileUpdateInput";
import { Import_export_profileWhereUniqueInput } from "../../../inputs/Import_export_profileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneImport_export_profileArgs {
  @TypeGraphQL.Field(_type => Import_export_profileWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_profileWhereUniqueInput;

  @TypeGraphQL.Field(_type => Import_export_profileCreateInput, {
    nullable: false
  })
  create!: Import_export_profileCreateInput;

  @TypeGraphQL.Field(_type => Import_export_profileUpdateInput, {
    nullable: false
  })
  update!: Import_export_profileUpdateInput;
}
