import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setOrderByRelevanceFieldEnum } from "../../enums/Custom_field_setOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Custom_field_setOrderByRelevanceInput", {})
export class Custom_field_setOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Custom_field_setOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "config">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
