import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationOrderByRelevanceFieldEnum } from "../../enums/Cms_slot_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_slot_translationOrderByRelevanceInput", {})
export class Cms_slot_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Cms_slot_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"config" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
