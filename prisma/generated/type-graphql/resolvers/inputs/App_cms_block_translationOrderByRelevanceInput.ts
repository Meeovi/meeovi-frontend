import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_block_translationOrderByRelevanceFieldEnum } from "../../enums/App_cms_block_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_cms_block_translationOrderByRelevanceInput", {})
export class App_cms_block_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_cms_block_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "label"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
