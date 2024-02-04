import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewOrderByRelevanceFieldEnum } from "../../enums/Product_reviewOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_reviewOrderByRelevanceInput", {})
export class Product_reviewOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_reviewOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"external_user" | "external_email" | "title" | "content" | "comment" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
