import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folderOrderByWithAggregationInput } from "../../../inputs/Media_folderOrderByWithAggregationInput";
import { Media_folderScalarWhereWithAggregatesInput } from "../../../inputs/Media_folderScalarWhereWithAggregatesInput";
import { Media_folderWhereInput } from "../../../inputs/Media_folderWhereInput";
import { Media_folderScalarFieldEnum } from "../../../../enums/Media_folderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMedia_folderArgs {
  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  where?: Media_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_folderOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Media_folderOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folderScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "parent_id" | "default_folder_id" | "name" | "child_count" | "path" | "media_folder_configuration_id" | "use_parent_configuration" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Media_folderScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Media_folderScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
