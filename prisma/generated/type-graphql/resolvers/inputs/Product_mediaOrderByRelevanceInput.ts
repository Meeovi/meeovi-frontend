import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaOrderByRelevanceFieldEnum } from "../../enums/Product_mediaOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_mediaOrderByRelevanceInput", {})
export class Product_mediaOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_mediaOrderByRelevanceFieldEnum], {
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
