import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DocumentOrderByWithRelationAndSearchRelevanceInput";
import { DocumentWhereInput } from "../../../inputs/DocumentWhereInput";
import { DocumentWhereUniqueInput } from "../../../inputs/DocumentWhereUniqueInput";
import { DocumentScalarFieldEnum } from "../../../../enums/DocumentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Document_typeDocumentArgs {
  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  where?: DocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DocumentOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: DocumentOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: true
  })
  cursor?: DocumentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DocumentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "document_type_id" | "referenced_document_id" | "file_type" | "order_id" | "order_version_id" | "config" | "sent" | "static" | "deep_link_code" | "document_media_file_id" | "custom_fields" | "created_at" | "updated_at" | "document_number"> | undefined;
}
