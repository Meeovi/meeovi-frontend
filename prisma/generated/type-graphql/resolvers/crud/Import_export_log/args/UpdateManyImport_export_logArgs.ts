import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_logUpdateManyMutationInput } from "../../../inputs/Import_export_logUpdateManyMutationInput";
import { Import_export_logWhereInput } from "../../../inputs/Import_export_logWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyImport_export_logArgs {
  @TypeGraphQL.Field(_type => Import_export_logUpdateManyMutationInput, {
    nullable: false
  })
  data!: Import_export_logUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Import_export_logWhereInput, {
    nullable: true
  })
  where?: Import_export_logWhereInput | undefined;
}
