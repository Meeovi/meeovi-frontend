import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_fileUpdateInput } from "../../../inputs/Import_export_fileUpdateInput";
import { Import_export_fileWhereUniqueInput } from "../../../inputs/Import_export_fileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneImport_export_fileArgs {
  @TypeGraphQL.Field(_type => Import_export_fileUpdateInput, {
    nullable: false
  })
  data!: Import_export_fileUpdateInput;

  @TypeGraphQL.Field(_type => Import_export_fileWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_fileWhereUniqueInput;
}
