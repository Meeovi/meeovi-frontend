import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profile_translationOrderByWithAggregationInput } from "../../../inputs/Import_export_profile_translationOrderByWithAggregationInput";
import { Import_export_profile_translationScalarWhereWithAggregatesInput } from "../../../inputs/Import_export_profile_translationScalarWhereWithAggregatesInput";
import { Import_export_profile_translationWhereInput } from "../../../inputs/Import_export_profile_translationWhereInput";
import { Import_export_profile_translationScalarFieldEnum } from "../../../../enums/Import_export_profile_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByImport_export_profile_translationArgs {
  @TypeGraphQL.Field(_type => Import_export_profile_translationWhereInput, {
    nullable: true
  })
  where?: Import_export_profile_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Import_export_profile_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"import_export_profile_id" | "language_id" | "label" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Import_export_profile_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Import_export_profile_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
