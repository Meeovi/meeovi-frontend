import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnail_sizeOrderByRelevanceFieldEnum } from "../../enums/Media_thumbnail_sizeOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_thumbnail_sizeOrderByRelevanceInput", {})
export class Media_thumbnail_sizeOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Media_thumbnail_sizeOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "custom_fields"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
