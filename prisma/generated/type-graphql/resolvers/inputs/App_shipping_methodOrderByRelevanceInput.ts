import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodOrderByRelevanceFieldEnum } from "../../enums/App_shipping_methodOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_shipping_methodOrderByRelevanceInput", {})
export class App_shipping_methodOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_shipping_methodOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"app_name" | "identifier">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
