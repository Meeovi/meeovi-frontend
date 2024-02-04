import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentOrderByWithAggregationInput } from "../../../inputs/DocumentOrderByWithAggregationInput";
import { DocumentScalarWhereWithAggregatesInput } from "../../../inputs/DocumentScalarWhereWithAggregatesInput";
import { DocumentWhereInput } from "../../../inputs/DocumentWhereInput";
import { DocumentScalarFieldEnum } from "../../../../enums/DocumentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDocumentArgs {
  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  where?: DocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DocumentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DocumentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "document_type_id" | "referenced_document_id" | "file_type" | "order_id" | "order_version_id" | "config" | "sent" | "static" | "deep_link_code" | "document_media_file_id" | "custom_fields" | "created_at" | "updated_at" | "document_number">;

  @TypeGraphQL.Field(_type => DocumentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DocumentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
