import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_configOrderByWithAggregationInput } from "../../../inputs/Document_base_configOrderByWithAggregationInput";
import { Document_base_configScalarWhereWithAggregatesInput } from "../../../inputs/Document_base_configScalarWhereWithAggregatesInput";
import { Document_base_configWhereInput } from "../../../inputs/Document_base_configWhereInput";
import { Document_base_configScalarFieldEnum } from "../../../../enums/Document_base_configScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDocument_base_configArgs {
  @TypeGraphQL.Field(_type => Document_base_configWhereInput, {
    nullable: true
  })
  where?: Document_base_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Document_base_configOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "filename_prefix" | "filename_suffix" | "document_number" | "global" | "document_type_id" | "logo_id" | "config" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Document_base_configScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Document_base_configScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
