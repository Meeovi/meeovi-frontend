import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnailOrderByRelevanceFieldEnum } from "../../enums/Media_thumbnailOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_thumbnailOrderByRelevanceInput", {})
export class Media_thumbnailOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Media_thumbnailOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"custom_fields" | "path">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
