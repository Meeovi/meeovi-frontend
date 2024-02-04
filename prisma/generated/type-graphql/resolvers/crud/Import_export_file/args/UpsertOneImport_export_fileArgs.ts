import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_fileCreateInput } from "../../../inputs/Import_export_fileCreateInput";
import { Import_export_fileUpdateInput } from "../../../inputs/Import_export_fileUpdateInput";
import { Import_export_fileWhereUniqueInput } from "../../../inputs/Import_export_fileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneImport_export_fileArgs {
  @TypeGraphQL.Field(_type => Import_export_fileWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_fileWhereUniqueInput;

  @TypeGraphQL.Field(_type => Import_export_fileCreateInput, {
    nullable: false
  })
  create!: Import_export_fileCreateInput;

  @TypeGraphQL.Field(_type => Import_export_fileUpdateInput, {
    nullable: false
  })
  update!: Import_export_fileUpdateInput;
}
