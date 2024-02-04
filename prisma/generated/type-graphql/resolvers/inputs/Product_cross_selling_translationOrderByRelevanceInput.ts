import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_translationOrderByRelevanceFieldEnum } from "../../enums/Product_cross_selling_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_cross_selling_translationOrderByRelevanceInput", {})
export class Product_cross_selling_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_cross_selling_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "name"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
