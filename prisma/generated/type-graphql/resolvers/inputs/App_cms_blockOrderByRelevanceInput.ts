import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_blockOrderByRelevanceFieldEnum } from "../../enums/App_cms_blockOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_cms_blockOrderByRelevanceInput", {})
export class App_cms_blockOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_cms_blockOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "block" | "template" | "styles">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
