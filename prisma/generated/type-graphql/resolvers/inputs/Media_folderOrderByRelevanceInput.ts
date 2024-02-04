import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderOrderByRelevanceFieldEnum } from "../../enums/Media_folderOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_folderOrderByRelevanceInput", {})
export class Media_folderOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Media_folderOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "path" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
