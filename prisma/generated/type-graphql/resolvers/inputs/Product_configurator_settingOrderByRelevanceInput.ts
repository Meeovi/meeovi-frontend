import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingOrderByRelevanceFieldEnum } from "../../enums/Product_configurator_settingOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_configurator_settingOrderByRelevanceInput", {})
export class Product_configurator_settingOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_configurator_settingOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"price" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
