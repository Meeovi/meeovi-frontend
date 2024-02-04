import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_configOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Document_base_configOrderByWithRelationAndSearchRelevanceInput";
import { Document_base_configWhereInput } from "../../../inputs/Document_base_configWhereInput";
import { Document_base_configWhereUniqueInput } from "../../../inputs/Document_base_configWhereUniqueInput";
import { Document_base_configScalarFieldEnum } from "../../../../enums/Document_base_configScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Document_typeDocument_base_configArgs {
  @TypeGraphQL.Field(_type => Document_base_configWhereInput, {
    nullable: true
  })
  where?: Document_base_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Document_base_configOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_base_configWhereUniqueInput, {
    nullable: true
  })
  cursor?: Document_base_configWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "filename_prefix" | "filename_suffix" | "document_number" | "global" | "document_type_id" | "logo_id" | "config" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
