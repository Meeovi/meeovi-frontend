import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationOrderByRelevanceFieldEnum } from "../../enums/App_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_translationOrderByRelevanceInput", {})
export class App_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"label" | "description" | "privacy_policy_extensions" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
