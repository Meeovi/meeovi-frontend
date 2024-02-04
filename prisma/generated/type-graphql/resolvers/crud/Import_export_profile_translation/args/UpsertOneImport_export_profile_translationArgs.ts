import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profile_translationCreateInput } from "../../../inputs/Import_export_profile_translationCreateInput";
import { Import_export_profile_translationUpdateInput } from "../../../inputs/Import_export_profile_translationUpdateInput";
import { Import_export_profile_translationWhereUniqueInput } from "../../../inputs/Import_export_profile_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneImport_export_profile_translationArgs {
  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_profile_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Import_export_profile_translationCreateInput, {
    nullable: false
  })
  create!: Import_export_profile_translationCreateInput;

  @TypeGraphQL.Field(_type => Import_export_profile_translationUpdateInput, {
    nullable: false
  })
  update!: Import_export_profile_translationUpdateInput;
}
