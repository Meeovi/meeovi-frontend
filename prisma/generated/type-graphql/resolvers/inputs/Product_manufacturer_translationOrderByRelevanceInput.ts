import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturer_translationOrderByRelevanceFieldEnum } from "../../enums/Product_manufacturer_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_manufacturer_translationOrderByRelevanceInput", {})
export class Product_manufacturer_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_manufacturer_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "description" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
