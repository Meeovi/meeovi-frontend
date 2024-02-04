import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_flag_storageOrderByRelevanceFieldEnum } from "../../enums/Klaviyo_flag_storageOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Klaviyo_flag_storageOrderByRelevanceInput", {})
export class Klaviyo_flag_storageOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"key" | "value">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
