import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationOrderByRelevanceFieldEnum } from "../../enums/Media_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_translationOrderByRelevanceInput", {})
export class Media_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Media_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"alt" | "title" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
