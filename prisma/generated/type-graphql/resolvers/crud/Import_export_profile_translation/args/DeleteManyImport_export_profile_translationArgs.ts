import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profile_translationWhereInput } from "../../../inputs/Import_export_profile_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyImport_export_profile_translationArgs {
  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereInput, {
    nullable: true
  })
  where?: Import_export_profile_translationWhereInput | undefined;
}
