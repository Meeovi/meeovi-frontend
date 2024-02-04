import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configOrderByRelevanceFieldEnum } from "../../enums/Document_base_configOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Document_base_configOrderByRelevanceInput", {})
export class Document_base_configOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Document_base_configOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "filename_prefix" | "filename_suffix" | "document_number" | "config" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
