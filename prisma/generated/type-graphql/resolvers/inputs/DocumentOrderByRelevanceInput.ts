import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentOrderByRelevanceFieldEnum } from "../../enums/DocumentOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DocumentOrderByRelevanceInput", {})
export class DocumentOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [DocumentOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"file_type" | "config" | "deep_link_code" | "custom_fields" | "document_number">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
