import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersOrderByRelevanceFieldEnum } from "../../enums/Directus_foldersOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_foldersOrderByRelevanceInput", {})
export class Directus_foldersOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Directus_foldersOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "name" | "parent">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
