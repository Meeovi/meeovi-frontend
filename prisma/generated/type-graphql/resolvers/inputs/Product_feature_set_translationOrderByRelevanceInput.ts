import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_set_translationOrderByRelevanceFieldEnum } from "../../enums/Product_feature_set_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_feature_set_translationOrderByRelevanceInput", {})
export class Product_feature_set_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_feature_set_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "description">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
