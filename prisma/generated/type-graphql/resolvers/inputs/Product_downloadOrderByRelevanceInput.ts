import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadOrderByRelevanceFieldEnum } from "../../enums/Product_downloadOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_downloadOrderByRelevanceInput", {})
export class Product_downloadOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_downloadOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "custom_fields"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
