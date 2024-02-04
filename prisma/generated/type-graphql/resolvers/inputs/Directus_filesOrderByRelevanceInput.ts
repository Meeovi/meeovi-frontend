import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesOrderByRelevanceFieldEnum } from "../../enums/Directus_filesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_filesOrderByRelevanceInput", {})
export class Directus_filesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Directus_filesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "storage" | "filename_disk" | "filename_download" | "title" | "type" | "folder" | "uploaded_by" | "modified_by" | "charset" | "embed" | "description" | "location" | "tags" | "metadata">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
