import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_fileUpdateManyMutationInput } from "../../../inputs/Import_export_fileUpdateManyMutationInput";
import { Import_export_fileWhereInput } from "../../../inputs/Import_export_fileWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyImport_export_fileArgs {
  @TypeGraphQL.Field(_type => Import_export_fileUpdateManyMutationInput, {
    nullable: false
  })
  data!: Import_export_fileUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Import_export_fileWhereInput, {
    nullable: true
  })
  where?: Import_export_fileWhereInput | undefined;
}
