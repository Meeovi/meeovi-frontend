import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_setOrderByRelevanceFieldEnum } from "../../enums/Product_feature_setOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_feature_setOrderByRelevanceInput", {})
export class Product_feature_setOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_feature_setOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "features"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
