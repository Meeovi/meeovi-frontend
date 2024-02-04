import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profile_translationCreateInput } from "../../../inputs/Import_export_profile_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneImport_export_profile_translationArgs {
  @TypeGraphQL.Field(_type => Import_export_profile_translationCreateInput, {
    nullable: false
  })
  data!: Import_export_profile_translationCreateInput;
}
