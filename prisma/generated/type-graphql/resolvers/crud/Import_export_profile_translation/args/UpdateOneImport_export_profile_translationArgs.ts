import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profile_translationUpdateInput } from "../../../inputs/Import_export_profile_translationUpdateInput";
import { Import_export_profile_translationWhereUniqueInput } from "../../../inputs/Import_export_profile_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneImport_export_profile_translationArgs {
  @TypeGraphQL.Field(_type => Import_export_profile_translationUpdateInput, {
    nullable: false
  })
  data!: Import_export_profile_translationUpdateInput;

  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Import_export_profile_translationWhereUniqueInput;
}
