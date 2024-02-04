import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_default_folderOrderByWithAggregationInput } from "../../../inputs/Media_default_folderOrderByWithAggregationInput";
import { Media_default_folderScalarWhereWithAggregatesInput } from "../../../inputs/Media_default_folderScalarWhereWithAggregatesInput";
import { Media_default_folderWhereInput } from "../../../inputs/Media_default_folderWhereInput";
import { Media_default_folderScalarFieldEnum } from "../../../../enums/Media_default_folderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMedia_default_folderArgs {
  @TypeGraphQL.Field(_type => Media_default_folderWhereInput, {
    nullable: true
  })
  where?: Media_default_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_default_folderOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Media_default_folderOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_default_folderScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "association_fields" | "entity" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Media_default_folderScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Media_default_folderScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
