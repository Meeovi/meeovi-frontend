import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profile_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Import_export_profile_translationOrderByWithRelationAndSearchRelevanceInput";
import { Import_export_profile_translationWhereInput } from "../../../inputs/Import_export_profile_translationWhereInput";
import { Import_export_profile_translationWhereUniqueInput } from "../../../inputs/Import_export_profile_translationWhereUniqueInput";
import { Import_export_profile_translationScalarFieldEnum } from "../../../../enums/Import_export_profile_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Import_export_profileImport_export_profile_translationArgs {
  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereInput, {
    nullable: true
  })
  where?: Import_export_profile_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Import_export_profile_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Import_export_profile_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"import_export_profile_id" | "language_id" | "label" | "created_at" | "updated_at"> | undefined;
}
