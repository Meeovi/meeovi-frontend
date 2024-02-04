import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_filesOrderByWithAggregationInput } from "../../../inputs/Directus_filesOrderByWithAggregationInput";
import { Directus_filesScalarWhereWithAggregatesInput } from "../../../inputs/Directus_filesScalarWhereWithAggregatesInput";
import { Directus_filesWhereInput } from "../../../inputs/Directus_filesWhereInput";
import { Directus_filesScalarFieldEnum } from "../../../../enums/Directus_filesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDirectus_filesArgs {
  @TypeGraphQL.Field(_type => Directus_filesWhereInput, {
    nullable: true
  })
  where?: Directus_filesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Directus_filesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "storage" | "filename_disk" | "filename_download" | "title" | "type" | "folder" | "uploaded_by" | "uploaded_on" | "modified_by" | "modified_on" | "charset" | "filesize" | "width" | "height" | "duration" | "embed" | "description" | "location" | "tags" | "metadata">;

  @TypeGraphQL.Field(_type => Directus_filesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Directus_filesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
